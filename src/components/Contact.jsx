export default function Contact() {
  const socials = [
    {
      name: "Facebook",
      value: "Keith David",
      link: "https://www.facebook.com/kthdavidx/",
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    },
    {
      name: "Instagram",
      value: "@Supremo",
      link: "https://www.instagram.com/supremo.gif/",
      icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></>
    },
    {
      name: "GitHub",
      value: "ProjectX", 
      link: "https://github.com/unrealisticfaces",
      icon: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.35 6.5-1.57 6.5-7.16a4.8 4.8 0 0 0-1.3-3.22 4.6 4.6 0 0 0-.1-3.2s-1.1-.35-3.5 1.25a12.3 12.3 0 0 0-6.4 0C6.6 2.45 5.5 2.8 5.5 2.8a4.6 4.6 0 0 0-.1 3.2 4.8 4.8 0 0 0-1.3 3.22c0 5.58 3.32 6.8 6.5 7.16A4.8 4.8 0 0 0 8 18v4"/><path d="M13 22c-2 0-3-1-4-2"/></>
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 relative z-10 bg-transparent flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Big Statement & Email */}
          <div className="lg:w-1/2 flex flex-col justify-center reveal">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Let's start a <br /><span className="text-[#d4af37]">conversation.</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
              Whether you need a full network overhaul for your internet cafe, a sleek new web application, or just have a technical question, my inbox is always open.
            </p>
            
            <a href="mailto:kthdavid7@gmail.com" className="group flex items-center gap-6 glass-card p-6 rounded-lg hover:border-[#d4af37]/50 transition-all border-white/5 w-fit">
               <div className="w-14 h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Direct Email</h4>
                <p className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">kthdavid7@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Right Column: Social Links */}
          <div className="lg:w-1/2 flex flex-col gap-4 justify-center">
            {socials.map((social, idx) => (
              <a 
                key={idx}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="glass-card p-5 rounded-lg flex items-center justify-between hover:border-[#d4af37]/50 hover:bg-white/5 transition-all duration-300 group reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0c0c0c] border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#d4af37]/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {social.icon}
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-base">{social.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-gray-500 group-hover:text-[#d4af37] transition-colors">{social.value}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-[#d4af37] transition-colors group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}