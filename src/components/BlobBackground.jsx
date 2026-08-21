export default function BlobBackground() {
 return (
 <svg
 className="absolute inset-0 h-full w-full opacity-30"
 viewBox="0 0 200 200"
 xmlns="http://www.w3.org/2000/svg"
 aria-hidden="true"
 >
 <defs>
 <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="#ff4d2e" />
 <stop offset="50%" stopColor="#8b5cf6" />
 <stop offset="100%" stopColor="#3b82f6" />
 </linearGradient>
 </defs>
 <path
 fill="url(#blobGradient)"
 d="M44.5,-58.5C57.1,-49.2,66.1,-33.5,69.9,-16.5C73.7,0.5,72.4,18.8,64.1,32.9C55.8,47,40.6,56.8,23.6,63.1C6.7,69.3,-12.1,72,-27.9,66.5C-43.8,61,-57.8,47.3,-65.3,30.9C-72.8,14.5,-73.9,-4.7,-68.1,-21.6C-62.2,-38.4,-49.5,-52.9,-34.6,-61.7C-19.8,-70.5,-2.8,-73.6,12.7,-70.1C28.3,-66.6,42.4,-56.6,44.5,-58.5Z"
 transform="translate(100 100)"
 />
 </svg>
 );
}
