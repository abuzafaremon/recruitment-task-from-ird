"use client";
import React from "react";
import { BsGrid } from "react-icons/bs";
import { RiHome3Line } from "react-icons/ri";
import { TbLocation, TbGridDots } from "react-icons/tb";
import { LuPlaySquare } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftNav = () => {
  const pathname = usePathname();

  const navLinks = [
    { link: "/", icon: <RiHome3Line /> },
    { link: "/dashboard", icon: <BsGrid /> },
    { link: "/location", icon: <TbLocation /> },
    { link: "/play", icon: <LuPlaySquare /> },
    { link: "/menu", icon: <TbGridDots /> },
  ];

  return (
    <div className="w-full md:w-[70px] fixed md:absolute md:top-0 left-0 bottom-0 h-[56px] md:min-h-screen bg-white">
      <div className="h-full md:h-screen md:max-h-[830px] flex md:flex-col justify-center items-center gap-9">
        {navLinks.map(({ link, icon }) => (
          <Link
            href={link}
            key={link}
            className={`${
              pathname === link
                ? "bg-[#FDEEEA] border border-[#FBDFD7] ring-1 ring-[#FDEEEA]"
                : "bg-[#f3f3f3]"
            } rounded-md p-2`}
          >
            <div
              className={`${pathname === link && "text-[#e55527]"} text-[13px]`}
            >
              {icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
