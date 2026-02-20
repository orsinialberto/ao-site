'use client';

import { ReactNode } from 'react';
import Masonry from 'react-masonry-css';

interface MasonryGridProps {
  children: ReactNode;
}

export default function MasonryGrid({ children }: MasonryGridProps) {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="masonry-grid"
      columnClassName="masonry-grid-column"
    >
      {children}
    </Masonry>
  );
}
