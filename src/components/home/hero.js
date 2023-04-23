import React from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { hero } from "../assets/data/data";
import Button from "../button/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] right-0 text-white cursor-pointer"
    >
      <MdKeyboardArrowRight size={50} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] left-0 z-10 text-white cursor-pointer"
    >
      <MdKeyboardArrowLeft size={50} />
    </div>
  );
}

const Hero = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full h-1/2 md:flex md:justify-between">
        <div className="w-full h-full md:h-1/2">
          <Slider {...settings}>
            {hero.map((item) => (
              <div className="box relative sm:mt-16 w-full">
                <img
                  src={item.cover}
                  alt="slider"
                  className="w-full h-full md:h-96 object-cover"
                />
                <div className="flex flex-col items-center text absolute top-[15%] left-[15%] right-[15%] text-white p-5">
                  <h3 className="mb-2 p-2 text-2xl font-bold">{item.name}</h3>
                  <p className="text-center mb-2 p-2 text-gray-400">
                    {item.tag}
                  </p>
                  <Button className="mt-2 p-3 hover:opacity-75 bg-[#85ab00] px-5 text-white rounded-lg">
                    BOOK NOW
                  </Button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bg-fixed bg-img bg-center object-cover w-full table align-middle h-80 mx-auto text-center">
        <div className="table-cell align-middle">
          <div className="w-full">
            <div className="font-bold italic text-4xl text-white">
              "INTERESTING OUTDOOR CINEMA"
            </div>
            <div className="text-medium text-white w-[45%] m-auto">
              AT CHANDRA <br /> - Read more -
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
