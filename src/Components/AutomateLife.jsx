import React from "react";

import soundImage from "../assets/download.jpeg"; // Add appropriate images
import securityImage from "../assets/download.jpeg";

const AutomateLife = () => {
  return (
    <>
      <section className="max-w-[90%] sm:max-w-[80%] mx-auto my-12">
        <div className="text-center space-y-3 flex flex-col items-center justify-center mb-4 font-bold">
          <h3 className="text-3xl sm:text-4xl">Automate your life</h3>
          <p className="max-w-2xl text-center text-sm sm:text-base">
            Enjoy huge, limited-time deals on select devices so you'll never
            miss a moment this holiday season and beyond.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Large Card (Left) */}
          <div className="flex-1 h-[60vh] sm:h-[60vh] bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm sm:text-sm font-semibold text-gray-500 uppercase">
                Sound Systems
              </h3>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                Amazing sound. At your command.
              </h2>
              <a
                href="#"
                className="text-blue-600 mt-4 inline-block underline text-sm sm:text-base"
              >
                Learn more &rarr;
              </a>
            </div>
            <img
              src={soundImage}
              alt="Sound System"
              className="w-full h-[50%] sm:h-[70%] mt-4 rounded-lg"
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Top Right Card */}
            <div className="bg-gray-100 h-[50%] sm:h-[50%] rounded-lg p-6 flex flex-col sm:flex-row justify-between flex-1">
              <div>
                <h3 className="text-sm sm:text-sm font-semibold text-gray-500 uppercase">
                  Security Cameras
                </h3>
                <h2 className="text-sm sm:text-lg font-bold mt-2">
                  Bring smart security inside and see what’s happening at home.
                </h2>
                <a
                  href="#"
                  className="text-blue-600 mt-4 inline-block underline text-sm sm:text-base"
                >
                  Explore &rarr;
                </a>
              </div>
              <img
                src={securityImage}
                alt="Security Cameras"
                className="w-full h-[40%] sm:h-[80%] mt-4 rounded-lg"
              />
            </div>

            {/* Bottom Cards */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Bottom Left Gradient Card */}
              <div className="flex-1 bg-gradient-to-r from-pink-400 to-blue-500 rounded-lg flex items-center justify-center p-4 text-white text-center">
                <h2 className="text-sm sm:text-lg font-bold">
                  Remotely manage all of your connected devices
                </h2>
              </div>

              {/* Bottom Right Dark Card */}
              <div className="flex-1 bg-black rounded-lg flex flex-col items-center justify-center p-4 text-white text-center relative">
                <h2 className="text-sm sm:text-lg font-bold">
                  Good Hybrid Smartwatches
                </h2>
                <a
                  href="#"
                  className=" bottom-4 text-blue-400 underline text-sm sm:text-base"
                >
                  Explore &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutomateLife;
