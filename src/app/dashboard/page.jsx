import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <section className="min-h-screen">
      <div className="max-2xl:container mx-auto">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div>
            <Image
              src="/assets/images/notFound.png"
              width={526}
              height={298}
              alt="notFound"
            />
          </div>
          <p className="bold text-[28px] text-[#212121]">This page is empty</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
