import React from "react";
import Button from "./Button";

const GetEarlyAccess = ({
  handleValueChange,
  email,
  fullName,
  validationError,
  onFormSubmit,
}) => {
  return (
    <section id="get-early-access" className="container pt-3 ">
      <div className="text-3xl font-bold text-center mb-6">
        <h1>Be the first to know </h1>
      </div>
      <p className="text-center text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
        Stay Ahead of the Curve.
      </p>
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className=" lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <div className="text-center">
            <h1 className="title-font font-semibold text-3xl text-gray-900 dark:text-gray-400">
              Why Join WaitList?
            </h1>
          </div>

          <div className="leading-relaxed mt-4">
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
        <div className="lg:w-2/6 md:w-1/2 bg-floralwhite dark:bg-gray-950 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 dark:text-gray-400 text-center text-lg font-bold title-font mb-5">
            Join Today!
          </h2>
          <div className="relative mb-4">
            <input
              onChange={handleValueChange}
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Full Name"
              required
              value={fullName}
              className="w-full sm:w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {validationError?.fullName && (
              <p className="text-red-500">{validationError?.fullName}</p>
            )}
          </div>
          <div className="relative mb-4">
            <input
              onChange={handleValueChange}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {validationError?.email && (
              <p className="text-red-500">{validationError?.email}</p>
            )}
          </div>
          <Button onClick={onFormSubmit}>Get Access!</Button>
        </div>
      </div>
    </section>
  );
};

export default GetEarlyAccess;
