import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      img: "/images/bg.jpg",
      text: "THIS IS THE PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY",
    },
    {
      img: "/images/about-bg.jpg",
      text: "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className="max-w-full h-[780px] m-auto py-10 relative group mb-10"
      style={{ zIndex: 1 }}
    >
      <div className="relative h-full">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
        <div className="absolute bottom-20 left-20 bg-black/30 px-4 py-2 text-white md:text-xl text-left font-bold max-w-3xl">
          {slides[currentIndex].text}
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer hover:bg-white hover:text-black">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer hover:bg-white hover:text-black">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={
                currentIndex === slideIndex ? "text-black" : "text-gray-400"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
