import { Icon as Iconify } from '@iconify/react';

export const Icon = ({ name, size = 24, className = '' }) => (
  <Iconify
    icon={`lucide:${name}`}
    width={size}
    height={size}
    className={className}
    style={{ strokeWidth: 1.5 }}
  />
);
