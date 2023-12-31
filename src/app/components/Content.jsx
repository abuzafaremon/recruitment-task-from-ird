import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Content = () => {
  return (
    <div className="bg-white grow px-3 lg:px-6 2xl:px-11 py-4 lg:py-6 2xl:py-11 rounded-xl">
      <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-7 2xl:gap-10s">
        {/* social links div start */}
        <div className="order-last md:order-first w-full lg:w-7 h-full md:h-[298px]">
          <div className="h-full flex md:flex-col md:justify-center gap-7">
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex justify-center items-center"
            >
              <FaFacebook />
            </a>
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-[#2867B2] text-white flex justify-center items-center"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-[#1DA1F2] text-white flex justify-center items-center"
            >
              <FaTwitter />
            </a>
            <button className="w-7 h-7 rounded-full bg-[#E55527] text-white flex justify-center items-center">
              <BsThreeDots />
            </button>
          </div>
        </div>
        {/* social links div start */}
        {/* content div start */}
        <div className="flex flex-col gap-6 md:gap-10 text-[#212121]">
          {/* first div  */}
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-5 xl:gap-[30px]">
            <div className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h1 className="text-2xl md:text-[38px] font-bold">
                  Health benefits of an avocado
                </h1>
                <div>
                  <h3 className="text-lg font-bold mb-3.5">
                    Supports eye health:
                  </h3>
                  <p className="text-[15px]">
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3.5">
                    Supports eye health:
                  </h3>
                  <p className="text-[15px]">
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-[30px] overflow-hidden">
              <Image
                className="w-full"
                src="/assets/images/fruits/avocado-thumb.png"
                alt="avocado"
                height={320}
                width={520}
              />
            </div>
          </div>
          {/* second div  */}
          <div>
            <h3 className="text-lg font-bold mb-3.5">Supports eye health:</h3>
            <p className="text-[15px]">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.. Spinach contains high levels of vitamin A
              and other antioxidants that help maintain healthy vision and
              protect against age-related macular degeneration.. Spinach
              contains high levels of vitamin A and other antioxidants that help
              maintain healthy vision and protect against age-related macular
              degeneration.. Spinach contains high levels of vitamin A and other
              antioxidants that help maintain healthy vision and protect against
              age-related macular degeneration.. Spinach contains high levels of
              vitamin A and other antioxidants that help maintain healthy vision
              and protect against age-related macular degeneration.. Spinach
              contains high levels of vitamin A and other antioxidants that help
              maintain healthy vision and protect against age-related macular
              degeneration.. Spinach contains high levels of vitamin A and other
              antioxidants that help maintain healthy vision and protect against
              age-related macular degeneration..
            </p>
          </div>
          {/* third div */}
          <div className="flex flex-col items-center lg:flex-row gap-6 md:gap-11 order-last">
            <div className="w-full rounded-[30px] overflow-hidden">
              <Image
                className="w-full"
                src="/assets/images/fruits/apple-thumb.png"
                alt="apple"
                height={320}
                width={520}
              />
            </div>
            <div className="w-full">
              <h3 className="text-lg font-bold mb-3.5">Supports eye health:</h3>
              <p className="text-[15px]">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
              </p>
            </div>
          </div>
          {/* fourth div  */}
          <div className="md:order-last py-4 md:py-0">
            <h3 className="text-lg font-bold mb-2.5">Was this helpful?</h3>
            <div className="flex items-center gap-3">
              <FaStar className="text-[#E55527] text-lg" />
              <FaStar className="text-[#E55527] text-lg" />
              <FaStar className="text-[#E55527] text-lg" />
              <FaStar className="text-[#E55527] text-lg" />
              <AiOutlineStar className="text-[#E55527] text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
