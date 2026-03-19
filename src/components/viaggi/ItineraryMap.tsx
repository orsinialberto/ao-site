'use client';

import { useEffect, useRef, useMemo, useState, useCallback, memo } from 'react';
import { MapContainer, TileLayer, Marker as LeafletMarker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import gpxParser from 'gpxparser';
import { ItineraryLocation } from '@/types';
import {
  placeTypeLeafletHtml,
  resolvePlaceType,
} from '@/lib/placeTypeMarkers';

interface ItineraryMapProps {
  locations: ItineraryLocation[];
  allLocations: ItineraryLocation[];
  hoveredLocationName?: string | null;
  gpxUrl?: string | null;
}

interface FitBoundsProps {
  locations: ItineraryLocation[];
  onFlyStart: () => void;
  onFlyEnd: () => void;
}

function FitBounds({ locations, onFlyStart, onFlyEnd }: FitBoundsProps) {
  const map = useMap();
  const prevKey = useRef('');

  useEffect(() => {
    if (locations.length === 0) return;
    const key = locations.map((l) => `${l.lat},${l.lng}`).join('|');
    if (key === prevKey.current) return;
    prevKey.current = key;

    onFlyStart();
    if (locations.length === 1) {
      map.flyTo([locations[0].lat, locations[0].lng], 12, { duration: 0.8 });
    } else {
      const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng] as [number, number]));
      map.flyToBounds(bounds, {
        padding: [60, 60],
        maxZoom: 13,
        duration: 0.8,
      });
    }
    map.once('moveend', onFlyEnd);
  }, [locations, map, onFlyStart, onFlyEnd]);

  return null;
}

function GpxTrack({ gpxUrl }: { gpxUrl: string }) {
  const map = useMap();
  const [positions, setPositions] = useState<[number, number][]>([]);
  const prevUrl = useRef('');

  useEffect(() => {
    if (gpxUrl === prevUrl.current) return;
    prevUrl.current = gpxUrl;

    fetch(gpxUrl)
      .then((res) => res.text())
      .then((text) => {
        const gpx = new gpxParser();
        gpx.parse(text);
        const pts =
          gpx.tracks[0]?.points.map(
            (p: { lat: number; lon: number }) => [p.lat, p.lon] as [number, number],
          ) ?? [];
        setPositions(pts);
        if (pts.length > 1) {
          const bounds = L.latLngBounds(pts);
          map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 14, duration: 0.8 });
        }
      })
      .catch(() => setPositions([]));
  }, [gpxUrl, map]);

  if (positions.length < 2) return null;

  return (
    <Polyline
      positions={positions}
      pathOptions={{ color: '#171717', weight: 2.5, opacity: 0.55 }}
    />
  );
}

const StopMarker = memo(function StopMarker({
  loc,
  isActive,
  isHovered,
  isFlying,
}: {
  loc: ItineraryLocation;
  isActive: boolean;
  isHovered: boolean;
  isFlying: boolean;
}) {
  const placeType = useMemo(() => resolvePlaceType(loc), [loc.name, loc.placeType]);
  const icon = useMemo(
    () =>
      L.divIcon({
        className: 'ao-leaflet-marker',
        html: placeTypeLeafletHtml(placeType, {
          isActive,
          isHovered,
          isFlying,
        }),
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      }),
    [placeType, isActive, isHovered, isFlying],
  );
  return (
    <LeafletMarker position={[loc.lat, loc.lng]} icon={icon} />
  );
});

export default function ItineraryMap({
  locations,
  allLocations,
  hoveredLocationName = null,
  gpxUrl = null,
}: ItineraryMapProps) {
  const [isFlying, setIsFlying] = useState(false);
  const onFlyStart = useCallback(() => setIsFlying(true), []);
  const onFlyEnd = useCallback(() => setIsFlying(false), []);

  const activeNames = useMemo(
    () => new Set(locations.map((l) => l.name)),
    [locations],
  );

  const center = useMemo<[number, number]>(() => {
    if (allLocations.length === 0) return [0, 0];
    const lat = allLocations.reduce((s, l) => s + l.lat, 0) / allLocations.length;
    const lng = allLocations.reduce((s, l) => s + l.lng, 0) / allLocations.length;
    return [lat, lng];
  }, [allLocations]);

  const uniqueLocations = useMemo(() => {
    const seen = new Set<string>();
    return allLocations.filter((l) => {
      const k = `${l.lat},${l.lng}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [allLocations]);

  return (
    <MapContainer
      center={center}
      zoom={7}
      className="h-full w-full"
      zoomControl={false}
      attributionControl={false}
      style={{ background: '#fafafa' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
      />

      <FitBounds
        locations={gpxUrl ? [] : locations}
        onFlyStart={onFlyStart}
        onFlyEnd={onFlyEnd}
      />

      {gpxUrl && <GpxTrack gpxUrl={gpxUrl} />}

      {uniqueLocations.map((loc) => (
        <StopMarker
          key={`${loc.name}-${loc.lat}-${loc.lng}`}
          loc={loc}
          isActive={activeNames.has(loc.name)}
          isHovered={hoveredLocationName === loc.name}
          isFlying={isFlying}
        />
      ))}
    </MapContainer>
  );
}
