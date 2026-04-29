import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character: React.FC<{ char: string; progress: any; range: [number, number] }> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative">
      <span className="opacity-20">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => {
        const start = wordIndex / words.length;
        const end = (wordIndex + 1) / words.length;

        return (
          <span key={wordIndex} className="mr-[0.25em] inline-flex">
            {word.split('').map((char, charIndex) => {
              const charStart = start + (charIndex / word.length) * (end - start);
              const charEnd = start + ((charIndex + 1) / word.length) * (end - start);
              
              return (
                <Character
                  key={charIndex}
                  char={char}
                  range={[charStart, charEnd]}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
