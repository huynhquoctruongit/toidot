import React from "react";
import { Metadata } from "next";
import SectionLearningPath from "@/components/sections/learning-path/section-learning-path";
import AxiosClient from "@/lib/api/axios-client";

export const metadata: Metadata = {
  title: "Lộ trình học",
  description: "Lộ trình học",
  keywords: "Lộ trình học",
};

export default async function LearningPathPage() {
  const collection = (await AxiosClient.get("/items/collection?fields=*")).data;
  const word = (await AxiosClient.get("/items/word?fields=*")).data;

  return <SectionLearningPath collection={collection.data} word={word.data} />;
}
