import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-md py-4 shadow-lg shadow-black border-b border-[#d4af37]/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/assets/clients/secret logo2.webp" 
            alt="Secret Diskless" 
            className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]" 
          />
          <span className="hidden lg:block font-bold tracking-wider text-sm text-white group-hover:text-[#d4af37] transition-colors">
            Secret Diskless
          </span>
        </Link>
        
        {/* Middle: Fast Links (Footer Style) */}
        <nav className="hidden md:flex flex-wrap justify-center gap-6 lg:gap-10 text-xs font-mono font-medium text-gray-500 uppercase tracking-widest">
          <Link to="/" className={`hover:text-[#d4af37] transition-colors ${location.pathname === '/' ? 'text-[#d4af37]' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-[#d4af37] transition-colors ${location.pathname === '/about' ? 'text-[#d4af37]' : ''}`}>About</Link>
          <Link to="/services" className={`hover:text-[#d4af37] transition-colors ${location.pathname === '/services' ? 'text-[#d4af37]' : ''}`}>Services</Link>
          <Link to="/contact" className={`hover:text-[#d4af37] transition-colors ${location.pathname === '/contact' ? 'text-[#d4af37]' : ''}`}>Contact</Link>
        </nav>
        
        {/* Right: Social Icons */}
        <div className="flex gap-3">
          <a href="mailto:kthdavid7@gmail.com" className="w-8 h-8 rounded-full bg-[#0c0c0c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:border-[#d4af37] hover:bg-[#d4af37] transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href="https://www.facebook.com/kthdavidx/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0c0c0c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:border-[#d4af37] hover:bg-[#d4af37] transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/supremo.gif/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0c0c0c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:border-[#d4af37] hover:bg-[#d4af37] transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>

      </div>
    </header>
  )
}