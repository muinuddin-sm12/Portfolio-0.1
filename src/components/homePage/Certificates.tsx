"use client";

import React, { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Image from "next/image";
import Container from "../shared/Container";
import { ICertificate } from "@/types/project";
import CertificatesCard from "./CertificatesCard";

// Example certificate images (replace with your actual certificate URLs)
// const certificateImages = [
//   "/certificates/complete_web_development.jpg",
//   "/certificates/front_end_domination.jpg",
//   "/certificates/black_belt.png",
//   "/certificates/problem_solving_bootcamp.jpg",
//   "/certificates/web_development_bootcamp.jpg",
// ];

export default function Certificates() {
  const [data, setData] = useState<ICertificate[] | []>([]);
  useEffect(() => {
    fetch("/data/certificatesData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Container>
      <div className="pb-20">
        <h1 className="text-4xl pb-1 text-gray-800 font-[600] border-b border-gray-200 ">
          Certificates<span className="text-[#ff652f]">.</span>
        </h1>
        {/* <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-14">
          <Swiper
            className="my-swiper"
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {certificateImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl h-[280px]  overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ">
                  <Image
                    src={src}
                    height={300}
                    width={300}
                    alt={`Certificate ${index + 1}`}
                    className="h-full w-full bg-center object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        {data.map((certificate, index) => {
          return <CertificatesCard data={certificate} key={index} />;
        })}
      </div>
    </Container>
  );
}
