import React from "react";
import { TbSquareRoundedLetterT } from "react-icons/tb";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import ParagraphSize from "./ParagraphSize";

const SettingBar = () => {
  return (
    <div className="bg-white p-4 rounded-xl w-full border-2">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <TbSquareRoundedLetterT className="text-[#E55527] text-2xl" />
            <h3 className="text-sm text-[#E55527]">Settings</h3>
          </div>
          <FaAngleUp className="text-[#E55527] text-2xl" />
        </div>
        <ParagraphSize />
        <div>
          <p className="mb-2.5 text-sm font-medium text-[#101010]">
            Choose Vitamin Type
          </p>
          <button className="w-full flex justify-between items-center px-4 py-2.5 bg-[#E8E8E8] rounded-md">
            <span>All Vitamin</span>
            <FaAngleDown className="text-2xl text-[#3B3B3B]" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-[#101010]">
            Turn Off Subtitle
          </p>
          <div className="w-[34px] h-5 border-2 rounded-full p-0.5">
            <div className="w-1/2 h-full rounded-full bg-[#d9d9d9]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBar;
