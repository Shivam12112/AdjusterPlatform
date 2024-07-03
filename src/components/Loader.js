import Image from "next/image";
import React from "react";

const Loader = ({ isLoading }) => {
  if (!isLoading) return;
  else
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden">
        <div className="relative ">
          <div className="relative">
            <Image src={"/loading.gif"} height={60} width={60} />
          </div>
        </div>
      </div>
    );
};

export default Loader;
