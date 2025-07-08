import React from 'react'
import HomeSlider1 from '../Components/HomeSlider1'
import pic from '../assets/promotion-1.webp';
import CardSlider from '../Components/CardSlider';
import AutomateLife from '../Components/AutomateLife';
import pic1 from '../assets/doorbells.webp';
import pic2 from '../assets/Thermostat1.avif';
import pic3 from '../assets/watch.webp';
import pic4 from '../assets/camera.webp';
import pic5 from '../assets/speakers.webp';
import SlideComponent from '../Components/SlideComponent';
import ShopByBrands from '../Components/ShopByBrands';
import SmartHome2 from '../Components/SmartHome2';
import BadgeSection from '../Components/BadgeSection';
import Review from '../Components/Review';
import ReviewSlider from '../Components/Review';
import NewsSection from '../Components/NewsSection';


const Home = () => {
  return (
  <>
  
  <div>
    <HomeSlider1/>
  </div>

  <section>
  <div className="lg:max-w-[85%] mx-auto flex flex-wrap justify-center space-x-4 space-y-4 lg:space-x-8 lg:space-y-0">
  {/* 1st Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-full lg:w-[30%]">
    <div className="flex lg:flex-row items-center p-4">
      <div className="text-left">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Up to 50% off on accessories</h3>
        <div className="mt-2">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Show Now
          </button>
        </div>
      </div>
      <img src={pic} alt="Accessory" className="w-24 h-24 object-cover rounded-md mt-4 lg:mt-0 lg:mr-4" />
    </div>
  </div>

  {/* 2nd Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-full lg:w-[30%]">
    <div className="flex  lg:flex-row items-center p-4">
      <div className="text-left">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Use automation to save energy</h3>
        <div className="mt-2">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Show Now
          </button>
        </div>
      </div>
      <img src={pic} alt="Accessory" className="w-24 h-24 object-cover rounded-md mt-4 lg:mt-0 lg:mr-4" />
    </div>
  </div>

  {/* 3rd Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-full lg:w-[30%]">
    <div className="flex  lg:flex-row items-center p-4">
      <div className="text-left">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Enjoy a greater level of home security</h3>
        <div className="mt-2">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Show Now
          </button>
        </div>
      </div>
      <img src={pic} alt="Accessory" className="w-24 h-24 object-cover rounded-md mt-4 lg:mt-0 lg:mr-4" />
    </div>
  </div>
</div>

  </section>
  
<div>
    <CardSlider/>
</div>

<div>
    <AutomateLife/>
</div>

{/* New Section */}
<section >
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-[80%] mx-auto gap-4">
  <div className="border rounded-md p-4 flex flex-col items-center">
    <img src={pic1} alt="Doorbell" className="w-full h-auto object-contain" />
    <p className="mt-2 text-center font-bold">Doorbells</p>
  </div>
  <div className="border rounded-md p-4 flex flex-col items-center">
    <img src={pic2} alt="Thermostat" className="w-full h-auto object-contain" />
    <p className="mt-2 text-center font-bold">Thermostats</p>
  </div>
  <div className="border rounded-md p-4 flex flex-col items-center">
    <img src={pic3} alt="Smartwatch" className="w-full h-auto object-contain" />
    <p className="mt-2 text-center font-bold">Smartwatches</p>
  </div>
  <div className="border rounded-md p-4 flex flex-col items-center">
    <img src={pic4} alt="Camera" className="w-full h-auto object-contain" />
    <p className="mt-2 text-center font-bold">Cameras</p>
  </div>
  <div className="border rounded-md p-4 flex flex-col items-center">
    <img src={pic5} alt="Speaker" className="w-full h-auto object-contain" />
    <p className="mt-2 text-center font-bold">Speakers</p>
  </div>
</div>

</section>

<div>
    <SlideComponent/>
</div>

<div>
    <ShopByBrands/>
</div>

<div>
  <SmartHome2/>
</div>

<div>
  <BadgeSection/>
</div>

<div>
  <ReviewSlider/>
</div>

<div>
  <NewsSection/>
</div>

<section>
<div className="flex lg:flex lg:flex-row flex-col lg:max-w-[80%] lg:mx-auto justify-between gap-16 p-4 lg:p-10">
      <div className="flex flex-col lg:items-start items-center">
        <div className="w-16 h-16 bg-blue-400 rounded-lg"></div>
        <h3 className="font-bold mt-4">30-day Home Trial</h3>
        <p className="text-sm text-gray-500 mt-2">
          Take advantage of a 30-day trial and make the most informed decision
          possible.
        </p>
      </div>
      <div className="flex flex-col lg:items-start items-center">
        <div className="w-16 h-16 bg-green-300 rounded-lg"></div>
        <h3 className="font-bold mt-4">Secure Payment</h3>
        <p className="text-sm text-gray-500 mt-2">
          Our website uses the latest encryption technology to protect your data.
        </p>
      </div>
      <div className="flex flex-col lg:items-start items-center">
        <div className="w-16 h-16 bg-red-400 rounded-lg"></div>
        <h3 className="font-bold mt-4">Professional Installation</h3>
        <p className="text-sm text-gray-500 mt-2">
          Company, we believe that professional installation is key.
        </p>
      </div>
      <div className="flex flex-col lg:items-start items-center">
        <div className="w-16 h-16 bg-yellow-400 rounded-lg"></div>
        <h3 className="font-bold mt-4">2-year Warranty</h3>
        <p className="text-sm text-gray-500 mt-2">
          Our warranty covers defects in materials, so you can feel confident
          that.
        </p>
      </div>
    </div>
</section>

  </>
  )
}

export default Home