import { forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';

const variants = {
 primary:
 'bg-ink-950 text-white hover:bg-accent shadow-lg shadow-ink-950/20 hover:shadow-accent/30',
 secondary:
 'border border-ink-200 bg-white text-ink-950 hover:border-ink-950 hover:bg-ink-50',
 ghost:
 'text-ink-950 hover:bg-ink-100',
 accent:
 'bg-accent text-white hover:bg-ink-950 shadow-lg shadow-accent/30',
};

const sizes = {
 sm: 'px-4 py-2 text-sm',
 md: 'px-5 py-2.5 text-sm',
 lg: 'px-6 py-3.5 text-base',
};

const Button = forwardRef(function Button(
 { variant = 'primary', size = 'md', withArrow = false, className = '', children, as: Component = 'button', ...props },
 ref
) {
 return (
 <Component
 ref={ref}
 className={`group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out-expo focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
 {...props}
 >
 {children}
 {withArrow && (
 <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
 )}
 </Component>
 );
});

export default Button;
