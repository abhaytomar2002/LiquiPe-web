// src/components/banner.tsx
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex place-items-center">
    <div className="flex flex-col justify-center h-full text-white p-24">
      <h1 className="text-6xl font-bold">
        Unlock the Value <br /> of Your Investments <br /> with LiquiPe
      </h1>
      <p className="mt-6 text-lg">
        Get quick and secure loans against your securities or mutual funds <br />
        through our cutting-edge digital platform.
      </p>
      <button className="px-6 py-3 bg-newPurple w-1/3 my-20 rounded hover:bg-lightPurple hover:text-black transition">
        Get Started
      </button>
    </div>
    <div className="place-items-center">
      <img className="relative w-3/4" src="mainpage.png" alt="img" />
    </div>
    </div>
  );
};

export default Banner;
