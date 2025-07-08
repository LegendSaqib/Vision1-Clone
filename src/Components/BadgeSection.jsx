import React, { useState } from "react";
import pic1 from '../assets/smoke.webp';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to toggle active index
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-16 flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-gray-200 flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg w-full max-w-[80%] h-[60vh]">
        {/* Left Section */}
        <div className="bg-[#7C6E64] p-8 md:w-1/2 text-white">
          <div className="text-sm font-semibold bg-gray-900 text-gray-300 px-3 py-1 rounded-full inline-block mb-4">
            Badge heading
          </div>
          <h2 className="text-3xl font-bold mb-4">Don't miss a thing.</h2>
          <p className="text-gray-200 mb-6">
            See, hear, and speak to visitors in real time from anywhere on your phone or tablet.
          </p>

          {/* List Items with Click */}
          <ul className="space-y-4 text-gray-100">
            {/* Item 1 */}
            <li
              onClick={() => handleToggle(0)}
              className="cursor-pointer flex items-center gap-2 hover:bg-gray-600 rounded-lg p-2"
            >
              <span className="text-lg">🔒</span>
              <div>
                <strong>Record and capture</strong>
                {activeIndex === 0 && (
                  <p className="text-sm text-gray-300 mt-1 transition-opacity opacity-100">
                    Capture real-time footage and save it securely.
                  </p>
                )}
              </div>
            </li>

            {/* Item 2 */}
            <li
              onClick={() => handleToggle(1)}
              className="cursor-pointer flex items-center gap-2 hover:bg-gray-600 rounded-lg p-2"
            >
              <span className="text-lg">📩</span>
              <div>
                <strong>Rich notifications</strong>
                {activeIndex === 1 && (
                  <p className="text-sm text-gray-300 mt-1 transition-opacity opacity-100">
                    Receive detailed notifications on your devices instantly.
                  </p>
                )}
              </div>
            </li>

            {/* Item 3 */}
            <li
              onClick={() => handleToggle(2)}
              className="cursor-pointer flex items-center gap-2 hover:bg-gray-600 rounded-lg p-2"
            >
              <span className="text-lg">🔔</span>
              <div>
                <strong>Smoke alarm detection</strong>
                {activeIndex === 2 && (
                  <p className="text-sm text-gray-300 mt-1 transition-opacity opacity-100">
                    A smoke alarm works by detecting smoke particles in the air and triggering an alarm to sound.
                  </p>
                )}
              </div>
            </li>
          </ul>

          <hr className="mt-4 border-gray-300 opacity-70" />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <img
            src={pic1}
            alt="Smart Home Device"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
