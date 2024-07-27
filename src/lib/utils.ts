import { type ClassValue, clsx } from "clsx";
import { setCookie } from "react-use-cookie";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currency = (price: number) => {
  if (!price) return 0;
  return new Intl.NumberFormat().format(price);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const setAccessToken = (access_token: string, expires: number) => {
  const isLocal = window.location.hostname === "localhost";
  setCookie("auth_token", access_token, {
    days: 1000,
    // domain: getHostname(location.href),
    SameSite: "Lax",
    Secure: true,
  });
  if (isLocal)
    setCookie("auth_token", access_token, {
      days: Math.floor(expires / 60 / 60 / 24),
      domain: window.location.hostname,
      SameSite: "Lax",
      Secure: true,
    });
};

