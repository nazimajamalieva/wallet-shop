import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Creative = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-40 items-center py-20">
        <div className="space-y-10 pe-20">
          <h1 className="text-5xl font-semibold leading-tight">
            Creative Design
          </h1>
          <p className="text-xl text-gray-600 ">
            We create stunning and effective designs that capture your brand's
            essence and engage your audience.
          </p>
          <Button>Explore Collections</Button>
        </div>
        <div className="">
          <Image
            src="/Assets/creater-img.png"
            alt="about"
            width={500}
            height={500}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* ************************************ */}
        <div className="space-y-10 pe-20 order-2 ">
          <h1 className="text-5xl font-semibold leading-tight">
            Elevate Your Digital Presence
          </h1>
          <p className="text-xl text-gray-600 ">
            Our cutting-edge solutions help you stand out in the digitial
            landscape. From stunning visuals to seamless user experiences, we
            bring brand to life in ways that captivate and covert.
          </p>
          <Button>View Our Portfolio</Button>
        </div>
        <div className="order-1">
          <Image
            src="/Assets/creater2-img.png"
            alt="about"
            width={500}
            height={500}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* ************************************ */}
      </div>
    </>
  );
};
export default Creative;
