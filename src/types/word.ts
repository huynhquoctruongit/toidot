import { ITopic } from "./topic";

export type IWord = {
  be_difficult: string;
  be_popular: boolean;
  date_created: string;
  date_updated: string;
  example_sentences: ExampleSentences[];
  id: number;
  image: {
    charset: string;
    description: string;
    duration: string;
    embed: string;
    filename_disk: string;
    filename_download: string;
    filesize: string;
    focal_point_x: string;
    focal_point_y: string;
    folder: string;
    height: string;
    id: string;
    location: string;
    metadata: {};
    modified_by: string;
    modified_on: string;
    storage: string;
    tags: string;
    title: string;
    type: string;
    uploaded_by: string;
    uploaded_on: string;
    width: number;
  };
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
