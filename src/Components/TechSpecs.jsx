import React, { useState } from "react";

const TechSpecs = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="bg-gray-50 py-8 px-4 md:px-12 w-[80%] mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Tech Specs</h2>

      {/* Tabs */}
      <div className="flex space-x-8 border-b">
        <button
          className={`pb-2 ${activeTab === "general" ? "border-b-2 border-black" : "text-gray-400"} font-medium`}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>
        <button
          className={`pb-2 ${activeTab === "installation" ? "border-b-2 border-black" : "text-gray-400"} font-medium`}
          onClick={() => setActiveTab("installation")}
        >
          Installation
        </button>
        <button
          className={`pb-2 ${activeTab === "specifications" ? "border-b-2 border-black" : "text-gray-400"} font-medium`}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === "general" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 text-gray-600">
          {/* 1. Professional Monitoring */}
          <div>
            <h3 className="font-bold text-gray-800">Professional monitoring</h3>
            <p>
              We offer basic and smart home security systems with professional
              monitoring for as low as $19.99/month. Keep your home safe and get
              your free quote today.
            </p>
          </div>

          {/* 2. Faster emergency response time */}
          <div>
            <h3 className="font-bold text-gray-800">
              Faster emergency response time
            </h3>
            <p>
              By sharing additional data from connected devices through the
              emergency response data platform, RapidSOS can help first responders
              improve.
            </p>
          </div>

          {/* 3. Smoke alarm detection */}
          <div>
            <h3 className="font-bold text-gray-800">Smoke alarm detection</h3>
            <p>
              A smoke detector is an electronic fire-protection device that
              automatically senses the presence of smoke, as a key indication of
              fire, and sounds a warning.
            </p>
          </div>

          {/* 4. Seamless integrations */}
          <div>
            <h3 className="font-bold text-gray-800">Seamless integrations</h3>
            <p>
              A smart home platform is a software system that integrates and
              coordinates products from multiple categories and provides a unified
              user.
            </p>
          </div>

          {/* 5. High Quality Materials */}
          <div>
            <h3 className="font-bold text-gray-800">High Quality Materials</h3>
            <p>
              Built to easily integrate with other leading smart home devices and
              systems like Apple HomeKit and Amazon Alexa, so you can build on
              what you already have.
            </p>
          </div>

          {/* 6. Warranty */}
          <div>
            <h3 className="font-bold text-gray-800">Warranty</h3>
            <p>One-year limited</p>
          </div>
        </div>
      )}

      {activeTab === "installation" && (
        <div className="mt-6 text-gray-600">
          <h3 className="text-xl font-bold text-gray-800">Installation Process</h3>
          <p>
            The installation process for our smart home solutions is straightforward. Our team will guide you
            through each step, ensuring everything is set up according to your preferences.
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Step 1: Scheduling installation</li>
            <li>Step 2: Setting up devices</li>
            <li>Step 3: System configuration and testing</li>
            <li>Step 4: Final walkthrough and handover</li>
          </ul>
        </div>
      )}

      {activeTab === "specifications" && (
        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Specifications</h3>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Feature</th>
                <th className="py-2 px-4 border-b">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Power Source</td>
                <td className="py-2 px-4 border-b">Battery-powered, rechargeable</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Connectivity</td>
                <td className="py-2 px-4 border-b">Wi-Fi, Bluetooth</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Dimensions</td>
                <td className="py-2 px-4 border-b">4.5 x 2.5 x 1.0 inches</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Weight</td>
                <td className="py-2 px-4 border-b">0.5 lbs</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Compatibility</td>
                <td className="py-2 px-4 border-b">Amazon Alexa, Google Assistant</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TechSpecs;
