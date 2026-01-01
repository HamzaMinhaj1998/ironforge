import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { fadeInUp, staggerContainer } from '../lib/variants';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <Motion.div style={{ y }} className='absolute inset-0'>
        {/* Base dark background */}
        <div className='absolute inset-0 bg-linear-to-b from-dark-900 via-dark-800 to-dark-900' />

        {/* Subtle center glow */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent_55%)]' />

        {/* Vignette */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85))]' />
      </Motion.div>

      <Motion.div
        style={{ opacity }}
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
      >
        <Motion.div
          initial='hidden'
          animate='visible'
          variants={staggerContainer}
          className='space-y-8'
        >
          <Motion.div
            variants={fadeInUp}
            className='inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm'
          >
            <span className='w-2 h-2 bg-accent-500 rounded-full animate-pulse' />
            <span className='text-gray-300'>Now Open 24/7</span>
          </Motion.div>

          <Motion.h1
            variants={fadeInUp}
            className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter'
          >
            <span className='block text-white'>Transform Your</span>
            <span className='block text-accent-500'>Body & Mind</span>
          </Motion.h1>

          <Motion.p
            variants={fadeInUp}
            className='text-xl text-gray-400 max-w-2xl mx-auto'
          >
            Join the ultimate fitness experience. State-of-the-art equipment,
            expert trainers, and a community that pushes you to be your best.
          </Motion.p>

          <Motion.div
            variants={fadeInUp}
            className='flex flex-col sm:flex-row items-center justify-center gap-4'
          >
            <Button size='lg'>
              Start Free Trial
              <Icon name='arrow-right' size={20} className='ml-2' />
            </Button>
            <Button variant='secondary' size='lg'>
              <Icon name='play' size={20} className='mr-2' />
              Watch Video
            </Button>
          </Motion.div>

          <Motion.div
            variants={fadeInUp}
            className='pt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto'
          >
            {[
              { value: '50+', label: 'Equipment' },
              { value: '12', label: 'Expert Trainers' },
              { value: '5K+', label: 'Members' },
            ].map((stat) => (
              <div key={stat.label} className='text-center'>
                <div className='text-3xl font-bold text-white'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-500'>{stat.label}</div>
              </div>
            ))}
          </Motion.div>
        </Motion.div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <Motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className='text-gray-500'
        >
          <Icon name='chevron-down' size={32} />
        </Motion.div>
      </Motion.div>
    </section>
  );
}
