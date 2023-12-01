import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

export default function Block({ block }) {
  const { title } = block.main;
  const news = block.main.collection.contents;

  console.log("news", news);

  return (
    <div className="flex justify-center w-full px-5 bg-business-gray py-14">
      <div className="flex max-w-[1000px] mx-auto">
        <div className="flex flex-col w-full">
          <h2 className="text-[40px] font-[700] text-center text-[#2D76C3] ">
            {title}
          </h2>
          <div className="grid grid-cols-1 gap-5 py-10 1sm:grid-cols-2 2sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
            {news.map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <Link href={`${item.route_url}`} className="cursor-pointer ">
                  <div className="w-full">
                    <Image
                      className="object-cover w-full"
                      src={item.data.main.image}
                      width={1000}
                      height={1000}
                      alt="your business"
                    />
                  </div>
                  <span className="text-[14px]">{item.data.main.date}</span>
                  <span
                    className="text-[#2D76C3] text-[20px] leading-[30px]"
                    dangerouslySetInnerHTML={{ __html: item.data.main.title }}
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full ">
            <Link
              href="/mybusiness-news"
              className="border border-[#2D76C3] py-3 px-5 text-[#2D76C3] cursor-pointer w-[200px] flex items-center"
            >
              See more news &nbsp;
              <BiChevronRight />
              <BiChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
