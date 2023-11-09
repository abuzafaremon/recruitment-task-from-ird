"use client";
import { useState } from "react";

const ParagraphSize = () => {
  const [size, setSize] = useState(0);
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="text-sm font-medium flex justify-between items-center">
        <p className="text-[#101010]">Paragraph Font Size</p>
        <p className="text-[#E55527]">{size}</p>
      </div>
      <input
        onChange={handleSizeChange}
        type="range"
        min={1}
        max={50}
        className="w-full h-1"
        id="range"
      />
    </div>
  );
};

export default ParagraphSize;
