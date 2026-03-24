import React from 'react';

// এটি মূলত লোগোর কন্টেইনার কম্পোনেন্ট
const Logo = () => {
  return (
    <a href="/" className="group flex items-center gap-3 cursor-pointer">
      
      {/* লোগো আইকন (বাঁদিকের 'S' টি) */}
      <div className="relative w-7 h-8">
        {/* উপরের কালো অংশ (Dark Segment) */}
        <span className="absolute top-0 right-0 h-[4px] w-full bg-white rounded-full group-hover:scale-x-110 transition-transform duration-500"></span>
        <span className="absolute top-1 left-0 h-full w-[4px] bg-white rounded-full group-hover:scale-y-110 transition-transform duration-500"></span>
        
        {/* নিচের নীল অংশ (Accent Teal Segment) */}
        <span className="absolute bottom-1 left-0 h-[4px] w-5/6 bg-accent rounded-full opacity-90 group-hover:opacity-100 transition-opacity"></span>
        <span className="absolute top-4 right-0 h-full w-[4px] bg-accent rounded-full opacity-90 group-hover:opacity-100 transition-opacity"></span>
        
        {/* সিনেমাটিক গ্লো (Blur effect) */}
        <span className="absolute bottom-1 left-0 h-[4px] w-5/6 bg-accent rounded-full blur-[3px]"></span>
      </div>

      {/* টেক্সট অংশ (SOLVEN) */}
      <div className="flex flex-col items-start leading-none">
        <span className="hero-text text-xl md:text-3xl tracking-[-0.05em] text-white">
          SOLVEN
        </span>
        <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted -mt-1 font-bold">
          MARKETING
        </span>
      </div>

    </a>
  );
};

export default Logo;