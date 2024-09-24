"use client";
import Spin from "@/components/common/spin";
import LearningTopic from "@/components/sections/learning-collection/learning-topic/learning-topic";
import AxiosClient from "@/lib/api/axios-client";
import useSWR from "swr";

export default function BasicTopicPage({ params }: { params: { id: any } }) {
  const { id } = params;

  const { data: topics, isLoading: loadingTopics } = useSWR(
    `/items/topic?fields=*.*&filter[collection][_eq]=${id}`,
  );

  const { data: collections, isLoading: loadingCollections } = useSWR(
    `/items/collection?fields=*.*&filter[id][_eq]=${id}`,
  );

  if (loadingTopics || loadingCollections) return <Spin />;

  return (
    <LearningTopic
      topics={topics.data}
      collections={collections.data}
      idCollection={id}
    />
  );
}
