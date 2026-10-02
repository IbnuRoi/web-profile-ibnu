import { useState, useEffect, useMemo, useRef } from "react";

const useCarousel = (totalItems) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = totalItems || 1;
  const config = useMemo(() => {
    if (windowWidth >= 1024) {
      return {
        dots: Math.max(1, total - 2),
        maxIndex: Math.max(0, total - 3),
      };
    }
    if (windowWidth >= 768) {
      return {
        dots: Math.max(1, total - 1),
        maxIndex: Math.max(0, total - 2),
      };
    }
    return {
      dots: total,
      maxIndex: Math.max(0, total - 1),
    };
  }, [windowWidth, total]);

  const scrollToItem = (index) => {
    const container = carouselRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".carousel-item");
    const item = items[index];
    if (!item) return;

    item.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });

    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToItem(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < config.maxIndex) {
      scrollToItem(activeIndex + 1);
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const items = container.querySelectorAll(".carousel-item");
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, idx) => {
        const distance = Math.abs(item.offsetLeft - container.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    carouselRef,
    activeIndex,
    scrollToItem,
    handlePrev,
    handleNext,
    dots: config.dots,
    maxIndex: config.maxIndex,
  };
};

export default useCarousel;
