"use client";

import { useEffect, useRef } from "react";
import styles from "./Preloader.module.css";
import gsap from "gsap";

const Preloader = () => {
  const containRef = useRef(null);

  useEffect(() => {
    gsap.to(containRef.current, {
      y: "-100%",
      duration: 1,
      delay: 3,
      ease: "power2.out",
    });
  }, []);

  return (
    <svg ref={containRef} className={styles.container}>
      <text
        x="50%"
        y="50%"
        className={styles.text}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        Muin
      </text>
    </svg>
  );
};

export default Preloader;
