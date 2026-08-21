import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/personal';
import { hasEducation } from '../data/education';
import { hasSkills } from '../data/skills';
import { hasProjects } from '../data/projects';
import { hasExperience } from '../data/experience';
import { hasAchievements } from '../data/achievements';

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);
 const menuButtonRef = useRef(null);

 const navLinks = [
 { href: '#home', label: 'Home' },
 { href: '#about', label: 'About' },
 hasEducation && { href: '#education', label: 'Education' },
 hasSkills && { href: '#skills', label: 'Skills' },
 hasProjects && { href: '#projects', label: 'Projects' },
 hasExperience && { href: '#experience', label: 'Experience' },
 hasAchievements && { href: '#achievements', label: 'Recognition' },
 { href: '#contact', label: 'Contact' },
 ].filter(Boolean);

 useEffect(() => {
 const onScroll = () => setIsScrolled(window.scrollY > 20);
 onScroll();
 window.addEventListener('scroll', onScroll, { passive: true });
 return () => window.removeEventListener('scroll', onScroll);
 }, []);

 useEffect(() => {
 if (!isOpen) return undefined;

 const onKeyDown = (event) => {
 if (event.key === 'Escape') {
 setIsOpen(false);
 menuButtonRef.current?.focus();
 }
 };

 document.addEventListener('keydown', onKeyDown);
 return () => document.removeEventListener('keydown', onKeyDown);
 }, [isOpen]);

 return (
 <header
 className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
 isScrolled || isOpen
 ? 'border-b border-ink-200/60 bg-ink-50/80 backdrop-blur-xl'
 : 'bg-transparent'
 }`}
 >
 <nav className="container-narrow flex h-16 items-center justify-between md:h-20" aria-label="Primary">
 <motion.a
 href="#home"
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5 }}
 className="font-display text-base font-bold tracking-[0.15em] text-ink-950"
 >
 {personal.initials}
 <span className="ml-2 text-ink-400">/ PORTFOLIO</span>
 </motion.a>

 <ul className="hidden md:flex items-center gap-8">
 {navLinks.map((link, i) => (
 <motion.li
 key={link.href}
 initial={{ opacity: 0, y: -10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
 >
 <a
 href={link.href}
 className="text-xs font-medium uppercase tracking-[0.15em] text-ink-600 transition-colors hover:text-ink-950"
 >
 {link.label}
 </a>
 </motion.li>
 ))}
 </ul>

 <motion.a
 href={personal.resumeUrl || '#contact'}
 download={personal.resumeUrl ? 'Jairus_John_Valdez_Resume.pdf' : undefined}
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="hidden md:inline-flex items-center gap-2 rounded-full border border-ink-950 bg-ink-950 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-ink-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/30"
 >
 Resume
 <span aria-hidden="true">↓</span>
 </motion.a>

 <button
 ref={menuButtonRef}
 type="button"
 onClick={() => setIsOpen((v) => !v)}
 aria-label={isOpen ? 'Close menu' : 'Open menu'}
 aria-expanded={isOpen}
 className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-ink-950"
 >
 {isOpen ? <X size={22} /> : <Menu size={22} />}
 </button>
 </nav>

 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: 'auto' }}
 exit={{ opacity: 0, height: 0 }}
 transition={{ duration: 0.3 }}
 className="md:hidden overflow-hidden border-t border-ink-200"
 >
 <ul className="container-narrow py-6 space-y-1">
 {navLinks.map((link) => (
 <li key={link.href}>
 <a
 href={link.href}
 onClick={() => setIsOpen(false)}
 className="block px-3 py-2.5 text-sm font-medium uppercase tracking-[0.1em] text-ink-700 hover:bg-ink-100"
 >
 {link.label}
 </a>
 </li>
 ))}
 </ul>
 </motion.div>
 )}
 </AnimatePresence>
 </header>
 );
}
