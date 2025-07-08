import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    title: "Easy To Use",
    rating: 4,
    comment:
      "I had two in my previous house. They are wonderful. Easy to install and very easy to use.",
    author: "MELANIE D.",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    title: "Best Thermostat",
    rating: 5,
    comment:
      "Our tech was amazing. Friendly, professional, and very knowledgeable.",
    author: "VALARIE S.",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    title: "Extremely nice",
    rating: 4,
    comment:
      "My installer was knowledgeable and treated my house with much respect and like it was his own.",
    author: "JACK R.",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    title: "Outstanding",
    rating: 5,
    comment:
      "Phenomenally well versed in home security and penultimate safety for the home occupant.",
    author: "KATIE W.",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    title: "Highly Recommend",
    rating: 5,
    comment:
      "The service was exceptional and the product exceeded my expectations.",
    author: "SUSAN M.",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    title: "Great Experience",
    rating: 4,
    comment:
      "From start to finish, the installation process was smooth and the product works great.",
    author: "MARK P.",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
];

const ReviewSlider = () => {
  const [current, setCurrent] = useState(0);

  const totalReviews = reviews.length;
  const cardsPerSlide = 4; // Number of cards to show at once

  // Show the next set of reviews
  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent + cardsPerSlide) % totalReviews);
  };

  // Show the previous set of reviews
  const prevSlide = () => {
    setCurrent(
      (prevCurrent) => (prevCurrent - cardsPerSlide + totalReviews) % totalReviews
    );
  };

  return (
    <div className="max-w-[80%] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Loved by Customers</h2>
      <div className="relative flex items-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          ←
        </button>

        {/* Review Cards */}
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / cardsPerSlide}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[calc(100%/4)] px-2"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    {/* Render Star Ratings */}
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-yellow-400 ${i < review.rating ? "★" : "☆"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                  <p className="text-gray-600 mb-4">{review.comment}</p>
                  <div className="flex items-center gap-2">
                    <img
                      src={review.avatar}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-800 font-medium">{review.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
