import React from "react";
import pic1 from '../assets/b12.avif';
import pic2 from '../assets/b12.avif';
import pic3 from '../assets/b12.avif';
const newsData = [
  {
    id: 1,
    date: "February 20 2023",
    title: "Working In Phases With Lighting And Audio",
    description:
      "Consider the purpose of the space, the mood you want to create, and the types of activities that will take...",
    imageUrl: pic1,
    link: "#",
  },
  {
    id: 2,
    date: "February 20 2023",
    title: "Introducing: A Lofty New Look For Smart Lighting",
    description:
      "3D Motion Detection also powers the all-new Bird's Eye View feature, which lets you see the exact path someone took...",
    imageUrl: pic2,
    link: "#",
  },
  {
    id: 3,
    date: "February 20 2023",
    title: "How To Improve Security In Your Home Office",
    description:
      "While there are many benefits to working from home, it's important to remember that your home office is just as...",
    imageUrl: pic3,
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <div className="max-w-[80%] mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
        <a href="#" className="text-blue-500 hover:underline">
          View all posts →
        </a>
      </div>
      <p className="text-gray-600 mb-8">
        If you're thinking about turning your home into a smart home, you're not alone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{news.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {news.title}
              </h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <a
                href={news.link}
                className="text-blue-500 hover:underline font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
