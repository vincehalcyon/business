import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { SlLocationPin } from "react-icons/sl";

export default function Block({ block }) {

   const { address, description, number } = block.main
   return (
      <>
         <div className="w-full bg-white py-[50px] md:py-[120px] px-5 ">
            <div className="flex max-w-[1142px] mx-auto">
               <div className="flex flex-col items-center w-full lg:flex-row lg:items-start">
                  <div className="w-full pb-10 md:w-1/2 lg:pb-0">
                     <div className="text-[20px] font-[600] leading-[30px] border-l-4 border-secondary px-5"
                        dangerouslySetInnerHTML={{ __html: description }}
                     />
                  </div>
                  <div className="w-full md:w-1/2">
                     <div className="flex gap-5 pb-5">
                        <SlLocationPin className="text-secondary" size={24} />
                        <span className="text-[20px] font-[700]"
                           dangerouslySetInnerHTML={{ __html: address }}
                        />
                     </div>
                     <div className="flex gap-5">
                        <BsTelephone className="text-secondary" size={24} />
                        <div className="flex flex-col ">
                           <span
                              className="text-[20px] font-[700]"
                              dangerouslySetInnerHTML={{ __html: number }}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
