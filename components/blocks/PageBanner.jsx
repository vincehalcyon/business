import Image from 'next/image'
import React from 'react'

export default function Block({ block }) {

   const { image, mobile_image, title } = block.main
   return (
      <div
         className="relative flex items-center justify-center bg-center bg-cover">
         <Image
            src={`${image}`}
            alt="Flowers"
            width={1920}
            height={645}
            strategy="eager"
            loading="eager"
            priority={true}
            placeholder="blur"
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9bS4u0ONhBxCFDdbIgKiJOWoUiVAi1QqsOJpd+QZOGJMXFUXAtOPixWHVwcdbVwVUQBD9AXF2cFF2kxP8lhRYxHhz34929x907wN+sMtXsGQNUzTIyqaSQy68KoVeEMYAgopiRmKnPiWIanuPrHj6+3iV4lve5P0dUKZgM8AnEs0w3LOIN4qlNS+e8TxxjZUkhPiceNeiCxI9cl11+41xy2M8zY0Y2M08cIxZKXSx3MSsbKvEkcVxRNcr351xWOG9xVqt11r4nf2GkoK0sc53mEFJYxBJECJBRRwVVWEjQqpFiIkP7SQ//oOMXySWTqwJGjgXUoEJy/OB/8Ltbszgx7iZFkkDwxbY/hoHQLtBq2Pb3sW23ToDAM3Cldfy1JjD9SXqjo8WPgL5t4OK6o8l7wOUOMPCkS4bkSAGa/mIReD+jb8oD/bdA75rbW3sfpw9AlrpK3wAHh8BIibLXPd4d7u7t3zPt/n4Af25yrLJ4XoEAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfnCBgFETuGUb30AAAAFUlEQVQY02P8//8/A27AxIAXjFRpAKXjAxH/0Dm5AAAAAElFTkSuQmCC'
         />
         <div className="absolute flex max-w-[1142px] mx-auto w-full">
            <h3 className="font-[800] text-center lg:items-start text-light-blue text-[30px] sm:text-[50px] lg:text-[80px] px-5 lg:px-0">
               {title}
            </h3>
         </div>
      </div>
   )
}
