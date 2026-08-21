import { personal } from '../data/personal';

export default function Footer() {
 const year = new Date().getFullYear();

 return (
 <footer className="border-t border-ink-200 py-12">
 <div className="container-narrow flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
 <div className="flex items-center gap-3">
 <span className="font-display text-base font-bold tracking-[0.15em] text-ink-950">
 {personal.initials}
 </span>
 <span className="text-ink-400">/</span>
 <span className="font-mono text-xs uppercase tracking-wider text-ink-500">
 Portfolio {year}
 </span>
 </div>
 <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
 © {year} — All Rights Reserved
 </p>
 </div>
 </footer>
 );
}
