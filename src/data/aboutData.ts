import aboutDataJson from "./aboutData.json";

export interface Skill {
  category: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  logo: string;
  role: string;
  responsibilities: string[];
  startDate: string;
  endDate: string;
}

export interface AboutData {
  skills: Skill[];
  experienceData: Experience[];
  badgeColors: string[];
}

export const aboutData: AboutData = aboutDataJson as AboutData;
