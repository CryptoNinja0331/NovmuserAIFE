import Image from "next/image";
import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-full" id="home">
      <Image
        src={"/hero_header_image.svg"}
        alt="hero_header"
        width={1512}
        height={400}
        className="absolute left-0 top-0 z-[1] w-full"
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
