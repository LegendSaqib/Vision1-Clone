import React from "react";
import { useEffect, useState } from 'react';

const OurStory = () => {
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



    const firstLine = ["Ahead of the curve ✦", "The present is ours to control ✦", "The more connected"];
    const secondLine = ["Shaping the future ✦", "Connect your home to the web ✦", "No more manual adjustments"];

  return (
    <>
      <section>
        <div
          className="bg-cover  mt-10 bg-center mx-auto"
          style={{
            backgroundImage: `url('/path-to-your-image.jpg')`,
            height: "50vh", // Half of the screen height
            width: "80vw", // Slightly wider than the screen
          }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-white text-lg font-bold">Your Content Here</h1>
          </div>
        </div>

        {/* test div */}
        <div className="my-10">
          <p className="text-xl font-bold w-[80vw] mx-auto">
            A smart home is a dwelling equipped with technology that allows for
            remote control and automation of appliances and systems, such as
            lighting, heating, air conditioning, and security.
          </p>
        </div>
      </section>

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

      <section className="my-20">
      <section
      style={{
        position: "relative",
        width: "100vw",
        height: "150px",
        overflow: "hidden",
        backgroundColor: "transparent",
        marginTop: "0px",
      }}
    >
      {/* First Diagonal Line */}
      <div
        style={{
          position: "absolute",
          width: "110%", // Slightly increase width to make both sides equal
          height: "50%",
          top: 0,
          left: "-5%", // Center the section after increasing the width
          transform: "rotate(-5deg)",
          backgroundColor: "#6B46C1", // Purple color
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            width: "200%",
            whiteSpace: "nowrap",
            animation: "slideText 10s linear infinite",
          }}
        >
          {firstLine.map((text, index) => (
            <span
              key={index}
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                marginRight: "50px", // Spacing between text lines
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Second Diagonal Line */}
      <div
        style={{
          position: "absolute",
          width: "110%", // Match the width to the first diagonal
          height: "50%",
          bottom: 0,
          left: "-5%", // Align this section to the center
          transform: "rotate(5deg)",
          backgroundColor: "#E53E3E", // Red color
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            width: "200%",
            whiteSpace: "nowrap",
            animation: "slideText 10s linear infinite",
            animationDelay: "5s", // Offset animation for staggering effect
          }}
        >
          {secondLine.map((text, index) => (
            <span
              key={index}
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                marginRight: "50px", // Spacing between text lines
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
      </section>

      
    <section 
      style={{
        width: "80vw",
        margin: "0 auto", // Center the section horizontally
        display: "flex",
        flexDirection: "column",
        gap: "40px", // Spacing between the rows
      }}
    >
      {/* First Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px", // Spacing between image and text
        }}
      >
        {/* Image on the Left */}
        <div style={{ flex: 1 }}>
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        {/* Text on the Right */}
        <div className="text-center" style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "16px", fontSize: "24px", fontWeight: "bold" }}>
            First Row Heading
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            This is the text content for the first row. You can write a detailed description or
            anything you'd like to showcase here. The image is on the left, and this text is on
            the right.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px", // Spacing between image and text
          flexDirection: "row-reverse", // Reverse the order for the second row
        }}
      >
        {/* Image on the Right */}
        <div style={{ flex: 1 }}>
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        {/* Text on the Left */}
        <div className="text-center" style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "16px", fontSize: "24px", fontWeight: "bold" }}>
            Second Row Heading
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            This is the text content for the second row. The image is on the right for this row,
            while this text and heading are on the left. Everything is styled and aligned properly.
          </p>
        </div>
      </div>
    </section>

    <section className="my-10">
    <div style={{ width: "80%", margin:"auto", padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
      {/* Testimonials Section */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
        {[
          {
            name: "noise",
            text: "The whole team have the perfect attitude and skill set to carry out complex tasks, with great efficiency and provide a wow factor in everything they do.",
          },
          {
            name: "sphere",
            text: "Great team providing honest and cost-effective solutions to any project. After-sales service knowing how to manage clients effectively.",
          },
          {
            name: "TWAX",
            text: "Very helpful and professional! Both Trish and Dawn helped us a lot with our purchase - thank you for your support through all steps.",
          },
          {
            name: "connex",
            text: "We have used Smart Homes on quite a few occasions and every time we have had exceptional service.",
          },
        ].map((item, index) => (
          <div key={index} style={{ textAlign: "center", maxWidth: "250px" }}>
            <h3
              style={{
                color: "#b72c2c",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              {item.name}
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#666" }}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div
        style={{
          backgroundImage: `url('https://via.placeholder.com/800x200')`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          padding: "30px",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <i
            className="fa fa-envelope"
            style={{
              fontSize: "32px",
              background: "#fff",
              color: "#6a11cb",
              padding: "10px",
              borderRadius: "50%",
            }}
          ></i>
        </div>
        <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "8px" }}>
          Subscribe to Newsletter
        </h2>
        <p style={{ marginBottom: "20px" }}>
          Sign up for our newsletter and receive 10% off your first order!
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "10px",
              borderRadius: "5px 0 0 5px",
              border: "1px solid #ddd",
              flex: "1",
              maxWidth: "300px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#6a11cb",
              color: "#fff",
              border: "none",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer",
            }}
          >
            →
          </button>
        </div>
        <div style={{ marginTop: "12px", fontSize: "14px" }}>
          <input type="checkbox" id="marketing" style={{ marginRight: "8px" }} />
          <label htmlFor="marketing">
            I agree to receiving marketing emails and special deals
          </label>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default OurStory;
