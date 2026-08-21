import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function SpotlightCard({ children, className = '', delay = 0 }) {
 const ref = useRef(null);

 const handleMouseMove = (e) => {
 if (!ref.current) return;
 const rect = ref.current.getBoundingClientRect();
 ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
 ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
 };

 return (
 <motion.div
 ref={ref}
 onMouseMove={handleMouseMove}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
 className={`spotlight-card rounded-2xl border border-ink-200 transition-colors duration-300 hover:border-ink-300 ${className}`}
 >
 {children}
 </motion.div>
 );
}
