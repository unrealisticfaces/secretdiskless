import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Custom component to handle route changes and scrolling
function RouteHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.reveal');
      hiddenElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <RouteHandler />
      <div className="min-h-screen relative font-sans selection:bg-[#d4af37] selection:text-black">
        {/* IT Ambiance Background */}
        <div className="fixed inset-0 pointer-events-none -z-10 bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 -top-[50px] animated-grid"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#d4af37]/10 blur-[150px] animate-breathe"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#d4af37]/5 blur-[150px] animate-breathe" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Clients />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER IS ONLY CALLED ONCE HERE */}
        <Footer />
      </div>
    </Router>
  )
}