import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { memo } from 'react';

const Leaf = memo(({ progress, x, y, rotate, delay }: { progress: any, x: number, y: number, rotate: number, delay: number }) => {
  // Grow leaves twice as fast relative to scroll
  const scale = useTransform(progress, [delay, delay + 0.04], [0, 1]);
  const opacity = useTransform(progress, [delay, delay + 0.02], [0, 1]);
  
  return (
    <motion.path
      d="M 0,0 Q 15,-15 30,0 Q 15,15 0,0"
      fill="#2B5341"
      style={{ 
        scale, 
        opacity, 
        x, 
        y, 
        rotate,
        originX: "0px", 
        originY: "0px",
        willChange: "transform, opacity"
      }}
    />
  );
});

const Vines = () => {
  const { scrollYProgress } = useScroll();
  
  // Vine reaches full length by 40% scroll for more impact early on
  const limitedProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  
  const pathLength = useSpring(limitedProgress, {
    stiffness: 120,
    damping: 35,
    mass: 0.1,
    restDelta: 0.01
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 0.6]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Left Side Vine */}
      <svg 
        className="absolute left-0 top-0 h-[100vh] w-[200px]" 
        viewBox="0 0 200 1000" 
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 20,0 Q 80,150 20,300 Q -40,450 40,600 Q 120,750 20,900 L 40,1000"
          fill="none" 
          stroke="#2B5341" 
          strokeWidth="2" 
          style={{ pathLength, opacity }}
        />
        <Leaf progress={limitedProgress} delay={0.05} x={35} y={50} rotate={-30} />
        <Leaf progress={limitedProgress} delay={0.20} x={25} y={280} rotate={-10} />
        <Leaf progress={limitedProgress} delay={0.45} x={50} y={580} rotate={30} />
        <Leaf progress={limitedProgress} delay={0.70} x={35} y={880} rotate={-20} />
      </svg>

      {/* Right Side Vine */}
      <svg 
        className="absolute right-0 top-0 h-[100vh] w-[200px]" 
        viewBox="0 0 200 1000" 
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 180,0 Q 120,150 180,300 Q 240,450 160,600 Q 80,750 180,900 L 160,1000"
          fill="none" 
          stroke="#2B5341" 
          strokeWidth="2" 
          style={{ pathLength, opacity }}
        />
        <Leaf progress={limitedProgress} delay={0.10} x={160} y={80} rotate={160} />
        <Leaf progress={limitedProgress} delay={0.30} x={190} y={320} rotate={150} />
        <Leaf progress={limitedProgress} delay={0.55} x={130} y={620} rotate={210} />
        <Leaf progress={limitedProgress} delay={0.80} x={170} y={920} rotate={170} />
      </svg>
    </div>
  );
};

export default memo(Vines);
