export interface AlloyView {
  ALEACION: string;
  AL: string;
  MG: string;
  ZN: string;
  MN: string;
  CU: string;
  FE: string;
  SI: string;
  NI: string;
}

export const viewDatabase: AlloyView[] = [
  {
    ALEACION: "1030",
    AL: "99.30 min",
    MG: "0.05 max",
    ZN: "0.10 max",
    MN: "0.05 max",
    CU: "0.10 max",
    FE: "0.60 max",
    SI: "0.35 max",
    NI: ""
  },
  // ... Add all other alloys from the view database
];