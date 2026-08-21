import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects, hasProjects } from '../data/projects';

export default function Projects() {
 if (!hasProjects) return null;

 return (
 <section id="projects" className="section">
 <div className="container-narrow">
 <SectionTitle
 eyebrow="Selected work"
 title="Projects I've built"
 description="Each project taught me something new."
 />
 <div className="grid gap-6 md:grid-cols-2">
 {projects.map((project, i) => (
 <ProjectCard key={project.id} project={project} index={i} />
 ))}
 </div>
 </div>
 </section>
 );
}
