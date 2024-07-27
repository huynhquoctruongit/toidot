import UserClient from "@/components/layouts/wrap";
import { Nunito } from "next/font/google";
import "swiper/scss";
import "swiper/scss/navigation";
import "./globals.css";
import "dayjs/locale/vi";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="dmca-site-verification" content="NUFqcGhVQnIydkorSWtjZm9KajdHdz090" />
      </head>
      <body className={nunito.className}>
        <UserClient>{children}</UserClient>
      </body>
    </html>
  );
}
