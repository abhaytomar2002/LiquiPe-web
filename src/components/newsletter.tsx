import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="my-20 lg:my-36 w-full xl:w-container mx-auto text-center bg-gray-800 p-10 rounded-lg">
      <h2 className="text-3xl font-semibold text-white">
        Subscribe to our Newsletter
      </h2>
      <p className="mt-3 text-slate-400">Get the latest updates and offers.</p>
      <div className="mt-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-l-lg border border-gray-600 focus:outline-none"
        />
        <button className="bg-blue-600 text-white p-2 rounded-r-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
