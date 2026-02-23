'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/lib/cloudinary-admin';

interface Placement {
  col: number;
  rowStart: number;
  rowSpan: number;
}

interface ViaggioGalleryMosaicProps {
  images: GalleryImage[];
  placements: Placement[];
  totalRows: number;
}

export default function ViaggioGalleryMosaic({
  images,
  placements,
  totalRows,
}: ViaggioGalleryMosaicProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);
  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, close, goPrev, goNext]);

  return (
    <>
      <div
        className="viaggio-gallery-mosaic grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={
          totalRows > 0
            ? { ['--gallery-rows' as string]: totalRows }
            : undefined
        }
      >
        {placements.map(({ col, rowStart, rowSpan }, index) => (
          <button
            key={images[index].publicId}
            type="button"
            className="gallery-cell relative overflow-hidden group min-h-[180px] lg:min-h-0 w-full h-full text-left cursor-pointer"
            style={{
              gridColumn: col,
              gridRow: `${rowStart} / span ${rowSpan}`,
            }}
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={images[index].url}
              alt={images[index].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center cursor-pointer"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Foto a schermo intero"
        >
          <button
            type="button"
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/90 hover:text-white text-2xl font-light z-10"
            onClick={close}
            aria-label="Chiudi"
          >
            ×
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/90 hover:text-white text-3xl z-10"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Foto precedente"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/90 hover:text-white text-3xl z-10"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Foto successiva"
          >
            ›
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].alt}
              width={1920}
              height={1080}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
