"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const d = [1, 1, 1, 1, 1, 1, 1, 1, 1];

const Showcase = () => {
  const targetRef = useRef(null);
  const extendedRef = useRef(null);

  //   const scrollPosition = useScrollPosition();

  //   console.log({ scrollPosition });

  //   const entry = useIntersectionObserver(targetRef, {});

  //   const isVisible = !!entry?.isIntersecting;

  //   console.log(entry);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.75, 1],
    [1, 2.5, 4.2, 1]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0vw", "-10vw", "-55vw", "-150vw", "-250vw"]
  );

  const position = useTransform(scrollYProgress, (pos) => {
    console.log(pos);
    if (pos > 0 && pos < 1) return "fixed";
    else return "relative";
    // return "sticky";
  });

  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.75, 1],
    ["0vh", "40vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <motion.div
      className="relative h-[300vh] bg-green-400 overflow-hidden"
      ref={targetRef}
    >
      <motion.div
        ref={extendedRef}
        style={{ position }}
        className="top-0 left-0 h-full"
      >
        <div className="mx-auto max-w-6xl overflow-hidden h-full absolute top-[25%] left-[0]">
          <motion.div style={{ x }} className="flex gap-10">
            {d.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl min-w-[250px] bg-gradient-to-br transition-opacity"
              >
                <p className="bg-purple-500">{index}</p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                mollitia praesentium officia ipsa distinctio quisquam
                voluptatibus error nam. Consequuntur harum ullam laboriosam
                reiciendis voluptatem perferendis voluptas eligendi veniam
                laborum distinctio.
                <button className="bg-black block mt-5 rounded-xl px-4 py-2 text-white shadow-lg">
                  Show Me
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Showcase;
