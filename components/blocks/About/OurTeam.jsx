import Image from "next/image";
import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function Block({ block }) {
  const { title } = block.main;
  const ourTeam = block.main.team;
  const [currentSlide, setCurrentSlide] = useState({});
  const [currentData, setcurrentData] = useState({});
  const sliderRef = useRef(null);

  const handleInit = (currentSlideIndex) => {
    // Set default slide to 0
    setcurrentData(ourTeam[0]);
    setCurrentSlide(0);
  };

  const handleAfterChange = (currentSlideIndex) => {
    console.log("afterChange");
    // setCurrentSlide(currentSlideIndex);
    // setcurrentData(data[currentSlideIndex])
  };

  const handlerBeforeChange = (currentSlide, nextSlide) => {
    setTimeout(function () {
      console.log("beforeChange");
      setCurrentSlide(nextSlide);
      setcurrentData(ourTeam[nextSlide]);
    }, 100);
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
    console.log(sliderRef.current.slickNext());
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
    console.log(sliderRef.current.slickPrev());
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: handlerBeforeChange,
    afterChange: handleAfterChange,
    onInit: handleInit,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-[50px] md:py-[70px] px-5">
      <div className="flex flex-col max-w-[1142px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between w-full pb-[50px]">
          <h2 className="text-[40px] text-center sm:text-start text-secondary font-[700] pb-5 sm:pb-0">
            {title}
          </h2>
          <div className="flex gap-3 mx-auto sm:mx-0">
            <button
              className="flex items-center border border-secondary py-3 px-5 w-full h-[59px]"
              aria-label="Left"
              onClick={handlePrev}
            >
              <FiChevronLeft className="text-secondary" size={24} />
            </button>
            <button
              className="flex items-center border border-secondary py-3 px-5 w-full h-[59px]"
              aria-label="Right"
              onClick={handleNext}
            >
              <FiChevronRight className="text-secondary" size={24} />
            </button>
          </div>
        </div>
        <div className="w-full ">
          <Slider ref={sliderRef} {...settings}>
            {ourTeam.map((item, i) => (
              <div className="flex flex-col w-full" key={i}>
                <div className="flex h-[100%] w-full">
                  <Image
                    className="w-full h-[100%] object-cover"
                    src={item.image}
                    width={294}
                    height={335}
                    alt="your business"
                  />
                </div>
                <div className="flex flex-col px-5 py-3 lg:px-3">
                  <span className="text-secondary text-[20px] font-[700]">
                    {item.full_name}
                  </span>
                  <span
                    className="text-[14px] font-[600]"
                    dangerouslySetInnerHTML={{ __html: item.position }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
