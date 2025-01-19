"use client";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";

const Intro: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();

  const sectionRef = useRef<HTMLElement>(null);

  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) entranceAnimation();
  }, [scope, entranceAnimation, inView]);

  return (
    <section
      className="section mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-4xl md:text-6xl lg:text-7xl lg:w-[80%]" ref={scope}>
          Building beatiful websites with clean code and thoughtful design to
          help your business grow and stand out online
        </h2>
      </div>
    </section>
  );
};

export default Intro;
