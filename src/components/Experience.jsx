import SectionTitle from './SectionTitle';
import TimelineItem from './TimelineItem';
import { experience, hasExperience } from '../data/experience';

export default function Experience() {
 if (!hasExperience) return null;

 return (
 <section id="experience" className="section">
 <div className="container-narrow">
 <SectionTitle
 eyebrow="Leadership"
 title="Beyond the classroom"
 description="Leadership roles and contributions to student organizations."
 />
 <div className="max-w-4xl">
 {experience.map((item, i) => (
 <TimelineItem key={item.id} item={item} index={i} />
 ))}
 </div>
 </div>
 </section>
 );
}
