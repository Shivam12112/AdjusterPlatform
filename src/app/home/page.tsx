"use client";

import { appName } from "@/lib/variables";
import dynamic from "next/dynamic";
import { useState } from "react";
import landingImage from "../../../public/landingimage.jpg";

import { EN_TEXT } from "@/lib/dictionaries/en";
import { features } from "../../lib/features/features";

const NavBar = dynamic(() => import("../../components/NavBar"), {
  ssr: false,
});
const Loader = dynamic(() => import("../../components/Loader"), {
  ssr: false,
});

const WhyChooseThisPlatform = dynamic(
  () => import("../../components/WhyChooseThisPlatform"),
  {
    ssr: false,
  }
);

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

  // This check causes hydration error in rendering. 
  // Read: https://nextjs.org/docs/messages/react-hydration-error
  // if (typeof window === "undefined") {
  //   return null; // Return null or a loader if you prefer
  // }

  const Benefits = () => {
    return (
      <main className="">
        <div className="text-4xl font-bold text-center mb-6">
          <h1>Claims Documentation Made Easy </h1>
        </div>
        <p className="text-2xl text-center text-gray-700 dark:text-gray-400 mb-12  mx-auto ">
          Streamline Your Claim Inspections with Accurate, Organized
          Documentation
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
      </main>
    );
  };

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
              {/* <h2 className="text-md  text-white font-semibold mb-4">
                Join the Waitlist Today and Get Early Access with Exclusive
                Benefits!
              </h2> */}
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
                  className="bg-teal-300 text-white py-2 rounded hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:text-white"
                >
                  <a href="#get-early-access" className="font-bold">
                    Get Started
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

      <div className="container px-5 lg:mx-auto" id="features">
        <div
          // id="features"
          className="container pt-3 hidden"
          style={{ marginTop: 100 }}
        >
          <Benefits />
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Claims Documentation Made Easy
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Streamline Your Claim Inspections with Accurate, Organized
                Documentation
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Customizable Templates
                  </h2>
                  <p className="leading-relaxed text-base">
                    Adjusters can create templates for different types of field
                    inspections, ensuring no critical information is missed.
                    Templates can be reused, making each inspection quicker and
                    more consistent.
                  </p>
                  {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Mobile-Friendly
                  </h2>
                  <p className="leading-relaxed text-base">
                    All templates and inspections are accessible on mobile
                    devices, allowing adjusters to perform inspections on the
                    go, even without an internet connection.
                  </p>
                  {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Supports Multiple Lines of Business
                  </h2>
                  <p className="leading-relaxed text-base">
                    Whether you handle auto claims or property and casualty
                    (P&C) insurance, the platform adapts to suit your needs.
                  </p>
                  {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-8 md:space-y-0 space-y-8 lg:mt-12">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Streamlined Process
                  </h2>
                  <p className="leading-relaxed text-base">
                    The platform ensures that field inspections follow a
                    structured workflow, making data collection easier and more
                    reliable.
                  </p>
                  {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Reduce Errors and Omissions
                  </h2>
                  <p className="leading-relaxed text-base">
                    By following a set template, adjusters are less likely to
                    miss critical information during an inspection.
                  </p>
                  {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Best-In-Class Security
                  </h2>
                  <p className="leading-relaxed text-base">
                    Every API connection is secured with best-in-class SSL and
                    the system adheres to Top 10 OWASP security standards.
                  </p>
                  {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
                </div>
              </div>
            </div>
            {/* <button className="flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
          </div>
        </section>

        <div className="mt-2 lg:mt-2">
          <WhyChooseThisPlatform />
        </div>

        <div style={{ marginTop: 100 }}>
          <HowItWorks />
        </div>
        {/* <div style={{ marginTop: 100 }}>
          <GetEarlyAccess
            handleValueChange={handleValueChange}
            fullName={fullName}
            email={email}
            validationError={validationError}
            onFormSubmit={onFormSubmit}
          />
        </div> */}

        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
