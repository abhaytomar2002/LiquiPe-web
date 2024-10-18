import React from "react";

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$10/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Pro",
      price: "$20/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Enterprise",
      price: "$30/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div className="my-20 lg:my-36 w-full xl:w-container mx-auto text-center">
      <h2 className="text-4xl font-semibold leading-relaxed text-white">
        Pricing Plans
      </h2>
      <div className="flex justify-center gap-10 mt-10">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
            <p className="text-lg text-blue-400">{plan.price}</p>
            <ul className="mt-4 text-slate-400">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
