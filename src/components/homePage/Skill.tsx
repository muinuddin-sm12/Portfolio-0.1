"use client";
import React from "react";
import Container from "../shared/Container";
import StackIcon from "tech-stack-icons";
const frontEndStack = [
  "html5",
  "css3",
  "tailwindcss",
  "reactjs",
  "js",
  "redux",
  "nextjs2",
];
const beckEndStack = [
  "nodejs",
  "mongodb",
  "mongoose",
  "firebase",
  "typescript",
];
const tools = ["postman", "ps", "github", "figma", "vercel"];

const Skill = () => {
  return (
    <Container>
      <div className="pb-20 pt-6 md:pt-0">
        <h1 className="text-4xl text-gray-800 font-[600] pb-1 border-b border-gray-200">
          Skills<span className="text-[#ff652f]">.</span>
        </h1>
        <div className="pt-8 md:pt-14 ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="pb-6 relative rounded-xl bg-gray-50 flex justify-center items-start">
              <p className="px-2 text-[12px] absolute top-2 left-2 py-1 text-sm rounded-md bg-orange-100">
                Front-end
              </p>
              <div className="grid grid-cols-4 gap-4 justify-center items-center mt-14">
                {frontEndStack.map((item, index) => (
                  <StackIcon className="size-10 " key={index} name={item} />
                ))}
              </div>
            </div>
            <div className="pb-6 relative rounded-xl bg-gray-50 flex justify-center items-start">
              <p className="px-2 text-[12px] absolute top-2 left-2 py-1 text-sm rounded-md bg-sky-100">
                Beck-end
              </p>
              <div className="grid grid-cols-4 gap-4 justify-center items-center mt-14">
                {beckEndStack.map((item, index) => (
                  <StackIcon className="size-10 " key={index} name={item} />
                ))}
              </div>
            </div>
            <div className="pb-6 relative rounded-xl bg-gray-50 flex justify-center items-start">
              <p className="px-2 absolute top-2 left-2 py-1 text-[12px] rounded-md bg-sky-100">
                Tools
              </p>
              <div className="grid grid-cols-4 gap-4 justify-center items-center mt-14">
                {tools.map((item, index) => (
                  <StackIcon className="size-10 " key={index} name={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skill;
