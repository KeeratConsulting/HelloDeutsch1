import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedStat({ target, label, suffix = '', icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(target, 10);
          if (isNaN(end)) return;

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentVal = Math.floor(progress * end);
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target]);
  
  const formattedCount = target.includes('+') && count >= parseInt(target, 10) ? `${count}+` : count;

  return (
    <div ref__={ref} className="flex flex-col items-center text-center">
       <div className="text-5xl md:text-6xl font-bold text-teal-600 tracking-tighter">
        <span>{formattedCount}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="mt-2 text-base text-gray-500 font-medium">{label}</p>
    </div>
  );
}
