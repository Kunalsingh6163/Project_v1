"use client";
import { Inter } from "next/font/google";
import Appbar from "./component/appbar/Appbar";
import { usePathname } from "next/navigation";
import Footer from "./component/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const shouldShowHeaderAndFooter =
    pathName !== "/login" && pathName !== "/signup";

  return (
    <html lang="en">
      <body className={inter.className}>
        {shouldShowHeaderAndFooter && <Appbar />}
        {children}
        {shouldShowHeaderAndFooter && <Footer />}
      </body>
    </html>
  );
}
