import { useLang } from "../../../context/LanguageContext";

const content = {
  en: {
    tagline: "We turn your followers into real customers.",
    links: [
      { label: "The Problem", href: "#pain"     },
      { label: "Services",    href: "#services"  },
      { label: "Results",     href: "#results"   },
      { label: "About",       href: "#about"     },
      { label: "Contact",     href: "#contact"   },
    ],
    copy: `© ${new Date().getFullYear()} Solven Marketing. All rights reserved.`,
    location: "Riyadh, Saudi Arabia",
  },
  ar: {
    tagline: "نحوّل متابعينك لزبائن فعليين.",
    links: [
      { label: "المشكلة",  href: "#pain"     },
      { label: "خدماتنا", href: "#services"  },
      { label: "النتائج", href: "#results"   },
      { label: "من نحن",  href: "#about"     },
      { label: "تواصل",   href: "#contact"   },
    ],
    copy: `© ${new Date().getFullYear()} Solven Marketing. جميع الحقوق محفوظة.`,
    location: "الرياض، المملكة العربية السعودية",
  },
};

const Footer = () => {
  const { lang } = useLang();
  const t = content[lang];

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-card)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Top row */}
      <div
        className="max-w-7xl mx-auto"
        style={{
          padding: "48px 60px 32px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          direction: "ltr",
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: "280px" }}>
          <div
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "22px",
              color: "var(--color-paper)",
              marginBottom: "12px",
            }}
          >
            Solven<span style={{ color: "var(--color-orange)" }}>.</span>
          </div>
          <p
            style={{
              fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
              fontSize: "14px",
              color: "var(--color-muted)",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            {t.tagline}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-dm)",
              fontSize: "12px",
              color: "var(--color-muted)",
            }}
          >
            <span style={{ color: "var(--color-orange)" }}>📍</span>
            {t.location}
          </div>
        </div>

        {/* Nav links */}
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {t.links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
                    fontSize: "14px",
                    color: "var(--color-muted)",
                    padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--color-paper)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA block */}
        <div
          style={{
            backgroundColor: "var(--color-black)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "28px 32px",
            maxWidth: "260px",
          }}
        >
          <div
            style={{
              fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-syne)",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--color-paper)",
              marginBottom: "8px",
            }}
          >
            {lang === "en" ? "Ready to grow?" : "جاهز تنمو؟"}
          </div>
          <p
            style={{
              fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-dm)",
              fontSize: "13px",
              color: "var(--color-muted)",
              lineHeight: 1.6,
              marginBottom: "20px",
            }}
          >
            {lang === "en"
              ? "Book a free call — no strings attached."
              : "احجز كول مجاني — بدون أي التزام."}
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              width: "100%",
              backgroundColor: "var(--color-orange)",
              color: "var(--color-black)",
              border: "none",
              padding: "12px 20px",
              borderRadius: "6px",
              fontFamily: "var(--font-dm)",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            {lang === "en" ? "Book a Free Call" : "احجز استشارة مجانية"}
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          padding: "20px 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          direction: "ltr",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "12px",
            color: "var(--color-muted)",
          }}
        >
          {t.copy}
        </span>
        <span
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "12px",
            color: "var(--color-muted)",
          }}
        >
          Built with{" "}
          <span style={{ color: "var(--color-orange)" }}>♥</span>
          {" "}in Riyadh
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div { padding: 40px 24px 24px !important; flex-direction: column !important; }
          footer > div:last-child { padding: 16px 24px !important; flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;