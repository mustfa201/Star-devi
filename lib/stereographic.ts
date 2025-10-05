// Stereographic projection utilities for converting celestial coordinates to 2D canvas

export interface CelestialCoordinate {
  ra: number // Right Ascension in hours (0-24)
  dec: number // Declination in degrees (-90 to 90)
}

export interface CartesianPoint {
  x: number
  y: number
}

/**
 * Convert Right Ascension and Declination to stereographic projection
 * @param ra Right Ascension in hours (0-24)
 * @param dec Declination in degrees (-90 to 90)
 * @param centerRa Center RA for projection (default 12)
 * @param centerDec Center Dec for projection (default 0)
 * @returns Cartesian coordinates {x, y} normalized to [-1, 1]
 */
export function toStereographic(ra: number, dec: number, centerRa = 12, centerDec = 0): CartesianPoint {
  // Convert to radians
  const raRad = (ra * 15 * Math.PI) / 180 // 15 degrees per hour
  const decRad = (dec * Math.PI) / 180
  const centerRaRad = (centerRa * 15 * Math.PI) / 180
  const centerDecRad = (centerDec * Math.PI) / 180

  // Calculate relative coordinates
  const deltaRa = raRad - centerRaRad

  // Stereographic projection formulas
  const k =
    2 / (1 + Math.sin(centerDecRad) * Math.sin(decRad) + Math.cos(centerDecRad) * Math.cos(decRad) * Math.cos(deltaRa))

  const x = k * Math.cos(decRad) * Math.sin(deltaRa)
  const y =
    k * (Math.cos(centerDecRad) * Math.sin(decRad) - Math.sin(centerDecRad) * Math.cos(decRad) * Math.cos(deltaRa))

  return { x, y }
}

/**
 * Scale stereographic coordinates to canvas dimensions
 */
export function scaleToCanvas(
  point: CartesianPoint,
  canvasWidth: number,
  canvasHeight: number,
  scale = 0.4,
): CartesianPoint {
  const centerX = canvasWidth / 2
  const centerY = canvasHeight / 2
  const radius = Math.min(canvasWidth, canvasHeight) * scale

  return {
    x: centerX + point.x * radius,
    y: centerY - point.y * radius, // Invert Y for canvas coordinates
  }
}

/**
 * Calculate star size based on magnitude (brighter = larger)
 */
export function magnitudeToSize(magnitude: number): number {
  // Magnitude scale: lower = brighter
  // Typical range: -1.5 (Sirius) to 6 (faintest visible)
  const minSize = 0.5
  const maxSize = 4
  const normalized = Math.max(0, Math.min(1, (6 - magnitude) / 7.5))
  return minSize + normalized * (maxSize - minSize)
}

/**
 * Calculate star opacity based on magnitude
 */
export function magnitudeToOpacity(magnitude: number): number {
  const minOpacity = 0.3
  const maxOpacity = 1
  const normalized = Math.max(0, Math.min(1, (6 - magnitude) / 7.5))
  return minOpacity + normalized * (maxOpacity - minOpacity)
}
