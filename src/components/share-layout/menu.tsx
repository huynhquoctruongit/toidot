"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { HTMLProps } from "react";
import useSWR from "swr";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/app/hook/auth";

const HrefLegacy = (props: HTMLProps<HTMLAnchorElement>) => {
  return <a {...props} />;
};
const MenuHeader = ({ onChangePageBrowsers, onChangePageMobile, IsLogin }: any) => {
  const { data: res } = useSWR(`/items/menu`);
  const parents = (res?.data?.data || []).filter((item: any) => item.parent === null);
 
  return (
    <>
      {parents.map((item: any, index: number) => {
        const Redirect = !item.link.includes("http") ? Link : HrefLegacy;
        return (
          <div key={item + index} className={""}>
            <div className={"flex flex-row items-center gap-10 cursor-pointer " + (!IsLogin && " max-w-[100px] ")}>
              <Browsers Redirect={Redirect} onChangePageBrowsers={onChangePageBrowsers} item={item} />
              <Mobile Redirect={Redirect} onChangePageMobile={onChangePageMobile} item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuHeader;

const Browsers = ({ onChangePageBrowsers, item, Redirect }: any) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const linkActive = pathname + (type ? "?type=" + type : "");
  const ac = linkActive === item.link || (item.link === "/" && linkActive === "/home");
  const enumLink: any = {
    "/search?type=listening": "ielts_listening_navigate_bar",
    "/search?type=reading": "ielts_reading_navigate_bar",
  };
  const { profile } = useAuth();
  const email = profile.email || "";

  return (
    <div className="xl:block hidden" onClick={sendTracking}>
      <Redirect href={item.link} onClick={onChangePageBrowsers} scroll={true}>
        <div className="flex items-center">
          <div
            className={cn(
              "flex gap-1 items-center duration-300 border-b-2 border-solidmy-1 border-transparent group" +
                (ac ? "border-b-2 border-solid border-primary1" : ""),
            )}
          >
            <p
              className={cn(
                "text-light-01 2xl:text-header-2xl xl:text-header sm:h6 text-button cursor-pointer py-1.5 group-hover:text-primary1 duration-300 " +
                  (ac ? " text-primary1" : ""),
              )}
            >
              {item.title}
            </p>
          </div>
          {item.special && (
            <p className="-translate-y-[10px] py-0.25 px-1 text-pastel-02 bg-purple-10 rounded-[20px] text-center text-[10px] font-bold leading-[18px] h-[18px]">
              Nổi bật
            </p>
          )}
        </div>
      </Redirect>
    </div>
  );
};

const Mobile = ({ onChangePageMobile, item, Redirect }: any) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const router = useRouter();
  const linkActive = pathname + (type ? "?type=" + type : "");
  const ac = linkActive === item.link;

  const enumLink: any = {
    "/search?type=listening": "ielts_listening_navigate_bar",
    "/search?type=reading": "ielts_reading_navigate_bar",
  };
  const { profile } = useAuth();
  const email = profile.email || "";
  const sendTracking = (item: any) => {
    amplitudeSendTrack(enumLink[item.link], { email: email });
  };
  return (
    <div className="block xl:hidden" onClick={sendTracking}>
      <Redirect href={item.link} onClick={onChangePageMobile} scroll={true}>
        <div className="flex gap-1 items-center">
          <p
            className={
              cn("text-light-01 2xl:text-header-2xl xl:text-header sm:h6 text-button cursor-pointer py-2.5 ") +
              (ac ? " text-primary1" : "")
            }
          >
            {item.title}
          </p>
          {item.special === true ? (
            <p className="-translate-y-[10px] py-0.5 px-1 text-pastel-02 bg-purple-10 rounded-[20px] text-center text-button-small h-[22px]">
              Nổi bật
            </p>
          ) : (
            ""
          )}
        </div>
      </Redirect>
    </div>
  );
};
