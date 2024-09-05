import SectionHome from "@/components/sections/home/section-home";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tôi dốt",
  description: "Tôi dốt",
  keywords: "Tôi dốt",
};

export default function Home() {
  return <SectionHome />;
}
