export type slidesData = {
  id: number;
  imageUrl: string;
  logoUrl: string;
  title: string;
  description: string;
  info: string;
};

export type Data = {
  id: number;
  title: string;
  linkName: string;
  path: string;
  slides: slidesData[];
};
