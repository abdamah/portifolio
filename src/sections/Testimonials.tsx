"use client";

import { FC, useRef, useState } from "react";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";

import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";

import { Testimonial } from "@/components/Testimonial";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const [testimonialIndex, settestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    settestimonialIndex(
      (curr) => (curr - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleClickNext = () => {
    settestimonialIndex((curr) => (curr + 1) % testimonials.length);
  };

  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const tranformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const tranformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section className="section overflow-hidden" id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col space-y-2 md:space-y-4 lg:space-y-6"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: tranformTop,
          }}
        >
          Some nice words from my past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-pink-500"
          style={{
            x: tranformBottom,
          }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                    key={name}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-16">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full
            hover:bg-red-pink-500 hover:text-white hover:border-red-pink-500 transition-all duration-300
            "
            onClick={handleClickPrev}
          >
            <LeftArrow />
          </button>
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-pink-500 hover:text-white hover:border-red-pink-500 transition-all duration-300"
            onClick={handleClickNext}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};
const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export default Testimonials;
