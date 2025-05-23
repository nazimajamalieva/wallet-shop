import Image from "next/image";
import React from "react";

const Companys = () => {
  const companies = [
    { src: "/Assets/company1.png", width: 250, height: 100, alt: "Companys" },
    { src: "/Assets/company2.png", width: 250, height: 100, alt: "Companys" },
    { src: "/Assets/company3.png", width: 250, height: 100, alt: "Companys" },
    { src: "/Assets/company4.png", width: 250, height: 100, alt: "Companys" },
    { src: "/Assets/company5.png", width: 250, height: 100, alt: "Companys" },
  ];
  return (
    <>
      <div className="grid grid-cols-5 z-20 gap-20 py-30 items-center justify-around text-center px-10 ">
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
