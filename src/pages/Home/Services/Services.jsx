import { useEffect, useRef, useState } from "react";
import { useLang } from "../../../context/LanguageContext";

const content = {
  en: {
    tag: "What We Do",
    headline: ["Everything You Need", "Under One Roof."],
    sub: "We don't sell hours — we sell results. Every service is designed to turn your followers into paying customers.",
    services: [
      {
        num: "01",
        icon: "🎬",
        title: "Video Production",
        short: "Reels, TikToks & Stories that stop the scroll.",
        detail: "Professional shooting and editing for social media content. Every video opens with a hook built on buyer psychology — not just aesthetics.",
        tags: ["Reels", "TikTok", "Stories", "YouTube Shorts"],
      },
      {
        num: "02",
        icon: "🎯",
        title: "Content Strategy",
        short: "A full monthly plan built around why people buy.",
        detail: "Content pillars, monthly calendar, video ideas — all written and ready before we start. Strategy first, execution second.",
        tags: ["Content Pillars", "Monthly Calendar", "Competitor Research"],
      },
      {
        num: "03",
        icon: "✍️",
        title: "Creative Copywriting",
        short: "Hooks, captions and scripts that convert.",
        detail: "Every word is written to move the customer toward a purchase decision. Hooks, captions, scripts, comment replies — all covered.",
        tags: ["Hooks", "Captions", "Scripts", "Comment Replies"],
      },
      {
        num: "04",
        icon: "🌐",
        title: "Websites & Landing Pages",
        short: "Fast, clean pages that turn visitors into leads.",
        detail: "Professional website or landing page designed to convert. Modern design, mobile-first, fast loading — built to perform.",
        tags: ["React", "Landing Pages", "Mobile First", "SEO Ready"],
      },
      {
        num: "05",
        icon: "📊",
        title: "Social Media Management",
        short: "We handle everything — you focus on your business.",
        detail: "Posting, engagement, analysis — we manage your full social presence so you can focus on running your business.",
        tags: ["Instagram", "TikTok", "Snapchat", "Twitter/X"],
      },
      {
        num: "06",
        icon: "📈",
        title: "Analytics & Reporting",
        short: "Clear monthly reports — real numbers, real decisions.",
        detail: "Monthly report showing exactly what worked and what didn't. Data-driven decisions, not guesswork. Always improving.",
        tags: ["Monthly Reports", "KPI Tracking", "Growth Analysis"],
      },
    ],
  },
  ar: {
    tag: "خدماتنا",
    headline: ["كل شي تحتاجه", "تحت سقف وحد."],
    sub: "ما نبيع لك ساعات — نبيع لك نتائج. كل خدمة مصممة تحوّل متابعينك لزبائن يدفعون.",
    services: [
      {
        num: "01",
        icon: "🎬",
        title: "إنتاج فيديو احترافي",
        short: "ريلز وتيك توك وقصص توقف السكرول.",
        detail: "تصوير ومونتاج احترافي لمحتوى السوشيال ميديا. كل فيديو يبدأ بهوك مبني على علم نفس الشراء — مو بس شكل حلو.",
        tags: ["ريلز", "تيك توك", "قصص", "يوتيوب شورتس"],
      },
      {
        num: "02",
        icon: "🎯",
        title: "استراتيجية المحتوى",
        short: "خطة شهرية كاملة مبنية على ليش الناس تشتري.",
        detail: "ركائز المحتوى، التقويم الشهري، أفكار الفيديوهات — كل شي مكتوب وجاهز قبل ما نبدأ. الاستراتيجية أولاً.",
        tags: ["ركائز المحتوى", "التقويم الشهري", "تحليل المنافسين"],
      },
      {
        num: "03",
        icon: "✍️",
        title: "الكتابة الإبداعية",
        short: "هوكس وكابشن وسكريبت تحوّل.",
        detail: "كل كلمة مكتوبة تحرك الزبون نحو قرار الشراء. هوكس، كابشن، سكريبت، ردود تعليقات — كلها مغطاة.",
        tags: ["هوكس", "كابشن", "سكريبت", "ردود تعليقات"],
      },
      {
        num: "04",
        icon: "🌐",
        title: "مواقع ولاندنج بيج",
        short: "صفحات سريعة ونظيفة تحوّل الزوار لعملاء.",
        detail: "موقع احترافي أو صفحة هبوط مصممة للتحويل. تصميم حديث، أولوية للجوال، تحميل سريع.",
        tags: ["React", "لاندنج بيج", "أولوية الجوال", "SEO"],
      },
      {
        num: "05",
        icon: "📊",
        title: "إدارة حسابات السوشيال",
        short: "نتولى كل شي — أنت ركّز على مشروعك.",
        detail: "النشر، التفاعل، التحليل — نتولى حضورك الرقمي الكامل حتى تركز على إدارة مشروعك.",
        tags: ["انستقرام", "تيك توك", "سناب شات", "تويتر/X"],
      },
      {
        num: "06",
        icon: "📈",
        title: "تقارير وتحليل",
        short: "تقارير شهرية واضحة — أرقام حقيقية.",
        detail: "تقرير شهري يُريك بالضبط وش اشتغل ووش ما اشتغل. قرارات مبنية على بيانات — مو تخمين.",
        tags: ["تقارير شهرية", "تتبع KPI", "تحليل النمو"],
      },
    ],
  },
};

// Single service card
const ServiceCard = ({ service, index, lang, isActive, onClick }) => {
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
      className="relative overflow-hidden cursor-pointer group"
      style={{
        backgroundColor: isActive ? "#1c1c1c" : "var(--color-card)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: index === 5 ? "1px solid var(--color-border)" : "none",
        padding: isActive ? "36px 40px 32px" : "28px 40px",
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-24px)",
        transition: `
          opacity 0.6s ease ${index * 0.08}s,
          transform 0.6s ease ${index * 0.08}s,
          background 0.3s ease,
          padding 0.4s ease
        `,
      }}
    >
      {/* Orange left bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "3px",
          height: isActive ? "100%" : "0%",
          backgroundColor: "var(--color-orange)",
          transition: "height 0.4s ease",
        }}
      />

      {/* Top row */}
      <div
        className="flex items-start justify-between gap-4"
        style={{ direction: "ltr" }}
      >
        {/* Left: number + title */}
        <div className="flex items-center gap-5">
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "11px",
              fontWeight: 700,
              color: isActive ? "var(--color-orange)" : "var(--color-muted)",
              letterSpacing: "2px",
              transition: "color 0.3s",
              minWidth: "24px",
            }}
          >
            {service.num}
          </span>

          <div>
            <div
              style={{
                fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                fontSize: "17px",
                fontWeight: 600,
                color: isActive ? "var(--color-paper)" : "var(--color-paper)",
                marginBottom: "4px",
                transition: "color 0.3s",
              }}
            >
              {service.title}
            </div>
            <div
              style={{
                fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                fontSize: "13px",
                color: "var(--color-muted)",
              }}
            >
              {service.short}
            </div>
          </div>
        </div>

        {/* Right: icon + arrow */}
        <div className="flex items-center gap-3 shrink-0">
          <span style={{ fontSize: "22px" }}>{service.icon}</span>
          <span
            style={{
              color: "var(--color-muted)",
              fontSize: "18px",
              transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.35s ease, color 0.3s",
              color: isActive ? "var(--color-orange)" : "var(--color-muted)",
              fontFamily: "var(--font-syne)",
            }}
          >
            +
          </span>
        </div>
      </div>

      {/* Expanded detail */}
      <div
        style={{
          maxHeight: isActive ? "200px" : "0px",
          opacity:   isActive ? 1 : 0,
          overflow:  "hidden",
          transition: "max-height 0.45s ease, opacity 0.35s ease 0.05s",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            paddingTop: "20px",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
              fontSize: "14px",
              color: "var(--color-muted)",
              lineHeight: 1.75,
              marginBottom: "16px",
            }}
          >
            {service.detail}
          </p>

          {/* Tags */}
          <div
            className="flex flex-wrap gap-2"
            style={{ direction: "ltr" }}
          >
            {service.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  border: "1px solid var(--color-border)",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  fontSize: "11px",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-dm)",
                  letterSpacing: "0.5px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { lang } = useLang();
  const t = content[lang];
  const [activeCard, setActiveCard] = useState(0);
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

  // Auto cycle cards
  useEffect(() => {
    setActiveCard(0);
  }, [lang]);

  const handleCardClick = (i) => {
    setActiveCard(i === activeCard ? -1 : i);
  };

  return (
    <section
      id="services"
      style={{ padding: "120px 60px", backgroundColor: "var(--color-black)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header grid */}
        <div
          className="grid gap-16 mb-16"
          style={{
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
          }}
        >
          {/* Left */}
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

          {/* Right — sub */}
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

        {/* Service list */}
        <div
          className="grid gap-0"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left column — services 1,2,3 */}
          <div style={{ borderRight: "1px solid var(--color-border)" }}>
            {t.services.slice(0, 3).map((service, i) => (
              <ServiceCard
                key={`${lang}-${i}`}
                service={service}
                index={i}
                lang={lang}
                isActive={activeCard === i}
                onClick={() => handleCardClick(i)}
              />
            ))}
          </div>

          {/* Right column — services 4,5,6 */}
          <div>
            {t.services.slice(3).map((service, i) => (
              <ServiceCard
                key={`${lang}-${i + 3}`}
                service={service}
                index={i + 3}
                lang={lang}
                isActive={activeCard === i + 3}
                onClick={() => handleCardClick(i + 3)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            marginTop: "60px",
            padding: "32px 40px",
            backgroundColor: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            direction: "ltr",
            flexWrap: "wrap",
            gap: "20px",
            opacity:   headlineVisible ? 1 : 0,
            transform: headlineVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--color-paper)",
                marginBottom: "6px",
              }}
            >
              {lang === "en"
                ? "Not sure which service you need?"
                : "مو متأكد أي خدمة تناسبك؟"}
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "14px",
                color: "var(--color-muted)",
              }}
            >
              {lang === "en"
                ? "Book a free 30-min call — we'll figure it out together."
                : "احجز كول مجاني 30 دقيقة — نحدد سوا وش تحتاج."}
            </div>
          </div>

          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
            style={{ whiteSpace: "nowrap" }}
          >
            {lang === "en" ? "Book a Free Call" : "احجز استشارة مجانية"}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <style>{`
        @media (max-width: 768px) {
          #services {
            padding: 80px 24px !important;
          }
          #services .grid[style*="1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          #services > div > div[class*="grid"]:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          #services [style*="border-right"] {
            border-right: none !important;
            border-bottom: 1px solid var(--color-border) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;