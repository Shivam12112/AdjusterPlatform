"use client";

import { appName } from "@/lib/variables";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import welcomeImage from "../../public/image.png";
// import FAQs from "../components/FAQs";
// import FeatureCard from "../components/Feature";
// import Footer from "../components/Footer";
// import HowItWorks from "../components/HowItWorks";
// import Loader from "../components/Loader";
// import NavBar from "../components/NavBar";
// import ThankYouModal from "../components/ThankYouModal";
// import WaitlistModal from "../components/WaitlistModal";
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
    <>
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
        className={styles.container}
        style={{
          marginTop: "5rem",
        }}
      >
        <div className="container mx-auto px-4 mt-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            <div className="flex-1">
              <Image
                src={welcomeImage}
                alt="CloudClaim App"
                className="w-full h-auto"
                height={0}
                width={0}
              />
            </div>
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Revolutionizing Claims Adjustments
              </h1>
              <p className="text-lg lg:text-xl mb-8">
                ClaimCloud is designed to streamline the work of claims
                adjusters, enabling them to perform more inspections
                efficiently. With ClaimCloud, adjusters can sync inspections
                from multiple carriers, schedule appointments seamlessly, upload
                photos to the cloud, and write detailed scoping reports. Our app
                is crafted with the singular goal of enhancing productivity and
                simplifying the inspection process for adjusters.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Join the waitlist</h2>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleValueChange}
                  value={email}
                  className="border border-gray-400  p-2 rounded mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto"
                />
                <button
                  onClick={onFormSubmit}
                  type="submit"
                  className="border border-gray-400 bg-blue-500 text-white p-2 rounded mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto"
                >
                  Join waitlist
                </button>
                <button
                  onClick={() => setIsWaitListModal(true)}
                  type="submit"
                  className="border border-gray-400 bg-blue-500 text-white p-2 rounded w-full sm:w-auto"
                >
                  Why Join the Waitlist?
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Revolutionizing Claims Adjustments</h1>
            <p>
              {appName} is designed to streamline the work of claims adjusters,
              enabling them to perform more inspections efficiently. With{" "}
              {appName}, adjusters can sync inspections from multiple carriers,
              schedule appointments seamlessly, upload photos to the cloud, and
              write detailed scoping reports. Our app is crafted with the
              singular goal of enhancing productivity and simplifying the
              inspection process for adjusters.
            </p>
            <div>
              <h2 className={styles.waitlistText}>Join the waitlist</h2>

              <div className={styles.waitlistForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleValueChange}
                  value={email}
                  style={{
                    border: "1px solid gray",
                    width: "300px",
                    marginRight: "1rem",
                    borderRadius: 5,
                  }}
                />
                <button
                  style={{
                    border: "1px solid gray",
                    marginRight: "1rem",
                    borderRadius: 5,
                  }}
                  onClick={onFormSubmit}
                  type="submit"
                >
                  Join waitlist
                </button>
                <button
                  style={{
                    border: "1px solid gray",
                    marginRight: "1rem",
                    borderRadius: 5,
                  }}
                  onClick={() => setIsWaitListModal(true)}
                  type="submit"
                >
                  Why Join the Waitlist?
                </button>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={welcomeImage}
              alt="CloudClaim App"
              width={600}
              height={700}
            />
          </div>
        </div> */}

        <div id="features">
          <Head>
            <title>CloudClaim Features</title>
          </Head>
          <main className="">
            <div className="text-4xl font-bold text-center mb-6">
              <h1>Key Features of {appName}</h1>
            </div>
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
          </main>
        </div>

        <HowItWorks />
        <FAQs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
