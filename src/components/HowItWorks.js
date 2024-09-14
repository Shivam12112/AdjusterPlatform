import Image from "next/image";
import welcomeImage from "../../public/process.jpg";
import { appName } from "@/lib/variables";

const HowItWorks = () => {
  return (
    <section className="py-12" id="how-it-works">
      {/* <h1 className="text-4xl font-bold text-center mb-6">How it works</h1>
      <p className="text-center text-2xl text-gray-700 dark:text-gray-400 dark:text-gray-400 mb-12 mx-auto">
        Effortless Claims Processing in Just a Few Steps.
      </p> */}

      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
        How it works?
        </h1>
        <p className="text-base  leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
        Effortless Claims Processing in just a few steps.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
        <div className="flex-1 flex justify-center">
          <Image
            src={welcomeImage}
            alt="How it works steps"
            width={0}
            height={0}
            style={{ borderRadius: 4 }}
          />
        </div>
        <div className="flex-1 space-y-8 text-center sm:text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
            Create Your Account and Choose a Template
            </h2>
            <div className="flex mb-2 justify-center sm:justify-start md:justify-start lg:justify-start">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
            Sign up for an account and either select a pre-built template or customize your own to fit the specific needs of your inspection. Templates can be reused, ensuring consistency across all inspections.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Collect Data On-Site Using the Mobile App</h2>
            <div className="flex mb-2 justify-center sm:justify-start md:justify-start lg:justify-start">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
            Perform inspections in the field using our mobile app. Capture all required data, including photos and notes, even without an internet connection. Your inspection follows a structured workflow to ensure nothing is missed.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Sync Data and Generate Comprehensive Reports</h2>
            <div className="flex mb-2 justify-center sm:justify-start md:justify-start lg:justify-start">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
            Once back online, sync your collected data to the cloud. The platform consolidates everything into a detailed report, including all data and photos, ready for review and sharing.
            </p>
          </div>
          {/* <div>
            <h2 className="text-2xl font-semibold mb-2">
              Generate Custom Reports
            </h2>
            <div className="flex mb-2 justify-center sm:justify-start md:justify-start lg:justify-start">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
              Create comprehensive, customizable reports that meet the specific
              needs of each insurance carrier. Include detailed findings,
              annotated images, and any additional notes. Our flexible reporting
              tool ensures your reports are professional and tailored to each
              claim.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
