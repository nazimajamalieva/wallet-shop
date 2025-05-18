import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="container mx-auto bg-secondary rounded-2xl my-28 py-5">
        <div className="grid grid-cols-2 gap-10 p-20 items-center text-white">
          <div className="pe-20">
            <h1 className="text-4xl font-semibold leading-tight pb-5">
              Subscripe for the daily Update
            </h1>
            <p className="text-lg text-gray-400">
              Subscripe to our newsletter and get the latest updates on our
              products and services.Don't miss out on exclusive offers and
              promotions. Join our community today!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="py-8 text-xl px-5"
            />
            <Button className="hover:scale-100 py-7 bg-primary text-secondary">
              Subscripe Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
