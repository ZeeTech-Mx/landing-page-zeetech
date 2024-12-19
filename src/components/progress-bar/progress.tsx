import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Container from "../container/container";

export default function ProgressBars({values}: {values: { title: string, value: number }[]}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
    layoutEffect: true
  });
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const timer = setTimeout(() => setProgress(latest), 500)
    return () => clearTimeout(timer)
  })

  return (
    <Container className="m-5">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {values.map(({ title, value }, index) => (
          <div className={`${values.length % 2 === 1 && index === 0 && 'col-span-1 md:col-span-2'} mx-10 my-2`}>
            <h5 className="text-white text-center font-bold text-2xl">
              {title}
            </h5>
            <div className="flex items-center mt-4 max-w-56 md:max-w-72 mx-auto">
              <motion.progress className="md:w-full rounded-full h-10 [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-red-800 [&::-moz-progress-bar]:bg-red-800 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full" value={progress === 0 ? 0 : (value / 100) * progress} />
              <p className="my-auto font-bold text-xl w-20 mx-2 text-black dark:text-white">{value} %</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
