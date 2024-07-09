import Image from "next/image";
import React from "react";

const Loader = ({ isLoading }) => {
  if (!isLoading) return;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
      <div className="relative ">
        <div
          style={{
            padding: "7rem",
          }}
          className="relative rounded bg-floralwhite"
        >
          <Image
            src={"/loading.gif"}
            alt="loading.gif"
            height={60}
            width={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
