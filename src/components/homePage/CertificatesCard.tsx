"use client";
import { ICertificate } from "@/types/project";
import React, { useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import {motion, useScroll} from 'framer-motion';

const CertificatesCard = ({ data }: { data: ICertificate }) => {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  console.log(data.title);
  return (
    <div ref={container} className={styles.cardContainer}>
      <div style={{ backgroundColor: data.color }} className={styles.card}>
        <div className="flex gap-6 flex-col md:flex-row">
          <motion.div style={{opacity: scrollYProgress}} className="flex-1 h-[350px]">
            <Image
              src={data.image}
              height={600}
              width={600}
              className="h-full w-full object-cover rounded-2xl bg-center"
              alt="certificates"
            />
          </motion.div>
          <div className="flex-1">
            <h1 className="text-2xl">{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesCard;
