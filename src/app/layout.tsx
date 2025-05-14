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
  title: "Muin's Portfolio",
  description: "Muin's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pageRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   gsap.fromTo(
  //     pageRef.current,
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       duration: 1, // fade duration
  //       delay: 2, // wait 2 seconds before starting
  //       ease: "power2.out",
  //     }
  //   );
  // }, []);
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased relative`}>
        <Toaster richColors position="top-center" />
        <Preloader />
        <div className="sticky top-0 z-[999]">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
