import Image from "next/image";
import welcomeImage from "../../public/process.jpg";
import { appName } from "@/lib/variables";

const HowItWorks = () => {
  return (
    <section className="py-12" id="how-it-works">
      <h1 className="text-4xl font-bold text-center mb-6">How it works</h1>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Effortless Claims Processing in Just a Few Steps.
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-12 lg:space-y-0">
        <div className="flex-1 flex justify-center">
          <Image
            src={welcomeImage}
            alt="How it works steps"
            width={0}
            height={0}
            style={{borderRadius:4}}
          />
        </div>
        <div className="flex-1 space-y-8 text-center sm:text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Setup and Customization
            </h2>
            <p className="text-gray-700">
              Customize workflows to
              align with the specific requirements of insurance
              carriers and lines of business (LoB). Tailor questionnaires and
              site survey templates to ensure all necessary information is
              captured.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">AI-Driven Analysis</h2>
            <p className="text-gray-700">
              As you capture photos and videos on site, {appName}&apos;s AI engine
              processes the information. It automatically recognizes items in
              your photos and annotates damages, reducing the need for manual
              input and minimizing errors.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Review and Approval</h2>
            <p className="text-gray-700">
              Review the AI-generated annotations and add any additional
              observations. {appName}&apos;s intuitive interface allows for
              quick edits and approvals, ensuring all information is accurate
              and complete before finalizing the report.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Generate Custom Reports
            </h2>
            <p className="text-gray-700">
              Create comprehensive, customizable reports that meet the specific
              needs of each insurance carrier. Include detailed findings,
              annotated images, and any additional notes. Our flexible reporting
              tool ensures your reports are professional and tailored to each
              claim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
