import React, { useState, useEffect } from 'react';

const Banner = () => {
  // ১. মেইন হেডলাইনের মাঝখানের শব্দ (একশন ফোকাসড)
  const heroMiddleWords = [
    "MEETS",     
    "SOLVES",    
    "DRIVES",    
    "SCALES",    
    "&"          
  ];

  // ২. সাব-হেডলাইন (আপনার ৪টি মূল সার্ভিস ফোকাস করে)
  const animatedSubTexts = [
    "Websites: High-Performance MERN Stack Development",
    "Content: Cinematic Storytelling that Converts",
    "Social Media: Strategic Growth for Bold Brands",
    "Paid Ads: ROI-Driven Meta & Google Campaigns",
    "Digital Marketing: Solving Growth with Data"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ৩. ৩ সেকেন্ড পর পর অটো-চেঞ্জ লজিক
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedSubTexts.length);
    }, 3000); 

    return () => clearInterval(textInterval);
  }, [animatedSubTexts.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      
      {/* ৪. ইউটিউব ভিডিও ব্যাকগ্রাউন্ড (কালচে ও ব্লার) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
        <iframe
          className="w-[115vw] h-[65vw] min-h-[115vh] min-w-[200vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.2]"
          src="https://www.youtube.com/embed/8oON21G1Bqg?autoplay=1&mute=1&loop=1&playlist=8oON21G1Bqg&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&autohide=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Solven Background Video"
        ></iframe>
        
        {/* ৫. সিনেমাটিক ডার্ক ওভারলে (একটু বেশি কালচে করা হয়েছে যাতে টেক্সট ফুটে ওঠে) */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 backdrop-blur-[2px] z-10" />
      </div>

     {/* ৬. কন্টেন্ট সেকশন */}
<div className="relative z-20 max-w-7xl mx-auto px-8 text-center mt-20 md:mt-0">
  
  {/* ৭. মেইন হেডলাইন (জায়গার সমস্যা সমাধান করা হয়েছে) */}
  <h1 className="hero-text text-white leading-[0.85] mb-10 selection:bg-white selection:text-black flex flex-col sm:flex-row items-center justify-center flex-wrap gap-y-4">
    <span>Code</span>
    
    {/* মাঝখানের এনিমেটেড কন্টেইনার - min-w-48 বা min-w-[250px] দিলে জায়গা ঠিক থাকবে */}
    <span className="relative inline-flex items-center justify-center h-[1em] min-w-[200px] md:min-w-[300px] overflow-hidden mx-2">
      <span 
        key={`hero-${currentIndex}`} 
        className="absolute inset-0 flex items-center justify-center animate-text-reveal-hero opacity-30 text-white/50 italic tracking-tighter"
      >
        {heroMiddleWords[currentIndex % heroMiddleWords.length]}
      </span>
      {/* ইনভিজিবল রেফারেন্স যাতে কন্টেইনার কলাপ্স না করে */}
      <span className="opacity-0 pointer-events-none">SOLVES</span>
    </span>

    <span>Content<span className="text-white/10">.</span></span>
  </h1>

  {/* ৮. অ্যানিমেটেড সাব-হেডলাইন সুইচার */}
  {/* এখানে h-20 বা h-24 দিলে দুই লাইনের টেক্সটও জায়গা পাবে */}
  <div className="h-20 md:h-24 overflow-hidden flex justify-center mb-16 px-4">
    <p 
      key={`sub-${currentIndex}`} 
      className="animate-text-reveal text-sm md:text-xl font-bold uppercase tracking-[0.3em] leading-relaxed text-muted max-w-4xl"
    >
      {animatedSubTexts[currentIndex]}
    </p>
  </div>

  {/* ৯. CTA বাটনসমূহ */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    <button className="btn-solven group">
      Get a Free Quote
    </button>
    
    <button className="btn-solven-outline group">
      Our Portfolio
    </button>
  </div>

</div>

      {/* ১০. স্ক্রল ইন্ডিকেটর */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 overflow-hidden h-20 opacity-50">
        <div className="w-[1px] h-full bg-white animate-scroll-line" />
      </div>

    </section>
  );
};

export default Banner;