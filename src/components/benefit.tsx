// src/components/benefit.tsx
import React from "react";

const Benefit: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "Fast Processing",
      description: "Get loans approved in minutes.",
    },
    {
      id: 2,
      title: "Secure Platform",
      description: "Choose a repayment plan that suits you.",
    },
    {
      id: 3,
      title: "Trusted by Investors",
      description: "Your data is safe with us.",
    },
  ];

  return (
    <div className="h-auto py-16 text-center bg-white">
      <h2 className="text-4xl font-semibold text-black">What we do</h2>
      <p className="py-10 text-gray-400 px-24">
        Experience the future of lending with LiquiPe, where esteemed borrowers
        can access swift loans against their securities or mutual funds in under
        10 minutes. Our platform connects you directly with lenders, ensuring a
        seamless and secure transaction process. With LiquiPe, you can leverage
        your investments to meet your financial needs effortlessly.
      </p>
      <div className="mt-10 px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-[#FDF6FE] p-10 rounded-lg shadow shadow-newPurple h-72"
          >
            <h3 className="text-xl font-bold">{benefit.title}</h3>
            <p className="pt-4 text-gray-500">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;