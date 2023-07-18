import { useEffect, useRef, useState } from "react";

export const useImageObserver = (options) => {
  const containerRef = useRef(null);
  const [onView, setOnView] = useState(false);
  const observerRef = useRef(null);

  const callbackFunc = (entries) => {
    const [entry] = entries;
    setOnView(entry.isIntersecting);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callbackFunc, options);

    if (containerRef.current) observerRef.current.observe(containerRef.current);

    return () => {
      if (containerRef.current)
        // eslint-disable-next-line
        observerRef.current.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  useEffect(() => {
    if (options.triggerOnce && onView) {
      observerRef.current.unobserve(containerRef.current);
    }
  }, [onView, options.triggerOnce]);

  return [containerRef, onView];
};
