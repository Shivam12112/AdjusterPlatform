import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Pricing = () => {
  return (
    <div>
    <NavBar></NavBar>
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900">Choose a Plan That Works for You</p>
          <p className="mt-4 text-xl text-gray-500">Flexible pricing plans to meet your needs.</p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-6 lg:grid-cols-3 sm:grid-cols-1">
          
          {/* Free Plan */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Free</h3>
            <p className="mt-4 text-gray-500">Perfect for individuals starting out.</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">$0 <span className="text-base font-medium text-gray-500">/month</span></p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-gray-500">✔ 5 inspections/month</li>
              <li className="flex items-center text-gray-500">✔ 2 templates</li>
              <li className="flex items-center text-gray-500">✔ Basic report generation</li>
            </ul>
            <button className="mt-8 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500">
              Get Started
            </button>
          </div>

          {/* Basic Plan */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Basic</h3>
            <p className="mt-4 text-gray-500">For adjusters with regular field inspections.</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">$25 <span className="text-base font-medium text-gray-500">/month</span></p>
            
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-gray-500">✔ 20 inspections/month</li>
              <li className="flex items-center text-gray-500">✔ 5 templates</li>
              <li className="flex items-center text-gray-500">✔ Photo uploads</li>
              <li className="flex items-center text-gray-500">✔ Email reports</li>
            </ul>
            <button className="mt-8 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500">
              Choose Basic
            </button>
          </div>

          {/* Pro Plan */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Pro</h3>
            <p className="mt-4 text-gray-500">For adjusters with higher inspection needs.</p>
            <p className="mt-6 text-4xl font-extrabold text-gray-900">$50 <span className="text-base font-medium text-gray-500">/month</span></p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-gray-500">✔ Unlimited inspections</li>
              <li className="flex items-center text-gray-500">✔ Custom templates</li>
              <li className="flex items-center text-gray-500">✔ Offline access</li>
              <li className="flex items-center text-gray-500">✔ Cloud sync</li>
            </ul>
            <button className="mt-8 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500">
              Choose Pro
            </button>
          </div>

        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Pricing;
