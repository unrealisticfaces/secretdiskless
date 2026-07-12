import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start pt-28 pb-12 relative">
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 reveal text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
              Secret Diskless <br />
              <span className="text-[#d4af37] font-light text-3xl sm:text-4xl md:text-6xl">Infrastructure & Web</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-light reveal delay-100">
              I build high-performance network infrastructures and modern digital experiences for internet cafes, esports organizations, and growing businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 reveal delay-200">
              <a href="/#projects" className="px-8 py-4 bg-[#d4af37] text-black font-semibold text-sm uppercase tracking-wider hover:bg-white transition-colors flex justify-center items-center rounded-sm">
                View My Work
              </a>
              <Link to="/services" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-sm uppercase tracking-wider hover:border-[#d4af37] hover:text-[#d4af37] transition-all flex justify-center items-center rounded-sm">
                Explore Services
              </Link>
            </div>

            {/* Achievement / Stats Bar - Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 mt-12 pt-8 border-t border-white/10 reveal delay-300">
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white">50<span className="text-[#d4af37]">+</span></h4>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1 font-mono">Cafes Powered</p>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white">99.9<span className="text-[#d4af37]">%</span></h4>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1 font-mono">Uptime</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-xl md:text-2xl font-bold text-white">1000<span className="text-[#d4af37]">+</span></h4>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1 font-mono">Nodes Managed</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end reveal delay-200 mt-10 lg:mt-0">
            <img 
              src="/assets/clients/secret logo.webp" 
              alt="Secret Diskless 3D" 
              className="max-h-[250px] sm:max-h-[350px] md:max-h-[450px] w-auto animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_20px_40px_rgba(212,175,55,0.25)]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}