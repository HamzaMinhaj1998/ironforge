import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '../../lib/variants';

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  center = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <Motion.span
          variants={fadeInUp}
          className='text-accent-500 text-sm font-semibold uppercase tracking-widest'
        >
          {eyebrow}
        </Motion.span>
      )}
      <Motion.h2
        variants={fadeInUp}
        className='text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4'
      >
        {title}
      </Motion.h2>
      {description && (
        <Motion.p
          variants={fadeInUp}
          className='text-gray-400 text-lg max-w-2xl mx-auto'
        >
          {description}
        </Motion.p>
      )}
    </Motion.div>
  );
};
