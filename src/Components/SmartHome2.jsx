import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
      {/* Header Section */}
      <div className="text-center my-8">
        <div className="w-10 h-10 mx-auto mb-2">
          {/* Lightbulb Icon Placeholder */}
          <div className="w-full h-full bg-blue-200 rounded-full"></div>
        </div>
        <h1 className="text-3xl font-bold">
          Create a <span className="text-blue-600 underline">smart home</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          A smart home is a dwelling equipped with technology that allows for
          remote control and automation of appliances and systems, such as
          lighting, heating, air conditioning, and security.
        </p>
        <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          About Vision
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Base Station"
            className="rounded-lg mb-4"
          />
          <h3 className="text-center font-semibold">Base Station</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Keypad"
            className="rounded-lg mb-4"
          />
          <h3 className="text-center font-semibold">Keypad</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Security"
            className="rounded-lg mb-4"
          />
          <h3 className="text-center font-semibold">Security</h3>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Security"
            className="rounded-lg mb-4"
          />
          <div className="flex items-center jus">
          <h3 className="text-center font-semibold">Security</h3><button>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
