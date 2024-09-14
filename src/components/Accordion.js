import { useState } from "react";
import "./accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion my-4">
      <button
        onClick={toggleAccordion}
        className="rounded-sm accordion-header p-4 w-full text-left bg-teal-700 text-white  hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        {title}
      </button>
      <div
        className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-white dark:bg-gray-800  border border-teal-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
