import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import video from "../assets/video-fb1.webp";
import pic1 from '../assets/slide_01-_1.webp';
import pic from "../assets/slide003.webp";

const HomeSlider1 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);  // Track the current slide index
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex + 1);  // Update slide index (Swiper uses 0-based index)
  };

  return (
    <div className="max-w-[80%] mx-auto my-16 relative">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={handleSlideChange}  // Add event listener for slide change
        className="mySwiper mx-auto"
        style={{ height: "500px" }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="flex flex-col lg:flex-row items-center justify-start h-full p-8 rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="lg:w-1/2 text-white space-y-4 text-left relative">
              <p className="text-xs font-semibold uppercase">Security Cameras</p>
              <h2 className="text-5xl font-bold">Outdoor Security Cameras With Lights</h2>
              <p>Surround your home with smart security and help stop crime before it happens.</p>
              <div className="flex gap-4">
                <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700">
                  Buy Now - $45
                </button>
                <a href="#" className="flex items-center underline">Learn more &rarr;</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${video})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Experience Stunning Visuals</h2>
              <p className="text-lg mb-6">Let the background animation set the tone for a captivating experience.</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="flex flex-col lg:flex-row items-center justify-start h-full p-8 rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${pic1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="lg:w-1/2 text-black space-y-4 text-left relative">
              <p className="text-xs font-semibold uppercase">Security Cameras</p>
              <h2 className="text-5xl font-bold">Outdoor Security Cameras With Lights</h2>
              <p>Surround your home with smart security and help stop crime before it happens.</p>
              <div className="flex gap-4">
                <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700">
                  Buy Now - $45
                </button>
                <a href="#" className="flex items-center underline">Learn more &rarr;</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-4 right-4 bg-white rounded-2xl transform -translate-x-1/2 flex items-center gap-4 z-10">
        <button
          ref={prevRef}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200"
        >
          ←
        </button>
        <span className="text-sm font-semibold text-gray-700">
          {currentSlide} / 3
        </span>
        <button
          ref={nextRef}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-200"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default HomeSlider1;
