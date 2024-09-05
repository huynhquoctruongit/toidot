"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../common/button";

import Register from "../sections/auth/register";
import Login from "../sections/auth/login";
import { useBoolean } from "@/app/hook/use-boolean";
import ButtonSpotlight from "../common/button-spotlight";

const Header = () => {
  const [active, setActive] = useState(false);

  const login = useBoolean();
  const register = useBoolean();

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 5000);
  }, []);

  return (
    <>
      <header className="container mx-auto flex w-full items-center py-3">
        <div className="relative flex size-full items-center justify-between">
          <Link href="/" className="logo-item">
            <Image
              src="/images/Group 161.png"
              alt="logo"
              width={166}
              height={44}
              priority
              quality={100}
              className="object-cover"
            />
          </Link>

          {!active && (
            <div className="auth-login-register text-black">
              <Button
                type="button"
                className="rounded-md bg-[#2B2B2B] bg-opacity-10 text-[14px]"
                onClick={() => {
                  register.onTrue();
                }}
              >
                <div className="text-black">Đăng ký</div>
              </Button>

              <Button
                type="button"
                className="ml-3 rounded-md bg-[#2B2B2B] bg-opacity-10 text-[14px]"
                onClick={() => {
                  login.onTrue();
                }}
              >
                <div className="text-black">Đăng nhập</div>
              </Button>
            </div>
          )}

          {active && (
            <div className="publish-BEM-icon flex items-center">
              <ButtonSpotlight
                type="button"
                color="gradientPrimary"
                pill="roundedFull"
                className="text-white"
                spaceSide="space"
              >
                BEM TỪ VỰNG
                <div className="absolute -right-1 -top-2 flex size-6 items-center justify-center rounded-full bg-white shadow">
                  <div className="w-fit text-[10px] text-black">99+</div>
                </div>
              </ButtonSpotlight>

              <div className="img ml-9">
                <Image
                  src="/images/Group 163.png"
                  alt="logo"
                  width={36}
                  height={39}
                  priority
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </header>
      <Register
        isOpen={register.value}
        setOpen={() => {
          register.onFalse();
        }}
      />
      <Login
        isOpen={login.value}
        setOpen={() => {
          login.onFalse();
        }}
      />
    </>
  );
};

export default Header;
