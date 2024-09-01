"use client";
import { fetcherClient } from "@/lib/api/axios-client";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import Footer from "../share-layout/footer";
import ToastProvider from "../../context/toast";
import Header from "../share-layout/header";
import {
  BookOpen,
  BookType,
  BoomBox,
  LockOpen,
  NotebookText,
} from "lucide-react";

const Wrap = ({ children }: any) => {
  useEffect(() => {
    const getHeight = () => {
      const innerHeight = window.innerHeight;
      const clientHeight = document.documentElement.clientHeight;
      const height = Math.max(innerHeight, clientHeight);
      document.documentElement.style.setProperty(
        "--height-screen",
        `${height}px`,
      );
    };
    window.addEventListener("resize", getHeight);
    getHeight();
  }, []);

  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        fetcher: fetcherClient,
        errorRetryCount: 3,
      }}
    >
      <ToastProvider>
        <Header />
        <div className="relative z-[1] h-[calc(100%-120px)]">{children}</div>
        <div className="icon-see absolute left-2/4 top-2/4 h-[719px] w-[910px] -translate-x-2/4 -translate-y-2/4">
          <div className="icon relative size-full">
            <div className="absolute left-0 top-0">
              <BoomBox className="size-20 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
            </div>
            <div className="absolute right-[20%] top-0">
              <BookOpen className="size-20 rotate-45 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
            </div>
            <div className="absolute bottom-0 left-0">
              <BookType className="size-16 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
            </div>
            <div className="absolute bottom-0 right-0">
              <BoomBox className="size-20 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
            </div>

            <div className="absolute left-[20%] top-2/4">
              <NotebookText className="size-11 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
            </div>

            <div className="absolute right-[10%] top-1/4">
              <LockOpen className="size-11 bg-transparent stroke-[0.4] text-[#000000] opacity-10" />
            </div>
          </div>
        </div>
        <Footer />
      </ToastProvider>
    </SWRConfig>
  );
};

export default Wrap;
