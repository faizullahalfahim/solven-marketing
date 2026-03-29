import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useLang } from "../../context/LanguageContext";

// All navbar text in both languages
const content = {
  en: {
    links: [
      { label: "The Problem", href: "#pain" },
      { label: "Services",    href: "#services" },
      { label: "Results",     href: "#results" },
      { label: "About",       href: "#about" },
    ],
    cta:        "Book a Call",
    toggleBtn:  "العربية",
    mobileCta:  "Book a Free Call",
  },
  ar: {
    links: [
      { label: "المشكلة",  href: "#pain" },
      { label: "خدماتنا", href: "#services" },
      { label: "النتائج", href: "#results" },
      { label: "من نحن",  href: "#about" },
    ],
    cta:        "احجز استشارة",
    toggleBtn:  "English",
    mobileCta:  "احجز استشارة مجانية",
  },
};

const Navbar = () => {
  const { lang, toggleLang } = useLang();
  const t = content[lang];

  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-border py-4 px-6 md:px-15"
          : "bg-transparent border-b border-transparent py-6 px-6 md:px-15"
        }`}
      style={{ direction: "ltr" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="font-syne font-extrabold text-xl text-paper tracking-tight"
        >
          Solven<span className="text-orange">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {t.links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`text-sm text-muted hover:text-paper transition-colors duration-200 
                  bg-transparent border-none cursor-pointer
                  ${lang === "ar" ? "font-cairo" : "font-dm"}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side — Toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">

          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            className="font-dm text-sm text-muted border border-border 
              px-4 py-2 rounded hover:border-muted hover:text-paper 
              transition-all duration-200 bg-transparent cursor-pointer"
          >
            {t.toggleBtn}
          </button>

          {/* CTA */}
          <button
            onClick={() => handleNavClick("#contact")}
            className={`font-dm font-medium text-sm bg-orange text-black 
              px-6 py-2.5 rounded hover:opacity-85 transition-opacity duration-200
              ${lang === "ar" ? "font-cairo" : "font-dm"}`}
          >
            {t.cta}
          </button>
        </div>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-3">

          {/* Language Toggle — Mobile */}
          <button
            onClick={toggleLang}
            className="font-dm text-xs text-muted border border-border 
              px-3 py-1.5 rounded hover:border-muted hover:text-paper 
              transition-all duration-200 bg-transparent cursor-pointer"
          >
            {t.toggleBtn}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul
          className="flex flex-col list-none mt-4 border-t border-border pt-4"
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        >
          {t.links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-sm text-muted hover:text-paper py-3 px-2 
                  bg-transparent border-none cursor-pointer transition-colors duration-200
                  ${lang === "ar" ? "text-right font-cairo" : "text-left font-dm"}`}
              >
                {link.label}
              </button>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="pt-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className={`w-full font-medium text-sm bg-orange text-black 
                py-3 rounded hover:opacity-85 transition-opacity
                ${lang === "ar" ? "font-cairo" : "font-dm"}`}
            >
              {t.mobileCta}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
