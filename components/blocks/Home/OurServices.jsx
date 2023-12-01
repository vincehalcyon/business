/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";

export default function Block({ block }) {
  const { title } = block.main;
  const services = block.main.services;

  return (
    <>
      <div className="w-full px-5 bg-business-gray py-14">
        <div className="flex max-w-[1142px] mx-auto text-white text-center">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl md:text-[40px] font-[700] text-center text-secondary ">
              {title}
            </h2>
            <div className="flex flex-wrap w-full justify-center sm:justify-between gap-[30px] md:gap-[100px] pt-10">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-5 w-full max-w-[136px] text-black pb-5"
                >
                  <div className="flex justify-center text-center ">
                    <div className="h-auto border-2 rounded-full border-secondary p-9">
                      <Image
                        className="h-[50px] w-[50px]"
                        src={item.image}
                        width={50}
                        height={50}
                        alt="your business"
                      />
                    </div>
                  </div>
                  <span
                    className="font-[600]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
