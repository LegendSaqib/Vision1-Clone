import React from 'react'
import GoogleMap from '../Components/GoogleMap'

const Contact = () => {
  const videos = [
    {
      id: 1,
      src: "/path-to-video1.mp4",
      title: "Our vision",
      description:
        "Smart homes are the homes of the future, where technology and convenience come together.",
    },
    {
      id: 2,
      src: "/path-to-video2.mp4",
      title: "Our way",
      description:
        "Imagine waking up in the morning and having your coffee ready before you even step out of bed.",
    },
    {
      id: 3,
      src: "/path-to-video3.mp4",
      title: "Our approach",
      description:
        "Why not start building your smart home today and join the future of living!",
    },
  ];

  return (
   <>
    <div><GoogleMap/></div>

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Contact us</h1>
        <p className="text-gray-600 text-center mb-6">
          Share information about your brand with your customers. Describe a product,
          make announcements, or welcome customers to your store.
        </p>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            placeholder="Comment"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    <section>
        <div className="max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-lg shadow-lg group bg-black"
              style={{ height: "500px" }}
            >
              {/* Video Background */}
              <video
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                src={video.src}
                muted
                loop
              ></video>

              {/* Overlay Content */}
              <div className="relative z-10 p-6 bg-black bg-opacity-50 text-white h-full flex flex-col text-center justify-center items-center">
                <div>
                  <h2 className="text-xl font-bold mb-2">{video.title}</h2>
                  <p className="text-sm">{video.description}</p>
                </div>
                <button className="mt-4 px-4 w-32 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
                  Learn More
                </button>
              </div>

              {/* Play Video on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            </div>
          ))}
        </div>
      </section>
   </>
    
  )
}

export default Contact