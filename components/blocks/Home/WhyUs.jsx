import Image from "next/image";
import React from "react";

export default function Block({ block }) {
  const { title, image, description1, description2 } = block.main;

  return (
    <>
      <div className="w-full px-5 bg-white py-14">
        <div className="flex max-w-[1142px] mx-auto">
          <div className="flex flex-col w-full">
            <h2 className="text-[40px] font-[700] text-center text-secondary pb-10">
              {title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[60px]">
              <div className="flex justify-center lg:justify-start">
                <Image
                  className="w-auto lg:w-full h-[400px] lg:h-[100%]  object-cover"
                  src={image}
                  width={475}
                  height={410}
                  alt="your business"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="pb-10">
                  <div
                    className="font-[600] pb-5"
                    dangerouslySetInnerHTML={{ __html: description1 }}
                  />
                </div>
                <div
                  className="border-l-4 border-secondary px-5 font-[600] text-[20px] leading-[30px]"
                  dangerouslySetInnerHTML={{ __html: description2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
