import { GlobalContext } from "@/lib/context/GlobalContext";
import Link from "next/link";
import { useContext } from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {

   const { tenantDetails, footerMenu } = useContext(GlobalContext)
   console.log('tenantDetails', tenantDetails)

   return (
      <>
         <footer className="flex flex-col w-full">
            <div className="w-full bg-secondary py-14 px-5 sm:px-10">
               <div className="flex max-w-[1142px] mx-auto">
                  <div className="flex flex-col lg:flex-row lg:text-start text-center w-full gap-3">
                     <div className="flex w-full mx-auto flex-col lg:text-start text-center lg:w-[350px] lg:pb-0 pb-5 gap-3">
                        <h3 className="text-[25px] sm:text-[35px] text-white">
                           Your
                           <span className="font-[600]"> Business</span>
                        </h3>
                        <p className="text-white text-[12px]">
                           {tenantDetails.data.main.copyright}
                        </p>
                        <ul className='flex gap-3 lg:justify-start justify-center'>
                           <li>
                              <a
                                 href={tenantDetails.data.main.instagram_link}
                                 aria-label="Instagram"
                              >
                                 <AiFillInstagram size={25} className="text-white" />
                              </a>
                           </li>
                           <li>
                              <a 
                                 href={tenantDetails.data.main.facebook_link}
                                 aria-label="Facebook"
                              >
                                 <BsFacebook size={24} className="text-white " />
                              </a>
                           </li>
                           <li>
                              <a 
                                 href={tenantDetails.data.main.twitter_link}
                                 aria-label="Twitter"
                              >
                                 <AiFillTwitterCircle size={25} className="text-white " />
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div className="flex flex-col lg:flex-row w-full justify-between text-white ">
                        <div className="grid lg:grid-rows-4 lg:grid-flow-col pb-5 lg:pb-0">
                           {footerMenu.parentNodes.map((item, i) => (
                              <div key={i} className="w-full lg:w-[240px]">
                                 <Link
                                    href="#"
                                 >
                                    {item.label}
                                 </Link>
                              </div>
                           ))}
                        </div>
                        <div className="flex flex-col gap-3">
                           <span >
                              {tenantDetails.data.main.address}
                           </span>
                           <span>
                              {tenantDetails.data.main.contact_label1} {tenantDetails.data.main.contact_number1}
                           </span>
                           <span>
                              {tenantDetails.data.main.contact_label2} {tenantDetails.data.main.contact_number2}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex w-full justify-center bg-dark-blue p-5">
               <span className="text-white text-[12px] ">
                  Website powered by HASP
               </span>
            </div>
         </footer>
      </>
   )
}
