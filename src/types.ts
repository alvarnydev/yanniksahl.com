import type { StringMappingType } from "typescript";
import type { iconPaths } from "./components/IconPaths";

export type WorkScope = "design" | "software" | "music";

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
  description: string;
  fieldSkill: {
    name: string;
    link: string;
    xp: number;
    color: string;
    icon: keyof typeof iconPaths;
  }[];
}
