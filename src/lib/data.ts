import portfolioData from "@/data/portfolio-data.json";

export const portfolio = portfolioData;

export type Project = typeof portfolioData.projects[0];
export type Profile = typeof portfolioData.profile;
export type Experience = typeof portfolioData.experience[0];
export type Skill = typeof portfolioData.skills[0];
