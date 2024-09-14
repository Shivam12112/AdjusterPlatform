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
                adjusters to streamline the claims process. It allows adjusters
                to create customized workflows, conduct site surveys offline,
                leverage AI for item recognition and damage annotation, and
                generate detailed reports for insurance carriers.`,
    },
    {
      title: `How does ${appName} help improve the claims process?`,
      content: `${appName} improves the claims process by providing tailored
                workflows, offline survey capabilities, AI-driven analysis, and
                customizable reporting. These features help adjusters conduct
                thorough reviews, reduce manual errors, and process more claims
                efficiently.`,
    },
    {
      title: `How does ${appName} ensure data security?`,
      content: `${appName} adheres to top OWASP security standards and employs
                best-in-class security practices. This ensures that your data is
                protected with robust, enterprise-grade security measures at all
                times.`,
    },
    {
      title: `Is ${appName} suitable for all types of insurance claims?`,
      content: `Yes, ${appName} is designed to be versatile and can handle various types of insurance claims across different lines of business. You can customize workflows and questionnaires to fit the specific requirements of each claim type.`,
    },
    {
      title: `What kind of reports can I generate with ${appName}?`,
      content: `${appName} allows you to generate comprehensive, customizable reports that include detailed findings, annotated images, and additional notes. These reports can be tailored to meet the specific needs of each insurance carrier.`,
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
