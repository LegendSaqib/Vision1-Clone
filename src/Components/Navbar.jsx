import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaBars, FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaShoppingCart } from "react-icons/fa";
import { FiUser, FiSearch } from "react-icons/fi";
import pic1 from '../assets/p15.webp';
import pic2 from '../assets/p7.webp';
import pic3 from '../assets/p3.webp';

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu state

  const slides = [
    "Free shipping on all orders over $60",
    "Holiday deals are live now!",
    "New arrivals in stock!",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [hoveredItem, setHoveredItem] = useState(null);

  const content = {
    cameras: [
      { 
        title: "Camera 1", 
        description: "High-quality security camera", 
        img: pic1, 
        link: '/product1'  , 
      },
      { 
        title: "Camera 2", 
        description: "Wireless indoor camera", 
        img: pic1, 
        link: '/product1'  , 
      },
      { 
        title: "Camera 3", 
        description: "Outdoor surveillance camera", 
        img: pic1,  
        link: '/product1'  , 
      },
      { 
        title: "Camera 4", 
        description: "Smart night-vision camera", 
        img: pic1, 
        link: '/product1'  ,  
      },
    ],
    lightings: [
      { 
        title: "Light 1", 
        description: "Smart LED light", 
        img: pic2, 
        link: '/product1'  , 
      },
      { 
        title: "Light 2", 
        description: "Color-changing bulb", 
        img: pic2, 
        link: '/product1'  ,  
      },
      { 
        title: "Light 3", 
        description: "Motion-sensor lighting", 
        img: pic2, 
        link: '/product1'  ,  
      },
      { 
        title: "Light 4", 
        description: "Energy-efficient lighting", 
        img: pic2,
        link: '/product1'  , 
      },
    ],
    products: [
      { 
        title: "Product 1", 
        description: "Smart thermostat", 
        img: pic3,
        link: '/product1'  , 
      },
      { 
        title: "Product 2", 
        description: "Smart speaker", 
        img: pic3,
        link: '/product1'  ,  
      },
      { 
        title: "Product 3", 
        description: "Smart door lock", 
        img: pic3,
        link: '/product1'  , 
      },
      { 
        title: "Product 4", 
        description: "Smart home hub", 
        img: pic3,
        link: '/product1'  , 
      },
    ],
  };
  

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false); // State for Features dropdown

 
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  

  const [selectedTag, setSelectedTag] = useState(null);
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsFeaturesOpen(false);
    setIsShopOpen(false);
    setIsSecurityOpen(false);
    setIsAccessoriesOpen(false);
  };
  return (
    <div className="w-full">
      {/* Row 1: Top Bar with Slider */}
      <div className="bg-blue-500 text-white py-2 text-center relative w-full">
        <div className="overflow-hidden mx-auto max-w-screen-xl">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full flex justify-center items-center">
                <p>{slide}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-blue-700 p-2 rounded-full hover:bg-blue-600"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-blue-700 p-2 rounded-full hover:bg-blue-600"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Row 2: Navigation Links */}
      <div className="hidden md:block w-full bg-gray-100">
        <div className="flex items-center justify-between px-4 sm:px-8 py-2 mx-auto max-w-screen-xl">
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/" className="text-gray-600 hover:text-black">About</Link>
            <Link to="/blog" className="text-gray-600 hover:text-black">Blog</Link>
            <Link to="/#" className="text-gray-600 hover:text-black">Support</Link>
            <Link to="/#" className="text-gray-600 hover:text-black">F.A.Q.</Link>
            <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
          </div>
        </div>
      </div>

      {/* Row 3: Logo, Search Box, and Hamburger Menu */}
      <div
        className={`w-full bg-white shadow-md transition-all duration-300 ${
          isSticky ? "fixed top-0 z-50" : ""
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-8 py-4 mx-auto max-w-screen-xl">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-600"
          >
            <FaBars />
          </button>

          {/* Logo */}
          <Link to="/" className="font-bold text-2xl text-black">VISION</Link>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for anything"
                className="rounded-lg py-2 pl-10 pr-4 text-sm border"
              />
              <FiSearch className="absolute left-3 top-2/4 transform -translate-y-2/4 text-gray-600" />
            </div>
            <Link to="#" className="text-gray-600 hover:text-black text-xl"><FiUser /></Link>
            <Link to="/cart" className="text-gray-600 hover:text-black text-xl"><FaShoppingCart /></Link>
          </div>
        </div>
      </div>

      {/* Row 4: Features and Links */}
<div
  className={`w-full hidden sm:block bg-gray-100 mx-auto shadow-md transition-all duration-300 ${
    isSticky ? "fixed top-14 z-40" : ""
  }`}
>
  <div className="flex items-center justify-between px-4 sm:px-8 py-4 mx-auto max-w-screen-xl">
    {/* Features Dropdown */}
    <div className="flex items-center space-x-6 text-sm">
      <div className="relative group">
        <button className="text-gray-600 hover:text-black">Features</button>
        <div className="hidden absolute left-0 w-40 bg-white z-30 rounded-lg pt-2 shadow-lg group-hover:block">
          <Link to="/product1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Sibling Products
          </Link>
          <Link to="/product1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Variant Image Set
          </Link>
          <Link to="/product1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Pre-Order
          </Link>
          <Link to="/product1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Gift Card
          </Link>
        </div>
      </div>

      {/* Shop Dropdown */}
      <div className="relative group flex">
      {/* Shop Button */}
      <button className="text-gray-600 hover:text-black">Shop</button>

      {/* Dropdown Menu */}
      <div className="hidden lg:w-screen lg:-ml-[235px] absolute z-30 left-0 bg-white shadow-lg group-hover:block">
        <div className="flex ml-40">
          {/* Menu Links */}
          <div className="w-48">
            <Link
              
              onMouseEnter={() => setHoveredItem("cameras")}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Smart Cameras
            </Link>
            <Link
             
              onMouseEnter={() => setHoveredItem("lightings")}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Lightings
            </Link>
            <Link
            
              onMouseEnter={() => setHoveredItem("products")}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Smart Products
            </Link>
          </div>

    {/* Right-Side Cards */}
{hoveredItem && (
  <div className="w-[80%] p-4 bg-gray-50 shadow-md grid grid-cols-4 gap-4">
    {content[hoveredItem].map((item, index) => (
      <Link 
        key={index} 
        to={item.link} 
        className="p-3 bg-white shadow rounded-md hover:shadow-lg transition-shadow"
      >
        <img 
          src={item.img} 
          alt={item.title} 
          className="rounded-md w-full h-32 object-cover" 
        />
        <h3 className="text-md font-semibold mt-2">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </Link>
    ))}
  </div>
)}

        </div>
      </div>
    </div>

      {/* Doorbells */}
      <Link to="/doorbells" className="text-gray-600 hover:text-black">Doorbells</Link>

      {/* Security Dropdown */}
      <div className="relative group">
        <button className="text-gray-600 hover:text-black">Security</button>
        <div className="hidden w-40 pt-5 absolute left-0 z-30 bg-white shadow-lg group-hover:block">
          <Link to="/doorbells" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Security 1
          </Link>
          <Link to="/doorbells" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Security 2
          </Link>
        </div>
      </div>

   {/* Accessories Dropdown */}
<div className="relative group">
  <button className="text-gray-600 hover:text-black">Accessories</button>
  <div className="lg:hidden absolute z-30 w-screen  lg:-ml-[450px] left-0 bg-white shadow-lg group-hover:block  p-4 rounded-md">
    <div className="grid max-w-[80%] mx-auto grid-cols-4 gap-4">
      {/* Card 1 */}
   <Link to='/accessories'>
   <div  className="p-3 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow">
        <img src={pic1} alt="Accessory 1" className="w-full h-44 object-cover rounded-md" />
        <h3 className="text-sm font-semibold mt-2">Accessory 1</h3>
        <p className="text-xs text-gray-600">Description of Accessory 1</p>
      </div>
   </Link>

      {/* Card 2 */}
      <Link to='/accessories'>
      <div className="p-3 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow">
        <img src={pic2} alt="Accessory 2" className="w-full h-44 object-cover rounded-md" />
        <h3 className="text-sm font-semibold mt-2">Accessory 2</h3>
        <p className="text-xs text-gray-600">Description of Accessory 2</p>
      </div>
      </Link>
      {/* Card 3 */}
      <Link to='/accessories'>
      <div className="p-3 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow">
        <img src={pic3} alt="Accessory 3" className="w-full h-44 object-cover rounded-md" />
        <h3 className="text-sm font-semibold mt-2">Accessory 3</h3>
        <p className="text-xs text-gray-600">Description of Accessory 3</p>
      </div>
      </Link>
      {/* Card 4 */}
      <Link to='/accessories'>
      <div className="p-3 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow">
        <img src={pic2} alt="Accessory 4" className="w-full h-44 object-cover rounded-md" />
        <h3 className="text-sm font-semibold mt-2">Accessory 4</h3>
        <p className="text-xs text-gray-600">Description of Accessory 4</p>
      </div>
      </Link>
    </div>
  </div>
</div>


      {/* Journal */}
      <Link to="/blog" className="text-gray-600 hover:text-black">Journal</Link>
    </div>

    {/* Additional Links */}
    <div className="flex items-center space-x-6 text-sm">
      <Link to="/ourstory" className="text-gray-600 hover:text-black">Our Story</Link>
      <Link to="#" className="text-gray-600 hover:text-black">Vendors</Link>
      <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
    </div>
  </div>
</div>


      {/* Responsive Row 4 */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {/* Features Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="text-gray-600 hover:text-black flex justify-between items-center w-full"
              >
                Features
                <span>{isFeaturesOpen ? "▲" : "▼"}</span>
              </button>
              {isFeaturesOpen && (
                <div className="absolute left-0 w-40 bg-white z-30 rounded-lg shadow-lg">
                  <Link
                    to="/product1"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Sibling Products
                  </Link>
                  <Link
                    to="/product1"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Variant Image Set
                  </Link>
                  <Link
                    to="/product1"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Pre-Order
                  </Link>
                  <Link
                    to="/product1"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Gift Card
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
      {/* Shop Button */}
      <button
        onClick={() => setIsShopOpen(!isShopOpen)}
        className="text-gray-600 hover:text-black flex justify-between items-center w-full px-4 py-2"
      >
        Shop
        <span>{isShopOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Tags */}
      {isShopOpen && (
        <div className=" left-0 w-full bg-white z-30 rounded-lg shadow-lg">
          <Link
            to="#"
            onClick={() => handleTagClick("cameras")}
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Smart Cameras
          </Link>
          <Link
            to="#"
            onClick={() => handleTagClick("lightings")}
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Lightings
          </Link>
          <Link
            to="#"
            onClick={() => handleTagClick("products")}
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Smart Products
          </Link>
        </div>
      )}

     {/* Cards Section */}
{selectedTag && (
  <div className="w-full p-4 bg-gray-50 shadow-md grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
    {content[selectedTag].map((item, index) => (
      <Link
        key={index}
        to={item.link} // Ensure item.link contains a valid path
        
        onClick={() => {
          handleLinkClick(); // Close cards
          handleTagClick("products"); // Set selected tag
        }}// Close the dropdown when a card is clicked
        className="p-3 bg-white shadow rounded-md hover:shadow-lg transition-shadow transform hover:scale-105"
      >
        <img
          src={item.img}
          alt={item.title}
          className="rounded-md w-full h-32 object-cover"
        />
        <h3 className="text-md font-semibold mt-2">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </Link>
    ))}
  </div>
)}

    </div>

            <Link
              to="/doorbells"
              onClick={handleLinkClick}
              className="text-gray-600 hover:text-black"
            >
              Doorbells
            </Link>

            {/* Security Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSecurityOpen(!isSecurityOpen)}
                className="text-gray-600 hover:text-black flex justify-between items-center w-full"
              >
                Security
                <span>{isSecurityOpen ? "▲" : "▼"}</span>
              </button>
              {isSecurityOpen && (
                <div className="absolute left-0 w-40 bg-white z-30 rounded-lg shadow-lg">
                  <Link
                    to="/doorbells"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Security 1
                  </Link>
                  <Link
                    to="/accessories"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    Security 2
                  </Link>
                </div>
              )}
            </div>

            {/* Accessories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAccessoriesOpen(!isAccessoriesOpen)}
                className="text-gray-600 hover:text-black flex justify-between items-center w-full"
              >
                Accessories
                <span>{isAccessoriesOpen ? "▲" : "▼"}</span>
              </button>
              {isAccessoriesOpen && (
               <div className="lg:hidden  -ml-4 z-30 w-screen  lg:-ml-[450px] left-0 bg-white shadow-lg group-hover:block  p-4 rounded-md">
               <div className="grid  lg:max-w-[80%] mx-auto grid-cols-2 gap-1">
                 {/* Card 1 */}
                 
              <Link to='/accessories' onClick={handleLinkClick}>
              <div  className=" bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow">
                   <img src={pic1} alt="Accessory 1" className="w-full h-44 object-cover rounded-md" />
                   <h3 className="text-sm font-semibold mt-2">Accessory 1</h3>
                   <p className="text-xs text-gray-600">Description of Accessory 1</p>
                 </div>
              </Link>
           
                 {/* Card 2 */}
                 <Link to='/accessories'
                 onClick={handleLinkClick}>
                 <div className="p-3 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow">
                   <img src={pic2} alt="Accessory 2" className="w-full h-44 object-cover rounded-md" />
                   <h3 className="text-sm font-semibold mt-2">Accessory 2</h3>
                   <p className="text-xs text-gray-600">Description of Accessory 2</p>
                 </div>
                 </Link>
                 {/* Card 3 */}
                 <Link to='/accessories'
                 onClick={handleLinkClick}>
                 <div className="p-3 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow">
                   <img src={pic3} alt="Accessory 3" className="w-full h-44 object-cover rounded-md" />
                   <h3 className="text-sm font-semibold mt-2">Accessory 3</h3>
                   <p className="text-xs text-gray-600">Description of Accessory 3</p>
                 </div>
                 </Link>
                 {/* Card 4 */}
                 <Link to='/accessories'
                 onClick={handleLinkClick}>
                 <div className="p-3 bg-gray-100 rounded-md shadow hover:shadow-lg transition-shadow">
                   <img src={pic2} alt="Accessory 4" className="w-full h-44 object-cover rounded-md" />
                   <h3 className="text-sm font-semibold mt-2">Accessory 4</h3>
                   <p className="text-xs text-gray-600">Description of Accessory 4</p>
                 </div>
                 </Link>
               </div>
             </div>
              )}
            </div>

            {/* Journal Link */}
            <Link
              to="/blog"
              onClick={handleLinkClick}
              className="text-gray-600 hover:text-black"
            >
              Journal
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
