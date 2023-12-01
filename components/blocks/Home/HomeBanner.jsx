import Image from "next/image";
import React from "react";

export default function Block({ block }) {
  const { banner_image, banner_mobile_image, title } = block.main;

  console.log("block", block);

  return (
    <>
      <div className="relative w-full overflow-hidden ">
        <div className="w-full">
          <picture>
            <source
              media="(max-width:768px)"
              srcset={`${banner_mobile_image}`}
            />
            <source media="(min-width:769px)" srcset={`${banner_image}`} />
            <Image
              src={`${banner_image}`}
              alt="Flowers"
              width={1920}
              height={645}
              strategy="eager"
              loading="eager"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9bS4u0ONhBxCFDdbIgKiJOWoUiVAi1QqsOJpd+QZOGJMXFUXAtOPixWHVwcdbVwVUQBD9AXF2cFF2kxP8lhRYxHhz34929x907wN+sMtXsGQNUzTIyqaSQy68KoVeEMYAgopiRmKnPiWIanuPrHj6+3iV4lve5P0dUKZgM8AnEs0w3LOIN4qlNS+e8TxxjZUkhPiceNeiCxI9cl11+41xy2M8zY0Y2M08cIxZKXSx3MSsbKvEkcVxRNcr351xWOG9xVqt11r4nf2GkoK0sc53mEFJYxBJECJBRRwVVWEjQqpFiIkP7SQ//oOMXySWTqwJGjgXUoEJy/OB/8Ltbszgx7iZFkkDwxbY/hoHQLtBq2Pb3sW23ToDAM3Cldfy1JjD9SXqjo8WPgL5t4OK6o8l7wOUOMPCkS4bkSAGa/mIReD+jb8oD/bdA75rbW3sfpw9AlrpK3wAHh8BIibLXPd4d7u7t3zPt/n4Af25yrLJ4XoEAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfnCBgFETuGUb30AAAAFUlEQVQY02P8//8/A27AxIAXjFRpAKXjAxH/0Dm5AAAAAElFTkSuQmCC"
            />
          </picture>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex w-full xl:max-w-[1139px] mx-auto static xl:absolute bottom-0">
            <h1
              className="xl:max-w-[635px] static w-[100%] xl:absolute bottom-0 leading-[100%] md:leading-[50px] text-center text-xs sm:text-sm md:text-[25px] lg:text-[35px] bg-[#2D76C3] text-white px-[20px] md:px-[30px] py-[20px] md:py-[30px]"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
