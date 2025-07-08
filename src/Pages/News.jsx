import { useState } from 'react';

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  // Articles for Page 1
  const articlesPage1 = [
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Working In Phases With Lighting And Audio',
      description: 'Consider the purpose of the phases, the most you need to illuminate, and the type of activities involved.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Introducing: A Lofty New Look For Smart Lighting',
      description: '22-Volt Calibration will give you that extra boost.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'How To Improve Security In Your Home Office',
      description: 'While there are many benefits to working from home, it is important to remember that your home office...',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Virtual Security Guard: Bringing The Power Of Professional Monitoring To Your Cameras',
      description: 'In this automation, you’ll send a message to a device when a battery of any device is less...',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Protect Your Kids Before, During, and After Class With These School Safety Tips',
      description: 'Underpasses and overpasses require regular maintenance updates to ensure existing infrastructure is properly...',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Security Cameras, Why Get Them For Your Home?',
      description: 'Smart home systems rely on multiple smart home devices and technologies, including...',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Security Cameras, Why Get Them For Your Home?',
      description: 'Smart home systems rely on multiple smart home devices and technologies, including...',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Security Cameras, Why Get Them For Your Home?',
      description: 'Smart home systems rely on multiple smart home devices and technologies, including...',
      link: '#',
    },
  ];

  // Articles for Page 2
  const articlesPage2 = [
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'The Future of Smart Homes',
      description: 'Discover what the future holds for smart home technology.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Maximizing Your Home Security',
      description: 'Learn about the best tips and tools for home security.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Smart Home Automation: A Game Changer',
      description: 'How automation will change your living spaces forever.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'The Rise of Artificial Intelligence in Security',
      description: 'How AI is shaping the future of home security.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Best Smart Cameras for Your Home',
      description: 'A guide to selecting the right cameras for your home security.',
      link: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200.png',
      title: 'Home Office: The Best Security Systems for Productivity',
      description: 'Keep your home office safe while improving productivity with smart systems.',
      link: '#',
    },
  ];

  // Logic to group cards into rows for the current page
  const renderCards = () => {
    const articles = currentPage === 1 ? articlesPage1 : articlesPage2;

    return (
      <>
        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {articles.slice(0, 3).map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 rounded-lg object-cover mb-2"
              />
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm">{article.description}</p>
              <a href={article.link} className="text-blue-500 hover:underline">
                Read more...
              </a>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {articles.slice(3, 5).map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 rounded-lg object-cover mb-2"
              />
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm">{article.description}</p>
              <a href={article.link} className="text-blue-500 hover:underline">
                Read more...
              </a>
            </div>
          ))}
        </div>

        {/* Third Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.slice(5, 8).map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 rounded-lg object-cover mb-2"
              />
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm">{article.description}</p>
              <a href={article.link} className="text-blue-500 hover:underline">
                Read more...
              </a>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>

      {/* Render cards */}
      {renderCards()}

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCurrentPage(1)}
          className={`mx-2 px-4 py-2 rounded-lg ${
            currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`mx-2 px-4 py-2 rounded-lg ${
            currentPage === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          2
        </button>
      </div>
    </div>
  );
}

export default Blog;
