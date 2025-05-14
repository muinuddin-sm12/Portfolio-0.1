"use client";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";
import Container from "./Container";
import CV from "../../assets/cv.png";
// const menuItems = [
//   { _id: 1, name: "Home", path: "/" },
//   { _id: 3, name: "About", path: "/about" },
//   { _id: 3, name: "Skills", path: "/skills" },
//   { _id: 2, name: "Projects", path: "/projects" },
//   { _id: 2, name: "Blogs", path: "/blogs" },
//   { _id: 4, name: "Contact", path: "/contact" },
// ];
const Navbar = () => {

  return (
    <Container>
      <div className="flex items-center justify-between rounded-full px-4  bg-white shadow-md transition-transform duration-500 border-gray-100 ">
        <div className="h-12 w-12 md:h-16 md:w-16 overflow-hidden">
          <Link href={"/"}>
            <Image className="h-full w-full object-cover bg-center" src={logo} height={60} width={60} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center">
          {/* {menuItems.map((item) => (
            <Link className="ml-10 text-gray-500 hover:text-[#ff652f] transition duration-300 text-sm cursor-pointer" href={item.path} key={item._id}>
              {item.name}
            </Link>
          ))} */}
          <a
            href={"/Resume_Of_Muin.pdf"}
            rel="noopener noreferrer"
            target="_blank"
            className="px-4 py-2 flex items-center gap-1 bg-[#ff652f] hover:shadow-md transition duration-500 text-white rounded-full"
          >
            <Image src={CV} height={20} width={20} alt="cv-logo" />
            <span className="text-sm font-[600]">Resume</span>
          </a>
          {/* <button className="px-4 flex py-2 bg-gray-50 cursor-pointer leading-none rounded-full border border-gray-200 group relative">
            <span className="relative  inline-flex overflow-hidden">
              <div className="translate-y-0 text-sm text-gray-500 font-[600] skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-6">
                Resume
              </div>
              <div className="absolute text-sm text-gray-500 font-[600] translate-y-[114%] skew-y-6 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Resume
              </div>
            </span>
          </button> */}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
