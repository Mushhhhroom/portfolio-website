import { useRef, useState } from 'react';
import Button from './Button';

export default function MagneticButton({ children, strength = 0.3, ...props }) {
 const ref = useRef(null);
 const [position, setPosition] = useState({ x: 0, y: 0 });

 const handleMouseMove = (e) => {
 if (!ref.current) return;
 const rect = ref.current.getBoundingClientRect();
 const x = e.clientX - rect.left - rect.width / 2;
 const y = e.clientY - rect.top - rect.height / 2;
 setPosition({ x: x * strength, y: y * strength });
 };

 const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

 return (
 <div
 ref={ref}
 onMouseMove={handleMouseMove}
 onMouseLeave={handleMouseLeave}
 style={{
 transform: `translate(${position.x}px, ${position.y}px)`,
 transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
 }}
 >
 <Button {...props}>{children}</Button>
 </div>
 );
}
