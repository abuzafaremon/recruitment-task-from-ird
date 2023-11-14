import Image from "next/image";
import Link from "next/link";
import { BsNintendoSwitch, BsSearch, BsSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    // header start
    <header className="py-2.5 bg-white md:py-3 px-4 md:px-6 relative z-50">
      <div className="max-2xl:container mx-auto">
        <div className="flex justify-between items-center">
          {/* header left start */}
          <Link href="/" className="w-16 md:w-[70px] h-8 md:h-9">
            <Image
              className="w-full"
              width={70}
              height={36}
              src="/assets/images/logo/header-logo.png"
              alt="logo"
            />
          </Link>
          {/* header left end */}
          {/* header middle start */}
          <div className="w-[390px] hidden md:block">
            <div className="border-2 border-[#F0F2F4] rounded-lg p-1 flex justify-between items-center">
              <input
                className="border-none outline-none bg-transparent px-2.5 placeholder:text-[#101010] placeholder:text-xs"
                type="text"
                placeholder="Search Best Food"
              />
              <button className="bg-[#FCEEE9] border border-[#FADFD6] rounded-md ring-1 ring-[#FCEEE9] p-2">
                <BsSearch className="text-[#e55527] text-[13px]" />
              </button>
            </div>
          </div>
          {/* header middle end */}
          {/* header last start */}
          <div className="flex items-center gap-6">
            <button className="bg-[#FCEEE9] border border-[#FADFD6] rounded-md ring-1 ring-[#FCEEE9] p-2 md:hidden">
              <BsSearch className="text-[#e55527] text-[13px]" />
            </button>
            <button className="bg-[#FCEEE9] border border-[#FADFD6] rounded-md ring-1 ring-[#FCEEE9] p-2 hidden md:block">
              <BsSunFill className="text-[#e55527] text-[13px]" />
            </button>
            <button className="bg-[#FCEEE9] border border-[#FADFD6] rounded-md ring-1 ring-[#FCEEE9] p-2 hidden md:block">
              <BsNintendoSwitch className="text-[#101010] text-[13px]" />
            </button>
            <button className="bg-[#E7E7E7] rounded-md p-2">
              <HiMenu className="text-[#101010] text-[13px]" />
            </button>
          </div>
          {/* header last end */}
        </div>
      </div>
    </header>
    // header end
  );
};

export default Header;
