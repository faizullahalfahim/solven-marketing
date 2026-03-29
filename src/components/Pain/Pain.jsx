import { useEffect, useRef, useState } from "react";
import { useLang } from "../../context/LanguageContext";

const content = {
  en: {
    tag:      "The Real Problem",
    headline: ["Why Your Page", "Isn't Bringing", "Customers."],
    pains: [
      {
        icon: "📉",
        title: "You post consistently — nobody engages",
        desc:  "The content isn't the problem. The strategy is. Posting without a psychological hook is just noise.",
      },
      {
        icon: "📸",
        title: "Beautiful photos — zero conversions",
        desc:  "Looking good isn't enough. Customers need to feel why they should choose YOU over everyone else.",
      },
      {
        icon: "💸",
        title: "You paid for design and shooting",
        desc:  "Without a clear message built around buyer psychology, that investment disappears into the feed.",
      },
      {
        icon: "⏳",
        title: "You waste time thinking 'what do I post?'",
        desc:  "That mental energy should go into your business — not into guessing what content works.",
      },
    ],
    truthLabel:   "The truth nobody tells you",
    truthQuote:   ["People don't buy products —", "they buy feelings,", "transformations, and identity."],
    truthBody:    "Every video we make is built on a deep understanding of why your customer chooses you — not just a pretty visual. That's the difference between content that gets watched and content that gets purchased from.",
    niches:       ["Restaurants", "Cafés", "Gyms", "Clinics", "Real Estate"],
  },
  ar: {
    tag:      "المشكلة الحقيقية",
    headline: ["ليش صفحتك", "ما تجيب", "زبائن؟"],
    pains: [
      {
        icon: "📉",
        title: "تنشر بانتظام بس ما في أحد يتفاعل",
        desc:  "المحتوى مو المشكلة. الاستراتيجية هي المشكلة. النشر بدون هوك نفسي مجرد ضجيج.",
      },
      {
        icon: "📸",
        title: "الصور حلوة والتصميم أنيق — بس صفر تحويل",
        desc:  "المظهر الحلو مو كافي. الزبون يحتاج يحس ليش يختارك أنت تحديداً.",
      },
      {
        icon: "💸",
        title: "دفعت على التصميم والتصوير",
        desc:  "بدون رسالة مبنية على علم نفس الشراء، هذا الاستثمار يضيع في الفيد.",
      },
      {
        icon: "⏳",
        title: "تضيع وقتك تفكر 'وش أنشر اليوم؟'",
        desc:  "هذه الطاقة المفروض تروح لمشروعك — مو لتخمين وش المحتوى يشتغل.",
      },
    ],
    truthLabel:   "الحقيقة اللي ما يقولها أحد",
    truthQuote:   ["الناس ما تشتري منتجات —", "تشتري مشاعر", "وتحولات وهوية."],
    truthBody:    "كل فيديو نسويه مبني على فهم عميق لليش زبونك يختارك — مو بس شكل حلو. هذا الفرق بين محتوى يُشاهَد ومحتوى يُشترى منه.",
    niches:       ["مطاعم", "كافيهات", "جيمات", "عيادات", "عقارات"],
  },
};

// Single pain card
const PainCard = ({ pain, index, lang }) => {
  const ref  = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="pain-item group cursor-default"
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.12}s,
                     transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      {/* Icon */}
      <div
        className="pain-icon shrink-0 text-lg"
        style={{
          transition: "background 0.3s",
        }}
      >
        {pain.icon}
      </div>

      {/* Text */}
      <div>
        <div
          className="font-semibold mb-1"
          style={{
            fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
            fontSize: "15px",
            color: "var(--color-paper)",
          }}
        >
          {pain.title}
        </div>
        <div
          style={{
            fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
            fontSize: "13px",
            color: "var(--color-muted)",
            lineHeight: 1.7,
          }}
        >
          {pain.desc}
        </div>
      </div>
    </div>
  );
};

// Truth card right side
const TruthCard = ({ t, lang }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeNiche, setActiveNiche] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle niches
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNiche((prev) => (prev + 1) % t.niches.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [t.niches.length]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "var(--color-black)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        padding: "40px",
        position: "sticky",
        top: "100px",
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
      }}
    >
      {/* Label */}
      <div className="solven-tag mb-5">{t.truthLabel}</div>

      {/* Quote lines */}
      <div
        className="mb-6"
        style={{
          fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
          fontSize: "clamp(20px, 2.2vw, 26px)",
          fontWeight: 700,
          lineHeight: 1.4,
          color: "var(--color-paper)",
        }}
      >
        {t.truthQuote.map((line, i) => (
          <div
            key={i}
            style={{
              color: i === 1 ? "var(--color-orange)" : "var(--color-paper)",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="solven-divider" />

      {/* Body */}
      <p
        style={{
          fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
          fontSize: "14px",
          color: "var(--color-muted)",
          lineHeight: 1.8,
          marginBottom: "28px",
        }}
      >
        {t.truthBody}
      </p>

      {/* Divider */}
      <div className="solven-divider" />

      {/* Niche pills — auto cycling */}
      <div
        className="flex flex-wrap gap-2 mt-4"
        style={{ direction: "ltr" }}
      >
        {t.niches.map((niche, i) => (
          <button
            key={i}
            onClick={() => setActiveNiche(i)}
            className="niche-pill"
            style={{
              background:   i === activeNiche ? "var(--color-orange)" : "transparent",
              borderColor:  i === activeNiche ? "var(--color-orange)" : "var(--color-border)",
              color:        i === activeNiche ? "var(--color-black)"  : "var(--color-muted)",
              fontWeight:   i === activeNiche ? 600 : 400,
              transition:   "all 0.35s ease",
            }}
          >
            {niche}
          </button>
        ))}
      </div>
    </div>
  );
};

const Pain = () => {
  const { lang } = useLang();
  const t = content[lang];
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

  return (
    <section
      id="pain"
      style={{
        backgroundColor: "var(--color-card)",
        borderTop:    "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "120px 60px",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section tag */}
        <div className="solven-tag mb-5">{t.tag}</div>

        {/* Two column grid */}
        <div
          className="grid gap-16"
          style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}
        >

          {/* LEFT — headline + pain cards */}
          <div>
            {/* Headline */}
            <div ref={headlineRef} className="mb-10 overflow-hidden">
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

            {/* Pain cards */}
            <div className="flex flex-col gap-4">
              {t.pains.map((pain, i) => (
                <PainCard
                  key={`${lang}-${i}`}
                  pain={pain}
                  index={i}
                  lang={lang}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — truth card */}
          <TruthCard t={t} lang={lang} />
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          #pain > div > div[class*="grid"] {
            grid-template-columns: 1fr !important;
          }
          #pain {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Pain;