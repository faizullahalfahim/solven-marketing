import { useRef, useEffect } from "react";
import { useLang } from "../../../../context/LanguageContext";

const items = {
  en: [
    "Video Content",
    "Social Strategy",
    "Hook Writing",
    "Content Calendar",
    "Brand Identity",
    "Lead Generation",
    "Restaurants & Cafés",
    "Gyms & Clinics",
    "Real Estate",
    "Saudi Arabia",
  ],
  ar: [
    "محتوى فيديو",
    "استراتيجية سوشيال",
    "كتابة هوكس",
    "تقويم محتوى",
    "هوية بصرية",
    "توليد عملاء",
    "مطاعم وكافيهات",
    "جيمات وعيادات",
    "عقارات",
    "المملكة العربية السعودية",
  ],
};

const MarqueeTrack = ({ list, reverse = false, speed = 28 }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let pos = reverse ? -el.scrollWidth / 2 : 0;
    let raf;
    const step = () => {
      pos += reverse ? speed * 0.012 : -speed * 0.012;
      const half = el.scrollWidth / 2;
      if (!reverse && pos <= -half) pos = 0;
      if (reverse && pos >= 0) pos = -half;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reverse, speed]);

  const doubled = [...list, ...list];

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex items-center will-change-transform"
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-0 shrink-0"
          >
            <span
              className="text-xs uppercase whitespace-nowrap px-8 py-1"
              style={{
                fontFamily: "var(--font-dm)",
                letterSpacing: "3px",
                color: "var(--color-muted)",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "var(--color-orange)",
                fontSize: "7px",
                lineHeight: 1,
              }}
            >
              ●
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Marquee = () => {
  const { lang } = useLang();
  const list = items[lang];

  return (
    <div
      style={{
        borderTop:    "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-card)",
        overflow: "hidden",
        padding: "18px 0",
      }}
    >
      <MarqueeTrack list={list} reverse={false} speed={28} />
    </div>
  );
};

export default Marquee;