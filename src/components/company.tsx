import React from "react";

const Company: React.FC = () => {
  const companies = [
    "/company1.png",
    "/company2.png",
    "/company3.png",
    "/company4.png",
    "/company5.png",
  ];

  return (
    <div className="bg-gray-200 h-96 text-center">
      <h2 className="text-4xl font-semibold py-10 leading-relaxed">
        Our Partners
      </h2>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {companies.map((company, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-4">
            <img
              src={company}
              alt={`Company ${index + 1}`}
              className="h-20 mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
