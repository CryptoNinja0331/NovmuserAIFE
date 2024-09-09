"use client";

import React from "react";
import SectionBubble from "../SectionBubble";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { useInView } from "react-intersection-observer";
import { Styles } from "@/app/styles";

const AboutContent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="absolute flex flex-col justify-center top-0 w-full h-full z-20 px-[54px] py-[36px]"
    >
      <div className="flex flex-col px-[20px] py-[20px] gap-[16px] w-full h-auto">
        <motion.div variants={slideInFromTop(0.3)}>
          <SectionBubble variant="about" className="mb-6" />
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.3)}
          className={`${Styles.typography.homeSectionTitleText} max-w-[686px]`}
        >
          <span>
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">
              Novmuser AI
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft()}
          className={`${Styles.typography.homeDescriptionText} lg:max-w-[674px] md:max-w-[600px] max-w-[480px]`}
        >
          Novmuser AI gives writers the power of a simulated novel writing team,
          enhancing efficiency, creativity, and automating editing processes.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default React.memo(AboutContent);
