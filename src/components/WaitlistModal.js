import React, { useEffect } from "react";

const WaitlistModal = ({ isWaitListModal, setIsWaitListModal }) => {
  if (!isWaitListModal) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
      <div className="relative w-w/2  p-4">
        <div
          className="relative rounded-lg shadow dark:bg-gray-700"
          style={{
            backgroundColor: "#FFFAF0",
          }}
        >
          <button
            onClick={() => setIsWaitListModal(false)}
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-4 md:p-5 ">
            <div className=" md:p-5 text-center ">
              <h3 className="text-xl font-semibold text-black-900 dark:text-white">
                Why Join WaitList!
              </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <ul className="space-y-2 text-gray-900 list-disc list-inside dark:text-gray-400">
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Early Access:
                  </span>{" "}
                  Get exclusive early access to ClaimCloud before it officially
                  launches.
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Exclusive Updates:
                  </span>{" "}
                  Receive updates on new features, improvements, and
                  behind-the-scenes looks at our development process.
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Special Offers:
                  </span>{" "}
                  Be eligible for special offers and discounts available only to
                  waitlist members.
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Direct Feedback:
                  </span>{" "}
                  Have the opportunity to provide feedback and help shape the
                  future of ClaimCloud to better meet your needs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
