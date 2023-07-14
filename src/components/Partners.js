import React, { useEffect, useRef } from "react";
import firstLogo from "../assets/unis/1.png";
import secondLogo from "../assets/unis/2.png";
import thirdLogo from "../assets/unis/3.png";
import fourthLogo from "../assets/unis/4.png";
import fifthLogo from "../assets/unis/5.png";
import sixthLogo from "../assets/unis/6.png";
import seventhLogo from "../assets/unis/7.png";
import eighthLogo from "../assets/unis/8.png";
import ninthLogo from "../assets/unis/9.png";
import tenthLogo from "../assets/unis/10.png";
import eleventhLogo from "../assets/unis/11.png";
import twelfthLogo from "../assets/unis/12.png";
import thirteenthLogo from "../assets/unis/13.png";
import fourteenthLogo from "../assets/unis/14.png";

const Partners = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollContent = () => {
      const scrollMax =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      let scrollPos = scrollContainer.scrollLeft;
      const speed = 1; // Adjust scrolling speed if needed

      const scrollStep = () => {
        scrollPos += speed;
        if (scrollPos >= scrollMax) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
        requestAnimationFrame(scrollStep);
      };

      requestAnimationFrame(scrollStep);
    };

    let animationFrameId;

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scrollContent);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = requestAnimationFrame(scrollContent);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div name="partners" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="font-bold md:text-xl p-4 text-center">
          Some of the Universities we work with
        </h2>
        <div
          className="flex overflow-x-auto py-4 scrollbar-hide"
          ref={scrollContainerRef}
        >
          <img
            src={firstLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={secondLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={thirdLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={fourthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={fifthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={sixthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={seventhLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={eighthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={ninthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={tenthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={eleventhLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={twelfthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={thirteenthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
          <img
            src={fourteenthLogo}
            alt="University Logo"
            className="w-auto h-20 mx-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
