import type { PlaceType } from '@/types';

function normName(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/** Heuristic when `placeType` is omitted on trip data. */
export function inferPlaceType(name: string): PlaceType {
  const n = normName(name);

  if (/killing|genocidio|tuol sleng|somrong knong/.test(n)) return 'memorial';
  if (/mercato|pasticceria|maso dello speck/.test(n)) return 'food';
  if (/bamboo train|tuk tuk|guida tuk/.test(n)) return 'transport';

  if (
    /pub street|phnom penh|battambang|^kampot$|\bkep\b|^corvara$|^arabba$|^canazei$|^ortisei$|^colfosco$|cortina|san cassiano|^la villa$|pozza di fassa|santa cristina|selva di val gardena/.test(
      n,
    ) ||
    /siem reap/.test(n)
  ) {
    return 'city';
  }

  if (
    /passo |marmolada|\b5 torri\b|gran risa|falzarego|armentarola|citta dei sassi|seceda|sasslong/.test(
      n,
    )
  ) {
    return 'nature';
  }

  if (
    /floating|tonle|lago|fiori di loto|\bloto\b|bat cave|\bcave\b|vita rurale|piantagione|carta di riso|vino di riso|immersi nei fiori|tonle sap|passeggiata|fiume/.test(
      n,
    )
  ) {
    return 'nature';
  }

  if (
    /temple|\bwat\b|pagoda|palazzo|museo|silver|angkor|bayon|preah|banteay|baphuon|terrace|leper|ta keo|ta prohm|phimeanakas|bakheng|bakong|\blolei\b|koh ker|pre rup|east mebon|neak poan|street art|porta di|banteay srei|damrey sor|ek phnom|wat phnom|preah vihear|phnom bakheng/i.test(
      n,
    )
  ) {
    return 'landmark';
  }

  return 'default';
}

export function resolvePlaceType(loc: {
  name: string;
  placeType?: PlaceType;
}): PlaceType {
  if (loc.placeType && loc.placeType !== 'default') return loc.placeType;
  if (loc.placeType === 'default') return 'default';
  return inferPlaceType(loc.name);
}

export type MarkerVisualState = {
  isActive: boolean;
  isHovered: boolean;
  isFlying: boolean;
};

function strokeFor(s: MarkerVisualState): string {
  if (s.isHovered || s.isActive) return '#171717';
  return '#9ca3af';
}

/** SVG path in 24×24 space, centered (~12,12). */
export const PLACE_TYPE_PATH_SPEC: Record<
  PlaceType,
  { d: string; style: 'stroke' | 'fill' }
> = {
  default: {
    d: '',
    style: 'fill',
  },
  city: {
    d: 'M6 18V10h2.5v8M10.5 15v3h2v-3h-2M15 17v1h3V9h-3v9',
    style: 'stroke',
  },
  landmark: {
    d: 'M5 18V11.5Q12 6 19 11.5V18M9 18v-3.5M15 18v-3.5',
    style: 'stroke',
  },
  nature: {
    d: 'M4 18 9.5 8 12 12.5 15.5 7 20 18z',
    style: 'stroke',
  },
  transport: {
    d: 'M4 16 12 11l8 5-1.8 3H5.8L4 16z M7 18.5h10',
    style: 'stroke',
  },
  stay: {
    d: 'M12 6 5 12.5h2.5V18h9v-5.5H19L12 6z M9.5 15.5h5',
    style: 'stroke',
  },
  food: {
    d: 'M5 14c2.8 3.8 11.2 3.8 14 0 M7 16.5h10',
    style: 'stroke',
  },
  memorial: {
    d: 'M12 5v14 M9 8.5h6',
    style: 'stroke',
  },
};

export function placeTypeSvgInner(
  placeType: PlaceType,
  s: MarkerVisualState,
): string {
  const { d, style } = PLACE_TYPE_PATH_SPEC[placeType] ?? PLACE_TYPE_PATH_SPEC.default;
  const opacity = s.isFlying ? 0 : 1;
  const stroke = strokeFor(s);
  const sw = s.isHovered ? 2.1 : s.isActive ? 1.75 : 1.45;

  if (style === 'fill') {
    return `<circle cx="12" cy="12" r="3.6" fill="${stroke}" opacity="${opacity}" />`;
  }

  return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}" />`;
}

/** HTML for Leaflet `DivIcon`. */
export function placeTypeLeafletHtml(
  placeType: PlaceType,
  s: MarkerVisualState,
): string {
  const pulse = s.isHovered ? ' marker-pulse' : '';
  const inner = placeTypeSvgInner(placeType, s);
  return `<div class="relative flex h-8 w-8 items-center justify-center${pulse}"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${inner}</svg></div>`;
}
