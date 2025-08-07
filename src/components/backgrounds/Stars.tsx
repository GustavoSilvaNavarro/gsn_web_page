'use client';

import {
  type HTMLMotionProps,
  motion,
  type SpringOptions,
  type Transition,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

type StarLayerProps = HTMLMotionProps<'div'> & {
  count: number;
  size: number;
  transition: Transition;
  starColor: string;
};

function generateStars(count: number, starColor: string) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(', ');
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: 'linear' },
  starColor = '#fff',
  className,
  ...props
}: StarLayerProps) {
  const [boxShadow, setBoxShadow] = useState<string>('');

  useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  return (
    <motion.div
      animate={{ y: [0, -2000] }}
      className={cn('absolute top-0 left-0 w-full h-[2000px]', className)}
      data-slot="star-layer"
      transition={transition}
      {...props}>
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

type StarsBackgroundProps = React.ComponentProps<'div'> & {
  factor?: number;
  speed?: number;
  transition?: SpringOptions;
  pointerEvents?: boolean;
};

function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = { stiffness: 50, damping: 20 },
  pointerEvents = true,
  ...props
}: StarsBackgroundProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const starColor = isDarkMode ? '#fff' : '#4B5563';
  const backgroundGradient = isDarkMode
    ? 'bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]'
    : 'bg-[radial-gradient(ellipse_at_bottom,_#F0F4F8_0%,_#E3E8EC_100%)]';

  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;

      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor],
  );

  return (
    <div
      className={cn('relative size-full overflow-hidden', backgroundGradient, className)}
      data-slot="stars-background"
      onMouseMove={handleMouseMove}
      {...props}>
      <motion.div className={cn({ 'pointer-events-none': !pointerEvents })} style={{ x: springX, y: springY }}>
        <StarLayer
          count={1000}
          size={1}
          starColor={starColor}
          transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
        />
        <StarLayer
          count={400}
          size={2}
          starColor={starColor}
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: 'linear',
          }}
        />
        <StarLayer
          count={200}
          size={3}
          starColor={starColor}
          transition={{
            repeat: Infinity,
            duration: speed * 3,
            ease: 'linear',
          }}
        />
      </motion.div>
      {children}
    </div>
  );
}

export { StarLayer, StarsBackground, type StarLayerProps, type StarsBackgroundProps };
