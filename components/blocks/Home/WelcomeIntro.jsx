import React from 'react'

export default function Block({ block }) {

   const { title, description } = block.main;

   return (
      <>
         <div className="flex justify-center w-full px-5 bg-secondary py-14">
            <div className="flex max-w-[1142px] mx-auto text-white text-center">
               <div className='flex flex-col'>
                  <h2 className="text-2xl sm:text-[40px] font-[700] pb-5">
                     {title}
                  </h2>
                  <div className="text-sm sm:text-[18px] leading-[28px]"
                     dangerouslySetInnerHTML={{ __html: description }}
                  />
               </div>
            </div>
         </div>
      </>
   )
}
