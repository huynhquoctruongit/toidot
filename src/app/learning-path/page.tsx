import React from "react";
import { Metadata } from "next";
import SectionLearningPath from "@/components/sections/learning-path/section-learning-path";

export const metadata: Metadata = {
  title: "Lộ trình học",
  description: "Lộ trình học",
  keywords: "Lộ trình học",
};

export default function LearningPathPage() {
  return <SectionLearningPath />;
}
