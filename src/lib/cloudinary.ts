/**
 * Adds Cloudinary transform params for optimized thumbnails.
 * Use for small images (e.g. 80x80 cards) to reduce payload and improve performance.
 */
export function cloudinaryThumb(url: string, w = 160, h = 160): string {
  if (!url.includes('res.cloudinary.com')) return url;
  return url.replace('/upload/', `/upload/w_${w},h_${h},c_fill,f_auto/`);
}
