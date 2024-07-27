"use client";
import { fetcherClient } from "@/lib/api/axios-client";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import Footer from "../share-layout/footer";
import ToastProvider from "../../context/toast";
import Header from "../share-layout/header";

const Wrap = ({ children }: any) => {

  useEffect(() => {
    const getHeight = () => {
      const innerHeight = window.innerHeight;
      const clientHeight = document.documentElement.clientHeight;
      const height = Math.max(innerHeight, clientHeight);
      document.documentElement.style.setProperty("--height-screen", `${height}px`);
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
        <div className="relative z-[1]">{children}</div>
        <Footer />
      </ToastProvider>
    </SWRConfig>
  );
};


export default Wrap;
