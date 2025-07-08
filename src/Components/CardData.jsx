import React, { useState } from "react";
import pic1 from '../assets/n-vision.webp';
import pic2 from '../assets/n-vision.webp';
import pic3 from '../assets/n-vision.webp';
import pic4 from '../assets/n-vision.webp';


// Card Data
const cardData = [
  {
    id: 1,
    title: "Night vision",
    image: pic1,
    description: "Night vision helps monitor spaces in low-light conditions.",
  },
  {
    id: 2,
    title: "Motion detection",
    image: pic2,
    description: "Detects movement and sends alerts in real-time.",
  },
  {
    id: 3,
    title: "Resolution",
    image: pic3,
    description: "High resolution ensures clear and detailed footage.",
  },
  {
    id: 4,
    title: "Audio",
    image: pic4,
    description: "Two-way audio allows communication through the camera.",
  },
];

const SmartCameraCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id); // Toggle functionality
  };

  return (
    <div className="max-w-[90%] mx-auto p-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
          Overview
        </span>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Smart cameras a powerful tool for <br /> monitoring & securing spaces
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Smart cameras, often used for security, home automation, or
          surveillance, come with advanced features that distinguish them from
          traditional cameras.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover"
            />

            {/* Overlay - Active */}
            {activeCard === card.id && (
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-50 text-white p-4 transition-all duration-500 ease-in-out">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm mt-1">{card.description}</p>
              </div>
            )}

            {/* "+" Button */}
            <div
              className="absolute bottom-4 right-4 bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow-lg font-bold text-xl"
              onClick={() => handleCardClick(card.id)}
            >
              {activeCard === card.id ? "×" : "+"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartCameraCards;


