const ThankYouModal = ({
  isShown,
  setIsShown,
  title,
  description,
  thanqYouModal,
}) => {
  const ThankYouSvg = () => {
    return (
      <svg
        className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333z m-50.432-326.101333L310.613333 504.32a32 32 0 0 0-45.226666 45.226667l174.72 174.762666a32.341333 32.341333 0 0 0 0.341333 0.341334l0.256 0.213333a32 32 0 0 0 50.048-6.144l337.450667-379.605333a32 32 0 1 0-47.872-42.496l-318.762667 358.613333z"
          fill={thanqYouModal ? "#52C41A" : "#f5c73d"}
        />
      </svg>
    );
  };

  if (!isShown) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-4">
        <div
          className="relative rounded-lg shadow dark:bg-gray-700"
          style={{
            backgroundColor: "#FFFAF0",
          }}
        >
          <button
            onClick={() => setIsShown(false)}
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
          <div className="p-4 md:p-5 text-center">
            <ThankYouSvg />
            <h3 className="mb-5 text-lg font-bold text-gray-1000 dark:text-gray-300">
              {title}
            </h3>
            <p
              className="mb-5 font-normal text-gray-900 dark:text-gray-400"
              style={{
                fontSize: 14,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
