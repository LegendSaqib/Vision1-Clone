import { useState } from 'react';
import pic1 from '../assets/speaker1.webp';
import pic2 from '../assets/speaker2.avif';
import pic3 from '../assets/projector.webp';
import pic4 from '../assets/projector1.avif';
import pic5 from '../assets/speaker1.webp';
import pic6 from '../assets/speaker1.webp';
import pic7 from '../assets/Thermostat1.avif';
import pic8 from '../assets/Thermostat.avif';

function App() {
  const [products] = useState([
    // Product data
    {
      id: 1,
      title: 'Blue Dot (3rd Gen) Smart Speaker',
      image: pic1,
      hoverImage: pic2,
      price: 48.2,
      brand: 'CLEAR LINK',
      availableColors: ['red', 'green', 'blue'],
      stock: '9 in stock',
    },
    {
      id: 2,
      title: 'Radius II Smart Portable Projector',
      image: pic3,
      hoverImage: pic4,
      price: 148.0,
      brand: 'EVO SPHERE',
      availableColors: ['orange', 'yellow', 'black'],
      stock: 'Out of stock',
    },
    {
      id: 3,
      title: 'Black Orange Learning Thermostat',
      image: pic5,
      hoverImage: pic6,
      price: 182.5,
      brand: 'CONNEX',
      availableColors: ['black', 'orange', 'white'],
      stock: 'In stock',
    },
    {
      id: 4,
      title: 'Powerwave MagGo Black Wireless Charging Stand',
      image: pic7,
      hoverImage: pic8,
      price: 88.0,
      brand: 'ASSAULT',
      availableColors: ['black', 'gray'],
      stock: 'In stock',
    },
    {
        id: 5,
        title: 'Powerwave MagGo Black Wireless Charging Stand',
        image: pic7,
        hoverImage: pic8,
        price: 88.0,
        brand: 'ASSAULT',
        availableColors: ['black', 'gray'],
        stock: 'In stock',
      },
      {
        id: 6,
        title: 'Powerwave MagGo Black Wireless Charging Stand',
        image: pic7,
        hoverImage: pic8,
        price: 88.0,
        brand: 'ASSAULT',
        availableColors: ['black', 'gray'],
        stock: 'In stock',
      },
      {
        id: 7,
        title: 'Powerwave MagGo Black Wireless Charging Stand',
        image: pic7,
        hoverImage: pic8,
        price: 88.0,
        brand: 'ASSAULT',
        availableColors: ['black', 'gray'],
        stock: 'In stock',
      },
      {
        id: 8,
        title: 'Powerwave MagGo Black Wireless Charging Stand',
        image: pic7,
        hoverImage: pic8,
        price: 88.0,
        brand: 'ASSAULT',
        availableColors: ['black', 'gray'],
        stock: 'In stock',
      },
      
  ]);

  const [filters, setFilters] = useState({
    availability: 'all',
    brand: '',
    price: [0, 300],
    colors: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Apply filters
  const applyFilters = (products) => {
    return products.filter((product) => {
      const inStockFilter =
        filters.availability === 'all' ||
        (filters.availability === 'in-stock' && product.stock !== 'Out of stock') ||
        (filters.availability === 'out-of-stock' && product.stock === 'Out of stock');

      const brandFilter = filters.brand === '' || product.brand === filters.brand;

      const priceFilter =
        product.price >= filters.price[0] && product.price <= filters.price[1];

      const colorFilter =
        filters.colors.length === 0 ||
        filters.colors.some((color) => product.availableColors.includes(color));

      return inStockFilter && brandFilter && priceFilter && colorFilter;
    });
  };

  const filteredProducts = applyFilters(products);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
    setCurrentPage(1);
  };

  const handleColorFilterChange = (color) => {
    setFilters((prevFilters) => {
      const updatedColors = prevFilters.colors.includes(color)
        ? prevFilters.colors.filter((c) => c !== color)
        : [...prevFilters.colors, color];

      return { ...prevFilters, colors: updatedColors };
    });
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row">
      {/* Filter Panel */}
      <div className="lg:w-1/4 w-full bg-gray-100 p-4 rounded-lg shadow-md mb-6 lg:mb-0">
        <h3 className="text-xl font-bold mb-4">Filters</h3>

        {/* Availability Filter */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Availability</h4>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.availability}
            onChange={(e) => handleFilterChange('availability', e.target.value)}
          >
            <option value="all">All</option>
            <option value="in-stock">In Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Brand</h4>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
          >
            <option value="">All</option>
            <option value="CLEAR LINK">CLEAR LINK</option>
            <option value="EVO SPHERE">EVO SPHERE</option>
            <option value="CONNEX">CONNEX</option>
            <option value="ASSAULT">ASSAULT</option>
          </select>
        </div>

        {/* Color Filter */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Colors</h4>
          <div className="flex flex-wrap gap-2">
            {['red', 'green', 'blue', 'black', 'orange', 'white', 'gray', 'yellow'].map(
              (color) => (
                <label key={color} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => handleColorFilterChange(color)}
                  />
                  <span className="capitalize">{color}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="lg:w-3/4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group relative"
            >
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
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.brand}</p>
                <p className="text-blue-500 text-xl font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 mx-1 border rounded ${
                currentPage === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
