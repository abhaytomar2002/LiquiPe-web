// src/components/banner.tsx
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full text-white px-24">
      <h1 className="text-6xl font-bold">
        Unlock the Value <br /> of Your Investments <br /> with LiquiPe
      </h1>
      <p className="mt-6 text-lg">
        Get quick and secure loans against your securities or mutual funds <br />
        through our cutting-edge digital platform.
      </p>
      <button className="px-6 py-3 bg-newPurple w-1/5 my-20 rounded hover:bg-lightPurple hover:text-black transition">
        Get Started
      </button>
    </div>
  );
};

export default Banner;
