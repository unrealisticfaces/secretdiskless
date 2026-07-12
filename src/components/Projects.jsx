import { useState, useEffect } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [selectedProject]);

  const projects = [
    {
      title: "Red Gaming Website",
      images: ["/assets/clients/RED1.webp", "/assets/clients/RED2.webp", "/assets/clients/RED3.webp"],
      description: "Business website designed to showcase a gaming café's services, pricing, available games, and promotions.",
      details: "Customers can browse the available game library, view pricing and promotional offers, learn about the café's facilities and services, and find contact information for inquiries. The website is organized with a clean layout and intuitive navigation, making it simple for users to locate the information they need quickly.",
      tags: ["React", "Vite", "HTML5", "CSS3", "JavaScript", "Firebase"]
    },
    {
      title: "Cybercafe Management System",
      images: ["/assets/clients/EPS1.webp", "/assets/clients/EPS2.webp"],
      description: "Application featuring secure user authentication, point redemption, and automated order tracking.",
      details: "A fully responsive application platform designed for Internet Shops. Players can earn points and redeem them for food, drinks, or game time. Features include dynamic cart management, product filtering, and a sleek dark-mode UI.",
      tags: ["React", "Electron", "Vite", "Local DB", "Firebase"]
    },
    {
      title: "MC | Services",
      images: ["/assets/clients/MC1.webp", "/assets/clients/MC2.webp", "/assets/clients/MC3.webp"],
      description: "Professional business platform designed to showcase company services and enable seamless online transactions.",
      details: "Created to strengthen online presence by presenting the brand and portfolio in a clean, organized layout. With intuitive navigation and modern design, customers can quickly find information and process transactions securely.",
      tags: ["React", "Vite", "PayMongo", "Firebase"]
    },
    {
      title: "Clinic Management System",
      images: ["/assets/clients/fano1.webp", "/assets/clients/fano2.webp"],
      description: "A web-based Clinic Management System developed using React.js and Vite.js that helps clinics efficiently manage patients, appointments, records, and daily operations in one centralized platform",
      details: "The system offers an intuitive and responsive user interface that enables clinic staff to efficiently register patients, schedule and manage appointments, maintain electronic medical records, monitor consultation histories, and organize essential healthcare information. By replacing traditional paper-based processes, the platform improves workflow efficiency, reduces administrative workload, minimizes human error, and enhances the overall patient experience.",
      tags: ["React", "Vite", "Nodejs", "Firebase Database", "Tailwind CSS3"]
    },
  ];

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 reveal">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Projects</h2>
          <p className="text-gray-400 max-w-xl text-sm">A collection of custom web applications and infrastructure solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg overflow-hidden cursor-pointer group flex flex-col h-full reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="h-44 w-full bg-[#000] relative overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col bg-[#0c0c0c]">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[11px] font-medium text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-[11px] text-gray-500 px-1 py-1">+{project.tags.length - 2}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0c0c0c] rounded-xl w-full max-w-5xl max-h-[85vh] shadow-2xl flex flex-col md:flex-row overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-[#d4af37] hover:text-black text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="w-full md:w-[55%] bg-black relative flex flex-col shrink-0 border-b md:border-b-0 md:border-r border-white/10">
              <div className="relative w-full h-[35vh] md:h-[60vh] flex items-center justify-center bg-[#050505]">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} preview`} 
                  className="w-full h-full object-contain p-2"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button onClick={handlePrevImage} className="absolute left-4 p-3 rounded-full bg-black/60 text-white hover:bg-[#d4af37] hover:text-black transition-colors backdrop-blur-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button onClick={handleNextImage} className="absolute right-4 p-3 rounded-full bg-black/60 text-white hover:bg-[#d4af37] hover:text-black transition-colors backdrop-blur-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </>
                )}
              </div>

              {selectedProject.images.length > 1 && (
                <div className="h-24 bg-[#0a0a0a] flex items-center gap-3 px-6 overflow-x-auto scrollbar-hide">
                  {selectedProject.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-200 ${
                        idx === currentImageIndex 
                          ? 'border-[#d4af37] opacity-100' 
                          : 'border-transparent opacity-40 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full md:w-[45%] p-8 md:p-10 flex flex-col overflow-y-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                {selectedProject.title}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white text-sm font-semibold mb-2">Overview</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white text-sm font-semibold mb-2">Details</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-white text-sm font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags?.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-black bg-[#d4af37] px-3 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}