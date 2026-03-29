import { useEffect, useRef, useState } from "react";
import { useLang } from "../../context/LanguageContext";

const content = {
  en: {
    tag: "Who We Are",
    headline: ["A Marketing Agency", "That Thinks Like", "A Customer."],
    desc: [
      "Solven Marketing is a Riyadh-based digital agency specialized in turning followers into paying customers. We work with restaurants, cafés, gyms, clinics and real estate businesses across Saudi Arabia.",
      "Our philosophy is simple: people don't buy products — they buy feelings, transformations and identity. Every video and post we create is built on this truth.",
      "We don't sell you hours of work — we sell you one clear outcome: customers who came because of the content.",
    ],
    values: [
      "Strategy before execution — always",
      "Content built on buyer psychology",
      "Transparent reporting and real numbers",
      "Direct communication with the decision maker",
    ],
    toolsLabel: "AI-Powered Agency",
    toolsDesc:  "We use the latest AI tools to deliver big-agency strategy at a price that works for your business.",
    tools: [
      { name: "Claude AI",      role: "Strategy & Copywriting",  status: "Active" },
      { name: "ElevenLabs",    role: "Arabic Voiceover",         status: "Active" },
      { name: "CapCut + Canva", role: "Visual Production",       status: "Active" },
      { name: "Perplexity",    role: "Market Research",          status: "Active" },
    ],
    teamLabel: "The Team",
    team: [
      { name: "Faizullah",  role: "Strategy & Client Relations" },
      { name: "Mahdi",    role: "Video Production & Editing"  },
    ],
  },
  ar: {
    tag: "من نحن",
    headline: ["وكالة تسويق", "تفكر كزبون", "مو كمسوّق."],
    desc: [
      "Solven Marketing وكالة رقمية في الرياض متخصصة في تحويل المتابعين لزبائن يدفعون. نشتغل مع المطاعم والكافيهات والجيمات والعيادات والعقارات في المملكة.",
      "فلسفتنا بسيطة: الناس ما تشتري منتجات — تشتري مشاعر وتحولات وهوية. كل فيديو وبوست نسويه مبني على هذه الحقيقة.",
      "ما نبيع لك ساعات عمل — نبيع لك نتيجة واحدة واضحة: زبائن جاؤوا بسبب المحتوى.",
    ],
    values: [
      "الاستراتيجية أولاً — دائماً",
      "محتوى مبني على علم نفس الشراء",
      "تقارير شفافة وأرقام حقيقية",
      "تواصل مباشر مع صاحب القرار",
    ],
    toolsLabel: "وكالة مدعومة بالذكاء الاصطناعي",
    toolsDesc:  "نستخدم أحدث أدوات الذكاء الاصطناعي لنوصّل لك استراتيجية وكالة كبيرة بسعر يناسب مشروعك.",
    tools: [
      { name: "Claude AI",      role: "الاستراتيجية والكتابة",  status: "نشط" },
      { name: "ElevenLabs",    role: "فويس أوفر عربي",          status: "نشط" },
      { name: "CapCut + Canva", role: "الإنتاج البصري",         status: "نشط" },
      { name: "Perplexity",    role: "أبحاث السوق",             status: "نشط" },
    ],
    teamLabel: "الفريق",
    team: [
      { name: "فيصلة",  role: "الاستراتيجية وعلاقات العملاء" },
      { name: "مهيدي",  role: "إنتاج الفيديو والمونتاج"       },
    ],
  },
};

const About = () => {
  const { lang } = useLang();
  const t = content[lang];
  const headlineRef = useRef(null);
  const leftRef     = useRef(null);
  const rightRef    = useRef(null);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [leftVisible,     setLeftVisible]     = useState(false);
  const [rightVisible,    setRightVisible]    = useState(false);

  useEffect(() => {
    const makeObs = (ref, setter) => {
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setter(true); },
        { threshold: 0.15 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    };
    const o1 = makeObs(headlineRef, setHeadlineVisible);
    const o2 = makeObs(leftRef,     setLeftVisible);
    const o3 = makeObs(rightRef,    setRightVisible);
    return () => { o1.disconnect(); o2.disconnect(); o3.disconnect(); };
  }, []);

  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--color-card)",
        borderTop: "1px solid var(--color-border)",
        padding: "120px 60px",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Tag + Headline */}
        <div ref={headlineRef} style={{ marginBottom: "72px" }}>
          <div className="solven-tag mb-5">{t.tag}</div>
          {t.headline.map((line, i) => (
            <div key={`${lang}-${i}`} className="overflow-hidden">
              <div
                style={{
                  fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
                  fontSize: "clamp(36px, 5vw, 68px)",
                  fontWeight: 800,
                  lineHeight: lang === "ar" ? 1.35 : 1.05,
                  letterSpacing: lang === "ar" ? "0" : "-2px",
                  color: i === 1 ? "var(--color-orange)" : "var(--color-paper)",
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

        {/* Two column grid */}
        <div
          className="grid gap-20"
          style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}
        >

          {/* LEFT — description + values */}
          <div
            ref={leftRef}
            style={{
              opacity:   leftVisible ? 1 : 0,
              transform: leftVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Description paragraphs */}
            <div style={{ marginBottom: "40px" }}>
              {t.desc.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                    fontSize: "15px",
                    color: i === 0 ? "var(--color-paper)" : "var(--color-muted)",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                    fontWeight: i === 0 ? 500 : 400,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Values */}
            <div
              style={{
                borderTop: "1px solid var(--color-border)",
                paddingTop: "32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  color: "var(--color-orange)",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {lang === "en" ? "Our Values" : "قيمنا"}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {t.values.map((value, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      opacity:   leftVisible ? 1 : 0,
                      transform: leftVisible ? "translateX(0)" : "translateX(-16px)",
                      transition: `opacity 0.5s ease ${0.3 + i * 0.1}s,
                                   transform 0.5s ease ${0.3 + i * 0.1}s`,
                    }}
                  >
                    <div
                      style={{
                        width: "6px", height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-orange)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                        fontSize: "14px",
                        color: "var(--color-paper)",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div
              style={{
                borderTop: "1px solid var(--color-border)",
                paddingTop: "32px",
                marginTop: "32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  color: "var(--color-orange)",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {t.teamLabel}
              </div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {t.team.map((member, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "var(--color-black)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "10px",
                      padding: "16px 24px",
                      flex: 1,
                      minWidth: "160px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "var(--color-paper)",
                        marginBottom: "4px",
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                        fontSize: "12px",
                        color: "var(--color-muted)",
                      }}
                    >
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — AI tools card */}
          <div
            ref={rightRef}
            style={{
              backgroundColor: "var(--color-black)",
              border: "1px solid var(--color-border)",
              borderRadius: "16px",
              padding: "40px",
              position: "sticky",
              top: "100px",
              opacity:   rightVisible ? 1 : 0,
              transform: rightVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: "-80px", right: "-80px",
                width: "240px", height: "240px",
                background: "radial-gradient(circle, rgba(255,77,0,0.1) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            {/* Big AI text */}
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "88px",
                fontWeight: 800,
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,77,0,0.18)",
                lineHeight: 1,
                marginBottom: "20px",
                userSelect: "none",
              }}
            >
              AI+
            </div>

            <div
              style={{
                fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--color-paper)",
                marginBottom: "12px",
                lineHeight: 1.4,
              }}
            >
              {t.toolsLabel}
            </div>

            <p
              style={{
                fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                fontSize: "14px",
                color: "var(--color-muted)",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              {t.toolsDesc}
            </p>

            {/* Tool rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {t.tools.map((tool, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 16px",
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    opacity:   rightVisible ? 1 : 0,
                    transform: rightVisible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.5s ease ${0.4 + i * 0.1}s,
                                 transform 0.5s ease ${0.4 + i * 0.1}s`,
                    direction: "ltr",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "var(--color-paper)",
                      }}
                    >
                      {tool.name}
                    </div>
                    <div
                      style={{
                        fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                        fontSize: "11px",
                        color: "var(--color-muted)",
                        marginTop: "2px",
                      }}
                    >
                      {tool.role}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div
                      style={{
                        width: "6px", height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-orange)",
                        animation: "pulse 2s infinite",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: "11px",
                        color: "var(--color-orange)",
                      }}
                    >
                      {tool.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @media (max-width: 768px) {
          #about { padding: 80px 24px !important; }
          #about .grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about [style*="sticky"] { position: relative !important; top: 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default About;