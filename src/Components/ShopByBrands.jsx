import React from 'react';
import pic1 from '../assets/logo-01.webp';
import pic2 from '../assets/logo-02.webp';
import pic3 from '../assets/logo-03.webp';
import pic4 from '../assets/logo-04.webp';
import pic5 from '../assets/logo-05.webp';
import pic6 from '../assets/logo-06.webp';

const ShopByBrands = () => {
  return (
    <div className="container max-w-[80%] mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Shop by Brands</h2>
      <p className="text-gray-500 mb-8">Add a short description for this section</p>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-white rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-4">
          <img src={pic1} alt="Connex" className="w-24 h-24 mx-auto" />
        </div>
        <div className="bg-white rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-4">
          <img src={pic2} alt="Drifly" className="w-24 h-24 mx-auto" />
        </div>
        <div className="bg-white rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-4">
          <img src={pic3} alt="Primus" className="w-24 h-24 mx-auto" />
        </div>
        <div className="bg-white rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-4">
          <img src={pic4} alt="Rous" className="w-24 h-24 mx-auto" />
        </div>
        <div className="bg-white rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-4">
          <img src={pic5} alt="Sphere" className="w-24 h-24 mx-auto" />
        </div>
        <div className="bg-white rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.2)] p-4">
          <img src={pic6} alt="Noise" className="w-24 h-24 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ShopByBrands;
