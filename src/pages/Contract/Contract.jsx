import { useEffect, useRef, useState } from "react";
import { useLang } from "../../context/LanguageContext";

const content = {
  en: {
    tag:      "Start Today",
    headline: ["Ready To Turn", "Your Followers Into", "Real Customers?"],
    sub:      "Book a free 30-minute call. We'll analyze your page and come back with a clear plan.",
    note:     "100% free — zero obligation",
    placeholder: "WhatsApp number or email",
    btnText:  "Book Now",
    successMsg: "Done! We'll reach out within 24 hours.",
    info: [
  {
    icon: "📍",
    label: "Riyadh, Saudi Arabia",
    href: "https://maps.google.com/?q=Riyadh,Saudi+Arabia",
  },
  {
    icon: "💬",
    label: "WhatsApp: +966 53 022 1556",
    href: "https://wa.me/966530221556?text=Hi%2C%20I%20found%20you%20online%20and%20want%20to%20know%20more",
  },
  {
    icon: "📸",
    label: "@solven.marketing",
    href: "https://instagram.com/solven.marketing",
  },
],
  },
  ar: {
    tag:      "ابدأ اليوم",
    headline: ["جاهز تحوّل", "متابعينك", "لزبائن فعليين؟"],
    sub:      "احجز استشارة مجانية 30 دقيقة — نحلل صفحتك ونرجعلك بخطة واضحة.",
    note:     "مجاني تماماً — بدون أي التزام",
    placeholder: "رقم الواتساب أو الإيميل",
    btnText:  "احجز الآن",
    successMsg: "تم! سنتواصل معك خلال 24 ساعة.",
    info: [
      { icon: "📍", label: "الرياض، المملكة العربية السعودية" },
      { icon: "💬", label: "واتساب: +966 XX XXX XXXX" },
      { icon: "📸", label: "@solvenmarketing" },
    ],
  },
};

const Contact = () => {
  const { lang } = useLang();
  const t = content[lang];
  const [value,     setValue]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused,   setFocused]   = useState(false);
  const headlineRef = useRef(null);
  const formRef     = useRef(null);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [formVisible,     setFormVisible]     = useState(false);

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
    const o2 = makeObs(formRef,     setFormVisible);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  const handleSubmit = () => {
    if (!value.trim()) {
      const input = document.getElementById("contact-input");
      if (input) {
        input.style.borderColor = "var(--color-orange)";
        input.focus();
      }
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--color-black)",
        borderTop: "1px solid var(--color-border)",
        padding: "120px 60px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(255,77,0,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            borderRadius: "50%",
            left: `${10 + Math.random() * 80}%`,
            top:  `${10 + Math.random() * 80}%`,
            backgroundColor: i % 3 === 0
              ? "var(--color-orange)"
              : "var(--color-muted)",
            opacity: Math.random() * 0.3 + 0.1,
            animation: `floatParticle ${6 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        className="max-w-3xl mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Tag */}
        <div
          ref={headlineRef}
          className="solven-tag"
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "24px",
            opacity:   headlineVisible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          {t.tag}
        </div>

        {/* Headline */}
        {t.headline.map((line, i) => (
          <div key={`${lang}-${i}`} className="overflow-hidden">
            <div
              style={{
                fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
                fontSize: "clamp(38px, 6vw, 78px)",
                fontWeight: 800,
                lineHeight: lang === "ar" ? 1.3 : 1.0,
                letterSpacing: lang === "ar" ? "0" : "-2px",
                color: i === 2 ? "var(--color-orange)" : "var(--color-paper)",
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

        {/* Sub */}
        <p
          style={{
            fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
            fontSize: "18px",
            color: "var(--color-muted)",
            lineHeight: 1.75,
            margin: "28px auto 48px",
            maxWidth: "480px",
            opacity:   headlineVisible ? 1 : 0,
            transform: headlineVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          {t.sub}
        </p>

        {/* Form */}
        <div
          ref={formRef}
          style={{
            opacity:   formVisible ? 1 : 0,
            transform: formVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          {!submitted ? (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  maxWidth: "480px",
                  margin: "0 auto 12px",
                  direction: "ltr",
                }}
              >
                <input
                  id="contact-input"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder={t.placeholder}
                  style={{
                    flex: 1,
                    backgroundColor: "var(--color-card)",
                    border: `1px solid ${focused
                      ? "var(--color-orange)"
                      : "var(--color-border)"}`,
                    borderRadius: "6px",
                    padding: "16px 20px",
                    color: "var(--color-paper)",
                    fontFamily: "var(--font-dm)",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "var(--color-orange)",
                    color: "var(--color-black)",
                    border: "none",
                    padding: "16px 28px",
                    borderRadius: "6px",
                    fontFamily: "var(--font-dm)",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  {t.btnText}
                </button>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "12px",
                  color: "var(--color-muted)",
                }}
              >
                {t.note}
              </p>
            </>
          ) : (
            <div
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-orange)",
                borderRadius: "12px",
                padding: "24px 40px",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                animation: "fadeIn 0.4s ease",
              }}
            >
              <span style={{ color: "var(--color-orange)", fontSize: "20px" }}>✓</span>
              <span
                style={{
                  fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                  fontSize: "15px",
                  color: "var(--color-paper)",
                }}
              >
                {t.successMsg}
              </span>
            </div>
          )}
        </div>

        {/* Contact info */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "64px",
            paddingTop: "48px",
            borderTop: "1px solid var(--color-border)",
            flexWrap: "wrap",
            direction: "ltr",
            opacity:   formVisible ? 1 : 0,
            transition: "opacity 0.7s ease 0.5s",
          }}
        >
          {t.info.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-dm)",
                fontSize: "14px",
                color: "var(--color-muted)",
              }}
            >
              <div
                style={{
                  width: "36px", height: "36px",
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-16px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 768px) {
          #contact { padding: 80px 24px !important; }
          #contact form, #contact > div > div[style*="flex"] { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;