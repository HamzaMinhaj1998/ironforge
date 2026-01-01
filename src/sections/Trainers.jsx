import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../lib/variants';

export default function Trainers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const trainers = [
    {
      name: 'Alex Morgan',
      role: 'Head Trainer',
      specialty: 'Strength & Conditioning',
      image:
        'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Chen',
      role: 'Yoga Instructor',
      specialty: 'Flexibility & Mindfulness',
      image:
        'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
    },
    {
      name: 'Marcus Johnson',
      role: 'HIIT Specialist',
      specialty: 'Cardio & Fat Loss',
      image:
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
    },
    {
      name: 'Emma Davis',
      role: 'Nutrition Coach',
      specialty: 'Diet & Wellness',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id='trainers' className='py-24 bg-dark-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Meet the Team'
          title='Expert Trainers'
          description='Our certified professionals are here to guide you every step of the way.'
        />

        <Motion.div
          ref={ref}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {trainers.map((trainer) => (
            <Motion.div
              key={trainer.name}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className='group text-center'
            >
              <div className='relative mb-6 overflow-hidden rounded-2xl'>
                <div className='aspect-square'>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
                <div className='absolute inset-0 bg-linear-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6'>
                  <div className='flex gap-4'>
                    {['instagram', 'twitter', 'linkedin'].map((social) => (
                      <Motion.a
                        key={social}
                        href='#'
                        whileHover={{ scale: 1.1 }}
                        className='w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors'
                      >
                        <Icon name={social} size={18} />
                      </Motion.a>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className='text-lg font-semibold'>{trainer.name}</h3>
              <p className='text-accent-500 text-sm font-medium'>
                {trainer.role}
              </p>
              <p className='text-gray-500 text-sm mt-1'>{trainer.specialty}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
