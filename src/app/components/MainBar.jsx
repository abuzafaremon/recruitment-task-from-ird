import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";

const MainBar = ({ isOpenFruits }) => {
  // create mock data for mapping
  const fruitsList = [
    {
      id: 1,
      name: "oranges",
      vitamin: "vitamin c",
      img: "/assets/images/fruits/orange.png",
    },
    {
      id: 2,
      name: "apple",
      vitamin: "vitamin b6",
      img: "/assets/images/fruits/apple.png",
    },
    {
      id: 3,
      name: "avocado",
      vitamin: "vitamin c",
      img: "/assets/images/fruits/avocado.png",
    },
    {
      id: 4,
      name: "avocado",
      vitamin: "vitamin c",
      img: "/assets/images/fruits/avocado.png",
    },
    {
      id: 5,
      name: "avocado",
      vitamin: "vitamin c",
      img: "/assets/images/fruits/avocado.png",
    },
    {
      id: 6,
      name: "avocado",
      vitamin: "vitamin c",
      img: "/assets/images/fruits/avocado.png",
    },
    {
      id: 7,
      name: "avocado",
      vitamin: "vitamin c",
      img: "/assets/images/fruits/avocado.png",
    },
    {
      id: 8,
      name: "avocado",
      vitamin: "vitamin c",
      img: "/assets/images/fruits/avocado.png",
    },
  ];
  return (
    <div
      className={`bg-white p-4 rounded-xl w-full absolute xl:relative ${
        isOpenFruits
          ? "left-0 max-w-[80%] transition-all"
          : "-left-96 max-w-[300px]"
      } xl:left-0`}
    >
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

        {/* items div start  */}
        <div>
          <h3 className="text-xs font-medium text-[#101010] mb-2.5">
            Fruits List
          </h3>
          {/* map fruitsLists */}
          <div className="flex flex-col gap-1.5">
            {fruitsList.map((fruit) => (
              // single fruit div
              <div
                key={fruit.id}
                className="flex items-center gap-4 px-2.5 py-2 border-2 border-transparent rounded-[10px] hover:border-[#E55527]"
              >
                <div className="w-11 h-11 md:w-14 md:h-14">
                  <Image
                    src={fruit.img}
                    alt={fruit.name}
                    width={56}
                    height={56}
                  />
                </div>
                <div className="capitalize text-[#101010] flex flex-col gap-2">
                  <h3 className="text-sm font-medium">{fruit.name}</h3>
                  <p className="text-xs">{fruit.vitamin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* items div end  */}
      </div>
    </div>
  );
};

export default MainBar;
