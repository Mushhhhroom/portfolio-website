import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import Counter from './Counter';
import { softSkills, hobbies } from '../data/skills';

const stats = [
 { value: 4, suffix: 'th', label: 'Year Student' },
 { value: 8, suffix: '+', label: 'Core Skills' },
 { value: 6, suffix: '+', label: 'Trainings' },
];

export default function About() {
 return (
 <section id="about" className="section">
 <div className="container-narrow">
 <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
 <SectionTitle eyebrow="About" title="Who I am" />

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.7 }}
 className="space-y-6 text-base leading-relaxed text-ink-700 md:text-lg"
 >
 <p>
 I'm a fourth-year Bachelor of Science in Computer Science student at
 Quezon City University, building a strong technical foundation in
 software development, databases, networking, and digital platforms.
 </p>
 <p>
 Currently seeking entry-level opportunities — particularly in customer
 service and technical support — where I can apply my troubleshooting
 skills, communicate clearly with users, and deliver efficient,
 courteous service in a fast-paced environment.
 </p>
 <p>
 Beyond academics, I'm an active officer of the Junior Philippines
 Society at QCU and have participated in seminars and workshops covering
 AWS Cloud Engineering, Data Visualization, and recent IT industry
 developments.
 </p>

 {/* Animated stats */}
 <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ink-200 pt-10">
 {stats.map((stat) => (
 <motion.div
 key={stat.label}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.1 }}
 >
 <div className="font-display text-4xl text-ink-950 md:text-5xl">
 <Counter to={stat.value} suffix={stat.suffix} />
 </div>
 <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
 {stat.label}
 </div>
 </motion.div>
 ))}
 </div>

 {/* Soft skills */}
 <div className="mt-12 grid grid-cols-1 gap-8 border-t border-ink-200 pt-10 sm:grid-cols-2">
 <div>
 <div className="eyebrow mb-5">
 <span className="eyebrow-dot" />
 <span>Core Strengths</span>
 </div>
 <ul className="space-y-2.5">
 {softSkills.map((skill, i) => (
 <motion.li
 key={skill}
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: i * 0.1 }}
 className="flex items-center gap-3 text-base text-ink-700"
 >
 <span className="h-1.5 w-1.5 rounded-full bg-accent" />
 {skill}
 </motion.li>
 ))}
 </ul>
 </div>

 <div>
 <div className="eyebrow mb-5">
 <span className="eyebrow-dot" />
 <span>Interests</span>
 </div>
 <ul className="space-y-2.5">
 {hobbies.map((h, i) => (
 <motion.li
 key={h}
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: i * 0.1 }}
 className="flex items-center gap-3 text-base text-ink-700"
 >
 <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
 {h}
 </motion.li>
 ))}
 </ul>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
