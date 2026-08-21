import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export default function Counter({ to, suffix = '', duration = 2 }) {
 const ref = useRef(null);
 const inView = useInView(ref, { once: true, margin: '-50px' });
 const count = useMotionValue(0);
 const rounded = useTransform(count, (v) => Math.round(v));
 const [display, setDisplay] = useState(0);

 useEffect(() => {
 if (inView) {
 const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
 const unsub = rounded.on('change', (v) => setDisplay(v));
 return () => {
 controls.stop();
 unsub();
 };
 }
 }, [inView, to, count, rounded, duration]);

 return (
 <motion.span ref={ref} className="tabular-nums">
 {display}{suffix}
 </motion.span>
 );
}
