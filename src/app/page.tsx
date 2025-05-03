// import Image from "next/image";

// import AboutMe from "@/components/homePage/AboutMe";
import Banner from "@/components/homePage/Banner";
import Contact from "@/components/homePage/Contact";
import Projects from "@/components/homePage/Projects";
import Skill from "@/components/homePage/Skill";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Banner/>
      {/* <AboutMe/> */}
      <Skill/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}
