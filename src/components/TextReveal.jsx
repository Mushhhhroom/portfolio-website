import { motion } from 'framer-motion';

export default function TextReveal({ children, className = '', delay = 0, stagger = 0.05 }) {
 const words = String(children).split(' ');

 const container = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: stagger,
 delayChildren: delay,
 },
 },
 };

 const item = {
 hidden: { opacity: 0, y: 40, rotateX: -90 },
 visible: {
 opacity: 1,
 y: 0,
 rotateX: 0,
 transition: {
 duration: 0.7,
 ease: [0.16, 1, 0.3, 1],
 },
 },
 };

 return (
 <motion.span
 variants={container}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: '-50px' }}
 className={`inline-block ${className}`}
 style={{ perspective: '1000px' }}
 >
 {words.map((word, i) => (
 <motion.span
 key={i}
 variants={item}
 className="inline-block mr-[0.25em]"
 style={{ transformOrigin: '50% 100%' }}
 >
 {word}
 </motion.span>
 ))}
 </motion.span>
 );
}
