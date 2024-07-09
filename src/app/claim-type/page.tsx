import React from "react";
import ClaimTypePage from "../../components/ClaimTypePage";
import { features } from "../../lib/features/features";

const page = () => {
  return (
    <div>
      <ClaimTypePage
        type={"Flood"}
        description="aakd asdhkjhgasd asdhkjh"
        features={features}
        benefits={[]}
      />
    </div>
  );
};

export default page;
