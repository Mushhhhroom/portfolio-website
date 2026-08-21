export default function SectionDivider() {
 return (
 <div className="relative h-24 overflow-hidden" aria-hidden="true">
 <svg
 className="absolute inset-0 h-full w-full"
 viewBox="0 0 1440 100"
 preserveAspectRatio="none"
 >
 <path
 d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
 fill="currentColor"
 className="text-ink-100"
 />
 </svg>
 </div>
 );
}
