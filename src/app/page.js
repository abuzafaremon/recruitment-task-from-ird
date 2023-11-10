"use client";
import { BsGridFill } from "react-icons/bs";
import Content from "./components/Content";
import MainBar from "./components/MainBar";
import SettingBar from "./components/SettingBar";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

export default function Home() {
  const [isOpenFruits, setIsOpenFruits] = useState(false);
  const handleIsOpen = () => {
    setIsOpenFruits(!isOpenFruits);
  };
  return (
    <div className="max-2xl:container mx-auto pb-[50px]">
      <div className="flex flex-col xl:flex-row items-start gap-4">
        <button
          onClick={handleIsOpen}
          className="bg-white rounded-lg w-full px-3.5 py-2.5 flex justify-between items-center xl:hidden"
        >
          <div className="flex items-center gap-2.5">
            <BsGridFill className="text-[#E55527]" />
            <h3 className="text-xs font-semibold text-[#212121]">
              Select Food Item
            </h3>
          </div>
          <FaAngleDown />
        </button>
        <MainBar isOpenFruits={isOpenFruits} />
        <Content />
        <SettingBar />
      </div>
    </div>
  );
}
