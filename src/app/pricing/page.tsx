import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Pricing = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-screen flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Free</h2>
            <p className="text-gray-500 mb-6">Basic access for small needs</p>
            <p className="text-4xl font-bold">$0</p>
            <p className="text-gray-500 mb-6">5 inspections/month</p>
            <ul className="text-gray-600 space-y-2">
              <li>2 templates</li>
              <li>Basic report generation</li>
            </ul>
            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded">
              Get Started
            </button>
          </div>

          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Basic</h2>
            <p className="text-gray-500 mb-6">For growing adjusters</p>
            <p className="text-4xl font-bold">
              $25<span className="text-lg">/month</span>
            </p>
            <p className="text-gray-500 mb-6">20 inspections/month</p>
            <ul className="text-gray-600 space-y-2">
              <li>5 templates</li>
              <li>Email reports</li>
              <li>Photo uploads</li>
            </ul>
            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded">
              Choose Basic
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Pro</h2>
            <p className="text-gray-500 mb-6">For professionals</p>
            <p className="text-4xl font-bold">
              $50<span className="text-lg">/month</span>
            </p>
            <p className="text-gray-500 mb-6">Unlimited inspections</p>
            <ul className="text-gray-600 space-y-2">
              <li>Custom templates</li>
              <li>Offline mode</li>
              <li>Cloud sync</li>
            </ul>
            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded">
              Choose Pro
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Pricing;
