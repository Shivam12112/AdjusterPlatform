import { useState } from "react";
import { appName } from "../lib/variables";

import Accordion from "./Accordion";
import Button from "./Button";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: `What is ${appName}?`,
      content: `${appName} is a comprehensive platform designed for insurance
                adjusters to streamline the claims process. It helps adjusters create templates, collect data on-site, and generate comprehensive reports, all while ensuring that no critical information is missed during the inspection process`,
    },
    {
      title: `Can I customize the inspection templates?`,
      content: `Yes, you can either use the pre-existing templates or customize them to fit your specific needs. This allows you to tailor inspections for different types of claims, ensuring the right information is always captured.`,
    },
    {
      title: `How does the ${appName} platform work offline?`,
      content: `Our mobile app allows you to perform inspections and collect data even when you don’t have an internet connection. All data is stored locally on your device and can be synced to the cloud once you’re back online.`,
    },
    {
      title: `What types of claims does this ${appName} support?`,
      content: `The ${appName} is flexible platform and supports various lines of business, including auto claims, property & casualty (P&C) claims, and more. You can easily switch between claim types without changing systems.`,
    },
    {
      title: `How are reports generated?`,
      content: `After completing an inspection, the ${appName} consolidates all the collected data, including photos and documents, into a detailed report. The report is automatically generated and ready for review, sharing, or further analysis.`,
    },

    {
      title: `Can I send reports directly via email?`,
      content: `Yes, once a report is generated, you can send it via email directly from the ${appName}. This makes sharing reports with clients, colleagues, or insurance carriers fast and easy.`,
    },

    {
      title: `Is my data secure on this platform?`,
      content: `Absolutely. We take data security seriously. All data is encrypted both in transit and at rest to ensure that sensitive information remains protected and compliant with industry standards.`,
    },

    {
      title: `How long does it take to get set up?`,
      content: `The onboarding process is quick and simple. After creating your account, you can start using pre-existing templates or customize your own to begin field inspections right away.`,
    },
    {
      title: `Is there a free trial available?`,
      content: `We plan to offer early access to users who join the waitlist, where they can try the platform and provide feedback before its official release. Stay tuned for more details on trial availability.`,
    },

    {
      title: `What devices can I use the platform on?`,
      content: `The platform is accessible via web and mobile devices, so you can conduct inspections and manage your reports from your smartphone, tablet, or computer.`,
    },

    
    {
      title: `Is ${appName} suitable for all types of insurance claims?`,
      content: `Yes, ${appName} is designed to be versatile and can handle various types of insurance claims across different lines of business. You can customize workflows and questionnaires to fit the specific requirements of each claim type.`,
    },

  ];

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "block" : "hidden";
    return (
      <div
        key={index}
        className="border-b bg-white border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl"
      >
        <h2 className="text-xl">
          <button
            type="button"
            onClick={() => onTitleClick(index)}
            style={{
              backgroundColor: activeIndex === index ? "#E1EAFE" : "",
            }}
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800"
          >
            <span>{item.title}</span>
            <svg
              className={`w-5 h-5 transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </h2>
        <div
          className={`${isActive} p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
        >
          <p className="text-gray-500 dark:text-gray-400">{item.content}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="py-12 dark:bg-gray-950" id="faqs">
      <div className="max-w-4xl mx-auto">
        {/* <div className="text-center mb-12">
          <div className="text-4xl font-bold text-center  mb-6">
            <h1>Frequently Asked Questions</h1>
          </div>

          <p className="text-center text-2xl text-gray-700 dark:text-gray-400 mb-12  mx-auto">
            Explore answers to commonly raised inquiries about {appName}
          </p>
        </div> */}

        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base  leading-relaxed mx-auto text-gray-500s">
            Explore answers to commonly raised inquiries about {appName}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="space-y-4">
          {items?.map((item, indx) => {
            return (
              <Accordion key={indx} title={item.title}>
                <p>{item.content}</p>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
