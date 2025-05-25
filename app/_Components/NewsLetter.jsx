import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="container mx-auto bg-secondary rounded-2xl my-16 md:my-28 py-10 md:py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-6 md:p-20 items-center text-white">
        <div className="md:pe-20 space-y-4">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
            Subscripe for the daily Update
          </h1>
          <p className="text-base md:text-lg text-gray-400">
            Subscripe to our newsletter and get the latest updates on our
            products and services. Don't miss out on exclusive offers and
            promotions. Join our community today!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Input
            type="email"
            placeholder="Enter Your Email"
            className="py-5 md:py-8 text-base md:text-xl px-4 md:px-5"
          />
          <Button className="hover:scale-100 py-5 md:py-7 bg-primary text-secondary text-base md:text-lg">
            Subscripe Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
