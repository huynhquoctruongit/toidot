import UserClient from "@/components/layouts/wrap";
import { Nunito, Space_Mono } from "next/font/google";
import "swiper/scss";
import "swiper/scss/navigation";
import "./globals.css";
import "dayjs/locale/vi";

const spaceMono = Space_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
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
      <body
        className={"relative h-screen overflow-hidden " + spaceMono.className}
      >
        <UserClient>{children}</UserClient>
      </body>
    </html>
  );
}
