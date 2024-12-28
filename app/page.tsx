"use client";
import React, { useEffect, useRef, useState } from "react";
import HomePage from "./home";
import Services from "./services";

export default function Home() {
  const homePageRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isTransitioning = useRef(false);

  const handleScroll = () => {
    const homePageHeight = homePageRef.current?.offsetHeight || 0;
    const scrollPosition = window.scrollY;

    if (isTransitioning.current) return;
  
    if (homePageHeight && scrollPosition > homePageHeight * 0.4 && currentPage === 1) {
      isTransitioning.current = true;
      setCurrentPage(2);
      window.scrollTo({
        top: homePageHeight,
        behavior: "smooth",
      });
      setTimeout(() => (isTransitioning.current = false), 800);
    }
  
    if (homePageHeight && scrollPosition < homePageHeight * 0.4 && currentPage === 2) {
      isTransitioning.current = true;
      setCurrentPage(1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => (isTransitioning.current = false), 800);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  return (
    <>
      <div ref={homePageRef}>
        <HomePage />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
    </>
  );
}
