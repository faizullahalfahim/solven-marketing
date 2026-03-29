import { useEffect, useRef, useState } from "react";
import { useLang } from "../../context/LanguageContext";

const content = {
  en: {
    tag: "The Process",
    headline: ["How We Work", "From Day One."],
    sub: "No guesswork. No wasted weeks. A clear system from the first call to the first result.",
    steps: [
      {
        num: "01",
        title: "Discovery",
        desc: "We sit with you and understand your business, your customers, and your competitors. We find out why people choose you — or why they don't.",
        duration: "Week 1",
        deliverable: "Business & audience analysis",
      },
      {
        num: "02",
        title: "Strategy",
        desc: "We build your full content plan — pillars, calendar, video ideas — everything written and ready before a single frame is shot.",
        duration: "Week 1–2",
        deliverable: "Full content strategy document",
      },
      {
        num: "03",
        title: "Production",
        desc: "We shoot, edit, and write — professional content that represents your brand and stops the scroll from the first second.",
        duration: "Week 2–3",
        deliverable: "Ready-to-post content batch",
      },
      {
        num: "04",
        title: "Publish & Optimize",
        desc: "We post, track, analyze — and improve every month based on real data. Always getting better, never repeating what doesn't work.",
        duration: "Ongoing",
        deliverable: "Monthly performance report",
      },
    ],
  },
  ar: {
    tag: "طريقة عملنا",
    headline: ["كيف نشتغل", "من أول يوم."],
    sub: "ما في تخمين. ما في أسابيع ضايعة. نظام واضح من أول كول لأول نتيجة.",
    steps: [
      {
        num: "01",
        title: "اكتشاف",
        desc: "نجلس معك ونفهم مشروعك وزبائنك ومنافسيك. نكتشف ليش الناس تختارك — أو ليش ما تختارك.",
        duration: "الأسبوع الأول",
        deliverable: "تحليل المشروع والجمهور",
      },
      {
        num: "02",
        title: "استراتيجية",
        desc: "نبني خطة المحتوى الكاملة — ركائز وتقويم وأفكار فيديوهات — كل شي مكتوب وجاهز قبل ما نصور.",
        duration: "الأسبوع 1–2",
        deliverable: "وثيقة استراتيجية المحتوى",
      },
      {
        num: "03",
        title: "إنتاج",
        desc: "نصوّر ونموّت ونكتب — محتوى احترافي يعبّر عن هويتك ويوقف السكرول من أول ثانية.",
        duration: "الأسبوع 2–3",
        deliverable: "دفعة محتوى جاهزة للنشر",
      },
      {
        num: "04",
        title: "نشر وتحسين",
        desc: "ننشر ونتابع ونحلل — ونحسّن كل شهر بناءً على بيانات حقيقية. دائماً نتطور ما نكرر اللي ما اشتغل.",
        duration: "مستمر",
        deliverable: "تقرير الأداء الشهري",
      },
    ],
  },
};

const StepCard = ({ step, index, lang, isActive, onClick }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="relative cursor-pointer group"
      style={{
        backgroundColor: isActive ? "#141414" : "var(--color-black)",
        borderBottom: "1px solid var(--color-border)",
        padding: "40px 48px",
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `
          opacity 0.6s ease ${index * 0.1}s,
          transform 0.6s ease ${index * 0.1}s,
          background 0.3s ease
        `,
      }}
    >
      {/* Progress line left */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "3px",
          height: isActive ? "100%" : "0%",
          backgroundColor: "var(--color-orange)",
          transition: "height 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      <div
        className="flex items-start gap-8"
        style={{ direction: "ltr" }}
      >
        {/* Big number */}
        <div
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(52px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: isActive
              ? "1px var(--color-orange)"
              : "1px var(--color-border)",
            transition: "all 0.4s ease",
            minWidth: "80px",
            userSelect: "none",
          }}
        >
          {step.num}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div
            className="flex items-center justify-between gap-4 mb-3"
          >
            <div
              style={{
                fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--color-paper)",
              }}
            >
              {step.title}
            </div>

            {/* Duration badge */}
            <span
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "11px",
                letterSpacing: "2px",
                color: isActive ? "var(--color-orange)" : "var(--color-muted)",
                border: `1px solid ${isActive ? "var(--color-orange)" : "var(--color-border)"}`,
                padding: "4px 12px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                transition: "all 0.3s ease",
              }}
            >
              {step.duration}
            </span>
          </div>

          <p
            style={{
              fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
              fontSize: "14px",
              color: "var(--color-muted)",
              lineHeight: 1.75,
            }}
          >
            {step.desc}
          </p>

          {/* Deliverable — shown when active */}
          <div
            style={{
              maxHeight: isActive ? "60px" : "0px",
              opacity:   isActive ? 1 : 0,
              overflow:  "hidden",
              transition: "max-height 0.4s ease, opacity 0.3s ease 0.1s",
              marginTop: isActive ? "16px" : "0",
            }}
          >
            <div
              className="flex items-center gap-2"
              style={{ direction: "ltr" }}
            >
              <span style={{ color: "var(--color-orange)", fontSize: "12px" }}>✓</span>
              <span
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "13px",
                  color: "var(--color-paper)",
                  fontWeight: 500,
                }}
              >
                Deliverable: {step.deliverable}
              </span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            color: isActive ? "var(--color-orange)" : "var(--color-border)",
            fontSize: "20px",
            transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
            transition: "all 0.35s ease",
            fontFamily: "var(--font-syne)",
            alignSelf: "center",
          }}
        >
          →
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const { lang } = useLang();
  const t = content[lang];
  const [activeStep, setActiveStep] = useState(0);
  const headlineRef = useRef(null);
  const [headlineVisible, setHeadlineVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadlineVisible(true); },
      { threshold: 0.2 }
    );
    if (headlineRef.current) obs.observe(headlineRef.current);
    return () => obs.disconnect();
  }, []);

  // Auto cycle steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % t.steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.steps.length]);

  return (
    <section
      id="how"
      style={{
        backgroundColor: "var(--color-card)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "120px 60px",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="grid gap-16 mb-16"
          style={{ gridTemplateColumns: "1fr 1fr", alignItems: "end" }}
        >
          <div ref={headlineRef}>
            <div className="solven-tag mb-5">{t.tag}</div>
            {t.headline.map((line, i) => (
              <div key={`${lang}-${i}`} className="overflow-hidden">
                <div
                  style={{
                    fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
                    fontSize: "clamp(36px, 4.5vw, 58px)",
                    fontWeight: 800,
                    lineHeight: lang === "ar" ? 1.35 : 1.05,
                    letterSpacing: lang === "ar" ? "0" : "-1.5px",
                    color: "var(--color-paper)",
                    transform: headlineVisible ? "translateY(0)" : "translateY(100%)",
                    opacity:   headlineVisible ? 1 : 0,
                    transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s,
                                 opacity 0.5s ease ${i * 0.15}s`,
                  }}
                >
                  {line}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
              fontSize: "17px",
              color: "var(--color-muted)",
              lineHeight: 1.75,
              opacity:   headlineVisible ? 1 : 0,
              transform: headlineVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            {t.sub}
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {t.steps.map((step, i) => (
            <StepCard
              key={`${lang}-${i}`}
              step={step}
              index={i}
              lang={lang}
              isActive={activeStep === i}
              onClick={() => setActiveStep(i === activeStep ? -1 : i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #how { padding: 80px 24px !important; }
          #how .grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          #how [style*="padding: 40px 48px"] { padding: 28px 24px !important; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;