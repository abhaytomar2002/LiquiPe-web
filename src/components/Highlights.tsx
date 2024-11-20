import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import AnimScroll from "./animScroll";

const Transaction: React.FC = () => {
  const data = [
    {
      id: 1,
      title: "Interest @10%",
      description:
        "With the paid invoice, you can check any monthly bills that have been paid by you.",
    },
    {
      id: 2,
      title: "Withdraw amount anytime",
      description:
        "The Monthly Progress feature in the invoice lets you see your speed in paying bills each month.",
    },
    {
      id: 3,
      title: "Pay only interest",
      description:
        "With the modern user interface, it makes it easier for you to make payments due to its simplicity.",
    },
    {
      id: 3,
      title: "No hidden fees",
      description:
        "With the modern user interface, it makes it easier for you to make payments due to its simplicity.",
    },
  ];

  useEffect(() => {
    AnimScroll(".title2", 100, ".title2");
    data.forEach((_, index) => {
      AnimScroll(`#list-${index}`, 50, `.play-${index + 1}`);
    });
    AnimScroll(".bg", 300, "#list-0");
  }, []);

  return (
    <div className="bg-black p-24 overflow-hidden text-white flex justify-center items-center">
      <div className="w-full">
        <h2 className="text-4xl text-left font-semibold leading-tight">
          No hidden fees. No credit checks.
        </h2>
        <h2 className="text-2xl text-left py-4">
          Just hassle free instant loan.
        </h2>
        {data.map((content, i) => (
          <div
            key={content.id}
            id={`list-${i}`}
            className="flex items-start gap-5 mt-8 mx-8 lg:mx-0"
          >
            <CheckIcon className="w-8 bg-newPurple text-white rounded-full p-2" />
            <div>
              <p className="text-xl font-medium">{content.title}</p>
              {/* <p className="mt-2 text-base leading-loose text-slate-400 group-hover:text-white">
                {content.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>
      <div className="h-max">       
          <img
            id="img-1"
            className="h-100%"
            src="/mockup1.png"
            alt="Dashboard 1"
          />   
      </div>
    </div>
  );
};

export default Transaction;
