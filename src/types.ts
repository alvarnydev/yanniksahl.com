export type WorkScope = "business" | "software" | "music";

export interface Degree {
  title: string;
  image: string;
  when: string;
  where: string;
  special: string;
  grade: string;
}

export interface Experience {
  role: string;
  when: string;
  where: string;
  company: string;
  description: string;
}

export interface Skill {
  field: string;
  fieldSkill: {
    name: string;
    icon: string;
  }[];
}
