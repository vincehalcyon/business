import Image from 'next/image'
import React from 'react'
import ContactUsForm from '@/components/partials/forms/ContactUsForm'


export default function Block({ block }) {
   const img1 = "/img/Rectangle13.jpg"
   return (
      <>
         <div className="flex w-full h-full relative overflow-hidden  justify-center z-0">
            <div className="w-full h-full absolute top-[17%]">
               <div className="bg-secondary z-50 absolute bg-opacity-75 custom-light w-[100%] h-[100%]" />
               <Image
                  className="w-full object-cover bg-transparent absolute h-[578px] z-20"
                  src={img1}
                  width={1000}
                  height={578}
                  alt='your business'
                  strategy="eager"
                  loading='eager'
                  priority={true}
               />
            </div>
            <ContactUsForm />
         </div>
      </>
   )
}
