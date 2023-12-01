
import Image from 'next/image'

export default function NewsDetails({ block }) {
   const { main } = block.data

   return (
      <>
         <div className="w-full">
            <div className="px-5 news-banner">
               <div className="flex max-w-[1142px] mx-auto">
                  <h3 className="font-[700] text-center justify-center w-full lg:items-start text-light-blue text-[20px] sm:text-[40px] py-[30px] md:py-[89px] 2xl:py-[120px]"
                     dangerouslySetInnerHTML={{ __html: main.title }}
                  />
               </div>
            </div>
            <div className="w-full bg-white py-[30px] md:py-[60px] px-5">
               <div className='max-w-[856px] w-[100%] mx-auto'>
                  <Image className='w-[100%] object-cover'
                     src={main.image}
                     width={856}
                     height={438}
                     alt='news 1' 
                  />

                  <div className='text-[16px] leading-[23px] tracking-[0.54px] pt-[40px] '
                     dangerouslySetInnerHTML={{ __html: main.description }}
                  />
               </div>
            </div>
         </div>
      </>
   )
}