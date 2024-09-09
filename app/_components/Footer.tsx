import React from "react";
import { Styles } from "../styles";

const Footer = () => {
  return (
    <div
      className="relative flex flex-col items-center px-[16px] pt-[16px] lg:md:gap-9 gap-8 z-20 lg:md:mt-8 mt-20"
      id="footer"
    >
      <h1 className="text-white font-extrabold lg:text-[40px] md:text-[36px] text-[32px]">
        Contact Us
      </h1>
      <div className="flex flex-col items-center gap-[8px] ">
        <p className="text-white text-center p-3 max-w-[560px] lg:text-[20px] md:text-[18px] text-[16px]">
          If you have any questions or suggestions, please do not hesitate to
          contact us.
        </p>
        <p
          className={`text-indigo-300 w-max text-center p-3 ${Styles.typography.footerSmallText}`}
        >
          peter8icestonetech@gmail.com
        </p>
      </div>
      <div className="flex flex-row justify-between items-center gap-[64px] p-3">
        <a
          className={`TermsPolicy hover:underline underline-offset-8 ${Styles.typography.footerSmallText}`}
          href={"/terms-of-service"}
        >
          Terms of service
        </a>
        <a
          className="TermsPolicy hover:underline underline-offset-8"
          href={"/privacy-policy"}
        >
          Privacy policy
        </a>
      </div>
      <div
        className={`m-[16px] ${Styles.typography.footerSmallText} px-4 pb-5 text-center text-white`}
      >
        &copy; 2024 IcestoneTech Inc. All rights reserved
      </div>
    </div>
  );
};

export default React.memo(Footer);
