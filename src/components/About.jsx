import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="min-h-screen pt-32 pb-24 relative z-10 bg-transparent flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#d4af37]/20 bg-[#d4af37]/5 rounded-full">
              <span className="text-xs font-semibold text-[#d4af37] tracking-widest uppercase">The Story</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
              From Internet Cafes to <span className="text-[#d4af37]">Full-Stack Development.</span>
            </h1>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                It all started back in 2022. What began as a deep interest in optimizing local internet cafes quickly grew into <strong>Secret Diskless Services</strong>. I started by deploying diskless server setups to help cafe owners eliminate storage bottlenecks, reduce PC maintenance time, and automate heavy game patching.
              </p>
              <p>
                Currently, I am a <strong>3rd-year Information Technology student</strong>. My academic journey has allowed me to expand my hands-on networking expertise into the world of Full-Stack Web Development.
              </p>
              <p>
                I now bridge the gap between physical network infrastructure and digital software. Whether I'm configuring a lag-free LAN setup for an esports lounge or writing React code for a business website, I bring a practical, problem-solving mindset to every project I touch.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <Link to="/#projects" className="px-6 py-3 bg-[#d4af37] text-black font-bold text-sm uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all rounded-sm">
                View Projects
              </Link>
            </div>
          </div>

          {/* Visual Tech Element & Tech Stack */}
          <div className="flex flex-col gap-8 reveal delay-200">
            
            {/* Custom Animation: Bridging Infrastructure and Web Dev */}
            <div className="glass-card h-56 rounded-lg flex items-center justify-between p-6 md:p-10 relative overflow-hidden">
              
              {/* Infrastructure Node (Server) */}
              <div className="flex flex-col items-center z-10 w-1/3">
                <div className="w-16 h-16 bg-[#0c0c0c] border border-gray-700 rounded-md flex flex-col items-center justify-center mb-3 relative shadow-lg">
                  <div className="w-8 h-2 bg-gray-800 rounded-sm mb-1 flex items-center px-1"><div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div></div>
                  <div className="w-8 h-2 bg-gray-800 rounded-sm mb-1 flex items-center px-1"><div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '300ms'}}></div></div>
                  <div className="w-8 h-2 bg-gray-800 rounded-sm flex items-center px-1"><div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '600ms'}}></div></div>
                </div>
                <span className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest text-center">Infrastructure</span>
              </div>

              {/* Connecting Data Flow */}
              <div className="flex-1 h-1 bg-white/5 relative z-10 rounded-full overflow-hidden">
                <div className="absolute top-0 w-4 h-full bg-[#d4af37] shadow-[0_0_15px_#d4af37] animate-packet"></div>
                <div className="absolute top-0 w-4 h-full bg-white shadow-[0_0_15px_white] animate-packet animation-delay-500"></div>
              </div>

              {/* Web Dev Node (Code) */}
              <div className="flex flex-col items-center z-10 w-1/3">
                <div className="w-16 h-16 bg-[#0c0c0c] border border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)] rounded-md flex flex-col justify-center px-2 mb-3">
                  <div className="w-full h-1.5 bg-[#d4af37]/80 rounded mb-1.5 animate-code"></div>
                  <div className="w-3/4 h-1.5 bg-white/40 rounded mb-1.5 animate-code animation-delay-500"></div>
                  <div className="w-1/2 h-1.5 bg-[#d4af37]/50 rounded animate-code animation-delay-1000"></div>
                </div>
                <span className="text-[10px] md:text-xs font-mono text-[#d4af37] uppercase tracking-widest text-center">Web Dev</span>
              </div>

            </div>

            {/* Tech Stack Lists */}
            <div className="glass-card p-8 rounded-lg border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Current Tech Stack & Skills</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#d4af37] font-mono text-xs uppercase tracking-widest mb-3">Hardware / Networking</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Diskless Setup', 'CCBoot', 'LAN Networking', 'Router Config', 'Game Patching'].map((skill, i) => (
                      <span key={i} className="text-xs font-medium text-gray-300 bg-[#050505] border border-white/10 px-3 py-1.5 rounded-sm hover:border-[#d4af37]/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[#d4af37] font-mono text-xs uppercase tracking-widest mb-3">Software / Web</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'Firebase', 'C# & .NET'].map((skill, i) => (
                      <span key={i} className="text-xs font-medium text-gray-300 bg-[#050505] border border-white/10 px-3 py-1.5 rounded-sm hover:border-[#d4af37]/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}