"use client";

import { appName } from "@/lib/variables";
import dynamic from "next/dynamic";
import { useState } from "react";
import landingImage from "../../../public/landingimage.jpg";

import { EN_TEXT } from "@/lib/dictionaries/en";
import { features } from "../../lib/features/features";
import styles from "../styles/Home.module.css";

const NavBar = dynamic(() => import("../../components/NavBar"), {
  ssr: false,
});
const Loader = dynamic(() => import("../../components/Loader"), {
  ssr: false,
});
const HowItWorks = dynamic(() => import("../../components/HowItWorks"), {
  ssr: false,
});
const GetEarlyAccess = dynamic(
  () => import("../../components/GetEarlyAccess"),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
});
const FeatureCard = dynamic(() => import("../../components/Feature"), {
  ssr: false,
});

const ThankYouModal = dynamic(() => import("../../components/ThankYouModal"), {
  ssr: false,
});
const WaitlistModal = dynamic(() => import("../../components/WaitlistModal"), {
  ssr: false,
});
const FAQs = dynamic(() => import("../../components/FAQs"), {
  ssr: false,
});

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [showThankYouModal, setShowhankYouModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isWaitListModal, setIsWaitListModal] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<object>({
    fullName: "",
    email: "",
  });

  const checkValidationError = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let newValidationError = { fullName: "", email: "" };

    if (fullName.length === 0) {
      newValidationError.fullName = "Full name is required!";
    } else {
      newValidationError.fullName = "";
    }

    if (email.length === 0) {
      newValidationError.email = "Email is required!";
    } else if (!emailPattern.test(email)) {
      newValidationError.email = "Enter a valid email address";
    } else {
      newValidationError.email = "";
      // delete newValidationError.email;
    }
    return newValidationError;
  };

  const handleAddToWitList = async () => {
    if (!fullName || !email) return;
    try {
      setIsLoading(true);
      const allData = await fetchAllData();
      const isExisting = allData.records.filter(
        (item: any) => item.email === email
      );
      if (isExisting?.length > 0) {
        setIsLoading(false);
        setShowErrorModal(true);
      }
      const response = await fetch("/api/waitListApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, full_name: fullName }),
      });
      if (!response.ok) {
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setShowhankYouModal(true);
      setIsLoading(false);
      setEmail("");
      setFullName("");
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

  const handleValueChange = (e: any) => {
    e.preventDefault();
    if (e.target.name === "full-name") setFullName(e.target.value);
    else setEmail(e.target.value);
  };
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    const { fullName, email } = checkValidationError();
    if (fullName.length !== 0 || email.length !== 0) {
      setValidationError({
        fullName: fullName,
        email: email,
      });
    } else {
      setValidationError({
        fullName: "",
        email: "",
      });
      handleAddToWitList();
    }
  };

  if (typeof window === "undefined") {
    return null; // Return null or a loader if you prefer
  }

  return (
    <div id="#" className="dark:text-gray-400">
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
                {/* <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleValueChange}
                  value={email}
                  className="border border-gray-400 p-2 rounded mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto"
                /> */}
                <button
                  style={{
                    padding: "1rem 4rem 1rem 4rem",
                    // visibility: "hidden",
                  }}
                  className="bg-green-300 text-gray-950 py-2 rounded hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:text-white"
                >
                  <a href="#get-early-access" className="font-bold">
                    Get Access!
                  </a>
                </button>
                {/* <button
                  onClick={() => setIsWaitListModal(true)}
                  type="submit"
                  className=" text-gray-300 p-2 pr-4 pl-4 rounded w-full sm:w-auto text-sm mt-4 sm:mt-0"
                >
                  Why join the waitlist?
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 lg:mx-auto">
        <div
          id="features"
          className="container pt-3 "
          style={{ marginTop: 100 }}
        >
          <main className="">
            <div className="text-4xl font-bold text-center mb-6">
              <h1>Process 2x more claims </h1>
            </div>
            <p className="text-2xl text-center text-gray-700 dark:text-gray-400 mb-12  mx-auto ">
              Empowering Insurance Adjusters with Advanced Tools and AI
              Capabilities.
            </p>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {features?.map((feature, index) => (
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
        <div style={{ marginTop: 100 }}>
          <HowItWorks />
        </div>
        <div style={{ marginTop: 100 }}>
          <GetEarlyAccess
            handleValueChange={handleValueChange}
            fullName={fullName}
            email={email}
            validationError={validationError}
            onFormSubmit={onFormSubmit}
          />
        </div>

        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
