import React from "react";
import Image from "next/image";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section
      className="relative flex flex-col items-center w-full h-full px-[54px] py-[36px]"
      id="about"
    >
      {/* back-image */}
      <Image
        src="/about_main_image.svg"
        alt="about_main"
        width={1404}
        height={912}
        className="z-[1] w-full bg-cover"
      />
      <AboutContent />
    </section>
  );
};

export default React.memo(About);
