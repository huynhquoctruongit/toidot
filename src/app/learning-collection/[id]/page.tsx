import LearningTopic from "@/components/sections/learning-collection/learning-topic/learning-topic";
import AxiosClient from "@/lib/api/axios-client";
import { ICollection } from "@/types/collection";
import { ITopic } from "@/types/topic";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chủ đề cơ bản",
  description: "Chủ đề cơ bản",
  keywords: "Chủ đề cơ bản",
};

export default async function BasicTopicPage({
  params,
}: {
  params: { id: any };
}) {
  const { id } = params;

  const topics: ITopic[] = await AxiosClient.get(
    `/items/topic?fields=*.*&filter[collection][_eq]=${id}`,
  );

  const collection: ICollection[] = await AxiosClient.get(
    `/items/collection?fields=*.*&filter[id][_eq]=${id}`,
  );

  return <LearningTopic topics={topics} collection={collection} />;
}
