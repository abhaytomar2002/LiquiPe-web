import {
  StarIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import AnimScroll from "./animScroll";

const Review: React.FC = () => {
  const dataReview = [
    {
      id: 1,
      user: "/user1.jpg",
      review:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "John Doe",
    },
    {
      id: 2,
      user: "/user2.jpg",
      review:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "Jacob Seed",
    },
    {
      id: 3,
      user: "/user3.jpg",
      review:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "Emilia Tadashi",
    },
    {
      id: 4,
      user: "/user4.jpg",
      review:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "Jonathan",
    },
    {
      id: 5,
      user: "/user5.jpg",
      review:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "Franklin",
    },
    {
      id: 6,
      user: "/user6.jpg",
      review:
        "Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.",
      name: "Jason",
    },
  ];

  const cardRef = useRef<HTMLDivElement>(null);
  let pos = 0;

  useEffect(() => {
    AnimScroll(".title4", 100, ".title4");
    dataReview.forEach((_, index) => {
      AnimScroll(`#review-${index}`, 100 + index * 50, ".content4");
    });
  }, []);

  const onNext = () => {
    if (pos !== -1260) {
      pos -= 420;
      cardRef.current?.setAttribute(
        "style",
        `transform: translateX(${pos}px); transition: 0.5s ease-out`
      );
    }
  };

  const onPrev = () => {
    if (pos !== 0) {
      pos += 420;
      cardRef.current?.setAttribute(
        "style",
        `transform: translateX(${pos}px); transition: 0.5s ease-out`
      );
    }
  };

  return (
    <div className="my-20 lg:my-36 w-full xl:w-container mx-auto text-center">
      <div className="title4">
        <h2 className="text-4xl font-semibold leading-relaxed text-white">
          Client's Say About Us
        </h2>
        <p className="mt-3 w-3/4 mx-auto text-slate-400 text-base">
          These are things that clients who have used our features and works say
        </p>
      </div>
      <div ref={cardRef} className="mt-20 text-left flex gap-10 px-12 xl:px-0">
        {dataReview.map((review, i) => (
          <div
            key={review.id}
            id={`review-${i}`}
            className="bg-rose p-[2px] mt-5 rounded-2xl"
          >
            <div className="w-[375px] text-white bg-gray rounded-2xl px-6 pt-14 pb-6">
              <div className="w-20 h-20 absolute -mt-24 rounded-full overflow-hidden">
                <img src={review.user} alt="user" />
              </div>
              <p className="content4 text-base leading-relaxed pb-5 border-b">
                "{review.review}"
              </p>
              <span className="flex justify-between items-center mt-8">
                <p className="font-semibold">{review.name}</p>
                <div className="flex">
                  <span className="mr-2">5.0</span>
                  {[...Array(5)].map((_, starIndex) => (
                    <StarIcon key={starIndex} className="w-5 text-orange-400" />
                  ))}
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 flex items-center justify-center gap-2">
        <button onClick={onPrev}>
          <ChevronLeftIcon className="w-10 mr-2 bg-midBlue text-white rounded-full p-2" />
        </button>
        <button onClick={onNext}>
          <ChevronRightIcon className="w-10 ml-2 bg-midBlue text-white rounded-full p-2" />
        </button>
      </div>
    </div>
  );
};

export default Review;
