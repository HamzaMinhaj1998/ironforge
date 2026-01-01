import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <Motion.a
            href='#'
            className='text-2xl font-bold tracking-tighter'
            whileHover={{ scale: 1.02 }}
          >
            <span className='text-white'>IRON</span>
            <span className='text-accent-500'>FORGE</span>
          </Motion.a>

          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Motion.a
                key={link.name}
                href={link.href}
                className='text-sm font-medium text-gray-300 hover:text-white transition-colors relative group'
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full' />
              </Motion.a>
            ))}
          </div>

          <div className='hidden md:block'>
            <Button>Join Now</Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden p-2 text-white'
          >
            <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-dark-800 border-t border-white/5'
          >
            <div className='px-4 py-6 space-y-4'>
              {navLinks.map((link) => (
                <Motion.a
                  key={link.name}
                  href={link.href}
                  className='block text-gray-300 hover:text-white py-2'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Motion.a>
              ))}
              <Button className='w-full mt-4'>Join Now</Button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}
