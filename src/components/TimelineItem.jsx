import { motion } from 'framer-motion';

export default function TimelineItem({ item, index = 0 }) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
 className="group relative grid grid-cols-1 gap-6 border-t border-ink-200 py-10 first:border-t-0 first:pt-0 md:grid-cols-[180px_1fr] md:gap-16"
 >
 <div>
 <div className="font-mono text-xs uppercase tracking-wider text-ink-500">
 {item.period}
 </div>
 {item.location && (
 <div className="mt-2 text-sm text-ink-500">{item.location}</div>
 )}
 </div>

 <div className="relative">
 <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-950 transition-colors group-hover:text-accent">
 {item.degree || item.role}
 </h3>
 <div className="mt-2 text-sm font-medium text-accent">
 {item.school || item.organization}
 </div>

 {item.description && (
 <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600">
 {item.description}
 </p>
 )}

 {item.responsibilities?.length > 0 && (
 <ul className="mt-4 space-y-1.5">
 {item.responsibilities.map((r, i) => (
 <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-600">
 <span className="text-accent">→</span>
 <span>{r}</span>
 </li>
 ))}
 </ul>
 )}

 {item.highlights?.length > 0 && (
 <div className="mt-4 flex flex-wrap gap-1.5">
 {item.highlights.map((h) => (
 <span
 key={h}
 className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-700"
 >
 {h}
 </span>
 ))}
 </div>
 )}
 </div>
 </motion.div>
 );
}
