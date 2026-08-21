import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, ImageOff } from 'lucide-react';
import Badge from './Badge';

export default function ProjectCard({ project, index = 0 }) {
 const { title, description, technologies, image, github, demo } = project;

 const ref = useRef(null);
 const x = useMotionValue(0);
 const y = useMotionValue(0);

 const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
 const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

 const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
 const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);
 const imageX = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);
 const imageY = useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10]);

 const handleMouseMove = (e) => {
 if (!ref.current) return;
 const rect = ref.current.getBoundingClientRect();
 const xPct = (e.clientX - rect.left) / rect.width - 0.5;
 const yPct = (e.clientY - rect.top) / rect.height - 0.5;
 x.set(xPct);
 y.set(yPct);
 };

 const handleMouseLeave = () => {
 x.set(0);
 y.set(0);
 };

 return (
 <motion.article
 ref={ref}
 onMouseMove={handleMouseMove}
 onMouseLeave={handleMouseLeave}
 style={{ rotateX, rotateY, transformPerspective: 1200 }}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.7, delay: index * 0.1 }}
 className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white transition-shadow duration-500 hover:shadow-2xl hover:shadow-ink-950/20"
 >
 <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
 {image ? (
 <motion.img
 src={image}
 alt={`${title} preview`}
 loading="lazy"
 style={{ x: imageX, y: imageY }}
 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
 />
 ) : (
 <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-100 to-ink-200 text-ink-400">
 <ImageOff size={48} strokeWidth={1.25} />
 </div>
 )}

 {/* Gradient overlay on hover */}
 <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/0 to-ink-950/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
 </div>

 <div className="p-6 md:p-8">
 <div className="font-mono text-xs uppercase tracking-wider text-ink-500">
 Project 0{index + 1}
 </div>
 <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">
 {title}
 </h3>
 <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3 md:text-base">
 {description}
 </p>

 {technologies?.length > 0 && (
 <div className="mt-5 flex flex-wrap gap-1.5">
 {technologies.map((tech) => (
 <Badge key={tech}>{tech}</Badge>
 ))}
 </div>
 )}

 {(github || demo) && (
 <div className="mt-6 flex gap-2 border-t border-ink-100 pt-5">
 {demo && (
 <a
 href={demo}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1.5 rounded-full bg-ink-950 px-4 py-2 text-xs font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md hover:shadow-accent/30"
 >
 <ExternalLink size={14} />
 Live Demo
 </a>
 )}
 {github && (
 <a
 href={github}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-4 py-2 text-xs font-medium text-ink-700 transition-all hover:-translate-y-0.5 hover:border-ink-950 hover:bg-ink-950 hover:text-white"
 >
 <Github size={14} />
 Source
 </a>
 )}
 </div>
 )}
 </div>
 </motion.article>
 );
}
