import Image from "next/image";
import React from "react";

export default function Block({ block }) {
  const { description_1, description_2, image, mobile_image } = block.main;

  return (
    <>
      <div className="flex w-full bg-white ">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex items-center justify-center w-full h-auto">
            <div className="flex max-w-[400px] w-full px-5">
              <div className="flex flex-col py-8 lg:px-0">
                <div
                  className="pb-5 leading-[23px]"
                  dangerouslySetInnerHTML={{ __html: description_1 }}
                />
                <div
                  className="border-l-4 border-secondary px-5 font-[600] text-[20px] leading-[30px]"
                  dangerouslySetInnerHTML={{ __html: description_2 }}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              className=" pb-[20px] w-[80%] mx-auto lg:w-[auto] h-[100%] pt-[15px] md:pt-0  "
              src={image}
              width={720}
              height={658}
              alt="your business"
              strategy="eager"
              loading="eager"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9bS4u0ONhBxCFDdbIgKiJOWoUiVAi1QqsOJpd+QZOGJMXFUXAtOPixWHVwcdbVwVUQBD9AXF2cFF2kxP8lhRYxHhz34929x907wN+sMtXsGQNUzTIyqaSQy68KoVeEMYAgopiRmKnPiWIanuPrHj6+3iV4lve5P0dUKZgM8AnEs0w3LOIN4qlNS+e8TxxjZUkhPiceNeiCxI9cl11+41xy2M8zY0Y2M08cIxZKXSx3MSsbKvEkcVxRNcr351xWOG9xVqt11r4nf2GkoK0sc53mEFJYxBJECJBRRwVVWEjQqpFiIkP7SQ//oOMXySWTqwJGjgXUoEJy/OB/8Ltbszgx7iZFkkDwxbY/hoHQLtBq2Pb3sW23ToDAM3Cldfy1JjD9SXqjo8WPgL5t4OK6o8l7wOUOMPCkS4bkSAGa/mIReD+jb8oD/bdA75rbW3sfpw9AlrpK3wAHh8BIibLXPd4d7u7t3zPt/n4Af25yrLJ4XoEAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfnCBgFETuGUb30AAAAFUlEQVQY02P8//8/A27AxIAXjFRpAKXjAxH/0Dm5AAAAAElFTkSuQmCC"
            />
          </div>
        </div>
      </div>
    </>
  );
}
