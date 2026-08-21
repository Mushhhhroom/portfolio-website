import { motion } from 'framer-motion';
import { Award, BadgeCheck, GraduationCap, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import SpotlightCard from './SpotlightCard';
import { achievements, hasAchievements } from '../data/achievements';

const iconMap = { certification: BadgeCheck, award: Award, workshop: GraduationCap };

export default function Achievements() {
 if (!hasAchievements) return null;

 return (
 <section id="achievements" className="section bg-ink-100/40">
 <div className="container-narrow">
 <SectionTitle
 eyebrow="Recognition"
 title="Trainings & awards"
 description="Continuous learning through seminars, workshops, and academic recognition."
 />

 <div className="grid gap-4 sm:grid-cols-2">
 {achievements.map((item, i) => {
 const Icon = iconMap[item.type] || BadgeCheck;
 const isLink = Boolean(item.link);

 const Inner = (
 <div className="flex h-full items-start gap-4 p-6 md:p-8">
 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-200 bg-ink-50 text-ink-950 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
 <Icon size={18} strokeWidth={1.75} />
 </div>
 <div className="flex-1 min-w-0">
 <div className="flex items-start justify-between gap-2">
 <h3 className="text-base font-semibold text-ink-950">{item.title}</h3>
 {isLink && (
 <ArrowUpRight
 size={14}
 className="text-ink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
 />
 )}
 </div>
 <div className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-500">
 {item.issuer}{item.date ? ` · ${item.date}` : ''}
 </div>
 {item.description && (
 <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.description}</p>
 )}
 </div>
 </div>
 );

 return isLink ? (
 <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
 <SpotlightCard delay={i * 0.06} className="h-full">{Inner}</SpotlightCard>
 </a>
 ) : (
 <SpotlightCard key={item.id} delay={i * 0.06} className="h-full">
 <div className="group">{Inner}</div>
 </SpotlightCard>
 );
 })}
 </div>
 </div>
 </section>
 );
}
