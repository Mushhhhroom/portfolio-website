import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import MagneticButton from './MagneticButton';
import SocialLink from './SocialLink';
import { personal } from '../data/personal';

export default function Contact() {
 const email = personal.socials?.find((s) => s.icon === 'Mail')?.url;
 const emailAddress = email ? email.replace('mailto:', '') : '';

 return (
 <section id="contact" className="section">
 <div className="container-narrow">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.7 }}
 className="relative overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-white via-white to-ink-100/50 p-10 md:p-16"
 >
 {/* Background glow */}
 <div aria-hidden="true" className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
 <div aria-hidden="true" className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

 <div className="relative">
 <SectionTitle
 eyebrow="Contact"
 title="Let's connect."
 description="Open to entry-level opportunities, internships, and meaningful conversations."
 />

 <div className="flex flex-wrap items-center gap-4">
 {email && (
 <MagneticButton as="a" href={email} variant="primary" size="lg" withArrow>
 Send Email
 </MagneticButton>
 )}
 {personal.resumeUrl && (
 <MagneticButton as="a" href={personal.resumeUrl} download="Jairus_John_Valdez_Resume.pdf" variant="secondary" size="lg">
 Download Resume
 </MagneticButton>
 )}
 </div>

 {emailAddress && (
 <div className="mt-8 font-mono text-sm text-ink-500">
 {emailAddress}
 </div>
 )}

 {personal.socials?.length > 0 && (
 <div className="mt-12 border-t border-ink-200 pt-8">
 <div className="eyebrow mb-5">
 <span className="eyebrow-dot" />
 <span>Other Channels</span>
 </div>
 <div className="flex flex-wrap gap-3">
 {personal.socials.filter((s) => s.icon !== 'Mail').map((s) => (
 <SocialLink key={s.name} {...s} />
 ))}
 </div>
 </div>
 )}
 </div>
 </motion.div>
 </div>
 </section>
 );
}
