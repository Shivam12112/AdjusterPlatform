import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out md:flex-row md:items-start"
    >
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
