'use client';

import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrailPoint } from '@/types';

interface TrailMapProps {
  points: TrailPoint[];
  className?: string;
}

// ─── Label-placement engine ──────────────────────────────────────────────────

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

type Dir = 'r' | 'l' | 'ar' | 'al' | 'br' | 'bl';

const H_OFF = 14; // horizontal gap dot → text
const V_OFF = 14; // vertical shift for above / below
const CHAR_W = 0.62; // approx monospace char-width / fontSize
const LINE_H = 1.3; // line-height factor
const LABEL_GAP = 4; // min gap between labels
const SEG_MARGIN = 3; // buffer around trail segments

/** Six candidate positions relative to the point dot. */
function candidatePos(px: number, py: number, dir: Dir) {
  const b = 4; // baseline tweak
  switch (dir) {
    case 'r':
      return { x: px + H_OFF, y: py + b, anchor: 'start' as const };
    case 'l':
      return { x: px - H_OFF, y: py + b, anchor: 'end' as const };
    case 'ar':
      return { x: px + H_OFF, y: py - V_OFF, anchor: 'start' as const };
    case 'al':
      return { x: px - H_OFF, y: py - V_OFF, anchor: 'end' as const };
    case 'br':
      return { x: px + H_OFF, y: py + V_OFF + b * 2, anchor: 'start' as const };
    case 'bl':
      return { x: px - H_OFF, y: py + V_OFF + b * 2, anchor: 'end' as const };
  }
}

/** Estimated bounding box for a text label in SVG units. */
function labelBBox(
  tx: number,
  ty: number,
  anchor: 'start' | 'end',
  text: string,
  fontSize: number,
): Rect {
  const w = text.length * fontSize * CHAR_W;
  const h = fontSize * LINE_H;
  const x = anchor === 'start' ? tx : tx - w;
  return { x, y: ty - h, w, h };
}

function rectsOverlap(a: Rect, b: Rect): boolean {
  return !(
    a.x + a.w + LABEL_GAP < b.x ||
    b.x + b.w + LABEL_GAP < a.x ||
    a.y + a.h + LABEL_GAP < b.y ||
    b.y + b.h + LABEL_GAP < a.y
  );
}

function segmentsIntersect(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  cx: number,
  cy: number,
  dx: number,
  dy: number,
): boolean {
  const d = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
  if (Math.abs(d) < 1e-10) return false;
  const t = ((cx - ax) * (dy - cy) - (cy - ay) * (dx - cx)) / d;
  const u = ((cx - ax) * (by - ay) - (cy - ay) * (bx - ax)) / d;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

/** Does a rect (expanded by SEG_MARGIN) intersect a line segment? */
function rectHitsSegment(
  r: Rect,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): boolean {
  const m = SEG_MARGIN;
  const rx = r.x - m;
  const ry = r.y - m;
  const rw = r.w + m * 2;
  const rh = r.h + m * 2;

  const inside = (px: number, py: number) =>
    px >= rx && px <= rx + rw && py >= ry && py <= ry + rh;
  if (inside(x1, y1) || inside(x2, y2)) return true;

  const edges: [number, number, number, number][] = [
    [rx, ry, rx + rw, ry],
    [rx, ry + rh, rx + rw, ry + rh],
    [rx, ry, rx, ry + rh],
    [rx + rw, ry, rx + rw, ry + rh],
  ];
  return edges.some(([a, b, c, d]) =>
    segmentsIntersect(x1, y1, x2, y2, a, b, c, d),
  );
}

interface PlacedLabel {
  rect: Rect;
  x: number;
  y: number;
  anchor: 'start' | 'end';
}

/**
 * Greedy label placement: for each point try 6 directions,
 * prefer the "natural" side (away from trail centre),
 * penalise overlap with already-placed labels and with the trail line.
 */
function placeLabels(
  points: TrailPoint[],
  isLoop: boolean,
): PlacedLabel[] {
  const segs: [number, number, number, number][] = [];
  for (let i = 0; i < points.length - 1; i++) {
    segs.push([points[i].x, points[i].y, points[i + 1].x, points[i + 1].y]);
  }

  const labelPts = isLoop ? points.slice(0, -1) : points;
  const xs = points.map((p) => p.x);
  const midX = (Math.min(...xs) + Math.max(...xs)) / 2;

  const placed: PlacedLabel[] = [];

  for (let i = 0; i < labelPts.length; i++) {
    const pt = labelPts[i];
    const fs = i === 0 ? 12 : 10;
    const preferRight = pt.x <= midX;

    const dirs: Dir[] = preferRight
      ? ['r', 'ar', 'br', 'l', 'al', 'bl']
      : ['l', 'al', 'bl', 'r', 'ar', 'br'];

    let best: PlacedLabel | null = null;
    let bestScore = Infinity;

    for (let d = 0; d < dirs.length; d++) {
      const { x, y, anchor } = candidatePos(pt.x, pt.y, dirs[d]);
      const rect = labelBBox(x, y, anchor, pt.name, fs);

      let score = d; // prefer earlier (more natural) directions
      for (const p of placed) {
        if (rectsOverlap(rect, p.rect)) score += 100;
      }
      for (const s of segs) {
        if (rectHitsSegment(rect, s[0], s[1], s[2], s[3])) score += 10;
      }

      if (score < bestScore) {
        bestScore = score;
        best = { rect, x, y, anchor };
      }
      if (score === 0) break; // perfect – stop searching
    }

    placed.push(best!);
  }

  return placed;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function TrailMap({ points, className = '' }: TrailMapProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const data = useMemo(() => {
    if (points.length === 0) return null;

    const first = points[0];
    const last = points[points.length - 1];
    const isLoop =
      points.length > 2 && first.x === last.x && first.y === last.y;

    const labelPoints = isLoop ? points.slice(0, -1) : points;

    // SVG path
    const pathD =
      points
        .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
        .join(' ') + (isLoop ? ' Z' : '');

    // Compute label placements
    const placements = placeLabels(points, isLoop);

    // ViewBox: encompass all point dots + all label bounding boxes + padding
    const allX: number[] = points.map((p) => p.x);
    const allY: number[] = points.map((p) => p.y);
    for (const pl of placements) {
      allX.push(pl.rect.x, pl.rect.x + pl.rect.w);
      allY.push(pl.rect.y, pl.rect.y + pl.rect.h);
    }
    const pad = 24;
    const minX = Math.min(...allX) - pad;
    const minY = Math.min(...allY) - pad;
    const maxX = Math.max(...allX) + pad;
    const maxY = Math.max(...allY) + pad;
    const viewBox = `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;

    return { labelPoints, pathD, placements, viewBox };
  }, [points]);

  if (!data) return null;

  const { labelPoints, pathD, placements, viewBox } = data;

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      className={`w-full h-auto ${className}`}
      fill="none"
    >
      {/* Trail line */}
      <motion.path
        d={pathD}
        stroke="#d1d5db"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      />

      {/* Points and labels */}
      {labelPoints.map((point, i) => {
        const delay = (i / labelPoints.length) * 2.5 + 0.3;
        const isStart = i === 0;
        const pl = placements[i];

        return (
          <motion.g
            key={point.name + i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay, duration: 0.4 }}
          >
            {/* Dot */}
            <circle
              cx={point.x}
              cy={point.y}
              r={isStart ? 5 : 3}
              fill={isStart ? '#171717' : '#9ca3af'}
            />

            {/* Label */}
            <text
              x={pl.x}
              y={pl.y}
              textAnchor={pl.anchor}
              style={{
                fontSize: isStart ? '12px' : '10px',
                fontFamily:
                  'var(--font-geist-mono), ui-monospace, monospace',
                fill: isStart ? '#171717' : '#9ca3af',
                fontWeight: isStart ? 500 : 400,
              }}
            >
              {point.name}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
