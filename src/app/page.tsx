"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import welcomeImage from "../../public/image.png";
import FeatureCard from "../components/Feature";
import ThankYouModal from "../components/ThankYouModal";
import WaitlistModal from "../components/WaitlistModal";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import NavBar from "../components/NavBar";
import FAQs from "../components/FAQs";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";
import { appName } from "@/lib/variables";

// import inter
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isWaitListModal, setIsWaitListModal] = useState<boolean>(false);

  const handleAddToWitList = async (payload: any) => {
    if (!payload) return;
    const allData = await fetchAllData();
    console.log("allDataallDataallDataallDataallData", allData.records);
    setIsLoading(true);
    try {
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
      setIsShown(true);
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
      title: "Tailored Workflows for Every Carrier and Claim Type",
      description:
        "Create and manage specific workflows customized to each insurance carrier and line of business (LoB). Streamline your process and ensure consistency across all claims.",
    },
    {
      icon: "/check-list-icon.svg",
      title: "Comprehensive Questionnaire and Site Survey Tools",
      description:
        "Design detailed questionnaires and conduct thorough site surveys using our offline-first mobile app. Capture all necessary information accurately, even without an internet connection.",
    },
    {
      icon: "/process.svg",
      title: "Enhanced Review Process",
      description:
        "Utilize our mobile app to perform in-depth reviews and improve your Turnaround Time (TAT) for processing claims. Handle more claims efficiently with thorough and streamlined procedures.",
    },
    {
      icon: "/analysis-icon.svg",
      title: "AI-Powered Item Recognition and Damage Annotation",
      description:
        "Leverage the power of AI to automatically recognize items in surveys and annotate observed damages. Save time and reduce manual errors with intelligent automation.",
    },
    {
      icon: "/computer-report-icon.svg",
      title: "Customizable Consolidated Reports",
      description:
        "Generate comprehensive, customized reports tailored to each insurance carrier's requirements. Present your findings clearly and professionally to enhance communication and decision-making.",
    },
    {
      icon: "/padlock-black-icon.svg",
      title: "Industry-Leading Security Standards",
      description: `${appName} adheres to top OWASP security standards and employs best-in-class security practices. Ensure your data is protected with robust, enterprise-grade security measures.`,
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
  return (
    <>
      <NavBar />
      <ThankYouModal isShown={isShown} setIsShown={setIsShown} />
      <WaitlistModal
        isWaitListModal={isWaitListModal}
        setIsWaitListModal={setIsWaitListModal}
      />
      <Loader isLoading={isLoading} />
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Revolutionizing Claims Adjustments</h1>
            <p>
              {appName} is designed to streamline the work of claims adjusters,
              enabling them to perform more inspections efficiently. With
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
        </div>
        {/* <div className={styles.partners}>
          <h3>Our trusted partners</h3>
          <div className={styles.partnerLogos}>
            {ourPartners.map((partners, i) => {
              return (
                <Image
                  key={i}
                  src={partners.logo}
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={60}
                  height={24}
                />
              );
            })}
          </div>
        </div> */}

        <div>
          <Head>
            <title>CloudClaim Features</title>
          </Head>
          <main className="main-1">
            <h1>How CloudClaim empowers you to accomplish more...</h1>
            <div className="features-grid">
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

        {/* <section id="features">
          <div className={styles.features}>
            <h1 className={styles.fetaureHeading}>How CloudClaim helps you do more…</h1>
            <div className={styles.featureList}>
              <div
                className="grid grid-cols-3 gap-x-3 gap-y-1"
                style={{
                  // display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div className={styles.feature}>
                  <Image
                    src={"/insurance-protection-icon.svg"}
                    className="py-4 svg-icon-color"
                    alt="Vercel Logo"
                    width={50}
                    height={24}
                  />
                  <h3>Sync Claims</h3>
                  <p>
                    Sync claims and appointments to your devices in one tap.
                  </p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={"/calendar-icon.svg"}
                    className="py-4"
                    alt="Vercel Logo"
                    width={50}
                    height={24}
                  />
                  <h3>Schedule Appointments</h3>
                  <p>
                    Schedule appointments with your customers while not
                    conflicting with your personal agenda.
                  </p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={"/calendar-icon.svg"}
                    className="py-4"
                    alt="Vercel Logo"
                    width={50}
                    height={24}
                  />
                  <h3>Schedule Appointments</h3>
                  <p>
                    Schedule appointments with your customers while not
                    conflicting with your personal agenda.
                  </p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={"/calendar-icon.svg"}
                    className="py-4"
                    alt="Vercel Logo"
                    width={50}
                    height={24}
                  />
                  <h3>Schedule Appointments</h3>
                  <p>
                    Schedule appointments with your customers while not
                    conflicting with your personal agenda.
                  </p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={"/analysis-icon.svg"}
                    className="py-4"
                    alt="Vercel Logo"
                    width={50}
                    height={24}
                  />
                  <h3>Build Scoping Reports</h3>
                  <p>
                    CloudClaim is great tool for building final scoping reports.
                  </p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={"/repair-fix-repairing-icon.svg"}
                    className="py-4"
                    alt="Vercel Logo"
                    width={50}
                    height={24}
                  />
                  <h3>Easy setup</h3>
                  <p>
                    No need for a messy desktop, UPS, and printer. You now have
                    it all in your palms.
                  </p>
                </div>
              </div>
            </div>
            <button className={styles.suggestFeatureButton}>
              Suggest a feature
            </button>
          </div>
        </section> */}

        <HowItWorks />
        <FAQs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
