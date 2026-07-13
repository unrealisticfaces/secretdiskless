export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#d4af37]/10 py-6 relative z-20">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
          <img src="/assets/clients/secret logo2.webp" alt="Logo" className="h-5 w-auto opacity-70 grayscale" />
          <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Secret Diskless Services
          </p>
        </div>
        
        {/* Right: System Status */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Keith David Dalocanog</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37] animate-pulse"></div>
        </div>

      </div>
    </footer>
  )
}
