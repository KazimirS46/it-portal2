export type SlidesSolutionsData = {
  id: number;
  imageUrl: string;
  logoUrl: string;
  title: string;
  description: string;
  info: string;
};

export type SolutionsData = {
  id: number;
  title: string;
  linkName: string;
  path: string;
  slides: SlidesSolutionsData[];
};

export type DeveloperTags = {
  id: number;
  title: string;
};
export type DeveloperCompany = {
  id: number;
  logoUrl: string;
  title: string;
  description: string;
  tags: DeveloperTags[];
};

export type DeveloperData = {
  title: string;
  company: DeveloperCompany[];
};
