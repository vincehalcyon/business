import Link from 'next/link'
import React from 'react'
import { BiChevronsRight } from "react-icons/bi";

export default function Block({ block }) {

   const { title, contact_label } = block.main

   return (
      <div className="w-full bg-[#F5F5F5] py-[20px] px-5">
         <div className="flex max-w-[1142px] mx-auto">
            <div className="py-[30px] md:py-[89px] 2xl:py-[100px]">
               <h6 className="font-[700] text-center lg:items-start text-[20px] sm:text-[40px]">
                  {title}
               </h6>
               <Link
                  href="/yourbusiness-contactus"
                  className="flex items-center gap-3 text-[16px] font-[600] text-secondary"
               >
                  {contact_label} <BiChevronsRight size={18} />
               </Link>
            </div>
         </div>
      </div>
   )
}
