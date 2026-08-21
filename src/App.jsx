import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { personal } from './data/personal';

export default function App() {
 // Update document title dynamically
 useEffect(() => {
 document.title = `${personal.name} — ${personal.title}`;
 }, []);

 return (
 <>
 <a
 href="#main"
 className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-ink-50"
 >
 Skip to main content
 </a>

 <ScrollProgress />
 <Navbar />

 <main id="main">
 <Hero />
 <About />
 <Education />
 <Skills />
 <Projects />
 <Experience />
 <Achievements />
 <Contact />
 </main>

 <Footer />
 </>
 );
}
