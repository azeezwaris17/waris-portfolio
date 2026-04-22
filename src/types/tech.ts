export type TechCategoryKey =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "data";

export type TechCategory = {
  key: TechCategoryKey;
  title: string;
  items: string[];
};
