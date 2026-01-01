import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '../lib/variants';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const plans = [
    {
      name: 'Basic',
      price: 29,
      description: 'Perfect for getting started',
      features: [
        'Gym access',
        'Basic equipment',
        'Locker room',
        'Free parking',
      ],
      featured: false,
    },
    {
      name: 'Pro',
      price: 59,
      description: 'Most popular choice',
      features: [
        'Everything in Basic',
        'All group classes',
        'Personal training (2/mo)',
        'Nutrition guidance',
        'Sauna access',
      ],
      featured: true,
    },
    {
      name: 'Elite',
      price: 99,
      description: 'For serious athletes',
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Priority booking',
        'Guest passes (4/mo)',
        'Recovery suite',
        'VIP events',
      ],
      featured: false,
    },
  ];

  return (
    <section id='pricing' className='py-24 bg-dark-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Membership Plans'
          title='Invest in Yourself'
          description='Flexible plans designed to fit your lifestyle and goals.'
        />

        <Motion.div
          ref={ref}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'
        >
          {plans.map((plan) => (
            <Motion.div
              key={plan.name}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-2xl ${
                plan.featured
                  ? 'bg-linear-to-b from-accent-500/20 to-dark-700 border-2 border-accent-500/50'
                  : 'bg-dark-700 border border-white/5'
              }`}
            >
              {plan.featured && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-semibold px-4 py-1 rounded-full'>
                  Most Popular
                </div>
              )}
              <div className='text-center mb-8'>
                <h3 className='text-xl font-semibold mb-2'>{plan.name}</h3>
                <p className='text-gray-500 text-sm mb-4'>{plan.description}</p>
                <div className='flex items-baseline justify-center'>
                  <span className='text-5xl font-bold'>${plan.price}</span>
                  <span className='text-gray-500 ml-2'>/month</span>
                </div>
              </div>
              <ul className='space-y-4 mb-8'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-center text-gray-300'>
                    <Icon
                      name='check'
                      size={18}
                      className='text-accent-500 mr-3 shrink-0'
                    />
                    <span className='text-sm'>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? 'primary' : 'secondary'}
                className='w-full'
              >
                Get Started
              </Button>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
