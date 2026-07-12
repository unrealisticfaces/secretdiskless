import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="min-h-screen pt-32 pb-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center max-w-3xl mx-auto reveal active">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#d4af37]/20 bg-[#d4af37]/5 rounded-full">
            <span className="text-xs font-semibold text-[#d4af37] tracking-widest uppercase">My Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">What I Actually <span className="text-[#d4af37]">Do.</span></h1>
          <p className="text-gray-400 text-base leading-relaxed">
            No corporate buzzwords—just straightforward, reliable IT solutions. Here is exactly how I can help your business or internet cafe run smoothly.
          </p>
        </div>

        <div className="flex flex-col gap-16 mb-20 max-w-6xl mx-auto">
          
          {/* Service 1: Diskless */}
          <div className="flex flex-col lg:flex-row items-center gap-10 reveal delay-100">
            {/* Visual Animation: Server -> OS Image -> PCs */}
            <div className="w-full lg:w-1/2 glass-card h-72 rounded-lg flex flex-col items-center justify-between py-8 relative overflow-hidden">
              
              {/* Master Server */}
              <div className="w-32 h-16 bg-[#050505] rounded-md flex flex-col justify-evenly px-3 animate-server z-10 relative">
                <div className="w-full h-1.5 bg-gray-800 rounded flex items-center px-1"><div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div></div>
                <div className="w-full h-1.5 bg-gray-800 rounded flex items-center px-1"><div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-100"></div></div>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-[#d4af37] font-mono tracking-widest uppercase">Server</div>
              </div>
              
              {/* Connection Line & OS Image */}
              <div className="flex-1 w-px bg-white/10 relative flex items-center justify-center z-0">
                 {/* OS Image Badge */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-black border border-[#d4af37]/50 rounded-sm text-[10px] text-[#d4af37] font-mono whitespace-nowrap z-20 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                   OS_IMAGE.IMG
                 </div>
                 {/* Moving packet dropping down */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-white rounded-full shadow-[0_0_10px_white] animate-drop"></div>
              </div>

              {/* Branching to Clients */}
              <div className="w-56 h-px bg-white/10 relative z-0"></div>
              <div className="flex gap-8 mt-4 z-10">
                {/* Client PC 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-8 border border-white/20 bg-[#050505] rounded-sm flex flex-col items-center justify-center relative mb-1">
                    <div className="w-8 h-5 bg-gray-800 rounded-sm"></div>
                  </div>
                  <div className="w-3 h-1.5 bg-gray-600"></div>
                  <div className="w-6 h-0.5 bg-gray-500"></div>
                  <span className="text-[9px] text-gray-500 font-mono mt-1">PC 1</span>
                </div>
                {/* Client PC 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-8 border border-white/20 bg-[#050505] rounded-sm flex flex-col items-center justify-center relative mb-1">
                    <div className="w-8 h-5 bg-gray-800 rounded-sm"></div>
                  </div>
                  <div className="w-3 h-1.5 bg-gray-600"></div>
                  <div className="w-6 h-0.5 bg-gray-500"></div>
                  <span className="text-[9px] text-gray-500 font-mono mt-1">PC 2</span>
                </div>
                {/* Client PC 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-8 border border-white/20 bg-[#050505] rounded-sm flex flex-col items-center justify-center relative mb-1">
                    <div className="w-8 h-5 bg-gray-800 rounded-sm"></div>
                  </div>
                  <div className="w-3 h-1.5 bg-gray-600"></div>
                  <div className="w-6 h-0.5 bg-gray-500"></div>
                  <span className="text-[9px] text-gray-500 font-mono mt-1">PC 3</span>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-4">Diskless Setup & Server Configuration</h3>
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  Instead of buying individual hard drives or SSDs for dozens of client PCs, I build and configure a single, high-powered master server. Every PC in your shop will boot directly from this server over the network.
                </p>
                <p>
                  <strong className="text-white">Why it matters:</strong> This completely eliminates storage hardware costs for your client units. When a game needs a 50GB update, I only update it <em>once</em> on the main server, and every single PC in your shop gets it instantly. It saves hours of manual patching and ensures everything boots lightning-fast.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2: Web Dev */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 reveal delay-200">
             {/* Visual Animation: Browser UI Building */}
             <div className="w-full lg:w-1/2 glass-card h-72 rounded-lg flex flex-col relative overflow-hidden bg-[#050505] p-3 border border-[#d4af37]/20 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
               {/* Browser Header */}
               <div className="flex gap-1.5 mb-4 px-2 pt-1 border-b border-white/5 pb-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
               </div>
               {/* UI Elements Building */}
               <div className="flex-1 flex flex-col gap-3 px-2">
                  <div className="w-full h-8 bg-white/5 rounded-sm animate-ui-build flex items-center px-3 gap-3">
                    <div className="w-4 h-4 bg-[#d4af37]/50 rounded-sm"></div>
                    <div className="w-16 h-2 bg-white/20 rounded-full ml-auto"></div>
                    <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex gap-3 flex-1 pb-2">
                     <div className="w-1/3 h-full bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-sm animate-ui-build animation-delay-500"></div>
                     <div className="w-2/3 flex flex-col gap-3">
                        <div className="w-full h-1/2 bg-white/5 rounded-sm animate-ui-build animation-delay-1000 p-3">
                          <div className="w-1/2 h-2 bg-white/20 rounded-full mb-2"></div>
                          <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                        </div>
                        <div className="w-full h-1/2 flex gap-3">
                          <div className="w-1/2 h-full bg-white/5 rounded-sm animate-ui-build animation-delay-500"></div>
                          <div className="w-1/2 h-full bg-white/5 rounded-sm animate-ui-build animation-delay-1000"></div>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
             {/* Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-4">Custom Web Development</h3>
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  Having a great physical shop or service is only half the battle. I build modern, fast, and responsive websites to give your business a professional online presence. 
                </p>
                <p>
                  <strong className="text-white">What I build:</strong> Using modern front-end and back-end technologies, I create everything from landing pages showcasing your cafe's rates and specs, to full-stack e-commerce platforms and cybercafe management dashboards linked to secure cloud databases.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3: Network */}
          <div className="flex flex-col lg:flex-row items-center gap-10 reveal delay-300">
             {/* Visual Animation: Network Packets */}
             <div className="w-full lg:w-1/2 glass-card h-72 rounded-lg flex flex-col items-center justify-center relative overflow-hidden px-10">
                <div className="w-full flex justify-between items-center mb-2 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37]"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
                </div>
                
                <div className="w-full h-1.5 bg-white/10 relative rounded-full mb-6">
                   {/* Fast moving packets */}
                   <div className="absolute top-[-2px] w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-[0_0_15px_#d4af37] animate-packet"></div>
                   <div className="absolute top-[-2px] w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_white] animate-packet animation-delay-750"></div>
                </div>

                <div className="text-center mt-4">
                  <div className="text-2xl font-bold text-white font-mono">1<span className="text-[#d4af37] text-sm">ms</span></div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">0% Packet Loss</div>
                </div>
             </div>
             {/* Text */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-4">Network Maintenance & Optimization</h3>
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  A gaming setup is completely useless if the network lags. A cafe lives and dies by its ping, which is why proper routing and switch configuration are critical.
                </p>
                <p>
                  <strong className="text-white">How I fix it:</strong> I handle Gigabit switch deployment, proper CAT6 cabling, router configuration, and bandwidth management. I set up Quality of Service (QoS) rules to prioritize game packets over background downloads so your players never experience mid-game lag spikes. 
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="glass-card p-12 text-center rounded-sm border border-[#d4af37]/20 bg-[#d4af37]/5 reveal">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your systems?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Whether you're dealing with a laggy network, tired of manual game patching, or need a website for your brand, let's get it fixed.</p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-[#d4af37] text-black font-bold text-sm uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all rounded-sm">
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  )
}