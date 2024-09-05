import UserClient from "@/components/layouts/wrap";
import { Nunito, Space_Mono } from "next/font/google";
import "swiper/scss";
import "swiper/scss/navigation";
import "./globals.css";
import "dayjs/locale/vi";
import Image from "next/image";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="dmca-site-verification"
          content="NUFqcGhVQnIydkorSWtjZm9KajdHdz090"
        />
      </head>

      <body className={"relative min-h-screen " + spaceMono.className}>
        <div className="absolute bottom-0 left-0 right-0 top-0 object-contain">
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
        <UserClient>{children}</UserClient>
      </body>
    </html>
  );
}
