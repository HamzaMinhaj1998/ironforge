import { motion as Motion } from 'framer-motion';
import { Icon } from '../components/ui/Icon';

export default function Footer() {
  const links = {
    'Quick Links': ['Home', 'Programs', 'Trainers', 'Pricing', 'Contact'],
    Programs: ['Strength Training', 'HIIT Cardio', 'Yoga', 'CrossFit'],
    Support: ['FAQ', 'Terms of Service', 'Privacy Policy', 'Careers'],
  };

  return (
    <footer className='bg-dark-800 border-t border-white/5'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'>
          <div className='lg:col-span-2'>
            <a
              href='#'
              className='text-2xl font-bold tracking-tighter inline-block mb-4'
            >
              <span className='text-white'>IRON</span>
              <span className='text-accent-500'>FORGE</span>
            </a>
            <p className='text-gray-400 mb-6 max-w-sm'>
              Transform your body and mind with the ultimate fitness experience.
              Join thousands who have achieved their goals.
            </p>
            <div className='flex gap-4'>
              {['instagram', 'facebook', 'twitter', 'youtube'].map((social) => (
                <Motion.a
                  key={social}
                  href='#'
                  whileHover={{ scale: 1.1 }}
                  className='w-10 h-10 bg-dark-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-500 transition-all'
                >
                  <Icon name={social} size={18} />
                </Motion.a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className='font-semibold mb-4'>{title}</h4>
              <ul className='space-y-3'>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-white transition-colors text-sm'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-gray-500 text-sm'>
            © 2024 IRONFORGE. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            <a
              href='#'
              className='text-gray-500 hover:text-white text-sm transition-colors'
            >
              Terms
            </a>
            <a
              href='#'
              className='text-gray-500 hover:text-white text-sm transition-colors'
            >
              Privacy
            </a>
            <a
              href='#'
              className='text-gray-500 hover:text-white text-sm transition-colors'
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
