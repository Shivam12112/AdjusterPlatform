// pages/how-it-works.js
import Image from "next/image";
import styles from "../styles/HowItWorks.module.css"; // You can create and customize CSS here
import welcomeImage from "../../public/welcome.png";
import { appName } from "@/lib/variables";

const HowItWorks = () => {
  return (
    <section className="main-1" id="how-it-works">
      <h1 className={styles.header}>How it works</h1>
      <p className={styles.description}>
        An app that makes sales recording easier, faster, and more reliable than
        a sales diary or notebook.
      </p>
      <div className={styles.content}>
        <div className={styles.images}>
          <Image
            src={welcomeImage} // Make sure the image is in the public folder
            alt="How it works steps"
            width={500} // Adjust the width accordingly
            height={500} // Adjust the height accordingly
          />
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>Setup and Customization</h2>
            <p className={styles.stepDescription}>
              Start by setting up your {appName} account. Customize workflows to
              align with the specific requirements of different insurance
              carriers and lines of business (LoB). Tailor questionnaires and
              site survey templates to ensure all necessary information is
              captured.
            </p>
          </div>
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>AI-Driven Analysis</h2>
            <p className={styles.stepDescription}>
              Once your survey data is uploaded, {appName}&apos;s AI engine
              processes the information. It automatically recognizes items in
              your photos and annotates damages, reducing the need for manual
              input and minimizing errors.
            </p>
          </div>
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>Review and Approval</h2>
            <p className={styles.stepDescription}>
              Review the AI-generated annotations and add any additional
              observations. {appName}&apos;s intuitive interface allows for
              quick edits and approvals, ensuring all information is accurate
              and complete before finalizing the report.
            </p>
          </div>
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>Generate Custom Reports</h2>
            <p className={styles.stepDescription}>
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
