import { useEffect } from "react";

const useScrollFx = ({
  revealSelector = ".fx-reveal",
  progressVar = "--fx-progress",
  threshold = 0.2,
  rootMargin = "0px 0px -8% 0px",
}) => {
  useEffect(() => {
    const nodes = document.querySelectorAll(revealSelector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold, rootMargin }
    );

    nodes.forEach((node) => observer.observe(node));

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      doc.style.setProperty(progressVar, progress + "%");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      nodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [revealSelector, progressVar, threshold, rootMargin]);
};

export default useScrollFx;