export default function Clients() {
  const clients = [
    { img: "1.webp", name: "G-7 Cebu" },
    { img: "2.webp", name: "Zeux Esports" },
    { img: "3.webp", name: "Skye Gaming" },
    { img: "4.webp", name: "Gamers Lounge" },
    { img: "5.webp", name: "Rocket Punch" },
    { img: "voodoo.webp", name: "Voodoo Esports" },
    { img: "7.webp", name: "TNC Pasig" },
    { img: "10.webp", name: "GC Esports" },
    { img: "9.webp", name: "DrippyLab" },
    { img: "dokbartz.webp", name: "DokBartz" },
    { img: "twinj.webp", name: "TwinJ Gaming" },
    { img: "a4kze.webp", name: "A4ZKE Esports" },
    { img: "siberia.webp", name: "Siberia Gaming" },
    { img: "dobby.webp", name: "Dobbyfy Cafe" },
    { img: "kedalogo.webp", name: "Keda Internet Cafe" },
    { img: "denezlogo.webp", name: "Denez Internet Cafe" },
    { img: "16.webp", name: "Gamerhub Cybernet" },
    { img: "15.webp", name: "Red Gaming" }
  ];

  return (
    <section id="clients" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center max-w-2xl mx-auto reveal">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Trusted By</h2>
          <p className="text-gray-400 text-sm">Partnering with premier internet cafes and organizations to deliver uncompromising performance.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 items-center justify-items-center mt-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center gap-5 w-full cursor-pointer reveal"
              style={{ transitionDelay: `${(index % 6) * 50}ms` }}
            >
              {/* Increased size from w-16 to w-24 */}
              <div className="w-24 h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={`/assets/clients/${client.img}`} 
                  alt={client.name} 
                  /* Added grayscale and opacity by default, removed on hover */
                  className="max-w-full max-h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-white transition-colors text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}