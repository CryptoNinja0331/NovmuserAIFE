import Image from "next/image";
import React, { FC } from "react";

type TNavbarItemProps = {
  label: string;
  href?: string | undefined;
};

const NavbarItem: FC<TNavbarItemProps> = ({ label, href }) => {
  return (
    <div className="flex flex-col lg:md:px-3 sm:px-2">
      <a
        href={href}
        className="cursor-pointer lg:text-[20px] md:text-[18px] text-[14px] text-white hover:text-indigo-300"
      >
        {label}
      </a>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="w-full h-auto fixed top-0 shadow-lg shadow-slate-950/80 bg-indigo-950 bg-opacity-80 backdrop-blur-md z-50 px-4">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-3">
        <div className="py-1">
          <a
            className="py-1 text-[24px] flex flex-row gap-3 items-center"
            href="/"
          >
            <Image
              src={"/logo-tiny.svg"}
              alt="nav_logo"
              width={40}
              height={40}
              className="lg:w-[40px] lg:h-[40px] md:w-[36px] md:h-[36px] w-[32px] h-[32px]"
            />
            <span className="font-extrabold hidden md:block text-white">
              Novmuser AI
            </span>
          </a>
        </div>
        <div className="flex flex-row gap-4 lg:md:p-3 sm:p-2 items-center justify-between">
          <NavbarItem label="Home" href="/#home" />
          <NavbarItem label="About" href="/#about" />
          <NavbarItem label="Contact Us" href="#footer" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
