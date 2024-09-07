import { ICollection } from "./collection";

export type ITopic = {
  collection: ICollection;
  date_created: string;
  date_updated: string;
  description: string;
  id: number;
  sort: string;
  status: string;
  thumbnail: string;
  title: string;
  user_created: string;
  user_updated: string;
};
