"use client";
import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import { IProject } from "@/types/project";
import Image from "next/image";
import Icon from "../../assets/right-up.png";
import { useRouter } from "next/navigation";

const Projects = () => {
  const [data, setData] = useState<IProject[] | []>([]);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  const router = useRouter()
  const handleRedirect = (id: string) => {
    router.push(`/projects/${id}`)
  }
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, url:string) => {
    e.stopPropagation();
    window.open(url, "_blank");
  }
  return (
    <Container>
      <div className="pb-20">
        <h1 className="text-4xl pb-1 text-gray-800 font-[600] border-b border-gray-200 ">
          Projects<span className="text-[#ff652f]">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 md:pt-14">
          {data?.map((singleData) => (
            <div
            onClick={() => handleRedirect(singleData.id)}
              className="border cursor-pointer hover:scale-105 border-gray-300 hover:border-[#ff652f] transition duration-700 select-none rounded-xl p-4 bg-gray-50"
              key={singleData?.id}
            >
              <div className="h-[210px] overflow-hidden rounded-xl">
                <Image
                  className="w-full object-cover"
                  src={singleData?.image}
                  height={500}
                  width={500}
                  alt="project id"
                />
              </div>
              <div className="mt-2">
                <p className="text-gray-600 font-[600] text-sm">
                  {singleData.slug}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-xl font-[600] text-gray-700">
                    {singleData.title}
                  </h1>
                  <button onClick={(e) => handleButtonClick(e, singleData.liveLink)} className="px-2 flex py-1 cursor-pointer leading-none rounded-full border group relative">
                    <span className="relative  inline-flex overflow-hidden">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-6">
                        <Image src={Icon} alt="icon" height={20} width={20} />
                      </div>
                      <div className="absolute translate-y-[114%] skew-y-6 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                        <Image src={Icon} alt="icon" height={20} width={20} />
                      </div>
                    </span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                {/* "Next.js", "Tailwind", "Node.js", "TypeScript", "Express", "MongoDB" */}
                  {singleData.technologies.map((tech, index) => (
                    <span
                      className="px-2 font-[600] text-gray-500 leading-none py-1 text-[12px] rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
