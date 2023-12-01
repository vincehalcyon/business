import Image from 'next/image'
import React from 'react'

export default function Block({ block }) {

   const { image, content_1, content_2 } = block.main

   return (
      <div className="w-full px-5 bg-white py-14">
         <div className="flex max-w-[1142px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[60px]">
               <div className="flex justify-center lg:justify-start">
                  <Image
                     className="w-auto lg:w-full h-[400px] lg:h-[100%] object-cover"
                     src={image}
                     width={475}
                     height={410}
                     alt='your business'
                     strategy="eager"
                     loading='eager'
                     priority={true}
                  />
               </div>
               <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="pb-10">
                     <span className="font-[600]"
                        dangerouslySetInnerHTML={{ __html: content_1 }}
                     />
                  </div>
                  <div className="border-l-4 border-secondary px-5 font-[600] text-[20px] leading-[30px]"
                     dangerouslySetInnerHTML={{ __html: content_2 }}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}