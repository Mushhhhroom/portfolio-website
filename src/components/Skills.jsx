import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import SpotlightCard from './SpotlightCard';
import Marquee from './Marquee';
import { skillCategories, hasSkills } from '../data/skills';

const allSkills = [
 'Java', 'MySQL', 'MongoDB', 'PostgreSQL', 'Network Troubleshooting',
 'Cisco', 'AWS', 'Canva', 'Web Apps', 'Critical Thinking',
];

export default function Skills() {
 if (!hasSkills) return null;

 return (
 <section id="skills" className="section bg-ink-100/40">
 <div className="container-narrow">
 <SectionTitle
 eyebrow="Skills"
 title="What I work with"
 description="Technologies and tools developed through coursework and self-directed learning."
 />

 <div className="grid gap-4 sm:grid-cols-2">
 {skillCategories.map((category, i) => (
 <SpotlightCard key={category.title} delay={i * 0.08} className="p-8">
 <div className="relative z-10 flex items-center justify-between border-b border-ink-100 pb-4">
 <h3 className="font-display text-xl text-ink-950">
 {category.title}
 </h3>
 <span className="font-mono text-xs text-ink-400">
 0{category.skills.length}
 </span>
 </div>
 <div className="relative z-10 mt-6 flex flex-wrap gap-2">
 {category.skills.map((skill) => (
 <span
 key={skill}
 className="rounded-full border border-ink-200 bg-white px-3 py-1 text-sm font-medium text-ink-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md hover:shadow-accent/20"
 >
 {skill}
 </span>
 ))}
 </div>
 </SpotlightCard>
 ))}
 </div>

 {/* Marquee strip */}
 <div className="mt-20">
 <Marquee items={allSkills} />
 </div>
 </div>
 </section>
 );
}
