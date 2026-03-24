import React, { useState, useRef } from 'react';

const projects = [
  {
    title: "Natural Food BD",
    description: "Full-stack E-commerce solution with MERN. Managed via aaPanel for high-speed delivery.",
    category: "Web & Ads",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop", 
    video: "/hero-video.mp4" 
  },
  {
    title: "Cinematic Content",
    description: "High-end B-roll production showcasing Riyadh's local brands with Osmo Mobile 8.",
    category: "Content",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    video: "/hero-video.mp4"
  },
  {
    title: "Digital Life Lessons",
    description: "Educational platform UI/UX design and development for modern tech skills.",
    category: "Web Dev",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    video: "/hero-video.mp4"
  }
];

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="group relative overflow-hidden bg-black border border-white/5 h-[450px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ১. থাম্বনেইল ছবি (Grayscale transition) */}
      <img 
        src={project.thumbnail} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-50 group-hover:opacity-20 scale-100 group-hover:scale-110"
      />

      {/* ২. ভিডিও (Hover Play - High Contrast) */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      >
        <source src={project.video} type="video/mp4" />
      </video>
      
      {/* ৩. সিনেমাটিক টেক্সট ওভারলে */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent z-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-4 group-hover:text-white transition-all duration-500">
          {project.category}
        </span>
        <h4 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
          {project.title}
        </h4>
        
        {/* ৪. ডিটেইলস রিভিল (Reveal on Hover) */}
        <div className="max-h-0 group-hover:max-h-32 transition-all duration-700 ease-in-out overflow-hidden">
            <p className="text-white/60 text-xs leading-relaxed max-w-[280px] mb-6">
              {project.description}
            </p>
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">View Case Study</span>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-700"></div>
            </div>
        </div>
      </div>

      {/* ৫. কর্নার বর্ডার গ্লো (সাদা থিম থেকে আসার পর এটা খুব প্রিমিয়াম লাগবে) */}
      <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-white/0 group-hover:border-white/20 transition-all duration-700" />
    </div>
  );
};

const Proof = () => {
  return (
    /* ৬. ট্রানজিশন লজিক: 
       Service সেকশনের লাইট কালার থেকে আবার Black-এ ফিরে আসার জন্য 
       bg-gradient-to-b from-[#f5f5f7] to-black ব্যবহার করা হয়েছে।
    */
    <section id="portfolio" className="relative py-32 bg-gradient-to-b from-[#f5f5f7] via-black to-black transition-all duration-1000">
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <p className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold mb-6">
              Selected Projects
            </p>
            <h2 className="hero-text text-white leading-none">
              The <span className="text-white/20 italic">Proof</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-white/40 text-[11px] max-w-[250px] leading-relaxed uppercase tracking-widest font-medium border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6">
              Solving complex digital challenges with high-performance code and cinematic storytelling.
            </p>
          </div>
        </div>

        {/* পোর্টফোলিও গ্রিড (No gaps for a massive museum look) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Proof;