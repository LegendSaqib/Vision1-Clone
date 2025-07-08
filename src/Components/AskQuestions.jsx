import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the question if it is already open
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  const questions = [
    "What payment methods can I use?",
    "Can I purchase items with another currency?",
    "Can I make changes to my order after it's been placed?",
    "Do you offer e-gift cards for international customers?",
    "How Do I Set Up A Subscription Order?",
    "How To Return My Items?",
  ];

  return (
    <div className="bg-blue-500 lg:max-w-[80%] mx-auto lg:flex my-16 text-white lg:p-8">
      <div className="lg:w-1/2 sticky p-2 top-0 pb-8">
        <h2 className="lg:text-3xl text-2xl font-bold mb-4">
          Frequently Asked Questions About Product
        </h2>
        <p className="ltext-lg mb-6">
          Please read our{" "}
          <span className="text-green-300 cursor-pointer hover:underline">
            frequently asked questions
          </span>{" "}
          to find out more.
        </p>
      </div>

      <div className="space-y-4 p-2 lg:w-1/2 max-h-screen overflow-auto">
        {questions.map((question, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left text-xl font-semibold py-2"
              onClick={() => toggleQuestion(index)}
            >
              {question}
            </button>
            {activeIndex === index && (
              <div className="pl-4 py-2 text-lg text-gray-100">
                <p>
                  This is the answer to the question. You can place your answer
                  here. It will appear when the question is clicked.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
