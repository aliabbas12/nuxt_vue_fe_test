export interface Language {
  name: string;
  code: string;
  iso: string;
  file: string;
}

export const SystemLanguages: Language[] = [
  {
    name: "Italiano",
    code: "it",
    iso: "it-IT",
    file: "it-IT.ts",
  },
  {
    name: "English",
    code: "en",
    iso: "en-US",
    file: "en-US.ts",
  },
  {
    name: "Spanish",
    code: "es",
    iso: "es-ES",
    file: "es-ES.ts",
  },
];
