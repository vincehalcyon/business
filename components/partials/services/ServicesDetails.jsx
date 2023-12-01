import Image from "next/image"
import Link from "next/link"
import { BiChevronsRight } from "react-icons/bi"

export default function ServicesDetails({ block }) {
   const { main } = block.data
   return (
      <>
         <div className="w-full">
            <div className="px-5 service-banner">
               <div className="flex max-w-[1142px] mx-auto">
                  <h3 className="font-[800] text-center lg:items-start text-light-blue text-[30px] sm:text-[50px] lg:text-[80px] py-[30px] md:py-[89px] 2xl:py-[142px]"
                     dangerouslySetInnerHTML={{ __html: main.name }}
                  />
               </div>
            </div>
            <div className="w-full px-5 bg-white py-14">
               <div className="flex max-w-[1142px] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[60px]">
                     <div className="flex justify-center lg:justify-start">
                        <Image
                           className="w-auto lg:w-full h-[400px] lg:h-[100%] object-cover"
                           src={main.image}
                           width={475}
                           height={410}
                           alt='your business'
                           strategy="eager"
                           loading='eager'
                           priority={true}
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center w-auto h-full mx-auto">
                        <div className="pb-10">
                           <span className="font-[600]"
                              dangerouslySetInnerHTML={{ __html: main.content_1 }}
                           />
                        </div>
                        <div className="border-l-4 border-secondary px-5 font-[600] text-[20px] leading-[30px]"
                           dangerouslySetInnerHTML={{ __html: main.content_2 }}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-secondary w-full flex justify-center py-[50px] px-5">
               <div className="flex max-w-[1142px] ">
                  <div
                     className="text-white"
                     dangerouslySetInnerHTML={{ __html: main.description }}
                  />
               </div>
            </div>
            <div className="w-full bg-[#F5F5F5] py-[20px] px-5">
               <div className="flex max-w-[1142px] mx-auto">
                  <div className="py-[30px] md:py-[89px] 2xl:py-[100px]">
                     <h3 className="font-[700] text-center lg:items-start text-[20px] sm:text-[40px]">
                        We’d love to hear from you
                     </h3>
                     <Link
                        href="/mybusiness-contact-us"
                        className="flex items-center gap-3 text-[16px] font-[600] text-secondary"
                     >
                        Contact us now <BiChevronsRight size={18} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}