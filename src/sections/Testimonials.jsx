import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../lib/variants';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Michael R.',
      role: 'Member for 2 years',
      quote:
        'IRONFORGE completely transformed my fitness journey. The trainers are incredible and the community keeps me motivated.',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      role: 'Member for 1 year',
      quote:
        "Best gym I've ever joined. The 24/7 access fits perfectly with my busy schedule, and the equipment is always top-notch.",
      rating: 5,
    },
    {
      name: 'David K.',
      role: 'Member for 6 months',
      quote:
        'Lost 30 pounds in 6 months with their personalized training program. The results speak for themselves.',
      rating: 5,
    },
  ];

  return (
    <section className='py-24 bg-dark-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Testimonials'
          title='Success Stories'
          description='Hear from our members who have achieved their fitness goals.'
        />

        <Motion.div
          ref={ref}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          {testimonials.map((testimonial) => (
            <Motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className='p-8 bg-dark-700 rounded-2xl border border-white/5'
            >
              <div className='flex gap-1 mb-6'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name='star'
                    size={18}
                    className='text-yellow-500 fill-yellow-500'
                  />
                ))}
              </div>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                "{testimonial.quote}"
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center'>
                  <span className='text-accent-500 font-semibold'>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className='font-semibold'>{testimonial.name}</div>
                  <div className='text-sm text-gray-500'>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
