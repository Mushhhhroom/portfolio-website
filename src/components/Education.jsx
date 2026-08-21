import SectionTitle from './SectionTitle';
import TimelineItem from './TimelineItem';
import { education, hasEducation } from '../data/education';

export default function Education() {
 if (!hasEducation) return null;

 return (
 <section id="education" className="section bg-ink-100/40">
 <div className="container-narrow">
 <SectionTitle eyebrow="Education" title="Academic background" />
 <div className="max-w-4xl">
 {education.map((item, i) => (
 <TimelineItem key={item.id} item={item} index={i} />
 ))}
 </div>
 </div>
 </section>
 );
}
