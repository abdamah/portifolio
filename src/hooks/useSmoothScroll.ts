import { useCallback } from "react";

const useSmoothScroll = () => {
  const smoothScroll = useCallback((href: string) => {
    const url = new URL(href);
    const hash = url.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return smoothScroll;
};

export default useSmoothScroll;
