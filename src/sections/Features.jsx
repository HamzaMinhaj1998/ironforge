import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../lib/variants';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: 'dumbbell',
      title: 'Premium Equipment',
      description:
        'Top-tier machines and free weights from leading fitness brands.',
    },
    {
      icon: 'users',
      title: 'Expert Trainers',
      description: 'Certified professionals dedicated to your fitness journey.',
    },
    {
      icon: 'clock',
      title: '24/7 Access',
      description:
        'Train on your schedule with round-the-clock facility access.',
    },
    {
      icon: 'heart',
      title: 'Wellness Programs',
      description: 'Holistic approach including nutrition and recovery plans.',
    },
    {
      icon: 'trophy',
      title: 'Results Tracking',
      description:
        'Advanced analytics to monitor your progress and achievements.',
    },
    {
      icon: 'zap',
      title: 'High-Energy Classes',
      description: 'Dynamic group sessions led by passionate instructors.',
    },
  ];

  return (
    <section className='py-24 bg-dark-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Why Choose Us'
          title='Everything You Need'
          description='We provide the complete fitness experience with world-class facilities and support.'
        />

        <Motion.div
          ref={ref}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {features.map((feature) => (
            <Motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className='group p-8 bg-dark-700 rounded-2xl border border-white/5 hover:border-accent-500/30 transition-all duration-300'
            >
              <div className='w-14 h-14 bg-accent-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors'>
                <Icon
                  name={feature.icon}
                  size={28}
                  className='text-accent-500'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
              <p className='text-gray-400 leading-relaxed'>
                {feature.description}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
