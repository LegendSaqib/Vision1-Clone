import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Import your images
import slideImage1 from "../assets/image-with-text-s2.webp";
import slideImage2 from "../assets/image-with-text-s3.webp";
import slideImage3 from "../assets/image-with-text-s1.webp";

const SlideComponent = () => {
  return (
    <div className="relative w-full max-w-[80%] h-[50vh] mx-auto my-8">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <div className="w-full md:w-1/2 p-8 bg-blue-50 h-full flex flex-col justify-center">
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Setting the Standards
              </h3>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                Save money, save time, simplify living
              </h2>
              <p className="text-gray-600 text-sm">
                Smart TVs and speakers allow you to stream content from the
                internet and control your media using voice commands.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full">
              <img
                src={slideImage1}
                alt="Slide 1"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <div className="w-full md:w-1/2 p-8 bg-green-50 h-full flex flex-col justify-center">
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Smart Home Security
              </h3>
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Keep your home safe and secure
              </h2>
              <p className="text-gray-600 text-sm">
                Monitor your home with advanced security cameras and smart
                devices.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full">
              <img
                src={slideImage2}
                alt="Slide 2"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-purple-50 rounded-lg shadow-lg overflow-hidden h-full">
            <div className="w-full md:w-1/2 p-8 bg-purple-50 h-full flex flex-col justify-center">
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Hybrid Smartwatches
              </h3>
              <h2 className="text-3xl font-bold text-purple-700 mb-4">
                Stay connected on the go
              </h2>
              <p className="text-gray-600 text-sm">
                Track your fitness and manage notifications with our premium
                smartwatches.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full">
              <img
                src={slideImage3}
                alt="Slide 3"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Add styles for pagination */}
      <style>
        {`
         .swiper-pagination {
  position: absolute !important;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 8px;
  padding-right: 250px; /* Adds margin from the right side */
}


          /* Style each pagination bullet as a dot */
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: gray;
            opacity: 0.5;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          /* Highlight active bullet */
          .swiper-pagination-bullet-active {
            background-color: blue;
            opacity: 1;
            width: 16px;
            height: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default SlideComponent;
