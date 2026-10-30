export type LegalItem = { type: "paragraph" | "bullet" | "subheading"; text: string };
export type LegalSection = { heading: string; items: LegalItem[] };
export type LegalDocument = { title: string; updated: string; sections: LegalSection[]; closing: string };
