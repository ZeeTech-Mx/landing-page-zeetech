// thanks to oliver: https://www.youtube.com/@olivierlarose1
'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div  ref={container} className='h-screen flex items-center justify-center sticky top-0'>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[80%] rounded-md p-5 md:p-10 origin-top`}
      >
        <h2 className='text-4xl text-center font-semibold'>{title}</h2>
        <div className={`grid grid-cols-2 h-full pt-5 gap-10 py-5`}>
          <div>
            <p className='text-md md:text-2xl my-5'>{description}</p>
          </div>
          <div className={`rounded-lg overflow-hidden content-center`}>
            <motion.div style={{ scale: imageScale }}>
              <img src={url} alt='image' className='my-auto h-full' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};