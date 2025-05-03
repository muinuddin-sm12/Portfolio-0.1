"use client";
import { IProject } from "@/types/project";
import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import Image from "next/image";
import Icon from "../../assets/right-up.png";
import Github from "../../assets/github.png";
import { VscActivateBreakpoints } from "react-icons/vsc";

const ProjectDetails = ({ id }: { id: string }) => {
  const [data, setData] = useState<IProject | undefined>(undefined);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const specificData = data.find((d: IProject) => d.id === id);
        setData(specificData);
      });
  }, [id]);
  if (!data) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <Container>
      <div className="py-8">
        <div className="w-full h-[500px] rounded-3xl overflow-hidden bg-sky-100">
          <Image
            className="object-cover h-full"
            src={data.image}
            height={3000}
            width={3000}
            alt="project image"
          />
        </div>
        <div className="py-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-[600] text-gray-800">{data.title}</h1>
            <button className="px-2 flex py-2 cursor-pointer leading-none rounded-full border group relative">
              <span className="relative  inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-6">
                  <Image src={Icon} alt="icon" height={20} width={20} />
                </div>
                <div className="absolute translate-y-[114%] skew-y-6 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  <Image src={Icon} alt="icon" height={20} width={20} />
                </div>
              </span>
            </button>
            <button className="px-2 flex py-2 cursor-pointer leading-none rounded-full border group relative">
              <span className="relative  inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-6">
                  <Image src={Github} alt="icon" height={20} width={20} />
                </div>
                <div className="absolute translate-y-[114%] skew-y-6 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  <Image src={Github} alt="icon" height={20} width={20} />
                </div>
              </span>
            </button>
          </div>
          <p className="text-gray-600 leading-5">{data.overview}</p>
          <div className="pt-4">
            <h3 className="text-lg font-[600] text-gray-900">Features</h3>
            {data?.features?.map((feature, index) => (
              <span key={index} className="inline-flex leading-5 items-center gap-1 mr-4">
                <VscActivateBreakpoints className="text-[#ff652f]" />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetails;
