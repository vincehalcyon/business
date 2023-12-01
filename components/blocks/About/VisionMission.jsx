import React from 'react'

export default function Block({ block }) {

   const { mission_title, mission_description, vision_title, vision_description } = block.main

   return (
      <div className="w-full bg-business-gray py-[50px] md:py-[120px] px-5">
         <div className="flex max-w-[1142px] mx-auto">
            <div className="flex flex-col items-center justify-center w-full gap-16 md:flex-row md:justify-between md:gap-0">
               <div className="w-full sm:w-1/2">
                  <h2 className="text-[40px] text-center sm:text-start text-secondary font-[700] pb-5">
                     {mission_title}
                  </h2>
                  <div className="text-[16px] w-full sm:max-w-[400px]"
                     dangerouslySetInnerHTML={{ __html: mission_description }}
                  />
               </div>
               <div className="w-full sm:w-1/2">
                  <h2 className="text-[40px] text-center sm:text-start text-secondary font-[700] pb-5">
                     {vision_title}
                  </h2>
                  <div className="text-[16px] w-full sm:max-w-[400px]"
                     dangerouslySetInnerHTML={{ __html: vision_description }}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
