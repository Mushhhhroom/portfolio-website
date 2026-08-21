export default function Badge({ children, className = '' }) {
 return (
 <span
 className={`inline-flex items-center rounded-full border border-ink-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-700 transition-all duration-200 hover:border-accent hover:bg-accent-soft hover:text-accent ${className}`}
 >
 {children}
 </span>
 );
}
