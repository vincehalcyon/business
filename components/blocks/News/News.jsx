import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Block({ block }) {
  const newss = block.main.collection.contents;

  return (
    <div className="w-full bg-white py-[20px] px-5">
      <div className="flex flex-col max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 gap-5 py-10 1sm:grid-cols-2 2sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {newss.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Link href={item.route_url} className="cursor-pointer">
                <div className="w-full pb-3">
                  <Image
                    className="object-cover w-full"
                    src={item.data.main.image}
                    width={234}
                    height={145}
                    alt="your business"
                    strategy="eager"
                    loading="eager"
                    priority={true}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px]">
                    {item.data.main.dateeeeee}
                  </span>
                  <span
                    className="text-secondary text-[18px] sm:text-[20px] leading-[30px] pb-5"
                    dangerouslySetInnerHTML={{ __html: item.data.main.title }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
