import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
 const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

 return (
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
 className={`max-w-2xl ${alignClass} mb-16 md:mb-20`}
 >
 {eyebrow && (
 <div className={`eyebrow mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
 <span className="eyebrow-dot" />
 <span>{eyebrow}</span>
 </div>
 )}
 <h2 className="heading-section text-ink-950">
 <TextReveal>{title}</TextReveal>
 </h2>
 {description && (
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.7, delay: 0.3 }}
 className="mt-6 text-lg leading-relaxed text-muted"
 >
 {description}
 </motion.p>
 )}
 </motion.div>
 );
}
