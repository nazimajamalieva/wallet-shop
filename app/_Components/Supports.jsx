import { CircleDollarSignIcon, Medal, Truck, UserRound } from "lucide-react";
import React from "react";

const Supports = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center items-center gap-8 sm:gap-10 lg:gap-14 py-[30px] sm:py-20 mt-20 px-6 sm:px-10">
      <div className="h-full max-h-[180px] flex flex-col justify-center items-center space-y-3 border-2 border-gray-300/40 p-8 rounded-md hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
        <Medal size={50} className="text-primary" />
        <h2 className="text-lg sm:text-xl font-medium text-center">
          100% Genuine Product Guarantee
        </h2>
      </div>

      <div className="h-full max-h-[180px] flex flex-col justify-center items-center space-y-3 border-2 border-gray-300/40 p-8 rounded-md hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
        <Truck size={50} className="text-primary" />
        <h2 className="text-lg sm:text-xl font-medium text-center">
          Guaranteed on Time Delivery
        </h2>
      </div>

      <div className="h-full max-h-[180px] flex flex-col justify-center items-center space-y-3 border-2 border-gray-300/40 p-5 rounded-md hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
        <CircleDollarSignIcon size={50} className="text-primary" />
        <h2 className="text-lg sm:text-xl font-medium text-center">
          100% Return Guarantee & Exchange
        </h2>
      </div>

      <div className="h-full max-h-[180px] flex flex-col justify-center items-center space-y-3 border-2 border-gray-300/40 p-8 rounded-md hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
        <UserRound size={50} className="text-primary" />
        <h2 className="text-lg sm:text-xl font-medium text-center">
          24 x 7 Customer Support
        </h2>
      </div>
    </div>
  );
};

export default Supports;
