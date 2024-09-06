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

const background = {
  backgroundImage: `url("/images/image 12.png")`,
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
};

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

      <body
        className={"relative min-h-screen " + spaceMono.className}
        style={background}
      >
        <UserClient>{children}</UserClient>
      </body>
    </html>
  );
}
