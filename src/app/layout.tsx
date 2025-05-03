import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Preloader from "@/components/Preloader/Preloader";
import Navbar from "@/components/shared/Navbar";

const nunito = Nunito({
  weight: ["200", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Muin's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased `}>
        <Toaster richColors position="top-center" />
        <Preloader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
