import { Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react';

const iconMap = { Github, Linkedin, Mail, Twitter, Globe };

export default function SocialLink({ name, url, icon, size = 18 }) {
 const Icon = iconMap[icon] || Globe;
 return (
 <a
 href={url}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={name}
 className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all duration-300 hover:-translate-y-1 hover:rotate-[8deg] hover:border-accent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30"
 >
 <Icon size={size} strokeWidth={1.75} aria-hidden="true" />
 </a>
 );
}
