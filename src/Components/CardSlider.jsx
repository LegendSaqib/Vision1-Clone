import { useState } from 'react';
import pic1 from '../assets/speaker1.webp';
import pic2 from '../assets/speaker2.avif';
import pic3 from '../assets/projector.webp';
import pic4 from '../assets/projector1.avif';
import pic5 from '../assets/speaker1.webp';
import pic6 from '../assets/speaker1.webp';
import pic7 from '../assets/Thermostat1.avif';
import pic8 from '../assets/Thermostat.avif';

function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, title: 'Blue Dot (3rd Gen) Smart Speaker', image: pic1, hoverImage: pic2, price: 48.2, brand: 'CLEAR LINK', availableColors: ['red', 'green', 'blue'], stock: '9 in stock', features: ['Volume Control'], rating: 4.5 },
    { id: 2, title: 'Radius II Smart Portable Projector', image: pic3, hoverImage: pic4, price: 148.0, originalPrice: 192.0, brand: 'EVO SPHERE', availableColors: ['orange', 'yellow', 'black'], stock: 'Out of stock', features: ['Well Priced'], rating: 5.0 },
    { id: 3, title: 'Black Orange Learning Thermostat', image: pic5, hoverImage: pic6, price: 182.5, brand: 'CONNEX', availableColors: ['black', 'orange', 'white'], stock: 'In stock', features: ['Energy Star'] },
    { id: 4, title: 'Powerwave MagGo Black Wireless Charging Stand', image: pic7, hoverImage: pic8, price: 88.0, brand: 'ASSAULT', availableColors: ['black', 'gray'], stock: 'In stock', features: ['Wireless Charge'] },
    { id: 5, title: 'Smart Lamp A1', image: pic1, hoverImage: pic2, price: 25.5, brand: 'LUXE', availableColors: ['red', 'yellow'], stock: 'Out of stock', features: ['Touch Sensor'], rating: 4.0 },
    { id: 6, title: 'Air Purifier 3000', image: pic3, hoverImage: pic4, price: 95.0, brand: 'AIR ZONE', availableColors: ['white', 'blue'], stock: 'In stock', features: ['HEPA Filter'], rating: 4.8 },
    { id: 7, title: 'Cordless Vacuum Cleaner', image: pic5, hoverImage: pic6, price: 150.0, brand: 'CLEAN ZONE', availableColors: ['black', 'gray'], stock: 'In stock', features: ['Lightweight'], rating: 4.2 },
    { id: 8, title: 'Smart Security Camera', image: pic7, hoverImage: pic8, price: 120.0, brand: 'SECURITECH', availableColors: ['white'], stock: 'In stock', features: ['Night Vision'], rating: 4.7 },
  ];

  // Function to go to the next card
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Function to go to the previous card
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <h2 className="text-2xl font-bold mb-2 text-center">You may also like</h2>
      <p className="text-gray-500 mb-8 text-center">
        Combine your style with these products
      </p>

      {/* Product Slider */}
      <div className="relative group">

        {/* Carousel for both small and large screens */}
        <div className="flex items-center">

          {/* Left Button for carousel navigation */}
          <button onClick={prevSlide} className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700">
            &lt;
          </button>

          {/* Product cards slider */}
          <div className="w-full overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="flex-shrink-0 w-full sm:w-1/1 lg:w-1/4 p-4">
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group relative">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-0 transition-opacity duration-300"
                        />
                        <img
                          src={product.hoverImage}
                          alt={`${product.title} Hover`}
                          className="w-full h-48 object-cover rounded-t-lg absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                        
                        {/* View Product Button */}
                        <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 text-sm font-semibold rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                          View Product
                        </button>
                      </div>

                      <div className="p-4">
                        <p className="text-gray-600 mb-1">{product.brand}</p>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <p className="text-xl font-bold text-blue-500">${product.price.toFixed(2)}</p>
                          {product.originalPrice && (
                            <p className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</p>
                          )}
                        </div>
                        {product.rating && (
                          <div className="mt-2 flex items-center">
                            <span className="text-yellow-400 text-sm mr-1">★</span>
                            <span className="text-gray-600 text-sm">{product.rating}</span>
                          </div>
                        )}
                        <div className="flex items-center group">
                          <p className="text-gray-600 text-sm group-hover:hidden">
                            Available in {product.availableColors.length} colors
                          </p>
                          <div className="hidden group-hover:flex space-x-2">
                            {product.availableColors.map((color, index) => (
                              <div
                                key={index}
                                className="w-5 h-5 rounded-full border border-gray-300"
                                style={{ backgroundColor: color }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm mt-2 text-red-500">{product.stock}</p>
                        {product.features && (
                          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
                            {product.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-8">
                  <p className="text-lg text-gray-600">No products available at the moment</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Button for carousel navigation */}
          <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
