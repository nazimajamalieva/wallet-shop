import Image from "next/image";
import React from "react";

const Companys = () => {
  const companies = [
    { src: "/assets/company1.png", width: 250, height: 100, alt: "Companys" },
    { src: "/assets/company1.png", width: 250, height: 100, alt: "Companys" },
    { src: "/assets/company1.png", width: 250, height: 100, alt: "Companys" },
    { src: "/assets/company1.png", width: 250, height: 100, alt: "Companys" },
    { src: "/assets/company1.png", width: 250, height: 100, alt: "Companys" },
  ];
  return (
    <>
      <div className="grid grid-cols-5 z-20 gap-20 mt-20 items-center justify-around text-center  ">
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.src}
            width={company.width}
            height={company.height}
            alt={company.alt}
          />
        ))}
      </div>
    </>
  );
};
export default Companys;
