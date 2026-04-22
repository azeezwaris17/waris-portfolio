export type Experience = {
  title: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  highlights?: string[];
  tech?: string[];
  badge?: string;
};

export type Education = {
  school: string;
  program: string;
  start: string;
  end: string;
  description?: string;
};
