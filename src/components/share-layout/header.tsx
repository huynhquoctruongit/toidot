"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "../common/button";

const Header = () => {
  return (
    <header className="container mx-auto h-[161px]">
      <div className="absolute top-0 left-0 z-[-1] size-full ">
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

        <div className="auth-login-register">
          <Button
            type="button"
            invert
            className="bg-[#eaeaea] rounded-md text-[14px]"
          >
            Đăng ký
          </Button>
          <Button
            invert
            type="button"
            className="bg-[#eaeaea] ml-3 rounded-md text-[14px]"
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
