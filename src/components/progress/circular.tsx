import { v4 } from "uuid";
import AnimatedCircularProgressBar from "../animated-circular-progress-bar";
import Container from "../container/container";
import { Progress } from "./progress.type";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";


export function ProgressCircular({ values }: { values: Progress[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState<number>(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
    layoutEffect: true
  });
  useMotionValueEvent(scrollYProgress, "change", (currentValue) => {
    const timer = setTimeout(() => setCurrent(currentValue > 0 && currentValue > current ? currentValue: current), 300)
    return () => clearTimeout(timer)
  })
  return (
    <>
      <Container>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {values.map(({ title, value }, index) => (
            <div key={v4()} className={`${values.length % 2 === 1 && index === 0 && 'col-span-1 md:col-span-2'}`}>
              <div className="grid justify-items-center mt-4 max-w-56 md:max-w-72 mx-auto">
                <AnimatedCircularProgressBar
                  max={100}
                  min={0}
                  value={current === 0 ? 0 : value * current}
                  gaugePrimaryColor="#991b1b"
                  gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                />
                <p className="mt-4">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}