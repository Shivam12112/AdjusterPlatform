import { useState } from "react";
import { appName } from "../lib/variables";
import styles from "../styles/Faq.module.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const items = [
    {
      title: ` What is ${appName}?`,
      content: `${appName} is a comprehensive platform designed for insurance
                adjusters to streamline the claims process. It allows adjusters
                to create customized workflows, conduct site surveys offline,
                leverage AI for item recognition and damage annotation, and
                generate detailed reports for insurance carriers.`,
    },
    {
      title: ` How does ${appName} help improve the claims process?`,
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
    // {
    //   title: `How does ${appName} help in reducing the Turnaround Time (TAT) for claims?`,
    //   content: `${appName} helps reduce TAT by streamlining the claims process with customized workflows, efficient data collection, AI-driven analysis, and quick report generation. This allows adjusters to process more claims in less time, improving overall efficiency.`,
    // },
  ];
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <div
        key={item.title}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          id="accordion-collapse"
          className={`title accordion-collapse ${active}`}
        >
          <button
            type="button"
            onClick={() => onTitleClick(index)}
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {item.title}
            </span>
            {activeIndex === index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 299.283"
                style={{
                  width: "20px",
                }}
              >
                <path d="M75.334 286.691c-64.764 36.929-96.186-15.595-60.203-51.975L215.997 25.104c33.472-33.472 46.534-33.472 80.006 0l200.866 209.612c35.983 36.38 4.561 88.904-60.203 51.975L256 189.339 75.334 286.691z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 299.283"
                style={{
                  width: "20px",
                }}
              >
                <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z" />
              </svg>
            )}
          </button>
        </h2>
        <div
          id="accordion-collapse"
          className={`content accordion-collapse ${active}`}
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {appName} is a comprehensive platform designed for insurance
              adjusters to streamline the claims process. It allows adjusters to
              create customized workflows, conduct site surveys offline,
              leverage AI for item recognition and damage annotation, and
              generate detailed reports for insurance carriers.
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={styles.main}>
        <h1>Frequently asked questions...</h1>
        <p>Explore answers to commonly raised inquiries about CloudClaim</p>
      </div>
      <div className={styles.container}>
        <div className="ui styled accordion accordion-collapse">
          {renderedItems}
        </div>
      </div>
    </>
  );
};

export default FAQs;
