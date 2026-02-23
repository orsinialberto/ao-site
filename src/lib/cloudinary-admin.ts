/**
 * Cloudinary Admin API helpers (server-side only).
 * Requires CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in env.
 */

const CLOUD_NAME = 'dx6hrvg6l';

export interface GalleryImage {
  url: string;
  publicId: string;
  alt: string;
}

type CloudinaryResource = {
  public_id?: string;
  secure_url?: string;
  url?: string;
  format?: string;
  version?: number;
  display_name?: string;
  resource_type?: string;
};

function mapResourcesToGallery(resources: CloudinaryResource[]): GalleryImage[] {
  return resources
    .filter(
      (r) =>
        (r.public_id || r.secure_url || r.url) &&
        (r.resource_type === undefined || r.resource_type === 'image')
    )
    .map((r) => {
      const publicId = r.public_id ?? '';
      const url =
        r.secure_url ??
        r.url ??
        buildDeliveryUrl(publicId, r.format, r.version);
      return {
        url: url.startsWith('http') ? url : `https:${url}`,
        publicId,
        alt: r.display_name ?? publicId.split('/').pop()?.replace(/\.[a-z0-9]+$/i, '') ?? publicId,
      };
    });
}

async function fetchCloudinary(
  path: string,
  searchParams: Record<string, string>,
  auth: string
): Promise<CloudinaryResource[]> {
  const url = new URL(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}${path}`
  );
  Object.entries(searchParams).forEach(([k, v]) =>
    url.searchParams.set(k, v)
  );
  const res = await fetch(url.toString(), {
    headers: { Authorization: `Basic ${auth}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as { resources?: CloudinaryResource[] };
  return data.resources ?? [];
}

/**
 * Fetches image resources from a Cloudinary folder.
 * Path convention: travels/<trip-slug> (e.g. travels/cambogia-2025).
 * Tries by_asset_folder first (dynamic folder mode), then prefix (fixed folder mode).
 * Returns empty array if env vars are missing or API fails (build-safe).
 */
export async function getGalleryImagesByPrefix(
  folderPath: string
): Promise<GalleryImage[]> {
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!apiKey || !apiSecret) {
    return [];
  }

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

  try {
    // 1. Dynamic folder mode: list by asset folder (when using Media Library folders)
    const byFolder = await fetchCloudinary(
      '/resources/by_asset_folder',
      { asset_folder: folderPath, max_results: '500' },
      auth
    );
    if (byFolder.length > 0) {
      return mapResourcesToGallery(byFolder);
    }

    // 2. Fixed folder mode: list by public_id prefix
    const byPrefix = await fetchCloudinary(
      '/resources/image/upload',
      { prefix: folderPath, max_results: '500' },
      auth
    );
    return mapResourcesToGallery(byPrefix);
  } catch {
    return [];
  }
}

function buildDeliveryUrl(
  publicId: string,
  format?: string,
  version?: number
): string {
  const ver = version ? `v${version}` : '';
  const ext = format ? `.${format}` : '';
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  return `${base}/${ver}/${publicId}${ext}`;
}
