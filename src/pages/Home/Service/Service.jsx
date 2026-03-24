import React from 'react';
import { Globe, Video, Share2, TrendingUp } from 'lucide-react';

const Service = () => {
  const services = [
    {
      title: "MERN Stack Solutions",
      description: "Building blazing fast, conversion-focused websites and web apps. From Natural Food BD to high-end portfolios.",
      icon: <Globe className="w-6 h-6" />,
      tag: "Code"
    },
    {
      title: "Cinematic Content",
      description: "Storytelling that stops the scroll. High-end video production and visuals designed specifically for social media impact.",
      icon: <Video className="w-6 h-6" />,
      tag: "Content"
    },
    {
      title: "Social Authority",
      description: "Strategic management of your brand’s voice across Meta, Snap, and LinkedIn to dominate the Riyadh market.",
      icon: <Share2 className="w-6 h-6" />,
      tag: "Social"
    },
    {
      title: "Performance Ads",
      description: "ROI-driven ad campaigns that scale. We handle the data and the creative to ensure your marketing budget actually works.",
      icon: <TrendingUp className="w-6 h-6" />,
      tag: "Ads"
    }
  ];

  return (
    /* ১. এখানে 'bg-gradient-to-b' ব্যবহার করা হয়েছে যা OLED Black (from-black) থেকে 
      হালকা কালচে ছাই রঙে (to-[#0a0a0a]) স্মুথলি নেমে আসবে। 
    */
    <section id="services" className="relative py-32 bg-gradient-to-b from-black via-[#080808] to-[#0a0a0a] overflow-hidden">
      
      {/* ২. হালকা ডিফিউজড লাইট (Background Glow) - যা একদমই সূক্ষ্ম */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="mb-24">
          <p className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">
            Services
          </p>
          <h2 className="hero-text text-white leading-tight">
            Digital <span className="text-white/20 italic">Infrastructure</span>
          </h2>
        </div>

        {/* সার্ভিস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/5 bg-white/[0.01]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group border-r border-b border-white/5 p-10 flex flex-col items-start transition-all duration-700 hover:bg-white/[0.03] relative overflow-hidden"
            >
              {/* হোভার করলে হালকা একটা গ্লো ইফেক্ট পেন্সিলের মতো আসবে */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* ট্যাগ */}
              <span className="absolute top-10 right-10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors z-10">
                {service.tag}
              </span>

              {/* আইকন */}
              <div className="mb-12 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-700 z-10">
                {service.icon}
              </div>

              {/* টাইটেল */}
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-tighter leading-tight z-10">
                {service.title}
              </h4>

              {/* বর্ণনা */}
              <p className="text-white/50 text-[13px] leading-relaxed mb-10 min-h-[80px] group-hover:text-white/80 transition-colors z-10">
                {service.description}
              </p>

              {/* লিঙ্ক */}
              <div className="mt-auto group/link flex items-center gap-3 cursor-pointer z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover/link:text-white transition-colors">Details</span>
                <div className="w-6 h-[1px] bg-white/10 group-hover/link:w-10 group-hover/link:bg-white transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;