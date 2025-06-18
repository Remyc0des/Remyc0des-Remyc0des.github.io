// scroll.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "./utils";

type ParallaxScrollProps = {
  images: string[];
  className?: string;
};

export const ParallaxScroll = ({ images, className = "" }: ParallaxScrollProps) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"]
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("h-[40rem] items-start overflow-y-auto w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {[firstPart, secondPart, thirdPart].map((column, colIndex) => (
          <div className="grid gap-10" key={`col-${colIndex}`}>
            {column.map((el, idx) => (
              <motion.div
                key={`img-${colIndex}-${idx}`}
                style={{ y: [translateFirst, translateSecond, translateThird][colIndex] }}>
                <img
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg"
                  height="400"
                  width="400"
                  alt={`uploaded-${idx}`}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
