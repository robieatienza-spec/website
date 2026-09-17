"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";

export interface HeroParallaxProject {
  title: string;
  category: string;
  link: string;
  /** Tailwind gradient classes used as a placeholder thumbnail. */
  gradient: string;
}

export const HeroParallax = ({
  products,
}: {
  products: HeroParallaxProject[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[130vh] sm:h-[160vh] pb-10 sm:pb-16 overflow-hidden antialiased relative flex flex-col self-auto bg-background [perspective:1000px] [transform-style:preserve-3d]"
    >
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10 mb-10 sm:mb-16">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 sm:mb-16 space-x-6 sm:space-x-10">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: HeroParallaxProject;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -16 }}
      key={product.title}
      className="group/product h-48 w-64 sm:h-72 sm:w-96 relative shrink-0"
    >
      <Link
        href={product.link}
        className={`block h-full w-full rounded-2xl bg-gradient-to-br ${product.gradient} shadow-[0_8px_30px_rgba(20,18,15,0.15)] group-hover/product:shadow-[0_16px_40px_rgba(20,18,15,0.25)] transition-shadow overflow-hidden relative`}
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
        <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.2em] text-white/80 font-sans">
          {product.category}
        </span>
      </Link>
      <div className="absolute inset-0 h-full w-full rounded-2xl opacity-0 group-hover/product:opacity-100 transition-opacity bg-linear-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 transition-opacity text-white font-display text-lg pointer-events-none">
        {product.title}
      </h2>
    </motion.div>
  );
};
