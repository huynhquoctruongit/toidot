import React from "react";
import { Metadata } from "next";
import SectionLearningCollection from "@/components/sections/learning-collection/section-learning-collection";
import AxiosClient from "@/lib/api/axios-client";

export const metadata: Metadata = {
  title: "Lộ trình học",
  description: "Lộ trình học",
  keywords: "Lộ trình học",
};

export default async function LearningPathPage() {
  const collection = await AxiosClient.get("/items/collection?fields=*");

  return <SectionLearningCollection collection={collection.data} />;
}

export const revalidate = 3600;
