import React from "react";

export default function Block({ block }) {
  const metrics = block.main.metrics;

  return (
    <div className="w-full bg-white py-[30px] md:py-[50px] lg:py-[120px] px-5">
      <div className="flex max-w-[1142px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full gap-16 md:flex-row md:justify-between md:gap-0">
          {metrics.map((item, i) => (
            <div key={i} className="">
              <h2 className="text-[70px] font-[800] leading-normal">
                {item.value}
              </h2>
              <span className="text-[20px] font-[700] text-secondary">
                {item.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
