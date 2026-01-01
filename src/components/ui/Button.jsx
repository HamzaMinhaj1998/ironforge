import { motion as Motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900';
  const variants = {
    primary:
      'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40',
    secondary:
      'bg-dark-600 hover:bg-dark-500 text-white focus:ring-dark-500 border border-dark-500',
    ghost: 'bg-transparent hover:bg-white/5 text-white focus:ring-white/20',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Motion.button>
  );
};
