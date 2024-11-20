import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Adjusted AnimScroll function to accept only two parameters max
const AnimScroll = (
  selector: string,
  offset: number = 100,
  target?: string
) => {
  const element = target || selector;
  gsap.to(selector, {
    scrollTrigger: {
      trigger: selector,
      start: `top+=${offset}px bottom`,
      scrub: true,
    },
    opacity: 1,
    y: 0,
    duration: 1,
  });

  return (
    <div className="animate opacity-0 translate-y-10">
      Scroll to animate this element
    </div>
  );
};

export default AnimScroll;
