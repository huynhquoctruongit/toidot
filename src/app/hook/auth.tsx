"use client";
import useSWR from "swr";
import { removeCookie, setCookie } from "react-use-cookie";
import { useToast } from "@/context/toast";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export function useAuth(options?: any) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/users/me?fields=*,role.*", {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    shouldRetryOnError: false,
    ...options,
  });
  const [userInfo, setUserInfo]: any = useLocalStorage("userInfo", {});

  async function login() {
    await mutate();
  }
  async function logout() {
    try {
      window.location.href = "/";
    } catch (error) {}
    // await mutate(null as any, false);
  }
  const firstLoading = profile === undefined && error === undefined;
  const profileObj = profile?.data?.data || {};

  useEffect(() => {
    if (!userInfo.id || (userInfo.id && userInfo.id !== profileObj.id)) {
      setUserInfo({
        id: profileObj.id,
        email: profileObj.email,
        fullname: profileObj.fullname,
        role: profileObj.role,
      });
    }
  }, [profileObj.id]);

  return {
    isLogin: firstLoading ? null : profile ? true : false,
    profile: {
      ...profileObj,
      roleName: profileObj.role?.name || "",
      fullname: profileObj.fullname || profileObj.first_name + " " + profileObj.last_name,
    },
    error,
    login,
    logout,
    getProfile: mutate,
    mutate: mutate,
    firstLoading,
    data: profile?.data,
  };
}
