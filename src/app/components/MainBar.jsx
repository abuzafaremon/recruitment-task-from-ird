import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";

const MainBar = () => {
  return (
    <div className="bg-white p-4 rounded-xl w-full">
      <div className="flex flex-col gap-[15px]">
        {/* tab div start */}
        <div className="p-1 border-2 border-[#FBE5DF] rounded-lg flex items-center">
          <Link
            href="/"
            className="w-full py-2.5 text-sm font-semibold text-center rounded-lg bg-[#FDEEEA] text-[#E55527]"
          >
            Fruits
          </Link>
          <Link href="/" className="w-full text-sm text-center py-2.5">
            Vegetables
          </Link>
        </div>
        {/* tab div end */}

        {/* search box start */}
        <div className="w-full">
          <div className="border-2 border-[#F0F2F4] rounded-lg p-1 flex justify-between items-center">
            <input
              className="border-none outline-none bg-transparent px-2.5 placeholder:text-[#10101050] placeholder:text-xs"
              type="text"
              placeholder="Search by Fruits Name"
            />
            <button className="bg-[#FCEEE9] rounded-md px-1.5 py-1">
              <BsSearch className="text-[#e55527] text-[13px]" />
            </button>
          </div>
        </div>
        {/* search box end */}
      </div>
    </div>
  );
};

export default MainBar;
