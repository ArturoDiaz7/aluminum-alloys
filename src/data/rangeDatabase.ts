export interface AlloyRange {
  ALEACION: string;
  "Al - min": number;
  "Al - max": number;
  "Mg - min": number;
  "Mg - max": number;
  "Zn - min": number;
  "Zn - max": number;
  "Mn - min": number;
  "Mn - max": number;
  "Cu - min": number;
  "Cu - max": number;
  "Fe - min": number;
  "Fe - max": number;
  "Si - min": number;
  "Si - max": number;
  "Ni - min": number;
  "Ni - max": number;
}

export const rangeDatabase: AlloyRange[] = [
  {
    ALEACION: "1030",
    "Al - min": 99.3,
    "Al - max": 100,
    "Mg - min": 0,
    "Mg - max": 0.05,
    "Zn - min": 0,
    "Zn - max": 0.1,
    "Mn - min": 0,
    "Mn - max": 0.05,
    "Cu - min": 0,
    "Cu - max": 0.1,
    "Fe - min": 0,
    "Fe - max": 0.6,
    "Si - min": 0,
    "Si - max": 0.35,
    "Ni - min": 0,
    "Ni - max": 0.01
  },
  // ... Add all other alloys from the range database
];