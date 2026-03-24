import React, { useState, useEffect } from 'react';
import Logo from './Logo/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* লোগো - একদম ক্লিন এবং শার্প */}
        <div 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="flex items-center gap-3 cursor-pointer group"
        >
         <Logo> </Logo>
        </div>

        {/* ৩টি লিঙ্ক - হাই-এন্ড টাইপোগ্রাফি */}
        <div className="flex items-center gap-12">
          <ul className="hidden md:flex items-center gap-10">
            {['services', 'portfolio', 'contact'].map((item) => (
              <li 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted hover:text-white transition-all duration-300 cursor-pointer uppercase tracking-[0.2em] text-[10px] font-bold relative group"
              >
                {item}
                {/* হোভার করলে নিচে একটি চিকন সাদা লাইন আসবে */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* মোবাইল মেনু বাটন */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;