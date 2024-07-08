"use client";

import { appName } from "@/lib/variables";
import dynamic from "next/dynamic";
import { useState } from "react";
import landingImage from "../../public/landingimage.jpg";
// import FAQs from "../components/FAQs";
// import FeatureCard from "../components/Feature";
// import Footer from "../components/Footer";
// import HowItWorks from "../components/HowItWorks";
// import Loader from "../components/Loader";
// import NavBar from "../components/NavBar";
// import ThankYouModal from "../components/ThankYouModal";
// import WaitlistModal from "../components/WaitlistModal";
import Button from "@/components/Button";
import { EN_TEXT } from "@/lib/dictionaries/en";
import styles from "../styles/Home.module.css";

const NavBar = dynamic(() => import("../components/NavBar"), {
  ssr: false,
});
const Loader = dynamic(() => import("../components/Loader"), {
  ssr: false,
});
const HowItWorks = dynamic(() => import("../components/HowItWorks"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});
const FeatureCard = dynamic(() => import("../components/Feature"), {
  ssr: false,
});

const ThankYouModal = dynamic(() => import("../components/ThankYouModal"), {
  ssr: false,
});
const WaitlistModal = dynamic(() => import("../components/WaitlistModal"), {
  ssr: false,
});
const FAQs = dynamic(() => import("../components/FAQs"), {
  ssr: false,
});

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [showThankYouModal, setShowhankYouModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isWaitListModal, setIsWaitListModal] = useState<boolean>(false);

  const handleAddToWitList = async (payload: any) => {
    if (!payload) return;
    try {
      setIsLoading(true);
      const allData = await fetchAllData();
      const isExisting = allData.records.filter(
        (item: any) => item.email === email
      );
      if (isExisting.length > 0) {
        setIsLoading(false);
        setShowErrorModal(true);
      }
      const response = await fetch("/api/waitListApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: payload }),
      });
      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setShowhankYouModal(true);
      setIsLoading(false);
      setEmail("");
      console.log("Data posted successfully:", result);
    } catch (error) {
      setIsLoading(false);
      console.error("Error posting data:", error);
    }
  };

  const fetchAllData = async () => {
    try {
      const response = await fetch("/api/waitListApi");
      const result = await response.json();
      return result;
    } catch (error) {}
  };

  const features = [
    {
      icon: "/insurance-protection-icon.svg",
      title: "Tailored Workflows",
      description:
        "Create and manage workflows customized for each insurance carrier and line of business, ensuring consistency across all claims.",
    },
    {
      icon: "/check-list-icon.svg",
      title: "Questionnaire and Site Survey Tools",
      description:
        "Design detailed questionnaires and conduct thorough site surveys with our offline-first mobile app, capturing all necessary information accurately without an internet connection.",
    },
    {
      icon: "/process.svg",
      title: "Enhanced Review Process",
      description:
        "Use our mobile app to perform in-depth reviews and improve Turnaround Time (TAT) for processing claims, handling more claims efficiently.",
    },
    {
      icon: "/analysis-icon.svg",
      title: "AI-Powered Annotation",
      description:
        "Automatically recognize items and annotate damages using AI, saving time and reducing manual errors.",
    },
    {
      icon: "/computer-report-icon.svg",
      title: "Customizable Reports",
      description:
        "Generate comprehensive, tailored reports for each insurance carrier, presenting findings clearly and professionally.",
    },
    {
      icon: "/padlock-black-icon.svg",
      title: "Industry-Leading Security",
      description: `Adhere to top OWASP security standards and best-in-class security practices to protect your data with robust, enterprise-grade measures.`,
    },
  ];
  const handleValueChange = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    handleAddToWitList(email);
  };

  if (typeof window === "undefined") {
    return null; // Return null or a loader if you prefer
  }

  return (
    <div
      style={{
        backgroundColor: "#FFFAF0",
      }}
    >
      <NavBar />
      <ThankYouModal
        isShown={showThankYouModal}
        setIsShown={setShowhankYouModal}
        title={`Welcome to the ${appName} Revolution!`}
        thanqYouModal={true}
        description={`Thank you for signing up to join the ${appName} waitlist. We are thrilled to have you on board and can't wait to show you how ${appName} will transform your claims process.`}
      />
      <ThankYouModal
        isShown={showErrorModal}
        thanqYouModal={false}
        setIsShown={setShowErrorModal}
        title="You have already signed up"
        description={`Thank you for your continued interest in ${appName}. You are already on our waitlist, and we are thrilled to have you on board. We can't wait to show you how ${appName} will transform your claims process.`}
      />
      <WaitlistModal
        isWaitListModal={isWaitListModal}
        setIsWaitListModal={setIsWaitListModal}
      />
      <Loader isLoading={isLoading} />

      <div
        className="justify-center mx-0 mt-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${landingImage.src})`,
          marginTop: "4rem",
          // width: "100vw",
        }}
      >
        <div
          style={{
            padding: "10rem 10rem 15rem 10rem",
          }}
          className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 bg-gray-900 bg-opacity-70 rounded"
        >
          <div className="flex-1 flex-col items-center text-center justify-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl text-white lg:text-4xl font-bold mb-4 text-center ">
              {EN_TEXT.hero}
            </h1>
            <p className="text-lg text-gray-400 lg:text-xl mb-8 text-center ">
              {EN_TEXT.tagline}
            </p>
            <div className="flex flex-col items-center">
              <h2 className="text-md text-white font-semibold mb-4">
                Join the Waitlist Today and Get Early Access with Exclusive
                Benefits!
              </h2>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleValueChange}
                  value={email}
                  className="border border-gray-400 p-2 rounded mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto"
                />
                <Button onClick={onFormSubmit}>Get Access!</Button>
                <button
                  onClick={() => setIsWaitListModal(true)}
                  type="submit"
                  className=" text-gray-300 p-2 pr-4 pl-4 rounded w-full sm:w-auto text-sm mt-4 sm:mt-0"
                >
                  Why join the waitlist?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* <div className="container justify-center mx-auto mt-20 ">
          <div className="flex flex-col bg-red lg:flex-row items-center lg:items-start lg:space-x-8">
            <div className="flex-1 flex-col items-center text-center justify-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-5xl lg:text-4xl font-bold mb-4">
                {EN_TEXT.hero}
              </h1>
              <p className="text-lg text-gray-600 lg:text-xl mb-8">
                {EN_TEXT.tagline}
              </p>

              <div className="flex flex-col items-center">
                <h2 className="text-md font-semibold mb-4">
                  Join the Waitlist Today and Get Early Access with Exclusive
                  Benefits!"
                </h2>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleValueChange}
                    value={email}
                    className="border border-gray-400  p-2 rounded mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto"
                  />
                  <Button onClick={onFormSubmit}>Get Access!</Button>
                  <button
                    onClick={() => setIsWaitListModal(true)}
                    type="submit"
                    className="bg-white-500 text-blue p-2 pr-4 pl-4 rounded w-full sm:w-auto text-sm"
                  >
                    Why join the waitlist?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          id="features"
          className="container  pt-3 "
          style={{ marginTop: 100 }}
        >
          <main className="">
            <div className="text-3xl font-bold text-center mb-6">
              <h1>Process 2x more claims </h1>
            </div>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              Empowering Insurance Adjusters with Advanced Tools and AI
              Capabilities.
            </p>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            {/* TODO: <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card 
                title="Features"
                content="Our platform offers customizable workflows, ML-driven annotations, and more."
                icon={''}
              />
            </div> */}
          </main>
        </div>

        <HowItWorks />
        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
