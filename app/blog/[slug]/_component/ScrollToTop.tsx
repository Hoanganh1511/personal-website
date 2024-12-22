"use client";

import { useEffect, useState } from "react";
import { IconChevronUp } from "@tabler/icons-react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className="flex items-center hover:opacity-80"
      onClick={scrollToTop}
    >
      <IconChevronUp className="size-[18px] stroke-black-primary mr-[10px]" />
      <p>Back to top</p>
    </button>
  );
};

export default ScrollToTopButton;
