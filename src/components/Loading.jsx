import React from "react";
import { LifeLine } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <LifeLine color="aqua" size="medium" text="" textColor="" />
    </div>
  );
};

export default Loading;
