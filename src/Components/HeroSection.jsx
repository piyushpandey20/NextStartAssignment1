import React from "react";
import award from "../asserts/1.png";
import award2 from "../asserts/2.png";
import utensils from "../asserts/3.png";

const HeroSection = () => {
  return (
    <div className="w-full h-full flex-col items-center justify-center gap-y-2">
      {/* first section */}
      <div className="flex items-center justify-end gap-[6rem] md:mx-0 mx-2 ">
        <div className="hidden md:block max-w-[30%] ">
          <img src={award} className="" />
        </div>
        <div className="flex flex-col leading-8 ">
          <p className=" md:-ml-2 ml-2 font-bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className=" md:ml-9 ml-5 list-disc">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={award2} className="" />
          <p>
            Government of India has awarded the
            <span className="font-bold">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col items-center md:mx-0 mx-2">
        <p className=" mt-10">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={utensils} className="lg:h-[320px] my-2 md:h-[100px]" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
        <div className="h-[2px] w-[95%] bg-red-500 my-4"></div>
        <p className=" font-bold mb-2">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="w-11/12">
          CHEMICALS & PROCESS <span className="text-red-500">|</span> POWER{" "}
          <span className="text-red-500">|</span> WATER & WASTE WATER{" "}
          <span className="text-red-500">|</span> OILS & GAS{" "}
          <span className="text-red-500">|</span> PHARMA{" "}
          <span className="text-red-500">|</span> SUGARS & DISTILLERIES{" "}
          <span className="text-red-500">|</span> PAPER & PULP{" "}
          <span className="text-red-500">|</span> MARINE & DEFENCE{" "}
          <span className="text-red-500">|</span> METAL & MINING{" "}
          <span className="text-red-500">|</span> FOOD & BEVERAGE{" "}
          <span className="text-red-500">|</span> PETROCHEMICAL & REFINERIES{" "}
          <span className="text-red-500">|</span> SOLAR{" "}
          <span className="text-red-500">|</span> BUILDING{" "}
          <span className="text-red-500">|</span> HVAC{" "}
          <span className="text-red-500">|</span> FIRE FIGHTING{" "}
          <span className="text-red-500">|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
