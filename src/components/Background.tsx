
import React from "react";
import { Boxes } from "./ui/background-boxes";

const Background = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-blue-400 to-violet-700">
      <Boxes className="absolute inset-0" />
      

    </div>
    
  );
};

export default Background;
