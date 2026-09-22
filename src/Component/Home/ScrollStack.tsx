import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  /** Vertical top offset where cards pin (in px, default: 84) */
  topOffset?: number;
  /** Vertical offset increment between stacked cards at the top in px (default: 18) */
  itemDistance?: number;
  /** Scale reduction step for cards stacked underneath (default: 0.035) */
  scaleStep?: number;
  /** Subtle dimming step for cards under the stack (default: 0.025) */
  dimStep?: number;
  /** Scroll travel / vertical spacing between cards (default: '45vh') */
  cardSpacing?: string;
}

export interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  style?: React.CSSProperties;
  id?: string | number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  className = '',
  itemClassName = '',
  style,
  id,
}) => {
  const combinedClass = [className, itemClassName].filter(Boolean).join(' ');
  return (
    <div id={id ? String(id) : undefined} className={combinedClass} style={style}>
      {children}
    </div>
  );
};

interface StackCardProps {
  children: React.ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
  topOffset: number;
  itemDistance: number;
  scaleStep: number;
  dimStep: number;
  cardSpacing: string;
}

const StackCard: React.FC<StackCardProps> = ({
  children,
  index,
  total,
  progress,
  topOffset,
  itemDistance,
  scaleStep,
  dimStep,
  cardSpacing,
}) => {
  const isLast = index === total - 1;
  const stickyTop = topOffset + index * itemDistance;
  const zIndex = 10 + index;

  // Target scale & brightness when subsequent cards are stacked on top
  const targetScale = 1 - (total - 1 - index) * scaleStep;
  const targetBrightness = 1 - (total - 1 - index) * dimStep;

  // Range of scroll progress when this card scales down:
  const startProgress = total > 1 ? (index / total) * 0.9 : 0;

  const scale = useTransform(
    progress,
    [startProgress, 1],
    [1, targetScale],
    { clamp: true }
  );

  const brightness = useTransform(
    progress,
    [startProgress, 1],
    [1, targetBrightness],
    { clamp: true }
  );

  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <div
      className="sticky w-full"
      style={{
        top: `${stickyTop}px`,
        zIndex: zIndex,
        marginBottom: isLast ? '0px' : cardSpacing,
      }}
    >
      <motion.div
        style={{
          scale,
          filter,
          transformOrigin: 'top center',
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ScrollStack: React.FC<ScrollStackProps> & {
  Item: typeof ScrollStackItem;
} = ({
  children,
  className = '',
  topOffset = 84,
  itemDistance = 18,
  scaleStep = 0.035,
  dimStep = 0.025,
  cardSpacing = '45vh',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = React.Children.toArray(children).filter(React.isValidElement);
  const total = items.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {items.map((child, index) => (
        <StackCard
          key={child.key || index}
          index={index}
          total={total}
          progress={scrollYProgress}
          topOffset={topOffset}
          itemDistance={itemDistance}
          scaleStep={scaleStep}
          dimStep={dimStep}
          cardSpacing={cardSpacing}
        >
          {child}
        </StackCard>
      ))}
    </div>
  );
};

ScrollStack.Item = ScrollStackItem;

export default ScrollStack;
