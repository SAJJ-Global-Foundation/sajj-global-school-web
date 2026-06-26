import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 font-display font-semibold rounded-xl whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 disabled:opacity-60 disabled:pointer-events-none';

const variants = {
  gradient: 'gradient-btn',
  primary: 'bg-navy-700 text-white hover:bg-navy-800 hover:shadow-md hover:-translate-y-0.5',
  outline: 'border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white',
  ghost: 'text-navy-700 hover:bg-navy-700/10',
  white: 'bg-white text-navy-700 hover:bg-brand-light hover:shadow-md',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
