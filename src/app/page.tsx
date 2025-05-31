/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Banner from "@/components/homePage/Banner";
import Certificates from "@/components/homePage/Certificates";
import Contact from "@/components/homePage/Contact";
import Projects from "@/components/homePage/Projects";
import Skill from "@/components/homePage/Skill";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);
  return (
    <div>
      <Banner />
      <Skill />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}
