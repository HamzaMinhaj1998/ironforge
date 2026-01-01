import { motion as Motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { fadeInUp, staggerContainer } from '../lib/variants';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id='contact' className='py-24 bg-dark-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Motion.div
          ref={ref}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className='grid grid-cols-1 lg:grid-cols-2 gap-16'
        >
          <Motion.div variants={fadeInUp}>
            <span className='text-accent-500 text-sm font-semibold uppercase tracking-widest'>
              Get in Touch
            </span>
            <h2 className='text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-6'>
              Ready to Start?
            </h2>
            <p className='text-gray-400 text-lg mb-8'>
              Have questions about our memberships or want to schedule a tour?
              We'd love to hear from you.
            </p>

            <div className='space-y-6'>
              {[
                {
                  icon: 'map-pin',
                  label: '123 Fitness Street, Gym City, GC 12345',
                },
                { icon: 'phone', label: '+1 (555) 123-4567' },
                { icon: 'mail', label: 'hello@ironforge.com' },
                { icon: 'clock', label: 'Open 24/7' },
              ].map((item) => (
                <div key={item.icon} className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center'>
                    <Icon
                      name={item.icon}
                      size={20}
                      className='text-accent-500'
                    />
                  </div>
                  <span className='text-gray-300'>{item.label}</span>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className='bg-dark-700 rounded-2xl p-8 border border-white/5'
          >
            <div className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className='w-full bg-dark-600 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className='w-full bg-dark-600 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all'
                  placeholder='your@email.com'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Phone
                </label>
                <input
                  type='tel'
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className='w-full bg-dark-600 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all'
                  placeholder='+1 (555) 000-0000'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className='w-full bg-dark-600 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none'
                  placeholder='Tell us about your fitness goals...'
                />
              </div>
              <Button type='submit' className='w-full' size='lg'>
                Send Message
                <Icon name='send' size={18} className='ml-2' />
              </Button>
            </div>
          </Motion.form>
        </Motion.div>
      </div>
    </section>
  );
}
