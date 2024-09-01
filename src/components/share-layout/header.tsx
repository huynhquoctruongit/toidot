"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../common/button";

const Header = () => {
  const [active, setActive] = useState(false);
  const [login, setLogin] = useState();
  const [register, setRegister] = useState();

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 2000);
  }, []);

  console.log(active);

  return (
    <header className="container mx-auto h-[120px]">
      <div className="absolute left-0 top-0 z-[-1] size-full">
        <Image
          src="/images/image 12.png"
          alt="logo"
          width={1000}
          height={1000}
          priority
          quality={100}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative top-[17px] flex items-center justify-between">
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
            >
              <div className="text-black">Đăng ký</div>
            </Button>

            <Button
              type="button"
              className="ml-3 rounded-md bg-[#2B2B2B] bg-opacity-10 text-[14px]"
            >
              <div className="text-black">Đăng nhập</div>
            </Button>
          </div>
        )}

        {active && (
          <div className="publish-BEM-icon flex">
            <Button
              invert
              type="button"
              className="btn-bem relative text-white"
            >
              BEM TỪ VỰNG
              <div className="absolute -right-3 -top-2 flex size-6 items-center justify-center rounded-full bg-white shadow">
                <div className="text-[10px] text-black">99+</div>
              </div>
            </Button>

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
  );
};

export default Header;
