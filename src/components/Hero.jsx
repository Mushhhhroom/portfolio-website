import { motion } from 'framer-motion';
import { Download, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import { personal } from '../data/personal';
import Button from './Button';
import MagneticButton from './MagneticButton';
import SocialLink from './SocialLink';
import TextReveal from './TextReveal';

export default function Hero() {
 const nameParts = personal.name.split(' ');
 const surname = nameParts.slice(-1)[0];
 const firstNames = nameParts.slice(0, -1).join(' ');

 return (
 <section
 id="home"
 className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 bg-mesh"
 >
 {/* Floating gradient orbs */}
 <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
 <div className="animate-float absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent/30 to-rose-400/20 blur-3xl" />
 <div className="animate-float-delay absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-400/25 to-blue-400/20 blur-3xl" />
 <div className="animate-pulse-glow absolute top-1/2 right-1/4 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-amber-400/20 to-accent/20 blur-2xl" />
 </div>

 <div className="container-narrow relative w-full">
 <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
 {/* Left column — text */}
 <div>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="eyebrow mb-6"
 >
 <span className="eyebrow-dot animate-pulse-glow" />
 <span>{personal.availability.status}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
 className="heading-display text-ink-950"
 >
 <span className="block">
 <TextReveal delay={0.1}>{firstNames}</TextReveal>
 </span>
 <span className="block font-display italic">
 <TextReveal delay={0.3}>
 <span className="text-gradient-shimmer">{surname}.</span>
 </TextReveal>
 </span>
 </motion.h1>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.6 }}
 className="mt-8 flex items-center gap-3"
 >
 <MapPin size={14} className="text-accent" />
 <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-600">
 {personal.location}
 </span>
 </motion.div>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.7 }}
 className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 md:text-xl"
 >
 {personal.tagline}
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.9 }}
 className="mt-10 flex flex-wrap items-center gap-4"
 >
 <MagneticButton
 as="a"
 href={personal.resumeUrl}
 download="Jairus_John_Valdez_Resume.pdf"
 variant="primary"
 size="lg"
 >
 <Download size={16} />
 Download Resume
 </MagneticButton>
 <MagneticButton
 as="a"
 href="#contact"
 variant="secondary"
 size="lg"
 withArrow
 >
 Get in Touch
 </MagneticButton>
 </motion.div>

 {personal.socials?.length > 0 && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.7, delay: 1.1 }}
 className="mt-12 flex items-center gap-3 border-t border-ink-200 pt-6"
 >
 <span className="font-mono text-xs uppercase tracking-wider text-ink-500">
 Connect →
 </span>
 {personal.socials.map((s) => (
 <SocialLink key={s.name} {...s} />
 ))}
 </motion.div>
 )}
 </div>

 {/* Right column — profile photo with effects */}
 <motion.div
 initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
 animate={{ opacity: 1, scale: 1, rotate: 0 }}
 transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
 className="relative flex justify-center lg:justify-end"
 >
 <ProfilePhoto />
 </motion.div>
 </div>
 </div>
 </section>
 );
}

/* ---------- Profile Photo with Effects ---------- */
function ProfilePhoto() {
 const containerRef = useRef(null);
 const imgRef = useRef(null);
 const [transform, setTransform] = useState('');
 const [isHovered, setIsHovered] = useState(false);

 const handleMouseMove = (e) => {
 if (!containerRef.current) return;
 const rect = containerRef.current.getBoundingClientRect();
 const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
 const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
 setTransform(`perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`);
 };

 const handleMouseLeave = () => {
 setTransform('perspective(1000px) rotateY(0deg) rotateX(0deg)');
 setIsHovered(false);
 };

 return (
 <div
 ref={containerRef}
 onMouseMove={handleMouseMove}
 onMouseLeave={handleMouseLeave}
 onMouseEnter={() => setIsHovered(true)}
 className="relative"
 style={{ transform, transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
 >
 {/* Pulsing glow halo */}
 <div
 aria-hidden="true"
 className={`absolute inset-0 rounded-full bg-gradient-to-br from-accent via-violet-500 to-blue-500 blur-2xl transition-opacity duration-700 ${
 isHovered ? 'opacity-50' : 'opacity-30 animate-pulse-glow'
 }`}
 style={{ transform: 'scale(1.15)' }}
 />

 {/* Rotating gradient border */}
 <div
 aria-hidden="true"
 className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent via-amber-400 via-rose-400 via-violet-500 to-blue-500 opacity-90 animate-spin-slow"
 style={{ animationDuration: '12s' }}
 />

 {/* Inner mask to create border effect */}
 <div className="absolute -inset-[10px] rounded-full bg-ink-50" />

 {/* Photo container */}
 <div className="relative aspect-square w-72 overflow-hidden rounded-full border-4 border-ink-50 shadow-2xl shadow-ink-950/30 transition-shadow duration-500 md:w-80 lg:w-96 sm:w-72">
 <img
 ref={imgRef}
 src={personal.profileImage}
 alt={personal.name}
 loading="eager"
 className={`h-full w-full object-cover transition-all duration-700 ${
 isHovered ? 'grayscale-0 scale-110' : 'grayscale scale-100'
 }`}
 />

 {/* Shine sweep on hover */}
 <div
 aria-hidden="true"
 className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${
 isHovered ? 'translate-x-full' : ''
 }`}
 />

 {/* Vignette overlay */}
 <div
 aria-hidden="true"
 className="absolute inset-0 bg-gradient-to-t from-ink-950/20 via-transparent to-transparent"
 />
 </div>

 {/* Orbiting sparkle dots */}
 <div aria-hidden="true" className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '15s' }}>
 <span className="absolute top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-lg shadow-accent/50" />
 <span className="absolute bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
 </div>

 {/* Floating badge — top right */}
 <motion.div
 initial={{ opacity: 0, scale: 0 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5, delay: 1.2, type: 'spring' }}
 className="absolute -top-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-ink-50 bg-ink-950 shadow-lg"
 >
 <span className="text-2xl">👨‍💻</span>
 </motion.div>

 {/* Availability badge — bottom left */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 1.4 }}
 className="absolute -bottom-2 -left-2 flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 shadow-lg"
 >
 <span className="relative flex h-2 w-2">
 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
 </span>
 <span className="text-xs font-medium text-ink-950">Available</span>
 </motion.div>
 </div>
 );
}
