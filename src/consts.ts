import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Douglas Luz",
  EMAIL: "hi@douglasluz.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Douglas Luz is a software engineer that loves build things.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "I write about all the things that I love. Not all programming related.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/dougluz"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/douguiluz",
  }
];
