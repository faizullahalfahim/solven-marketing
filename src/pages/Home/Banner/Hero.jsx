import { useState, useEffect, useRef } from "react";
import { useLang } from "../../../context/LanguageContext";

const content = {
  en: {
    tag:      "Riyadh · Saudi Arabia · Digital Marketing",
    headline: ["We Turn", "Followers", "Into Customers."],
    sub:      "Not more posts. Not prettier designs. A strategy built around why people buy — and content that makes them feel it.",
    cta1:     "Book a Free Call",
    cta2:     "See Our Work",
    stats: [
      { end: 4,   suffix: "x",  label: "Average reach growth"   },
      { end: 30,  suffix: "d",  label: "To see first results"   },
      { end: 100, suffix: "%",  label: "Strategy before content" },
    ],
  },
  ar: {
    tag:      "الرياض · السعودية · تسويق رقمي",
    headline: ["نحوّل", "متابعينك", "لزبائن فعليين."],
    sub:      "مو بوستات أكثر. مو تصميم أحلى. استراتيجية مبنية على ليش الناس تشتري — ومحتوى يخليهم يحسون فيها.",
    cta1:     "احجز استشارة مجانية",
    cta2:     "شوف شغلنا",
    stats: [
      { end: 4,   suffix: "x",  label: "متوسط نمو الوصول"       },
      { end: 30,  suffix: "d",  label: "لأول نتائج حقيقية"      },
      { end: 100, suffix: "%",  label: "الاستراتيجية أولاً دائماً" },
    ],
  },
};

// Animated counter hook
const useCounter = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

// Single stat with counter
const StatItem = ({ stat, startCount }) => {
  const count = useCounter(stat.end, 1800, startCount);
  return (
    <div className="text-center group">
      <div
        className="font-extrabold leading-none mb-2 transition-colors duration-300"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(32px, 4vw, 48px)",
          color: "var(--color-paper)",
        }}
      >
        <span style={{ color: "var(--color-orange)" }}>
          {count}{stat.suffix}
        </span>
      </div>
      <div
        className="text-xs tracking-widest uppercase"
        style={{
          fontFamily: "var(--font-dm)",
          color: "var(--color-muted)",
          letterSpacing: "2px",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
};

// Floating particle
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={style}
  />
);

const Hero = () => {
  const { lang } = useLang();
  const t = content[lang];

  const [startCount,   setStartCount]   = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);
  const [mousePos,     setMousePos]     = useState({ x: 0, y: 0 });
  const [orbPos,       setOrbPos]       = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const orbRef     = useRef({ x: 200, y: 300, vx: 0.4, vy: 0.3 });

  // Staggered headline reveal
  useEffect(() => {
    setVisibleLines([]);
    setStartCount(false);
    const timers = t.headline.map((_, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        if (i === t.headline.length - 1) {
          setTimeout(() => setStartCount(true), 400);
        }
      }, 300 + i * 220)
    );
    return () => timers.forEach(clearTimeout);
  }, [lang]);

  // Magnetic mouse tracking
  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Floating orb animation
  useEffect(() => {
    let raf;
    const section = sectionRef.current;
    if (!section) return;
    const W = section.offsetWidth;
    const H = section.offsetHeight;

    const animate = () => {
      const o = orbRef.current;
      o.x += o.vx;
      o.y += o.vy;
      if (o.x <= 0 || o.x >= W - 400) o.vx *= -1;
      if (o.y <= 0 || o.y >= H - 400) o.vy *= -1;
      setOrbPos({ x: o.x, y: o.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Particles config
  const particles = Array.from({ length: 18 }, (_, i) => ({
    width:  `${Math.random() * 3 + 1}px`,
    height: `${Math.random() * 3 + 1}px`,
    left:   `${Math.random() * 100}%`,
    top:    `${Math.random() * 100}%`,
    background: i % 4 === 0 ? "var(--color-orange)" : "var(--color-muted)",
    opacity: Math.random() * 0.4 + 0.1,
    animation: `floatParticle ${6 + Math.random() * 8}s ease-in-out infinite`,
    animationDelay: `${Math.random() * 5}s`,
  }));

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  // Magnetic effect for a button
  const getMagneticStyle = (strength = 0.08) => {
    if (!sectionRef.current) return {};
    const rect = sectionRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return {
      transform: `translate(${(mousePos.x - cx) * strength}px, ${(mousePos.y - cy) * strength}px)`,
      transition: "transform 0.3s ease",
    };
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center"
      style={{ backgroundColor: "var(--color-black)" }}
    >

      {/* ── FLOATING BREATHING ORB ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: orbPos.x,
          top:  orbPos.y,
          width:  "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,77,0,0.09) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          transition: "left 0.08s linear, top 0.08s linear",
          zIndex: 1,
          animation: "breathe 6s ease-in-out infinite",
        }}
      />

      {/* ── PARTICLES ── */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ ...p, zIndex: 1 }} />
      ))}

      {/* ── INFINITE SCROLLING BG TEXT ── */}
      <div
        className="absolute w-full overflow-hidden pointer-events-none select-none"
        style={{ top: "50%", transform: "translateY(-50%)", zIndex: 1, opacity: 0.03 }}
      >
        <div
          className="flex whitespace-nowrap font-extrabold uppercase"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(100px, 16vw, 200px)",
            letterSpacing: "-4px",
            color: "var(--color-paper)",
            animation: "bgScroll 18s linear infinite",
          }}
        >
          <span>SOLVEN MARKETING&nbsp;&nbsp;</span>
          <span>SOLVEN MARKETING&nbsp;&nbsp;</span>
          <span>SOLVEN MARKETING&nbsp;&nbsp;</span>
        </div>
      </div>

      {/* ── CORNER GRID DECORATION ── */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{ zIndex: 1, opacity: 0.06 }}
      >
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <div
              key={`${r}-${c}`}
              className="absolute"
              style={{
                width: "1px", height: "60px",
                background: "var(--color-paper)",
                right:  `${c * 60}px`,
                top:    `${r * 60}px`,
                transform: "rotate(0deg)",
              }}
            />
          ))
        )}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 md:px-16 text-center"
        style={{ zIndex: 10, paddingTop: "130px", paddingBottom: "80px" }}
      >

        {/* Tag */}
        <div
          className="inline-flex items-center gap-3 mb-12"
          style={{
            opacity: visibleLines.length > 0 ? 1 : 0,
            transform: visibleLines.length > 0 ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.6s ease",
            direction: "ltr",
          }}
        >
          <div
            style={{
              width: "32px", height: "1px",
              background: "var(--color-orange)",
            }}
          />
          <span
            className="text-xs uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-dm)",
              color: "var(--color-muted)",
              letterSpacing: "4px",
            }}
          >
            {t.tag}
          </span>
          <div
            style={{
              width: "32px", height: "1px",
              background: "var(--color-orange)",
            }}
          />
        </div>

        {/* Headline — character stagger per line */}
        <h1
          className="mb-8"
         style={{
  fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
  fontSize: lang === "ar"
    ? "clamp(38px, 6vw, 76px)"
    : "clamp(48px, 8vw, 100px)",
  fontWeight: lang === "ar" ? 900 : 800,
  lineHeight: lang === "ar" ? 1.35 : 1.0,
  letterSpacing: lang === "ar" ? "0px" : "-3px",
  color: "var(--color-paper)",
}}
        >
          {t.headline.map((line, lineIdx) => (
            <div
              key={`${lang}-${lineIdx}`}
              className="overflow-hidden block"
            >
              <span
                style={{
                  display: "inline-block",
                  transform: visibleLines.includes(lineIdx)
                    ? "translateY(0)"
                    : "translateY(110%)",
                  opacity: visibleLines.includes(lineIdx) ? 1 : 0,
                  transition: "transform 0.75s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
                  color: lineIdx === 1
                    ? "var(--color-orange)"
                    : "var(--color-paper)",
                }}
              >
                {line}
              </span>
            </div>
          ))}
        </h1>

        {/* Sub */}
        <p
          className="mx-auto mb-14"
          style={{
            fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
            fontSize: "clamp(15px, 1.8vw, 19px)",
            color: "var(--color-muted)",
            maxWidth: "560px",
            lineHeight: 1.75,
            opacity: visibleLines.length === t.headline.length ? 1 : 0,
            transform: visibleLines.length === t.headline.length
              ? "translateY(0)"
              : "translateY(16px)",
            transition: "all 0.8s ease 0.4s",
          }}
        >
          {t.sub}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          style={{
            direction: "ltr",
            opacity: visibleLines.length === t.headline.length ? 1 : 0,
            transform: visibleLines.length === t.headline.length
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "all 0.8s ease 0.6s",
          }}
        >
          {/* Primary — infinite rotating border */}
          <div style={{ position: "relative", ...getMagneticStyle(0.06) }}>
            <div
              style={{
                position: "absolute", inset: "-2px",
                borderRadius: "6px",
                background: "conic-gradient(from var(--angle), transparent 70%, var(--color-orange) 100%)",
                animation: "rotateBorder 3s linear infinite",
                zIndex: 0,
              }}
            />
            <button
              onClick={() => scrollTo("#contact")}
              style={{
                position: "relative", zIndex: 1,
                background: "var(--color-orange)",
                color: "var(--color-black)",
                border: "none",
                padding: "16px 40px",
                borderRadius: "4px",
                fontFamily: "var(--font-dm)",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                minWidth: "200px",
                letterSpacing: "0.5px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              {t.cta1}
            </button>
          </div>

          {/* Ghost */}
          <button
            onClick={() => scrollTo("#results")}
            style={{
              background: "transparent",
              color: "var(--color-paper)",
              border: "1px solid var(--color-border)",
              padding: "16px 40px",
              borderRadius: "4px",
              fontFamily: "var(--font-dm)",
              fontWeight: 400,
              fontSize: "14px",
              cursor: "pointer",
              minWidth: "200px",
              transition: "border-color 0.2s, transform 0.2s",
              ...getMagneticStyle(0.04),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-muted)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Stats with counter animation */}
        <div
          className="flex flex-wrap justify-center gap-16 pt-12"
          style={{
            borderTop: "1px solid var(--color-border)",
            direction: "ltr",
            opacity: startCount ? 1 : 0,
            transform: startCount ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}
        >
          {t.stats.map((stat, i) => (
            <StatItem key={`${lang}-${i}`} stat={stat} startCount={startCount} />
          ))}
        </div>
      </div>

      {/* Scroll line */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10, overflow: "hidden", height: "64px", width: "1px" }}
      >
        <div
          style={{
            width: "1px", height: "100%",
            background: "linear-gradient(to bottom, transparent, var(--color-muted), transparent)",
            animation: "scrollLine 2.2s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── ALL ANIMATIONS ── */}
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rotateBorder {
          to { --angle: 360deg; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1);    opacity: 0.8; }
          50%       { transform: scale(1.15); opacity: 1;   }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px)   rotate(0deg);   }
          33%       { transform: translateY(-18px) rotate(120deg); }
          66%       { transform: translateY(10px)  rotate(240deg); }
        }
        @keyframes bgScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 0;   }
          50%  { opacity: 0.5;                               }
          100% { transform: translateY(100%);  opacity: 0;   }
        }
      `}</style>
    </section>
  );
};

export default Hero;