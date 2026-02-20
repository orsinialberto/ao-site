import Image from 'next/image';

// Array di foto di esempio con posizionamento nella griglia
const photos = [
  // — Colonna 1 (righe: 3+3+4+2 = 12) —
  { id: '1',  src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031248/10-IMG_3568_vmx1zc.jpg',  alt: 'Paesaggio 1',  col: 1, rowStart: 1,  rowSpan: 3  },
  { id: '2',  src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031244/15-IMG_3485_ksjlk8.jpg',  alt: 'Paesaggio 2',  col: 1, rowStart: 4,  rowSpan: 3  },
  { id: '3',  src: ' https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031244/14-IMG_3503_vwz4pv.jpg',  alt: 'Ritratto 3',   col: 1, rowStart: 7,  rowSpan: 4  },
  { id: '4',  src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031244/16-IMG_3476_eb3lcy.jpg', alt: 'Paesaggio 4',  col: 1, rowStart: 11, rowSpan: 2  },

  // — Colonna 2 (righe: 5+2+5 = 12) —
  { id: '5',  src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031243/12-IMG_3537_trvy6m.jpg',  alt: 'Ritratto 1',   col: 2, rowStart: 1,  rowSpan: 5  },
  { id: '6',  src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031242/4-IMG_3652_ayzprm.jpg',  alt: 'Panoramica 1', col: 2, rowStart: 6,  rowSpan: 2  },
  { id: '7',  src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031241/3-IMG_3661_qx3ucy.jpg',  alt: 'Ritratto 2',   col: 2, rowStart: 8,  rowSpan: 5  },

  // — Colonna 3 (righe: 4+2+4+2 = 12) —
  { id: '8',  src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031242/5-IMG_3639_csemol.jpg',  alt: 'Quadrata 1',   col: 3, rowStart: 1,  rowSpan: 4  },
  { id: '9',  src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031242/7-IMG_3596_icra3k.jpg', alt: 'Panoramica 2', col: 3, rowStart: 5,  rowSpan: 2  },
  { id: '10', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1769031242/2-IMG_3674_x4ei0u.jpg',  alt: 'Quadrata 2',   col: 3, rowStart: 7,  rowSpan: 4  },
  { id: '11', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1770923961/9-IMG_3574_i8l3gu.jpg', alt: 'Ritratto 4',   col: 3, rowStart: 11, rowSpan: 2  },

  // — Colonna 1 (righe 13-24: 4+3+3+2 = 12) —
  { id: '12', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-04_xpisb5.jpg',  alt: 'Foto 12', col: 1, rowStart: 13, rowSpan: 4 },
  { id: '13', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-01_q8trbr.jpg',  alt: 'Foto 13', col: 1, rowStart: 17, rowSpan: 3 },
  { id: '14', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-02_igqu4p.jpg',  alt: 'Foto 14', col: 1, rowStart: 20, rowSpan: 3 },
  { id: '15', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-03_nkm9b9.jpg',  alt: 'Foto 15', col: 1, rowStart: 23, rowSpan: 2 },
  
  // — Colonna 2 (righe 13-24: 3+2+4+3 = 12) —
  { id: '16', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-05_u1wlcy.jpg',  alt: 'Foto 16', col: 2, rowStart: 13, rowSpan: 3 },
  { id: '17', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-06_lqwnwn.jpg',  alt: 'Foto 17', col: 2, rowStart: 16, rowSpan: 2 },
  { id: '18', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-11_aqhtkv.jpg',  alt: 'Foto 18', col: 2, rowStart: 18, rowSpan: 4 },
  { id: '19', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-08_isom69.jpg',  alt: 'Foto 19', col: 2, rowStart: 22, rowSpan: 3 },
  
  // — Colonna 3 (righe 13-24: 5+2+3+2 = 12) —
  { id: '20', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-09_e6kow7.jpg',  alt: 'Foto 20', col: 3, rowStart: 13, rowSpan: 5 },
  { id: '21', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-07_st2g7w.jpg',  alt: 'Foto 21', col: 3, rowStart: 18, rowSpan: 2 },
  { id: '22', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-12_ki9nij.jpg',  alt: 'Foto 22', col: 3, rowStart: 20, rowSpan: 3 },
  { id: '23', src: 'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-13_aoiaxh.jpg',  alt: 'Foto 23', col: 3, rowStart: 23, rowSpan: 2 },
];

export default function GalleriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-light tracking-wider mb-8 text-center">
          Galleria Fotografica
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Una raccolta dei miei scatti migliori. Momenti catturati nel tempo.
        </p>

        {/*
          Desktop: CSS Grid 3 colonne × 24 righe
          Blocco 1 (righe 1-12):
            Col 1: 3 + 3 + 4 + 2 = 12
            Col 2: 5 + 2 + 5     = 12
            Col 3: 4 + 2 + 4 + 2 = 12
          Blocco 2 (righe 13-24):
            Col 1: 4 + 3 + 3 + 2 = 12
            Col 2: 3 + 2 + 4 + 3 = 12
            Col 3: 5 + 2 + 3 + 2 = 12

          Tablet: 2 colonne auto-flow
          Mobile: 1 colonna impilata
        */}
        <div
          className="
            grid gap-3

            grid-cols-1
            md:grid-cols-2

            lg:grid-cols-3
            lg:grid-rows-[repeat(24,minmax(80px,auto))]
          "
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-cell relative overflow-hidden group min-h-[180px] lg:min-h-0"
              style={{
                gridColumn: photo.col,
                gridRow: `${photo.rowStart} / span ${photo.rowSpan}`,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
