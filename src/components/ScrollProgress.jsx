import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, {
 stiffness: 100,
 damping: 30,
 restDelta: 0.001,
 });

 return (
 <motion.div
 style={{ scaleX }}
 aria-hidden="true"
 className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left"
 >
 <div className="h-full w-full bg-gradient-to-r from-accent via-violet-500 to-accent bg-[length:200%_100%] animate-shimmer" />
 </motion.div>
 );
}
