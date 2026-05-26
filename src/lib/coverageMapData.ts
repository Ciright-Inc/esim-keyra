/** Equirectangular map size (matches projection in WorldCoverageVisualization). */
export const MAP_W = 1000;
export const MAP_H = 500;

export type CoverageHub = {
  id: string;
  label: string;
  lat: number;
  lng: number;
  tier: "primary" | "regional";
};

export const COVERAGE_HUBS: CoverageHub[] = [
  { id: "dub", label: "Dublin", lat: 53.35, lng: -6.26, tier: "primary" },
  { id: "lon", label: "London", lat: 51.51, lng: -0.13, tier: "primary" },
  { id: "fra", label: "Frankfurt", lat: 50.11, lng: 8.68, tier: "regional" },
  { id: "dxb", label: "Dubai", lat: 25.2, lng: 55.27, tier: "primary" },
  { id: "mum", label: "Mumbai", lat: 19.08, lng: 72.88, tier: "regional" },
  { id: "sin", label: "Singapore", lat: 1.35, lng: 103.82, tier: "primary" },
  { id: "tok", label: "Tokyo", lat: 35.68, lng: 139.69, tier: "primary" },
  { id: "syd", label: "Sydney", lat: -33.87, lng: 151.21, tier: "regional" },
  { id: "nyc", label: "New York", lat: 40.71, lng: -74.01, tier: "primary" },
  { id: "sfo", label: "San Francisco", lat: 37.77, lng: -122.42, tier: "regional" },
  { id: "sao", label: "São Paulo", lat: -23.55, lng: -46.63, tier: "regional" },
  { id: "jnb", label: "Johannesburg", lat: -26.2, lng: 28.04, tier: "regional" },
];

/** Roaming path pairs (hub id → hub id). */
export const COVERAGE_ROUTES: Array<[string, string]> = [
  ["dub", "nyc"],
  ["dub", "dxb"],
  ["lon", "sin"],
  ["fra", "mum"],
  ["dxb", "sin"],
  ["sin", "tok"],
  ["sin", "syd"],
  ["nyc", "sfo"],
  ["nyc", "sao"],
  ["dxb", "jnb"],
  ["tok", "syd"],
  ["mum", "sin"],
];

export function projectLatLng(lat: number, lng: number): { x: number; y: number } {
  const padX = 48;
  const padY = 36;
  const innerW = MAP_W - padX * 2;
  const innerH = MAP_H - padY * 2;
  return {
    x: ((lng + 180) / 360) * innerW + padX,
    y: ((90 - lat) / 180) * innerH + padY,
  };
}

/** Rough land mask for editorial dot-matrix world (equirectangular). */
export function isLandRough(lng: number, lat: number): boolean {
  // Greenland / Arctic islands
  if (lng >= -55 && lng <= -12 && lat >= 60 && lat <= 84) return true;
  // North America
  if (lng >= -168 && lng <= -52 && lat >= 15 && lat <= 72) {
    if (lng > -92 && lng < -78 && lat < 22) return false;
    if (lng > -115 && lat < 23 && lng < -95) return false;
    return true;
  }
  // Central America bridge
  if (lng >= -92 && lng <= -77 && lat >= 8 && lat <= 22) return true;
  // South America
  if (lng >= -82 && lng <= -34 && lat >= -56 && lat <= 13) return true;
  // Europe
  if (lng >= -25 && lng <= 42 && lat >= 35 && lat <= 71) return true;
  // Africa
  if (lng >= -18 && lng <= 52 && lat >= -35 && lat <= 37) {
    if (lng > 8 && lng < 32 && lat < -2) return false;
    return true;
  }
  // Middle East
  if (lng >= 34 && lng <= 62 && lat >= 12 && lat <= 42) return true;
  // Asia
  if (lng >= 58 && lng <= 145 && lat >= 5 && lat <= 72) {
    if (lng > 118 && lat < 12) return false;
    if (lng > 105 && lng < 125 && lat < 2) return false;
    return true;
  }
  // Japan
  if (lng >= 129 && lng <= 146 && lat >= 31 && lat <= 46) return true;
  // Indonesia / PNG (simplified)
  if (lng >= 95 && lng <= 152 && lat >= -11 && lat <= 6) return true;
  // Australia
  if (lng >= 112 && lng <= 154 && lat >= -44 && lat <= -10) return true;
  // New Zealand
  if (lng >= 166 && lng <= 179 && lat >= -47 && lat <= -34) return true;
  return false;
}

export function buildLandDotGrid(stepLng = 5, stepLat = 4): Array<{ x: number; y: number }> {
  const dots: Array<{ x: number; y: number }> = [];
  for (let lng = -180; lng < 180; lng += stepLng) {
    for (let lat = -52; lat <= 76; lat += stepLat) {
      if (!isLandRough(lng, lat)) continue;
      dots.push(projectLatLng(lat, lng));
    }
  }
  return dots;
}

export function hubById(id: string): CoverageHub | undefined {
  return COVERAGE_HUBS.find((h) => h.id === id);
}
