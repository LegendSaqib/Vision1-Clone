import React from "react";
import pic1 from "../assets/v-blue-1.avif";
import pic2 from "../assets/v-blue-1.avif";
import pic3 from "../assets/v-blue-1.avif";
import pic4 from "../assets/v-blue-1.avif";

const App = () => {
  return (
    <>
      <section className="lg:max-w-[80%] mx-auto  my-16">
        <div className="text-center">
          <h2 className="lg:text-4xl text-3xl font-bold ">Choose the better way</h2>
          <p className="font-bold mt-2 lgLtext-lg lg:mx-16 text-justify p-4 lg:leading-8 ">
            Having an automated house for oneself is far more important now than
            it was previously. Home automation is a simple way to connect all of
            your electrical and internet-connected devices
          </p>
        </div>
        <div className="  p-4 lg:p-8">
          {/* Grid Layout */}
          <div className="lg:grid  lg:grid-cols-4 gap-4">
            {/* Left Large Box */}
            <div className="col-span-2 bg-gradient-to-b h-[70vh] from-purple-500 to-blue-500 rounded-2xl p-6 text-white flex flex-col justify-between">
              <h2 className="lg:text-3xl text-2xl font-bold lg:mb-4">
                Lithium batteries at the best prices.
              </h2>
              <a
                href="#"
                className="text-white font-medium underline hover:text-gray-200 transition"
              >
                Shop now &rsaquo;
              </a>
              <img
                src={pic1}
                alt="Battery"
                className="w-full lg:h-[50vh] h-[30vh] mt-6 rounded-lg"
              />
            </div>

            {/* Right Grid */}
            <div className="col-span-2 mt-5 grid grid-cols-2 gap-4">
              {/* Top Left Box */}
              <div className="bg-purple-200 rounded-2xl flex flex-col items-center justify-center p-4">
                <h3 className="text-lg font-semibold text-purple-700">
                  Enjoy Smart Living
                </h3>
                <img
                  src={pic2}
                  alt="Smart Device"
                  className=" mt-4 object-cover"
                />
              </div>

              {/* Top Right Box */}
              <div className="bg-pink-100 rounded-2xl flex items-center justify-center">
                <img src={pic3} alt="Camera" className=" object-cover" />
              </div>

              {/* Bottom Left Box */}
              <div className="bg-purple-100 rounded-2xl flex items-center justify-center">
                <img src={pic4} alt="Smart Bulb" className="" />
              </div>

              {/* Bottom Right Box */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-800 text-white rounded-2xl flex items-center justify-center text-center p-6">
                <h3 className="lg:text-lg text-sm font-bold leading-snug">
                  Control lights, fans, windows and other devices remotely from
                  anywhere
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
