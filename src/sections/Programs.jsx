import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/SectionHeading';
import { scaleIn, staggerContainer } from '../lib/variants';

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const programs = [
    {
      name: 'Strength Training',
      level: 'All Levels',
      duration: '60 min',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    },
    {
      name: 'HIIT Cardio',
      level: 'Intermediate',
      duration: '45 min',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    },
    {
      name: 'Yoga Flow',
      level: 'Beginner',
      duration: '75 min',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    },
    {
      name: 'CrossFit',
      level: 'Advanced',
      duration: '50 min',
      image:
        'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id='programs' className='py-24 bg-dark-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Our Programs'
          title='Train Your Way'
          description='Diverse programs designed to match your goals and fitness level.'
        />

        <Motion.div
          ref={ref}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {programs.map((program) => (
            <Motion.div
              key={program.name}
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              className='group relative overflow-hidden rounded-2xl cursor-pointer'
            >
              <div className='aspect-3/4 relative'>
                <img
                  src={program.image}
                  alt={program.name}
                  className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/50 to-transparent' />
                <div className='absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-colors duration-300' />
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='text-xs font-medium text-accent-400 bg-accent-500/20 px-2 py-1 rounded'>
                    {program.level}
                  </span>
                  <span className='text-xs text-gray-400'>
                    {program.duration}
                  </span>
                </div>
                <h3 className='text-xl font-semibold'>{program.name}</h3>
                <div className='mt-4 flex items-center text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <span className='text-sm font-medium'>Learn More</span>
                  <Icon name='arrow-right' size={16} className='ml-2' />
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
