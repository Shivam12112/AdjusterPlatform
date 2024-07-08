import React from "react";

const ClaimTypePage = ({ type, description, features, benefits }) => (
  <div className="p-8 bg-floralwhite min-h-screen">
    <h1 className="text-teal-700 text-2xl font-bold mb-4">{type} Claims</h1>
    <p className="text-teal-900 mb-4">{description}</p>
    <h2 className="text-teal-700 text-xl font-bold mb-2">Features</h2>
    <ul className="mb-4">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 text-teal-900">
          {feature}
        </li>
      ))}
    </ul>
    <h2 className="text-teal-700 text-xl font-bold mb-2">Benefits</h2>
    <ul>
      {benefits.map((benefit, index) => (
        <li key={index} className="mb-2 text-teal-900">
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

export default ClaimTypePage;
