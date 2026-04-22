export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  badge?: string;
  tags?: string[];
  url?: string;
  repo?: string;
};
