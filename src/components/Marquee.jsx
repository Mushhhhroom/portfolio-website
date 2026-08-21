export default function Marquee({ items, className = '' }) {
 return (
 <div className={`overflow-hidden ${className}`}>
 <div className="flex animate-marquee gap-12 whitespace-nowrap">
 {[...items, ...items].map((item, i) => (
 <span
 key={i}
 className="font-display text-3xl font-medium text-ink-300 md:text-5xl"
 >
 {item}
 </span>
 ))}
 </div>
 </div>
 );
}
