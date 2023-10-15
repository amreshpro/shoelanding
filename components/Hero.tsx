"use client";


import Link from "next/link";
import { TypedUseSelectorHook, useSelector } from "react-redux";


const Hero = () => {
  const isDarkModeEnable = useSelector((state:any) => state.darkMode);

  return (
    <div
      className={`${
        isDarkModeEnable ? "DarkColor" : "LightColor"
      }  h-screen flex md:flex-col gap-4 sm:gap-2 justify-between sm:justify-start sm:px-2  sm:py-2 px-8  py-8 `}
    >
      <div className="text-content  w-1/2 md:w-full flex flex-col gap-5 px-8 py-4 sm:px-2">
        <h1 className="text-xl font-semibold ">Nike</h1>
        <p className="">
          Nike is the world&quot;s largest supplier of athletic shoes and
          apparel and a major manufacturer of sports equipment, with revenue in
          excess of US$46 billion
        </p>
        <p>Nike Air cushioning reduces the weight of the shoe without reducing performance. The lighter the shoe is, the less energy athletes put out during their performance. Athletes need the cushioning in their footwear to last, and Nike Air is designed to provide support throughout the life of the shoe.</p>
        <Link
          href="/"
          className={`DarkButton m-1 px-4 py-4 sm:text-xl sm:py-2 sm:px-2 text-2xl`}
        >
          Shop Now
        </Link>
      </div>

      <div className="image  w-1/2 sm:w-full pb-4  makeBouncing">
        <div className="Animated-Image object-center  w-full h-full sm:h-[250px] sm:w-full "></div>


       
      </div>


    </div>
  );
};
export default Hero;
