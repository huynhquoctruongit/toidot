import LearningTopic from "@/components/sections/learning-collection/learning-topic/learning-topic";
import AxiosClient from "@/lib/api/axios-client";
import axios from "axios";
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

  const topic = (
    await AxiosClient.get(
      `/items/topic?fields=*.*&filter[collection][_eq]=${id}`,
    )
  ).data;

  return <LearningTopic topic={topic.data} />;
}
