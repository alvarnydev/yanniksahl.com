import type { iconPaths } from "./components/IconPaths";
export const WorkScopes = ["design", "app", "experience"] as const;
export type WorkScope = (typeof WorkScopes)[number];
export const isWorkScope = (scope: string): scope is WorkScope =>
  WorkScopes.includes(scope as WorkScope);

export const ScopeIconMap: Record<WorkScope, keyof typeof iconPaths> = {
  design: "brush",
  app: "code",
  experience: "cube",
};

export interface Degree {
  title: string;
  image: string;
  when: string;
  where: string;
  special: string;
  grade?: string;
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
