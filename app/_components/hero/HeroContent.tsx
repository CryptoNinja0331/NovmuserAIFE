"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import { Styles } from "@/app/styles";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-row justify-between items-center w-full h-[762px] mt-[10%] z-[20] px-2"
    >
      <motion.div
        variants={slideInFromLeft()}
        className="h-full flex flex-col justify-end items-start"
      >
        <Image
          src={"/hero_left_image.svg"}
          alt="hero_left"
          width={692}
          height={566}
          className="w-full h-full max-w-[80%] max-h-[80%] opacity-50"
        />
      </motion.div>

      <div className="flex flex-col h-full pt-[72px]">
        <div className="flex flex-col gap-[20px] px-[20px] py-[48px]">
          <motion.div
            variants={slideInFromRight(0.3)}
            className={`flex flex-col ${Styles.typography.homeSectionTitleText} max-w-[600px] w-auto h-auto space-x-0`}
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-300">
                {" "}
                fantastic{" "}
              </span>
              writing experience
            </span>
          </motion.div>
          <motion.p
            variants={slideInFromRight()}
            className={`max-w-[640px] ${Styles.typography.homeDescriptionText}`}
          >
            <span>
              Join us at{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-teal-400">
                Novmuser AI
              </span>{" "}
              - a dedicated story AI tool developer, empowering aspiring
              novelists to efficiently craft their tales with innovation.
            </span>
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={slideInFromBottom(0.8)}
        className="absolute flex flex-row justify-center items-center w-full left-0 lg:bottom-[28%] md:bottom-[20%] bottom-[16%]"
      >
        <div className="flex flex-col w-auto h-auto px-[28px] py-[8px] border-4 rounded-[48px] border-indigo-500 bg-indigo-950 bg-opacity-80">
          <h1 className="font-extrabold lg:text-[60px] md:text-[44px] text-[20px] w-fit h-auto text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-fuchsia-300">
            We are Coming Soon
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(HeroContent);
