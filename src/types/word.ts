import { ITopic } from "./topic";

export type IWord = {
  be_difficult: string;
  be_popular: boolean;
  date_created: string;
  date_updated: string;
  example_sentences: ExampleSentences[];
  id: number;
  image: string;
  meanings: string;
  part_of_speech: string;
  pronunciation: string;
  sort: string;
  status: string;
  title: string;
  topic: ITopic;
  user_created: string;
  user_updated: string;
};

type ExampleSentences = {
  en: string;
  vi: string;
};
