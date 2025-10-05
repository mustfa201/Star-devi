// Constellation data with real astronomical coordinates and romantic stories

export interface Star {
  name?: string
  ra: number // Right Ascension in hours
  dec: number // Declination in degrees
  magnitude: number // Apparent magnitude
  spectralType?: string // Spectral classification (O, B, A, F, G, K, M)
  distance?: number // Distance in light years
  description?: string // Additional information about the star
}

export interface Constellation {
  id: string
  name: string
  stars: Star[]
  connections: number[][] // Indices of stars to connect
  story: string
  isEasterEgg?: boolean
}

export const constellations: Constellation[] = [
  {
    id: "andromeda",
    name: "Andromeda",
    stars: [
      { name: "Alpheratz", ra: 0.14, dec: 29.09, magnitude: 2.06, spectralType: "B9p", distance: 97 },
      { name: "Mirach", ra: 1.16, dec: 35.62, magnitude: 2.06, spectralType: "M0", distance: 199 },
      { name: "Almach", ra: 2.06, dec: 42.33, magnitude: 2.26, spectralType: "K3", distance: 355 },
      { ra: 0.95, dec: 38.5, magnitude: 3.27, spectralType: "K0", distance: 503 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [1, 3],
    ],
    story:
      "Andromeda, the chained maiden, was saved by Perseus from a sea monster. Their love story became eternal in the stars, a reminder that true love conquers all fears and breaks every chain.",
  },
  {
    id: "orion",
    name: "Orion",
    stars: [
      { name: "Betelgeuse", ra: 5.92, dec: 7.41, magnitude: 0.5, spectralType: "M2", distance: 548 },
      { name: "Rigel", ra: 5.24, dec: -8.2, magnitude: 0.13, spectralType: "B8", distance: 863 },
      { name: "Bellatrix", ra: 5.42, dec: 6.35, magnitude: 1.64, spectralType: "B2", distance: 243 },
      { name: "Alnitak", ra: 5.68, dec: -1.94, magnitude: 1.77, spectralType: "O9", distance: 1260 },
      { name: "Alnilam", ra: 5.6, dec: -1.2, magnitude: 1.69, spectralType: "B0", distance: 2000 },
      { name: "Mintaka", ra: 5.53, dec: -0.3, magnitude: 2.23, spectralType: "O9", distance: 1200 },
      { name: "Saiph", ra: 5.8, dec: -9.67, magnitude: 2.09, spectralType: "B0", distance: 724 },
    ],
    connections: [
      [0, 2],
      [2, 5],
      [5, 4],
      [4, 3],
      [3, 6],
      [6, 1],
      [1, 5],
    ],
    story:
      "Orion, the mighty hunter, fell in love with the Pleiades. Though they could never be together, he chases them across the sky each night, proving that some loves are worth pursuing for eternity.",
  },
  {
    id: "ursa-major",
    name: "Ursa Major",
    stars: [
      { name: "Dubhe", ra: 11.06, dec: 61.75, magnitude: 1.79, spectralType: "K0", distance: 123 },
      { name: "Merak", ra: 11.03, dec: 56.38, magnitude: 2.37, spectralType: "A1", distance: 79 },
      { name: "Phecda", ra: 11.9, dec: 53.69, magnitude: 2.44, spectralType: "A0", distance: 84 },
      { name: "Megrez", ra: 12.26, dec: 57.03, magnitude: 3.31, spectralType: "A3", distance: 81 },
      { name: "Alioth", ra: 12.9, dec: 55.96, magnitude: 1.77, spectralType: "A1", distance: 81 },
      { name: "Mizar", ra: 13.4, dec: 54.93, magnitude: 2.27, spectralType: "A2", distance: 78 },
      { name: "Alkaid", ra: 13.79, dec: 49.31, magnitude: 1.86, spectralType: "B3", distance: 101 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [3, 0],
    ],
    story:
      "The Great Bear was once a beautiful nymph transformed by jealousy. Yet Zeus placed her in the heavens, showing that love transcends all forms and that devotion can turn even curses into eternal blessings.",
  },
  {
    id: "cassiopeia",
    name: "Cassiopeia",
    stars: [
      { name: "Schedar", ra: 0.67, dec: 56.54, magnitude: 2.23, spectralType: "K0", distance: 228 },
      { name: "Caph", ra: 0.15, dec: 59.15, magnitude: 2.27, spectralType: "F2", distance: 54 },
      { name: "Gamma Cas", ra: 0.94, dec: 60.72, magnitude: 2.47, spectralType: "B0", distance: 613 },
      { name: "Ruchbah", ra: 1.43, dec: 60.24, magnitude: 2.68, spectralType: "A5", distance: 99 },
      { name: "Segin", ra: 1.91, dec: 63.67, magnitude: 3.38, spectralType: "B3", distance: 442 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    story:
      "Cassiopeia, the vain queen, learned that true beauty lies not in appearance but in the love we give. Her W-shaped throne in the sky reminds us that pride fades, but love endures forever.",
  },
  {
    id: "cygnus",
    name: "Cygnus",
    stars: [
      { name: "Deneb", ra: 20.69, dec: 45.28, magnitude: 1.25, spectralType: "A2", distance: 2615 },
      { name: "Albireo", ra: 19.51, dec: 27.96, magnitude: 3.08, spectralType: "K3", distance: 434 },
      { name: "Sadr", ra: 20.37, dec: 40.26, magnitude: 2.2, spectralType: "F8", distance: 1833 },
      { name: "Delta Cyg", ra: 19.75, dec: 45.13, magnitude: 2.87, spectralType: "B9", distance: 165 },
      { name: "Epsilon Cyg", ra: 20.77, dec: 33.97, magnitude: 2.46, spectralType: "K0", distance: 72 },
    ],
    connections: [
      [0, 2],
      [2, 1],
      [2, 3],
      [2, 4],
    ],
    story:
      "The Swan flies across the Milky Way, carrying the soul of Orpheus who sang of eternal love. Its graceful wings remind us that love gives us the power to soar beyond our earthly bounds.",
  },
  {
    id: "lyra",
    name: "Lyra",
    stars: [
      { name: "Vega", ra: 18.62, dec: 38.78, magnitude: 0.03, spectralType: "A0", distance: 25 },
      { name: "Sheliak", ra: 18.83, dec: 33.36, magnitude: 3.52, spectralType: "B8", distance: 960 },
      { name: "Sulafat", ra: 18.98, dec: 32.69, magnitude: 3.24, spectralType: "B9", distance: 635 },
      { ra: 18.91, dec: 36.9, magnitude: 4.34, spectralType: "A8", distance: 156 },
      { ra: 18.74, dec: 37.6, magnitude: 4.93, spectralType: "F0", distance: 287 },
    ],
    connections: [
      [0, 4],
      [4, 3],
      [3, 1],
      [1, 2],
    ],
    story:
      "Orpheus's lyre plays the most beautiful melodies of love and loss. The brightest star Vega shines as a beacon, teaching us that even in grief, love's music never truly ends.",
  },
  {
    id: "leo",
    name: "Leo",
    stars: [
      { name: "Regulus", ra: 10.14, dec: 11.97, magnitude: 1.35, spectralType: "B7", distance: 79 },
      { name: "Denebola", ra: 11.82, dec: 14.57, magnitude: 2.14, spectralType: "A3", distance: 36 },
      { name: "Algieba", ra: 10.33, dec: 19.84, magnitude: 2.08, spectralType: "K1", distance: 130 },
      { name: "Zosma", ra: 11.24, dec: 20.52, magnitude: 2.56, spectralType: "A4", distance: 58 },
      { ra: 9.76, dec: 23.77, magnitude: 3.43, spectralType: "G7", distance: 251 },
      { ra: 11.41, dec: 15.43, magnitude: 3.52, spectralType: "A2", distance: 192 },
    ],
    connections: [
      [0, 2],
      [2, 4],
      [0, 3],
      [3, 1],
      [3, 5],
      [5, 1],
    ],
    story:
      "Leo, the lion, represents courage and nobility in love. His heart, marked by Regulus, beats with the strength to protect and cherish. True love, like the lion, is both fierce and tender.",
  },
  {
    id: "aries",
    name: "Aries",
    stars: [
      { name: "Hamal", ra: 2.12, dec: 23.46, magnitude: 2.0, spectralType: "K2", distance: 66 },
      { name: "Sheratan", ra: 1.91, dec: 20.81, magnitude: 2.64, spectralType: "A5", distance: 59 },
      { name: "Mesarthim", ra: 1.88, dec: 19.29, magnitude: 3.88, spectralType: "A1", distance: 164 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The golden ram represents new beginnings and courage. Like the ram who saved Phrixus and Helle, love gives us the courage to leap into the unknown together.",
  },
  {
    id: "taurus",
    name: "Taurus",
    stars: [
      { name: "Aldebaran", ra: 4.6, dec: 16.51, magnitude: 0.85, spectralType: "K5", distance: 65 },
      { name: "Elnath", ra: 5.44, dec: 28.61, magnitude: 1.65, spectralType: "B7", distance: 131 },
      { name: "Alcyone", ra: 3.79, dec: 24.11, magnitude: 2.87, spectralType: "B7", distance: 440 },
      { ra: 4.48, dec: 15.87, magnitude: 3.4, spectralType: "B8", distance: 155 },
      { ra: 4.33, dec: 17.54, magnitude: 3.76, spectralType: "K0", distance: 154 },
    ],
    connections: [
      [0, 3],
      [3, 4],
      [0, 1],
      [2, 0],
    ],
    story:
      "The bull carries Europa across the sea, a symbol of strength and devotion. In love, we become strong enough to carry each other through any storm.",
  },
  {
    id: "gemini",
    name: "Gemini",
    stars: [
      { name: "Pollux", ra: 7.76, dec: 28.03, magnitude: 1.14, spectralType: "K0", distance: 34 },
      { name: "Castor", ra: 7.58, dec: 31.89, magnitude: 1.58, spectralType: "A1", distance: 51 },
      { ra: 6.63, dec: 25.13, magnitude: 2.88, spectralType: "A3", distance: 232 },
      { ra: 6.4, dec: 22.51, magnitude: 3.06, spectralType: "G8", distance: 232 },
      { ra: 7.07, dec: 20.57, magnitude: 3.36, spectralType: "A2", distance: 143 },
    ],
    connections: [
      [1, 0],
      [1, 2],
      [0, 4],
      [2, 3],
      [3, 4],
    ],
    story:
      "The twins Castor and Pollux chose to share immortality rather than be separated. True love means choosing to be together, no matter the cost.",
  },
  {
    id: "cancer",
    name: "Cancer",
    stars: [
      { name: "Acubens", ra: 8.98, dec: 11.86, magnitude: 4.25, spectralType: "A5", distance: 174 },
      { name: "Asellus Australis", ra: 8.78, dec: 18.15, magnitude: 3.94, spectralType: "K0", distance: 136 },
      { name: "Asellus Borealis", ra: 8.73, dec: 21.47, magnitude: 4.66, spectralType: "A1", distance: 158 },
      { ra: 8.28, dec: 9.19, magnitude: 3.52, spectralType: "K4", distance: 264 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [1, 3],
    ],
    story:
      "The crab may seem small, but it protected Hera with fierce loyalty. Love isn't about size or strength, but about the courage to stand by those we cherish.",
  },
  {
    id: "virgo",
    name: "Virgo",
    stars: [
      { name: "Spica", ra: 13.42, dec: -11.16, magnitude: 0.97, spectralType: "B1", distance: 250 },
      { name: "Porrima", ra: 12.69, dec: -1.45, magnitude: 2.74, spectralType: "F0", distance: 38 },
      { name: "Vindemiatrix", ra: 13.04, dec: 10.96, magnitude: 2.85, spectralType: "G8", distance: 110 },
      { ra: 12.93, dec: 3.4, magnitude: 3.38, spectralType: "M3", distance: 202 },
      { ra: 12.33, dec: -0.67, magnitude: 3.59, spectralType: "F9", distance: 96 },
    ],
    connections: [
      [2, 3],
      [3, 4],
      [4, 1],
      [1, 0],
    ],
    story:
      "The maiden of harvest represents nurturing and growth. Love, like a garden, flourishes when tended with care, patience, and devotion.",
  },
  {
    id: "libra",
    name: "Libra",
    stars: [
      { name: "Zubeneschamali", ra: 15.28, dec: -9.38, magnitude: 2.61, spectralType: "B8", distance: 185 },
      { name: "Zubenelgenubi", ra: 14.85, dec: -16.04, magnitude: 2.75, spectralType: "A3", distance: 77 },
      { ra: 15.59, dec: -14.79, magnitude: 3.29, spectralType: "G8", distance: 121 },
      { ra: 15.1, dec: -25.28, magnitude: 3.91, spectralType: "B9", distance: 143 },
    ],
    connections: [
      [0, 1],
      [0, 2],
      [1, 3],
    ],
    story:
      "The scales of justice remind us that love requires balance. In giving and receiving, in speaking and listening, we find harmony together.",
  },
  {
    id: "scorpius",
    name: "Scorpius",
    stars: [
      { name: "Antares", ra: 16.49, dec: -26.43, magnitude: 0.96, spectralType: "M1", distance: 550 },
      { name: "Shaula", ra: 17.56, dec: -37.1, magnitude: 1.63, spectralType: "B2", distance: 703 },
      { name: "Sargas", ra: 17.62, dec: -43.0, magnitude: 1.87, spectralType: "F1", distance: 272 },
      { name: "Dschubba", ra: 16.0, dec: -22.62, magnitude: 2.32, spectralType: "B0", distance: 402 },
      { ra: 16.84, dec: -34.29, magnitude: 2.56, spectralType: "B2", distance: 404 },
    ],
    connections: [
      [3, 0],
      [0, 4],
      [4, 1],
      [1, 2],
    ],
    story:
      "The scorpion's sting is fierce, but it protects what it loves. Passion and protection go hand in hand in matters of the heart.",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    stars: [
      { name: "Kaus Australis", ra: 18.4, dec: -34.38, magnitude: 1.85, spectralType: "B9", distance: 143 },
      { name: "Nunki", ra: 18.92, dec: -26.3, magnitude: 2.02, spectralType: "B2", distance: 228 },
      { name: "Ascella", ra: 19.08, dec: -29.88, magnitude: 2.6, spectralType: "A2", distance: 88 },
      { name: "Kaus Media", ra: 18.35, dec: -29.83, magnitude: 2.7, spectralType: "K3", distance: 306 },
      { ra: 19.16, dec: -27.67, magnitude: 2.81, spectralType: "K1", distance: 121 },
    ],
    connections: [
      [0, 3],
      [3, 1],
      [1, 2],
      [2, 4],
    ],
    story:
      "The archer aims his arrow at the heart of the galaxy. Love is our target, and with focus and intention, we never miss.",
  },
  {
    id: "capricornus",
    name: "Capricornus",
    stars: [
      { name: "Deneb Algedi", ra: 21.78, dec: -16.13, magnitude: 2.87, spectralType: "A7", distance: 39 },
      { name: "Dabih", ra: 20.35, dec: -14.78, magnitude: 3.08, spectralType: "K0", distance: 328 },
      { name: "Nashira", ra: 21.67, dec: -16.66, magnitude: 3.68, spectralType: "A0", distance: 139 },
      { ra: 21.37, dec: -22.41, magnitude: 4.07, spectralType: "G8", distance: 670 },
    ],
    connections: [
      [1, 0],
      [0, 2],
      [0, 3],
    ],
    story:
      "The sea-goat climbs mountains and swims oceans. Love gives us the versatility to adapt, to climb any height and dive any depth together.",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    stars: [
      { name: "Sadalsuud", ra: 21.52, dec: -5.57, magnitude: 2.87, spectralType: "G0", distance: 540 },
      { name: "Sadalmelik", ra: 22.1, dec: -0.32, magnitude: 2.95, spectralType: "G2", distance: 760 },
      { name: "Skat", ra: 22.88, dec: -15.82, magnitude: 3.27, spectralType: "A3", distance: 160 },
      { ra: 22.36, dec: -1.39, magnitude: 3.73, spectralType: "A0", distance: 227 },
    ],
    connections: [
      [1, 3],
      [3, 0],
      [0, 2],
    ],
    story:
      "The water bearer pours out life and renewal. Love flows like water, nourishing everything it touches, bringing life to barren places.",
  },
  {
    id: "pisces",
    name: "Pisces",
    stars: [
      { name: "Alpherg", ra: 1.19, dec: 7.89, magnitude: 3.62, spectralType: "G7", distance: 294 },
      { name: "Alrescha", ra: 2.03, dec: 2.76, magnitude: 3.82, spectralType: "A2", distance: 139 },
      { ra: 23.67, dec: 6.38, magnitude: 3.7, spectralType: "K0", distance: 294 },
      { ra: 1.23, dec: 15.35, magnitude: 3.79, spectralType: "G8", distance: 130 },
      { ra: 0.82, dec: 7.58, magnitude: 4.01, spectralType: "A0", distance: 294 },
    ],
    connections: [
      [2, 1],
      [1, 4],
      [4, 0],
      [0, 3],
    ],
    story:
      "Two fish swim in opposite directions but remain connected. Even when life pulls us different ways, love keeps us bound together.",
  },
  {
    id: "ursa-minor",
    name: "Ursa Minor",
    stars: [
      { name: "Polaris", ra: 2.53, dec: 89.26, magnitude: 1.98, spectralType: "F7", distance: 433 },
      { name: "Kochab", ra: 14.85, dec: 74.16, magnitude: 2.08, spectralType: "K4", distance: 131 },
      { name: "Pherkad", ra: 15.35, dec: 71.83, magnitude: 3.05, spectralType: "A3", distance: 480 },
      { ra: 16.77, dec: 82.04, magnitude: 4.35, spectralType: "K4", distance: 347 },
      { ra: 15.73, dec: 77.79, magnitude: 4.95, spectralType: "A3", distance: 390 },
    ],
    connections: [
      [0, 3],
      [3, 4],
      [4, 1],
      [1, 2],
      [4, 2],
    ],
    story:
      "The Little Bear contains Polaris, the North Star, our constant guide. Like true love, it remains steady and unchanging, always showing us the way home.",
  },
  {
    id: "draco",
    name: "Draco",
    stars: [
      { name: "Eltanin", ra: 17.94, dec: 51.49, magnitude: 2.23, spectralType: "K5", distance: 154 },
      { name: "Rastaban", ra: 17.51, dec: 52.3, magnitude: 2.79, spectralType: "G2", distance: 380 },
      { name: "Thuban", ra: 14.07, dec: 64.38, magnitude: 3.65, spectralType: "A0", distance: 303 },
      { ra: 19.21, dec: 67.66, magnitude: 3.07, spectralType: "G8", distance: 97 },
      { ra: 17.15, dec: 65.71, magnitude: 3.29, spectralType: "K2", distance: 340 },
    ],
    connections: [
      [0, 1],
      [1, 4],
      [4, 2],
      [2, 3],
    ],
    story:
      "The dragon guards the golden apples of immortality. Love is the treasure we guard most fiercely, the gift that makes life eternal.",
  },
  {
    id: "cepheus",
    name: "Cepheus",
    stars: [
      { name: "Alderamin", ra: 21.31, dec: 62.59, magnitude: 2.44, spectralType: "A7", distance: 49 },
      { name: "Alfirk", ra: 21.48, dec: 70.56, magnitude: 3.23, spectralType: "B2", distance: 595 },
      { ra: 22.18, dec: 58.2, magnitude: 3.35, spectralType: "K1", distance: 730 },
      { ra: 23.66, dec: 77.63, magnitude: 3.52, spectralType: "M2", distance: 880 },
      { ra: 22.83, dec: 66.2, magnitude: 4.19, spectralType: "A7", distance: 47 },
    ],
    connections: [
      [0, 2],
      [2, 4],
      [4, 1],
      [1, 3],
      [3, 0],
    ],
    story:
      "King Cepheus loved his family so deeply he would sacrifice anything for them. True love means putting those we cherish above all else.",
  },
  {
    id: "perseus",
    name: "Perseus",
    stars: [
      { name: "Mirfak", ra: 3.41, dec: 49.86, magnitude: 1.79, spectralType: "F5", distance: 510 },
      { name: "Algol", ra: 3.14, dec: 40.96, magnitude: 2.12, spectralType: "B8", distance: 93 },
      { ra: 3.9, dec: 47.79, magnitude: 2.85, spectralType: "B5", distance: 1331 },
      { ra: 3.08, dec: 53.51, magnitude: 2.93, spectralType: "G0", distance: 256 },
      { ra: 2.85, dec: 55.9, magnitude: 3.76, spectralType: "K3", distance: 520 },
    ],
    connections: [
      [4, 3],
      [3, 0],
      [0, 2],
      [0, 1],
    ],
    story:
      "Perseus rescued Andromeda, proving that love gives us the courage to face any monster. When we love, we become heroes.",
  },
  {
    id: "auriga",
    name: "Auriga",
    stars: [
      { name: "Capella", ra: 5.28, dec: 46.0, magnitude: 0.08, spectralType: "G8", distance: 43 },
      { name: "Menkalinan", ra: 6.0, dec: 44.95, magnitude: 1.9, spectralType: "A2", distance: 81 },
      { ra: 5.99, dec: 37.21, magnitude: 2.62, spectralType: "K3", distance: 512 },
      { ra: 4.95, dec: 33.17, magnitude: 2.69, spectralType: "A0", distance: 163 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    story:
      "The charioteer carries the goat and her kids, showing that love means protecting and nurturing those who depend on us.",
  },
  {
    id: "hercules",
    name: "Hercules",
    stars: [
      { name: "Kornephoros", ra: 16.5, dec: 21.49, magnitude: 2.77, spectralType: "G7", distance: 139 },
      { name: "Rasalgethi", ra: 17.24, dec: 14.39, magnitude: 3.48, spectralType: "M5", distance: 359 },
      { ra: 17.25, dec: 24.84, magnitude: 3.14, spectralType: "A3", distance: 75 },
      { ra: 16.72, dec: 38.92, magnitude: 3.16, spectralType: "A9", distance: 112 },
      { ra: 17.0, dec: 30.93, magnitude: 3.42, spectralType: "B9", distance: 195 },
    ],
    connections: [
      [1, 0],
      [0, 2],
      [2, 4],
      [4, 3],
    ],
    story:
      "Hercules performed twelve labors for love. The greatest strength isn't physical—it's the power to endure anything for those we love.",
  },
  {
    id: "bootes",
    name: "Boötes",
    stars: [
      { name: "Arcturus", ra: 14.26, dec: 19.18, magnitude: -0.05, spectralType: "K2", distance: 37 },
      { name: "Izar", ra: 14.75, dec: 27.07, magnitude: 2.37, spectralType: "K0", distance: 202 },
      { name: "Seginus", ra: 14.53, dec: 38.31, magnitude: 3.03, spectralType: "A7", distance: 85 },
      { ra: 14.43, dec: 46.09, magnitude: 3.47, spectralType: "F7", distance: 117 },
      { ra: 13.91, dec: 18.4, magnitude: 3.5, spectralType: "A7", distance: 203 },
    ],
    connections: [
      [0, 4],
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    story:
      "The herdsman watches over his flock with patient devotion. Love is a guardian that never sleeps, always watching, always caring.",
  },
  {
    id: "corona-borealis",
    name: "Corona Borealis",
    stars: [
      { name: "Alphecca", ra: 15.58, dec: 26.71, magnitude: 2.23, spectralType: "A0", distance: 75 },
      { ra: 15.71, dec: 26.3, magnitude: 4.14, spectralType: "F0", distance: 114 },
      { ra: 15.96, dec: 26.88, magnitude: 3.68, spectralType: "A0", distance: 177 },
      { ra: 15.43, dec: 29.11, magnitude: 4.15, spectralType: "G5", distance: 165 },
      { ra: 15.39, dec: 31.36, magnitude: 4.63, spectralType: "K2", distance: 510 },
    ],
    connections: [
      [4, 3],
      [3, 0],
      [0, 1],
      [1, 2],
    ],
    story:
      "Ariadne's crown was placed in the heavens by Dionysus as a symbol of eternal love. Every crown is a promise, every promise a treasure.",
  },
  {
    id: "aquila",
    name: "Aquila",
    stars: [
      { name: "Altair", ra: 19.85, dec: 8.87, magnitude: 0.77, spectralType: "A7", distance: 17 },
      { name: "Tarazed", ra: 19.77, dec: 10.61, magnitude: 2.72, spectralType: "K3", distance: 461 },
      { name: "Alshain", ra: 19.92, dec: 6.41, magnitude: 3.71, spectralType: "A7", distance: 45 },
      { ra: 19.09, dec: 13.86, magnitude: 2.99, spectralType: "B9", distance: 287 },
    ],
    connections: [
      [1, 0],
      [0, 2],
      [0, 3],
    ],
    story:
      "The eagle carried Zeus's thunderbolts and later reunited separated lovers. Love has wings that can cross any distance, overcome any obstacle.",
  },
  {
    id: "delphinus",
    name: "Delphinus",
    stars: [
      { name: "Rotanev", ra: 20.78, dec: 14.6, magnitude: 3.63, spectralType: "F5", distance: 97 },
      { name: "Sualocin", ra: 20.66, dec: 15.91, magnitude: 3.77, spectralType: "B9", distance: 241 },
      { ra: 20.77, dec: 16.12, magnitude: 4.03, spectralType: "A7", distance: 328 },
      { ra: 20.62, dec: 14.6, magnitude: 4.43, spectralType: "A3", distance: 230 },
    ],
    connections: [
      [1, 2],
      [2, 0],
      [0, 3],
      [3, 1],
    ],
    story:
      "The dolphin saved the poet Arion, showing that love rescues us when we're drowning. In the ocean of life, love is our lifeline.",
  },
  {
    id: "pegasus",
    name: "Pegasus",
    stars: [
      { name: "Markab", ra: 23.08, dec: 15.21, magnitude: 2.49, spectralType: "B9", distance: 140 },
      { name: "Scheat", ra: 23.06, dec: 28.08, magnitude: 2.42, spectralType: "M2", distance: 196 },
      { name: "Algenib", ra: 0.22, dec: 15.18, magnitude: 2.83, spectralType: "B2", distance: 390 },
      { name: "Enif", ra: 21.74, dec: 9.88, magnitude: 2.39, spectralType: "K2", distance: 672 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 0],
      [0, 3],
    ],
    story:
      "The winged horse represents freedom and inspiration. Love gives us wings to fly, to dream, to become more than we ever imagined.",
  },
  {
    id: "crux",
    name: "Crux",
    stars: [
      { name: "Acrux", ra: 12.44, dec: -63.1, magnitude: 0.77, spectralType: "B0", distance: 321 },
      { name: "Mimosa", ra: 12.79, dec: -59.69, magnitude: 1.25, spectralType: "B0", distance: 353 },
      { name: "Gacrux", ra: 12.52, dec: -57.11, magnitude: 1.63, spectralType: "M3", distance: 88 },
      { name: "Delta Cru", ra: 12.25, dec: -58.75, magnitude: 2.8, spectralType: "B2", distance: 345 },
    ],
    connections: [
      [0, 2],
      [1, 3],
    ],
    story:
      "The Southern Cross guides travelers home. Love is our compass, our true north, leading us back to where we belong—with each other.",
  },
  {
    id: "centaurus",
    name: "Centaurus",
    stars: [
      { name: "Rigil Kentaurus", ra: 14.66, dec: -60.84, magnitude: -0.01, spectralType: "G2", distance: 4.37 },
      { name: "Hadar", ra: 14.06, dec: -60.37, magnitude: 0.61, spectralType: "B1", distance: 525 },
      { name: "Menkent", ra: 14.11, dec: -36.37, magnitude: 2.06, spectralType: "K0", distance: 61 },
      { ra: 13.93, dec: -47.29, magnitude: 2.3, spectralType: "B2", distance: 410 },
    ],
    connections: [
      [0, 1],
      [1, 3],
      [3, 2],
    ],
    story:
      "The centaur Chiron was wise and kind, teaching heroes. Love is our greatest teacher, showing us wisdom through compassion and patience.",
  },
  {
    id: "hydra",
    name: "Hydra",
    stars: [
      { name: "Alphard", ra: 9.46, dec: -8.66, magnitude: 1.98, spectralType: "K3", distance: 177 },
      { ra: 8.78, dec: 5.7, magnitude: 3.11, spectralType: "K2", distance: 135 },
      { ra: 8.92, dec: 3.34, magnitude: 3.38, spectralType: "G8", distance: 132 },
      { ra: 9.24, dec: -2.31, magnitude: 3.91, spectralType: "A0", distance: 298 },
      { ra: 11.55, dec: -31.86, magnitude: 3.0, spectralType: "G5", distance: 294 },
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 0],
      [0, 4],
    ],
    story:
      "The water serpent stretches across the sky, representing the long journey of love. Though the path is winding, we travel it together.",
  },
  {
    id: "corvus",
    name: "Corvus",
    stars: [
      { name: "Gienah", ra: 12.26, dec: -17.54, magnitude: 2.59, spectralType: "B8", distance: 165 },
      { name: "Kraz", ra: 12.57, dec: -23.4, magnitude: 2.65, spectralType: "G5", distance: 146 },
      { name: "Algorab", ra: 12.5, dec: -16.52, magnitude: 2.95, spectralType: "A0", distance: 87 },
      { name: "Minkar", ra: 12.15, dec: -24.73, magnitude: 3.0, spectralType: "K2", distance: 303 },
    ],
    connections: [
      [0, 2],
      [2, 1],
      [1, 3],
      [3, 0],
    ],
    story:
      "The crow was once white but turned black for revealing secrets. Love teaches us when to speak and when to keep sacred what is shared between two hearts.",
  },
  {
    id: "crater",
    name: "Crater",
    stars: [
      { name: "Labrum", ra: 11.32, dec: -18.3, magnitude: 3.56, spectralType: "K0", distance: 195 },
      { ra: 11.41, dec: -14.78, magnitude: 4.08, spectralType: "K0", distance: 266 },
      { ra: 11.65, dec: -18.35, magnitude: 3.91, spectralType: "G8", distance: 531 },
      { ra: 11.19, dec: -22.83, magnitude: 4.48, spectralType: "K5", distance: 531 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    story:
      "The cup of Apollo holds the wine of celebration. Love is worth celebrating every day, every moment we share together.",
  },
  {
    id: "canis-major",
    name: "Canis Major",
    stars: [
      { name: "Sirius", ra: 6.75, dec: -16.72, magnitude: -1.46, spectralType: "A1", distance: 8.6 },
      { name: "Adhara", ra: 6.98, dec: -28.97, magnitude: 1.5, spectralType: "B2", distance: 431 },
      { name: "Wezen", ra: 7.14, dec: -26.39, magnitude: 1.83, spectralType: "F8", distance: 1791 },
      { name: "Mirzam", ra: 6.38, dec: -17.96, magnitude: 1.98, spectralType: "B1", distance: 500 },
      { ra: 7.05, dec: -27.93, magnitude: 3.02, spectralType: "B3", distance: 1120 },
    ],
    connections: [
      [3, 0],
      [0, 1],
      [1, 2],
      [2, 4],
    ],
    story:
      "The great dog follows Orion faithfully. Sirius, the brightest star in the sky, reminds us that loyalty shines brightest of all.",
  },
  {
    id: "canis-minor",
    name: "Canis Minor",
    stars: [
      { name: "Procyon", ra: 7.66, dec: 5.22, magnitude: 0.34, spectralType: "F5", distance: 11.5 },
      { name: "Gomeisa", ra: 7.45, dec: 8.29, magnitude: 2.9, spectralType: "B8", distance: 170 },
    ],
    connections: [[0, 1]],
    story:
      "The little dog is small but devoted. Love doesn't need grand gestures—sometimes the smallest acts of devotion mean the most.",
  },
  {
    id: "eridanus",
    name: "Eridanus",
    stars: [
      { name: "Achernar", ra: 1.63, dec: -57.24, magnitude: 0.46, spectralType: "B3", distance: 139 },
      { name: "Cursa", ra: 5.13, dec: -5.09, magnitude: 2.79, spectralType: "A3", distance: 89 },
      { ra: 3.97, dec: -13.51, magnitude: 3.24, spectralType: "K2", distance: 143 },
      { ra: 3.72, dec: -23.62, magnitude: 3.54, spectralType: "A3", distance: 161 },
      { ra: 2.97, dec: -40.3, magnitude: 2.95, spectralType: "A3", distance: 144 },
    ],
    connections: [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ],
    story:
      "The river flows from heaven to earth, connecting two worlds. Love is the bridge between souls, the current that carries us together.",
  },
  {
    id: "columba",
    name: "Columba",
    stars: [
      { name: "Phact", ra: 5.66, dec: -34.07, magnitude: 2.64, spectralType: "B7", distance: 268 },
      { name: "Wazn", ra: 5.85, dec: -35.77, magnitude: 3.12, spectralType: "K1", distance: 86 },
      { ra: 5.98, dec: -35.28, magnitude: 3.85, spectralType: "B8", distance: 398 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The dove brought the olive branch to Noah, a symbol of hope and new beginnings. Love is our hope, our promise of better days ahead.",
  },
  {
    id: "puppis",
    name: "Puppis",
    stars: [
      { name: "Naos", ra: 8.06, dec: -40.0, magnitude: 2.25, spectralType: "O5", distance: 1399 },
      { ra: 7.29, dec: -37.1, magnitude: 2.7, spectralType: "K5", distance: 347 },
      { ra: 8.13, dec: -24.3, magnitude: 2.81, spectralType: "K3", distance: 423 },
      { ra: 7.49, dec: -26.8, magnitude: 2.93, spectralType: "A2", distance: 63 },
    ],
    connections: [
      [0, 2],
      [2, 3],
      [3, 1],
    ],
    story:
      "The stern of the ship Argo represents the foundation of our journey. Love is the vessel that carries us through life's seas.",
  },
  {
    id: "vela",
    name: "Vela",
    stars: [
      { name: "Suhail", ra: 9.13, dec: -43.43, magnitude: 1.96, spectralType: "K5", distance: 573 },
      { name: "Regor", ra: 8.16, dec: -47.34, magnitude: 1.75, spectralType: "WC8", distance: 1116 },
      { ra: 8.75, dec: -54.71, magnitude: 1.93, spectralType: "A0", distance: 80 },
      { ra: 10.78, dec: -49.42, magnitude: 2.5, spectralType: "A0", distance: 125 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [0, 3],
    ],
    story:
      "The sails of Argo caught the wind of adventure. Love fills our sails, propelling us forward into unknown but exciting waters.",
  },
  {
    id: "carina",
    name: "Carina",
    stars: [
      { name: "Canopus", ra: 6.4, dec: -52.7, magnitude: -0.72, spectralType: "A9", distance: 310 },
      { name: "Miaplacidus", ra: 9.22, dec: -69.72, magnitude: 1.68, spectralType: "A1", distance: 111 },
      { ra: 9.79, dec: -65.07, magnitude: 2.25, spectralType: "B0", distance: 1600 },
      { ra: 10.23, dec: -70.04, magnitude: 2.76, spectralType: "A8", distance: 439 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    story:
      "The keel of the Argo is the ship's foundation. Love is our foundation, the solid base upon which we build our lives together.",
  },
  {
    id: "pavo",
    name: "Pavo",
    stars: [
      { name: "Peacock", ra: 20.43, dec: -56.73, magnitude: 1.94, spectralType: "B2", distance: 179 },
      { ra: 20.75, dec: -66.2, magnitude: 3.43, spectralType: "A5", distance: 135 },
      { ra: 18.87, dec: -62.19, magnitude: 3.56, spectralType: "K0", distance: 268 },
      { ra: 21.44, dec: -65.37, magnitude: 3.91, spectralType: "A0", distance: 133 },
    ],
    connections: [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    story:
      "The peacock displays its beautiful feathers in courtship. Love makes us want to show our best selves, to be beautiful for each other.",
  },
  {
    id: "grus",
    name: "Grus",
    stars: [
      { name: "Alnair", ra: 22.14, dec: -46.96, magnitude: 1.74, spectralType: "B7", distance: 101 },
      { name: "Al Dhanab", ra: 22.71, dec: -46.88, magnitude: 2.11, spectralType: "M5", distance: 203 },
      { ra: 21.9, dec: -37.37, magnitude: 3.01, spectralType: "B8", distance: 228 },
      { ra: 23.17, dec: -45.25, magnitude: 3.49, spectralType: "K3", distance: 177 },
    ],
    connections: [
      [0, 2],
      [0, 1],
      [1, 3],
    ],
    story:
      "The crane stands on one leg in patient meditation. Love requires patience, the willingness to wait and watch and be present.",
  },
  {
    id: "phoenix",
    name: "Phoenix",
    stars: [
      { name: "Ankaa", ra: 0.44, dec: -42.31, magnitude: 2.39, spectralType: "K0", distance: 77 },
      { ra: 1.1, dec: -46.72, magnitude: 3.32, spectralType: "G8", distance: 234 },
      { ra: 1.52, dec: -43.32, magnitude: 3.41, spectralType: "A5", distance: 142 },
      { ra: 0.73, dec: -57.46, magnitude: 3.95, spectralType: "A7", distance: 243 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [0, 3],
    ],
    story: "The phoenix rises from its ashes, reborn. Love renews us, transforms us, makes us new again and again.",
  },
  {
    id: "tucana",
    name: "Tucana",
    stars: [
      { name: "Alpha Tuc", ra: 22.31, dec: -60.26, magnitude: 2.86, spectralType: "K3", distance: 200 },
      { ra: 23.29, dec: -58.24, magnitude: 4.37, spectralType: "B9", distance: 281 },
      { ra: 0.53, dec: -62.96, magnitude: 4.48, spectralType: "A0", distance: 247 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The toucan's bright colors celebrate life's vibrancy. Love adds color to our world, making everything more beautiful and alive.",
  },
  {
    id: "indus",
    name: "Indus",
    stars: [
      { name: "The Persian", ra: 20.63, dec: -47.29, magnitude: 3.11, spectralType: "K0", distance: 101 },
      { ra: 21.33, dec: -53.45, magnitude: 4.39, spectralType: "K1", distance: 603 },
      { ra: 20.91, dec: -58.45, magnitude: 4.4, spectralType: "A4", distance: 185 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The Indian represents exploration and discovery. In love, we are always discovering new depths, new wonders in each other.",
  },
  {
    id: "ara",
    name: "Ara",
    stars: [
      { name: "Choo", ra: 17.53, dec: -49.88, magnitude: 2.85, spectralType: "K3", distance: 242 },
      { ra: 17.42, dec: -56.38, magnitude: 2.95, spectralType: "K5", distance: 603 },
      { ra: 17.52, dec: -60.68, magnitude: 3.13, spectralType: "B2", distance: 1059 },
      { ra: 16.99, dec: -53.16, magnitude: 3.31, spectralType: "B2", distance: 325 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [0, 3],
    ],
    story: "The altar is where sacred vows are made. Love is our sacred promise, the vow we renew with every sunrise.",
  },
  {
    id: "corona-australis",
    name: "Corona Australis",
    stars: [
      { name: "Meridiana", ra: 19.16, dec: -37.9, magnitude: 4.11, spectralType: "A2", distance: 130 },
      { ra: 19.1, dec: -37.06, magnitude: 4.11, spectralType: "A0", distance: 202 },
      { ra: 18.98, dec: -37.11, magnitude: 4.75, spectralType: "F8", distance: 97 },
      { ra: 18.56, dec: -38.73, magnitude: 4.87, spectralType: "K0", distance: 469 },
    ],
    connections: [
      [3, 2],
      [2, 1],
      [1, 0],
    ],
    story:
      "The southern crown mirrors its northern twin. Love reflects itself, each partner a mirror showing the other their best self.",
  },
  {
    id: "telescopium",
    name: "Telescopium",
    stars: [
      { name: "Alpha Tel", ra: 18.45, dec: -45.97, magnitude: 3.51, spectralType: "B3", distance: 249 },
      { ra: 18.48, dec: -49.07, magnitude: 4.13, spectralType: "G8", distance: 710 },
      { ra: 19.36, dec: -54.42, magnitude: 4.93, spectralType: "M1", distance: 1200 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The telescope helps us see distant wonders. Love gives us vision, helping us see the beauty and potential in each other.",
  },
  {
    id: "microscopium",
    name: "Microscopium",
    stars: [
      { name: "Gamma Mic", ra: 21.02, dec: -32.26, magnitude: 4.67, spectralType: "G6", distance: 223 },
      { ra: 20.83, dec: -33.78, magnitude: 4.82, spectralType: "K2", distance: 174 },
      { ra: 21.3, dec: -40.81, magnitude: 4.71, spectralType: "A0", distance: 381 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The microscope reveals hidden details. Love helps us see the small, precious details that make each other unique and wonderful.",
  },
  {
    id: "sculptor",
    name: "Sculptor",
    stars: [
      { name: "Alpha Scl", ra: 0.98, dec: -29.36, magnitude: 4.31, spectralType: "B7", distance: 672 },
      { ra: 23.55, dec: -37.82, magnitude: 4.38, spectralType: "B9", distance: 178 },
      { ra: 23.32, dec: -32.53, magnitude: 4.41, spectralType: "F2", distance: 143 },
    ],
    connections: [
      [1, 2],
      [2, 0],
    ],
    story:
      "The sculptor shapes raw material into art. Love shapes us, molding us into better versions of ourselves through patience and care.",
  },
  {
    id: "fornax",
    name: "Fornax",
    stars: [
      { name: "Dalim", ra: 3.2, dec: -28.99, magnitude: 3.87, spectralType: "G8", distance: 46 },
      { ra: 2.82, dec: -32.41, magnitude: 4.46, spectralType: "G7", distance: 169 },
      { ra: 3.8, dec: -37.62, magnitude: 5.89, spectralType: "G0", distance: 301 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The furnace transforms raw ore into precious metal. Love refines us, burning away impurities until only the gold remains.",
  },
  {
    id: "horologium",
    name: "Horologium",
    stars: [
      { name: "Alpha Hor", ra: 4.23, dec: -42.29, magnitude: 3.86, spectralType: "K1", distance: 117 },
      { ra: 2.98, dec: -50.8, magnitude: 4.93, spectralType: "A9", distance: 313 },
      { ra: 3.06, dec: -59.74, magnitude: 5.35, spectralType: "G5", distance: 184 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The clock measures time, but love makes us timeless. In each other's arms, hours feel like moments and moments feel eternal.",
  },
  {
    id: "reticulum",
    name: "Reticulum",
    stars: [
      { name: "Alpha Ret", ra: 4.24, dec: -62.47, magnitude: 3.35, spectralType: "G8", distance: 163 },
      { ra: 3.74, dec: -64.81, magnitude: 3.85, spectralType: "K0", distance: 100 },
      { ra: 4.01, dec: -61.4, magnitude: 4.44, spectralType: "M2", distance: 390 },
      { ra: 3.98, dec: -63.24, magnitude: 4.56, spectralType: "K2", distance: 550 },
    ],
    connections: [
      [0, 2],
      [2, 3],
      [3, 1],
      [1, 0],
    ],
    story:
      "The reticle helps us focus and aim true. Love gives us purpose and direction, helping us focus on what truly matters.",
  },
  {
    id: "pictor",
    name: "Pictor",
    stars: [
      { name: "Alpha Pic", ra: 6.8, dec: -61.94, magnitude: 3.27, spectralType: "A8", distance: 97 },
      { ra: 5.83, dec: -56.17, magnitude: 3.85, spectralType: "A5", distance: 63 },
      { ra: 5.79, dec: -51.07, magnitude: 4.5, spectralType: "K1", distance: 174 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The painter's easel captures beauty on canvas. Love is the masterpiece we create together, stroke by stroke, day by day.",
  },
  {
    id: "dorado",
    name: "Dorado",
    stars: [
      { name: "Alpha Dor", ra: 4.57, dec: -55.04, magnitude: 3.27, spectralType: "A0", distance: 169 },
      { ra: 5.56, dec: -62.49, magnitude: 3.76, spectralType: "F6", distance: 145 },
      { ra: 4.25, dec: -51.49, magnitude: 4.35, spectralType: "A0", distance: 230 },
    ],
    connections: [
      [0, 1],
      [0, 2],
    ],
    story:
      "The goldfish swims in celestial waters. Love is the ocean we swim in, surrounding us, sustaining us, giving us life.",
  },
  {
    id: "mensa",
    name: "Mensa",
    stars: [
      { name: "Alpha Men", ra: 6.17, dec: -74.75, magnitude: 5.09, spectralType: "G5", distance: 33 },
      { ra: 4.92, dec: -74.94, magnitude: 5.31, spectralType: "K4", distance: 645 },
      { ra: 5.48, dec: -76.34, magnitude: 5.66, spectralType: "K3", distance: 550 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "Table Mountain stands firm and unchanging. Love is our solid ground, the stable foundation we can always count on.",
  },
  {
    id: "volans",
    name: "Volans",
    stars: [
      { name: "Beta Vol", ra: 8.43, dec: -66.14, magnitude: 3.77, spectralType: "K2", distance: 108 },
      { ra: 9.04, dec: -66.4, magnitude: 4.0, spectralType: "K1", distance: 142 },
      { ra: 7.28, dec: -67.96, magnitude: 4.35, spectralType: "F6", distance: 71 },
      { ra: 7.7, dec: -72.61, magnitude: 3.98, spectralType: "A6", distance: 125 },
    ],
    connections: [
      [0, 1],
      [0, 2],
      [2, 3],
    ],
    story:
      "The flying fish leaps from the water into air. Love gives us the courage to leap, to try new things, to soar beyond our limits.",
  },
  {
    id: "chamaeleon",
    name: "Chamaeleon",
    stars: [
      { name: "Alpha Cha", ra: 8.31, dec: -76.92, magnitude: 4.07, spectralType: "F5", distance: 63 },
      { ra: 10.59, dec: -78.61, magnitude: 4.26, spectralType: "B5", distance: 271 },
      { ra: 12.31, dec: -79.31, magnitude: 4.45, spectralType: "M0", distance: 340 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The chameleon adapts to its surroundings. Love teaches us flexibility, the ability to adapt and grow together through all changes.",
  },
   {
    id: "scutum",
    name: "Scutum",
    stars: [
      { name: "Alpha Sct", ra: 18.59, dec: -8.24, magnitude: 3.85, spectralType: "K2", distance: 174 },
      { ra: 18.78, dec: -4.75, magnitude: 4.22, spectralType: "G5", distance: 689 },
      { ra: 18.43, dec: -14.57, magnitude: 4.7, spectralType: "B2", distance: 1180 },
    ],
    connections: [
      [0, 1],
      [0, 2],
    ],
    story:
      "The shield protects what is precious. Love is our shield, protecting us from loneliness, fear, and despair.",
  },
  {
    id: "ily",
    name: "I Love You",
    stars: [
      { ra: 6.5, dec: 45.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 6.5, dec: 42.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 6.5, dec: 39.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 7.5, dec: 45.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 7.5, dec: 42.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 7.5, dec: 39.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 7.8, dec: 39.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 8.1, dec: 39.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 8.8, dec: 45.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 9.0, dec: 42.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 9.2, dec: 45.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
      { ra: 9.0, dec: 39.0, magnitude: 2.5, spectralType: "G2", distance: 100 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [8, 9],
      [10, 9],
      [9, 11],
    ],
    story:
      "Three simple letters that hold the universe within them. I Love You - the most powerful constellation in the sky, created just for you. Every time you look up, remember that my love for you is as infinite as the stars themselves.",
    isEasterEgg: true,
  },
  {
    id: "apus",
    name: "Apus",
    stars: [
      { name: "Alpha Aps", ra: 14.8, dec: -79.04, magnitude: 3.83, spectralType: "K5", distance: 411 },
      { ra: 16.72, dec: -78.9, magnitude: 4.24, spectralType: "K3", distance: 158 },
      { ra: 16.56, dec: -77.52, magnitude: 4.68, spectralType: "M7", distance: 1040 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The bird of paradise is exotic and beautiful. Love is our paradise, the beautiful place we create together wherever we are.",
  },
  {
    id: "strawberry",
    name: "The Strawberry",
    stars: [
      { ra: 14.5, dec: -15.0, magnitude: 2.8, spectralType: "K5", distance: 150 },
      { ra: 14.3, dec: -16.5, magnitude: 3.0, spectralType: "K3", distance: 145 },
      { ra: 14.7, dec: -16.5, magnitude: 3.0, spectralType: "K3", distance: 145 },
      { ra: 14.2, dec: -18.0, magnitude: 3.2, spectralType: "M0", distance: 140 },
      { ra: 14.5, dec: -18.5, magnitude: 2.9, spectralType: "K5", distance: 148 },
      { ra: 14.8, dec: -18.0, magnitude: 3.2, spectralType: "M0", distance: 140 },
      { ra: 14.5, dec: -20.0, magnitude: 3.1, spectralType: "K7", distance: 142 },
      { ra: 14.45, dec: -14.2, magnitude: 3.5, spectralType: "G8", distance: 135 },
      { ra: 14.55, dec: -14.2, magnitude: 3.5, spectralType: "G8", distance: 135 },
    ],
    connections: [
      [7, 0],
      [8, 0],
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 5],
      [3, 4],
      [5, 4],
      [4, 6],
    ],
    story:
      "Sweet as the fruit it resembles, this constellation was placed in the heavens to remind you of all the sweet moments we share. Like a strawberry, our love is delicate, beautiful, and absolutely delicious. You're the sweetest part of my life.",
    isEasterEgg: true,
  },
  {
    id: "octans",
    name: "Octans",
    stars: [
      { name: "Nu Oct", ra: 21.69, dec: -77.39, magnitude: 3.76, spectralType: "K0", distance: 69 },
      { ra: 22.77, dec: -81.38, magnitude: 4.31, spectralType: "K2", distance: 140 },
      { ra: 14.45, dec: -83.67, magnitude: 4.78, spectralType: "K1", distance: 305 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The octant navigates by the southern pole. Love is our navigation tool, helping us find our way through life's journey together.",
  },
  {
    id: "triangulum",
    name: "Triangulum",
    stars: [
      { name: "Beta Tri", ra: 2.16, dec: 34.99, magnitude: 3.0, spectralType: "A5", distance: 127 },
      { name: "Alpha Tri", ra: 1.88, dec: 29.58, magnitude: 3.41, spectralType: "F6", distance: 64 },
      { ra: 2.29, dec: 33.85, magnitude: 4.01, spectralType: "A2", distance: 112 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    story:
      "Three points form the strongest shape. You, me, and our love—three elements that create something unbreakable.",
  },
  {
    id: "triangulum-australe",
    name: "Triangulum Australe",
    stars: [
      { name: "Atria", ra: 16.81, dec: -69.03, magnitude: 1.91, spectralType: "K2", distance: 415 },
      { ra: 15.92, dec: -63.43, magnitude: 2.85, spectralType: "F1", distance: 40 },
      { ra: 17.71, dec: -68.68, magnitude: 2.89, spectralType: "A0", distance: 183 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    story: "The southern triangle mirrors its northern twin. Love creates symmetry, balance, and harmony in our lives.",
  },
  {
    id: "circinus",
    name: "Circinus",
    stars: [
      { name: "Alpha Cir", ra: 14.71, dec: -64.98, magnitude: 3.19, spectralType: "F1", distance: 54 },
      { ra: 15.29, dec: -59.32, magnitude: 4.07, spectralType: "A3", distance: 151 },
      { ra: 15.39, dec: -58.8, magnitude: 4.51, spectralType: "B5", distance: 1509 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The compass draws perfect circles. Love is our center point, and everything we do revolves around it in perfect harmony.",
  },
  {
    id: "norma",
    name: "Norma",
    stars: [
      { name: "Gamma2 Nor", ra: 16.33, dec: -50.16, magnitude: 4.02, spectralType: "K0", distance: 127 },
      { ra: 16.46, dec: -45.17, magnitude: 4.47, spectralType: "G8", distance: 122 },
      { ra: 15.98, dec: -47.55, magnitude: 4.63, spectralType: "A7", distance: 139 },
    ],
    connections: [
      [0, 1],
      [0, 2],
    ],
    story:
      "The carpenter's square ensures everything is true and right. Love is our measure of what's right, our standard for living well.",
  },
  {
    id: "lupus",
    name: "Lupus",
    stars: [
      { name: "Alpha Lup", ra: 14.7, dec: -47.39, magnitude: 2.3, spectralType: "B1", distance: 548 },
      { ra: 14.98, dec: -43.13, magnitude: 2.68, spectralType: "B2", distance: 383 },
      { ra: 15.35, dec: -44.69, magnitude: 2.78, spectralType: "B3", distance: 493 },
      { ra: 15.58, dec: -33.63, magnitude: 3.37, spectralType: "B2", distance: 567 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    story:
      "The wolf is loyal to its pack. Love creates our pack, our family, the ones we protect and cherish above all others.",
  },
  {
    id: "ophiuchus",
    name: "Ophiuchus",
    stars: [
      { name: "Rasalhague", ra: 17.58, dec: 12.56, magnitude: 2.08, spectralType: "A5", distance: 47 },
      { name: "Sabik", ra: 17.17, dec: -15.72, magnitude: 2.43, spectralType: "A2", distance: 84 },
      { name: "Yed Prior", ra: 16.24, dec: -3.69, magnitude: 2.74, spectralType: "M0", distance: 170 },
      { ra: 17.72, dec: 4.57, magnitude: 2.77, spectralType: "K2", distance: 170 },
    ],
    connections: [
      [0, 3],
      [3, 2],
      [2, 1],
    ],
    story:
      "The serpent bearer holds the snake of healing. Love heals our wounds, mends our broken parts, makes us whole again.",
  },
  {
    id: "serpens",
    name: "Serpens",
    stars: [
      { name: "Unukalhai", ra: 15.74, dec: 6.43, magnitude: 2.65, spectralType: "K2", distance: 74 },
      { ra: 15.58, dec: 15.42, magnitude: 3.67, spectralType: "A2", distance: 132 },
      { ra: 18.94, dec: -2.9, magnitude: 3.26, spectralType: "A0", distance: 70 },
      { ra: 18.35, dec: -3.0, magnitude: 3.54, spectralType: "K2", distance: 192 },
    ],
    connections: [
      [1, 0],
      [2, 3],
    ],
    story:
      "The serpent represents wisdom and renewal. Love makes us wise, teaching us lessons we could learn no other way.",
  },
  {
    id: "sagitta",
    name: "Sagitta",
    stars: [
      { name: "Gamma Sge", ra: 19.98, dec: 19.49, magnitude: 3.47, spectralType: "M0", distance: 274 },
      { ra: 19.67, dec: 17.48, magnitude: 3.51, spectralType: "G1", distance: 473 },
      { ra: 20.0, dec: 18.01, magnitude: 3.82, spectralType: "F8", distance: 159 },
    ],
    connections: [
      [1, 0],
      [0, 2],
    ],
    story:
      "Cupid's arrow flies straight and true. When love strikes, it transforms us completely, and we are never the same again.",
  },
  {
    id: "vulpecula",
    name: "Vulpecula",
    stars: [
      { name: "Anser", ra: 19.48, dec: 24.67, magnitude: 4.44, spectralType: "M0", distance: 297 },
      { ra: 20.28, dec: 27.82, magnitude: 5.18, spectralType: "K1", distance: 400 },
      { ra: 19.27, dec: 21.39, magnitude: 5.82, spectralType: "A3", distance: 490 },
    ],
    connections: [
      [0, 1],
      [0, 2],
    ],
    story:
      "The little fox is clever and adaptable. Love requires cleverness too—finding creative ways to show we care, to solve problems together.",
  },
   {
    id: "owl",
    name: "The Owl",
    stars: [
      { ra: 3.2, dec: 58.0, magnitude: 2.7, spectralType: "F5", distance: 165 },
      { ra: 3.5, dec: 58.0, magnitude: 2.7, spectralType: "F5", distance: 165 },
      { ra: 3.15, dec: 56.5, magnitude: 3.1, spectralType: "G0", distance: 170 },
      { ra: 3.55, dec: 56.5, magnitude: 3.1, spectralType: "G0", distance: 170 },
      { ra: 3.35, dec: 55.5, magnitude: 2.9, spectralType: "F8", distance: 168 },
      { ra: 3.1, dec: 54.5, magnitude: 3.2, spectralType: "G2", distance: 172 },
      { ra: 3.6, dec: 54.5, magnitude: 3.2, spectralType: "G2", distance: 172 },
      { ra: 3.35, dec: 53.0, magnitude: 3.0, spectralType: "F7", distance: 169 },
    ],
    connections: [
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 4],
      [2, 5],
      [3, 6],
      [5, 7],
      [6, 7],
    ],
    story:
      "Wise, watchful and super clingy my baby strawberry. You are my guiding light.",
    isEasterEgg: true,
  },
  {
    id: "equuleus",
    name: "Equuleus",
    stars: [
      { name: "Kitalpha", ra: 21.26, dec: 5.25, magnitude: 3.92, spectralType: "G0", distance: 186 },
      { ra: 21.24, dec: 10.13, magnitude: 4.49, spectralType: "A3", distance: 59 },
    ],
    connections: [[0, 1]],
    story:
      "The little horse represents youth and energy. Love keeps us young at heart, full of energy and enthusiasm for life.",
  },
  {
    id: "lacerta",
    name: "Lacerta",
    stars: [
      { name: "Alpha Lac", ra: 22.52, dec: 50.28, magnitude: 3.77, spectralType: "A1", distance: 102 },
      { ra: 22.39, dec: 52.23, magnitude: 4.36, spectralType: "K3", distance: 170 },
      { ra: 22.49, dec: 47.71, magnitude: 4.57, spectralType: "B2", distance: 1140 },
    ],
    connections: [
      [1, 0],
      [0, 2],
    ],
    story:
      "The lizard adapts and survives. Love gives us resilience, the ability to adapt to any circumstance as long as we're together.",
  },
  {
    id: "monoceros",
    name: "Monoceros",
    stars: [
      { name: "Beta Mon", ra: 6.48, dec: -7.03, magnitude: 3.76, spectralType: "B3", distance: 690 },
      { ra: 6.24, dec: -6.27, magnitude: 3.93, spectralType: "K0", distance: 144 },
      { ra: 7.69, dec: -9.55, magnitude: 3.98, spectralType: "K0", distance: 375 },
    ],
    connections: [
      [0, 1],
      [0, 2],
    ],
    story:
      "The unicorn is rare and magical. True love is rare too, a magical gift that few are fortunate enough to find.",
  },
  {
    id: "lynx",
    name: "Lynx",
    stars: [
      { name: "Alpha Lyn", ra: 9.35, dec: 34.39, magnitude: 3.13, spectralType: "K7", distance: 203 },
      { ra: 9.32, dec: 43.19, magnitude: 4.25, spectralType: "A2", distance: 228 },
      { ra: 6.89, dec: 59.01, magnitude: 4.35, spectralType: "K0", distance: 160 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The lynx has keen eyes that see what others miss. Love helps us see the hidden beauty in each other, the qualities others overlook.",
  },
  {
    id: "camelopardalis",
    name: "Camelopardalis",
    stars: [
      { name: "Beta Cam", ra: 5.06, dec: 60.44, magnitude: 4.03, spectralType: "G1", distance: 870 },
      { ra: 4.95, dec: 66.34, magnitude: 4.47, spectralType: "A0", distance: 300 },
      { ra: 3.84, dec: 71.33, magnitude: 4.63, spectralType: "B9", distance: 910 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The giraffe reaches high into the trees. Love helps us reach higher, to aspire to be better, to achieve more together than alone.",
  },
  {
    id: "canes-venatici",
    name: "Canes Venatici",
    stars: [
      { name: "Cor Caroli", ra: 12.93, dec: 38.32, magnitude: 2.9, spectralType: "A0", distance: 110 },
      { name: "Chara", ra: 12.56, dec: 41.36, magnitude: 4.26, spectralType: "G0", distance: 27 },
    ],
    connections: [[0, 1]],
    story:
      "The hunting dogs are loyal companions. Love is companionship, the joy of having someone by your side through every adventure.",
  },
  {
    id: "coma-berenices",
    name: "Coma Berenices",
    stars: [
      { name: "Beta Com", ra: 13.2, dec: 27.88, magnitude: 4.26, spectralType: "G0", distance: 30 },
      { ra: 13.17, dec: 17.53, magnitude: 4.32, spectralType: "F5", distance: 58 },
      { ra: 12.45, dec: 28.27, magnitude: 4.36, spectralType: "A3", distance: 47 },
    ],
    connections: [
      [0, 1],
      [0, 2],
    ],
    story:
      "Berenice's hair was sacrificed for love. Sometimes love asks us to give up something precious, and we do so gladly.",
  },
  {
    id: "leo-minor",
    name: "Leo Minor",
    stars: [
      { name: "Praecipua", ra: 10.88, dec: 34.21, magnitude: 3.83, spectralType: "K0", distance: 98 },
      { ra: 10.28, dec: 36.71, magnitude: 4.48, spectralType: "G8", distance: 145 },
      { ra: 9.56, dec: 35.24, magnitude: 5.37, spectralType: "A7", distance: 92 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The little lion has the same brave heart as its larger cousin. Love doesn't need to be grand to be powerful—small acts of love matter most.",
  },
  {
    id: "sextans",
    name: "Sextans",
    stars: [
      { name: "Alpha Sex", ra: 10.13, dec: -0.37, magnitude: 4.49, spectralType: "A0", distance: 287 },
      { ra: 10.5, dec: -2.74, magnitude: 5.05, spectralType: "B6", distance: 345 },
      { ra: 9.88, dec: -8.1, magnitude: 5.24, spectralType: "A0", distance: 261 },
    ],
    connections: [
      [0, 1],
      [1, 2],
    ],
    story:
      "The sextant measures angles and distances. Love helps us find perspective, to see things from each other's point of view.",
  },
  {
    id: "antlia",
    name: "Antlia",
    stars: [
      { name: "Alpha Ant", ra: 10.45, dec: -31.07, magnitude: 4.25, spectralType: "K4", distance: 366 },
      { ra: 9.49, dec: -35.95, magnitude: 4.6, spectralType: "K3", distance: 318 },
      { ra: 10.95, dec: -37.14, magnitude: 4.79, spectralType: "A0", distance: 262 },
    ],
    connections: [
      [0, 1],
      [0, 2],
    ],
    story:
      "The air pump brings life-giving breath. Love is the breath of life, the force that animates and sustains us.",
  },
  {
    id: "pyxis",
    name: "Pyxis",
    stars: [
      { name: "Alpha Pyx", ra: 8.73, dec: -33.19, magnitude: 3.68, spectralType: "B1", distance: 845 },
      { ra: 8.67, dec: -35.31, magnitude: 3.97, spectralType: "K4", distance: 420 },
      { ra: 9.21, dec: -25.97, magnitude: 4.01, spectralType: "K5", distance: 209 },
    ],
    connections: [
      [0, 1],
      [0, 2],
    ],
    story:
      "The compass box holds the navigator's most precious tool. Love is our most precious possession, guiding us through life's journey.",
  },
 
  
 
]
