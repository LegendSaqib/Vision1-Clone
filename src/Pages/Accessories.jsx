import React from "react";
import { useState } from "react";
import pic1 from "../assets/speaker1.webp"; // Replace with actual image paths
import houseImage from "../assets/12395.webp"; 
import SmartCameraCards from "../Components/CardData";

const Accessories = () => {

      // State to control which text to show
  const [activeIcon, setActiveIcon] = useState(null);

  // Toggle function
  const handleIconClick = (icon) => {
    setActiveIcon(activeIcon === icon ? null : icon);
  };
  return (
    <>
    
    <section className="p-6 max-w-[80%] mx-auto">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
          Security Cameras
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Your First Line of Defense
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Security cameras are surveillance devices used to monitor and record
          activities in specific areas, enhancing security and deterring
          criminal behavior.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top Full-Width Card */}
        <div
          className="lg:col-span-2 w-full h-[40vh] rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${pic1})` }}
        >
          <div className="bg-black bg-opacity-30 w-full h-full flex items-center justify-center rounded-md">
            <h3 className="text-white text-2xl font-bold">Capturing Every Moment</h3>
          </div>
        </div>

        {/* Bottom Left Card */}
        <div
          className="col-span-1 h-[30vh] rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${pic1})` }}
        >
          <div className="bg-black bg-opacity-30 w-full h-full flex items-center justify-center rounded-md">
            <h3 className="text-white text-xl font-bold">Keep an Eye, Stay Secure</h3>
          </div>
        </div>

        {/* Bottom Right Card */}
        <div
          className="col-span-1 h-[30vh] rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${pic1})` }}
        >
          <div className="bg-black bg-opacity-30 w-full h-full flex items-center justify-center rounded-md">
            <h3 className="text-white text-xl font-bold">Securing the Unseen</h3>
          </div>
        </div>
      </div>
    </section>

    <section className="p-6 max-w-[80%] mx-auto text-center">
      {/* Title and Subheading */}
      <div className="mb-6">
        <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
          Home Security
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mt-4">
          Cameras positioned at entry points like
        </h2>
        <p className="text-gray-500 mt-1 text-lg">
          doors, driveways, and backyards enhance home protection.
        </p>
      </div>

      {/* House Image with Interactive Icons */}
      <div className="relative mx-auto max-w-5xl">
        <img
          src={houseImage}
          alt="Modern House"
          className="w-full h-auto rounded-lg"
        />

        {/* Icon 1 */}
        <div
          className="absolute top-[20%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => handleIconClick(1)}
        >
          <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg">
            +
          </div>
          {activeIcon === 1 && (
            <div className="mt-2 p-2 bg-white text-gray-800 rounded shadow-lg">
              Front Door Camera for visitor monitoring.
            </div>
          )}
        </div>

        {/* Icon 2 */}
        <div
          className="absolute top-[50%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => handleIconClick(2)}
        >
          <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg">
            +
          </div>
          {activeIcon === 2 && (
            <div className="mt-2 p-2 bg-white text-gray-800 rounded shadow-lg">
              Side Camera for backyard security.
            </div>
          )}
        </div>

        {/* Icon 3 */}
        <div
          className="absolute bottom-[20%] right-[20%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => handleIconClick(3)}
        >
          <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg">
            +
          </div>
          {activeIcon === 3 && (
            <div className="mt-2 p-2 bg-white text-gray-800 rounded shadow-lg">
              Driveway Camera for vehicle monitoring.
            </div>
          )}
        </div>

        {/* Icon 4 */}
        <div
          className="absolute bottom-[30%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => handleIconClick(4)}
        >
          <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg">
            +
          </div>
          {activeIcon === 4 && (
            <div className="mt-2 p-2 bg-white text-gray-800 rounded shadow-lg">
              Garden Camera to keep an eye on open areas.
            </div>
          )}
        </div>
      </div>
    </section>
    
<div>
     <SmartCameraCards/>
</div>

    </>
  );
};

export default Accessories;
