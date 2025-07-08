import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cards from "../Components/Cards.jsx";
import pic1 from "../assets/v-blue-1.avif";
import pic2 from "../assets/v-blue-2.avif";
import pic3 from "../assets/v-blue-3.avif";
import pic4 from "../assets/p1.webp";
import pic5 from "../assets/p1-2.avif";
import pic6 from "../assets/p1-1.webp";
import pic7 from "../assets/v-green-1.avif";
import pic8 from "../assets/v-green-2.avif";
import pic9 from "../assets/v-green-3.avif";

import {
  FaShippingFast,
  FaExchangeAlt,
  FaCreditCard,
  FaTag,
  FaShoppingCart,
} from "react-icons/fa";
import ProductCompo1 from "../Components/ProuctCompo1";
import SmartSection from "../Components/SmartSection.jsx";
import TechSpecs from "../Components/TechSpecs.jsx";
import FAQSection from "../Components/AskQuestions.jsx";

const Product1 = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedStyle, setSelectedStyle] = useState("Style 1");

  const colorImages = {
    blue: [pic1, pic2, pic3],
    red: [pic4, pic5, pic6],
    green: [pic7, pic8, pic9],
  };

  const styles = ["Style 2", "Style 3", "Style 4"];
  const images = colorImages[selectedColor];

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Section */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-lg cursor-pointer ${
                  selectedImage === index ? "ring-2 ring-blue-500" : ""
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative">
            <img
              src={images[selectedImage]}
              alt="Selected"
              className="w-[500px] rounded-lg"
            />
            {/* Additional Text Below Main Image */}
            <div className="mt-4 text-sm text-gray-700 space-y-3">
              <div className="flex items-center bg-gradient-to-r from-gray-200 to-gray-400 p-3 rounded-2xl shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p>
                  Upgrade your everyday peephole to a motion-detecting, two.
                </p>
              </div>

              <div className="flex items-center bg-gradient-to-r from-gray-200 to-gray-400 p-3 rounded-2xl shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 0a9 9 0 100 0z"
                  />
                </svg>
                <p>Peephole Cam sets up or comes down in minutes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <span className="px-2 py-1 border text-[12px] border-ne rounded">
            Premium Zoom
          </span>

          <div className="space-y-2 mt-4">
            <h1 className="text-2xl font-bold">
              Smart Video Doorbell -{" "}
              {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
            </h1>
            <p className="text-gray-600">$249.00</p>
            <p>Tax included. Shipping calculated at checkout.</p>
          </div>

          {/* Horizontal Line */}
          <hr className="my-4 border-t border-gray-300" />

          {/* Colors Section */}
          <div className="my-4">
            <label className="font-semibold text-gray-700">
              Colors: <span className="font-semibold">{selectedColor}</span>
            </label>
            <div className="flex items-center gap-4 mt-2">
              {Object.keys(colorImages).map((color, index) => (
                <img
                  key={index}
                  src={colorImages[color][0]}
                  alt={`${color} color`}
                  onClick={() => {
                    setSelectedColor(color);
                    setSelectedImage(0);
                  }}
                  className={`w-10 h-10 rounded-full border-2 cursor-pointer ${
                    selectedColor === color
                      ? "ring-2 ring-blue-500 border-black"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Styles Section */}
          <div className="my-4">
            <label className="font-semibold text-gray-700">
              Style: <span className="font-semibold">{selectedStyle}</span>
            </label>
            <div className="flex items-center gap-2 mt-2">
              {styles.map((style, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-2 py-2 border rounded-lg cursor-pointer ${
                    selectedStyle === style
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-gray-200 text-black border-gray-300"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Section */}
          <div>
            <h3 className="text-lg font-semibold">Quantity:</h3>
            <div className="flex items-center gap-4 mt-2">
              <button className="bg-gray-200 px-4 py-2 rounded-lg">-</button>
              <span>1</span>
              <button className="bg-gray-200 px-4 py-2 rounded-lg">+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex mt-6 gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="border px-6 py-3 rounded-lg">Buy Now</button>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <FaShippingFast className="text-blue-500" />
              <p className="text-sm text-gray-600">
                Free shipping on all U.S. orders of $40+
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaExchangeAlt className="text-blue-500" />
              <p className="text-sm text-gray-600">
                Free returns and exchanges
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCreditCard className="text-blue-500" />
              <p className="text-sm text-gray-600">
                Secure checkout: We accept major credit cards.
              </p>
            </div>
            <p>
              Smart Video Doorbell offers an easy and convenient way to safely
              monitor your home with the largest field of view on the market,*
              HD video, and secure recording capabilities.
            </p>
            <p>This demo store does not offer goods for purchase.</p>
          </div>

          {/* Discount Section */}
          <div className="bg-green-100 p-4 rounded-lg flex items-center gap-4">
            <FaTag className="text-green-500 text-2xl" />
            <div>
              <p className="text-sm font-semibold text-gray-700">
                Slash $40 off. Your wallet will thank you.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-gray-200 px-4 py-1 rounded-md text-gray-800">
                  VISION2025FT
                </span>
                <button
                  className="text-blue-500 text-sm underline"
                  onClick={() => navigator.clipboard.writeText("VISION2025FT")}
                >
                  Copy code
                </button>
              </div>
            </div>
          </div>
          {/* Accordion Sections */}
          <div className="mt-6 space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Product specifications
              </summary>
              <table className="mt-3 w-full text-sm text-gray-600 border-collapse">
                <tbody>
                  <tr>
                    <td className="font-medium border border-gray-300 rounded-lg py-2 px-4">
                      Model number
                    </td>
                    <td className="border border-gray-300 rounded-lg py-2 px-4">
                      L12SFGEVQ3
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium border border-gray-300 rounded-lg py-2 px-4">
                      Color
                    </td>
                    <td className="border border-gray-300  py-2 px-4 flex items-center space-x-2">
                      <div
                        className="w-6 h-6 rounded-full border"
                        style={{ backgroundColor: "black" }} // Replace 'black' with the desired color
                      ></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium border border-gray-300 rounded-lg py-2 px-4">
                      Weight
                    </td>
                    <td className="border border-gray-300 rounded-lg py-2 px-4">
                      1.5 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium border border-gray-300 rounded-lg py-2 px-4">
                      Dimensions
                    </td>
                    <td className="border border-gray-300 rounded-lg py-2 px-4">
                      220 mm x 76 mm x 39 mm
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium border border-gray-300 rounded-lg py-2 px-4">
                      Warranty
                    </td>
                    <td className="border border-gray-300 rounded-lg py-2 px-4">
                      3 years
                    </td>
                  </tr>
                </tbody>
              </table>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Shipping & Returns
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Make sure to read and understand the return policy before making
                a purchase. Some stores offer free returns, while others may
                charge a restocking fee or only accept returns for certain
                items.
              </p>
            </details>
            <details className="border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                Compatibility
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                The connectivity options of your device are also essential to
                consider. For example, if you're purchasing a printer, you need
                to ensure that it is compatible with your computer's
                connectivity options, such as USB, Bluetooth, or Wi-Fi.
              </p>
            </details>
          </div>

          {/* Social Sharing Section */}
          <div className="mt-6 flex items-center gap-4">
            <p className="font-semibold text-gray-700">Share:</p>
            <div className="flex gap-2 text-gray-500">
              <i className="fab fa-facebook-f cursor-pointer"></i>
              <i className="fab fa-twitter cursor-pointer"></i>
              <i className="fab fa-pinterest-p cursor-pointer"></i>
              <i className="fab fa-envelope cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

      {/* // Video Section */}
      <section className=" my-10">
        <div
          className="relative rounded-2xl mt-10 mx-auto"
          style={{
            height: "50vh",
            width: "80vw",
          }}
        >
          <iframe
            className="absolute rounded-2xl top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1"
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <div className="absolute top-0 rounded left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-lg font-bold">Your Content Here</h1>
          </div>
        </div>
      </section>

      <div>
        <ProductCompo1 />
      </div>

      <section className="my-16">
      <div className="max-w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto items-start">
  <div className="flex flex-col items-start">
    <div className="text-blue-500 text-4xl mb-2">
      <i className="fas fa-microphone"></i> {/* Replace with your preferred icon */}
    </div>
    <h3 className="text-lg font-semibold mb-2">Voice Assistant</h3>
    <p className="text-sm text-gray-600">
      Research your appliances and language capabilities to be sure the
      voice assistant you choose works with your household’s needs.
    </p>
  </div>
  <div className="flex flex-col items-start">
    <div className="text-blue-500 text-4xl mb-2">
      <i className="fas fa-bell"></i> {/* Replace with your preferred icon */}
    </div>
    <h3 className="text-lg font-semibold mb-2">Safety Alerts</h3>
    <p className="text-sm text-gray-600">
      Research your appliances and language capabilities to be sure the
      voice assistant you choose works with your household’s needs.
    </p>
  </div>
  <div className="flex flex-col items-start">
    <div className="text-blue-500 text-4xl mb-2">
      <i className="fas fa-link"></i> {/* Replace with your preferred icon */}
    </div>
    <h3 className="text-lg font-semibold mb-2">Connected Devices</h3>
    <p className="text-sm text-gray-600">
      Research your appliances and language capabilities to be sure the
      voice assistant you choose works with your household’s needs.
    </p>
  </div>
</div>

      </section>

<div className="">
  <SmartSection/>
</div>

<div className="my-16" >

<TechSpecs/>

</div>

<div>
  <FAQSection/>
</div>
      <div>
        <Cards />
      </div>

   
    </>
  );
};

export default Product1;
