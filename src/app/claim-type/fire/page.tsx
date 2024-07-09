"use client";
import React from "react";
import ClaimTypePage from "../../../components/ClaimTypePage";
import { features } from "../../../lib/features/features";
import NavBar from "@/components/NavBar";
import landingImage from "../../../../public/landingimage.jpg";
import { EN_TEXT } from "@/lib/dictionaries/en";

const page = () => {
  if (typeof window === "undefined") {
    return null; // Return null or a loader if you prefer
  }
  return (
    <div>
      <NavBar />
      <div
        className="justify-center mx-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${landingImage.src})`,
          marginTop: "4rem",
        }}
      >
        <div
          style={{
            padding: "10rem 2rem 10rem 2rem",
          }}
          className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 bg-gray-900 bg-opacity-70 rounded"
        >
          <div className="flex-1 flex-col items-center text-center justify-center mb-8 lg:mb-0">
            <h1 className="text-2xl text-white lg:text-4xl font-bold mb-4 text-center ">
              {EN_TEXT.hero}
            </h1>
            <p className="text-xl text-gray-300 lg:text-2xl mb-8 text-center ">
              {EN_TEXT.tagline}
            </p>
            <div className="flex flex-col items-center">
              <h2 className="text-md  text-white font-semibold mb-4">
                Join the Waitlist Today and Get Early Access with Exclusive
                Benefits!
              </h2>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center">
                <button
                  style={{
                    padding: "1rem 4rem 1rem 4rem",
                    visibility: "hidden",
                  }}
                  className="bg-floralwhite text-gray-950 py-2 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:text-white"
                >
                  <a href="#get-early-access ">Get Access!</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClaimTypePage
        type={"Fire"}
        description="aakd asdhkjhgasd asdhkjh"
        features={features}
        benefits={[]}
      />
    </div>
  );
};

export default page;
