/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import MyImg from "../../assets/github-profile2.jpg"
import Container from "../shared/Container";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="w-full flex flex-col-reverse md:flex gap-10 md:flex-row-reverse items-center justify-center py-16 md:py-32 mt-16 md:mt-0">
          <div className="flex items-center justify-center">
            <div className="">
              <h4 className="text-[#ff652f]">Hi, my name is</h4>
              <h1 className="text-5xl font-bold ">Muin</h1>
              <h1 className="text-4xl text-gray-600 font-bold my-2">
                I build for the web.
              </h1>
              <p className="text-gray-400 leading-5 ">
                I'm a MERN Stack Developer passionate about <br />
                Software Engineering. Currently, I'm diving <br /> deep into
                Backend Technologies.
              </p>
            </div>
          </div>
          {/* image */}
          <div className="flex items-center justify-center">
            <div className="relative h-44 w-44  md:h-48 md:w-48 object-cover">
              <Image
                className="absolute w-full rounded-xl h-full duration-200 z-10"
                src={MyImg}
                height={200}
                width={200}
                alt="photo"
              />
              <div className="absolute border rounded-tr-xl border-[#ff652f] top-[-6px] right-[-6px] h-[50%] w-[50%]"></div>
              <div className="absolute border rounded-bl-xl border-gray-500 bottom-[-6px] left-[-6px] h-[50%] w-[50%]"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
