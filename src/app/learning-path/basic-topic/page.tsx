import BasicTopic from "@/components/sections/learning-path/basic-topic/basic-topic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chủ đề cơ bản",
  description: "Chủ đề cơ bản",
  keywords: "Chủ đề cơ bản",
};

export default function BasicTopicPage() {
  return <BasicTopic />;
}
