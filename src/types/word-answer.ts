import { IWord } from "./word";

export type IWordAnswer = {
  answer: string;
  correct: boolean;
  date_created: string;
  date_updated: string;
  extra: string;
  id: number;
  sort: string;
  status: string;
  user_created: string;
  user_updated: string;
  word: IWord;
};
