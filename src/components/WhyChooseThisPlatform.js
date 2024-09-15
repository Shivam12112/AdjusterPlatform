import Image from "next/image";
import welcomeImage from "../../public/process.jpg";
import { appName } from "@/lib/variables";

const WhyChooseThisPlatform = () => {
  return (
    <section className="py-12" id="how-it-works">
      {/* <h1 className="text-4xl font-bold text-center mb-6">
        Why Choose AdjusterCopilot?
      </h1>
      <p className="text-center text-2xl text-gray-700 dark:text-gray-400 dark:text-gray-400 mb-12 mx-auto">
        Built by Certified Insurance Developers for Adjuster Community
      </p> */}

      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Why Choose AdjusterCopilot?
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          Engineered by Certified Insurance Developers for Adjuster Community
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
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
            <h2 className="text-2xl font-semibold title-font text-gray-500s mb-2">
              Time-Saving
            </h2>
            <div className="flex mb-2 justify-center sm:justify-start md:justify-start lg:justify-start">
              <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
              Predefined templates reduce the time spent preparing for
              inspections
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Accurate Documentation
            </h2>
            <div className="flex mb-2 justify-center sm:justify-start md:justify-start lg:justify-start">
              <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
              Structured workflows minimize the risk of errors, improving the
              quality of reports.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Adaptable</h2>
            <div className="flex mb-2 justify-center sm:justify-start md:justify-start lg:justify-start">
              <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-400">
              Suitable for various lines of business, making it flexible for any
              adjuster.
            </p>
          </div>
          {/* <div>
            <h2 className="text-2xl font-semibold mb-2">
              Generate Custom Reports
            </h2>
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

export default WhyChooseThisPlatform;
