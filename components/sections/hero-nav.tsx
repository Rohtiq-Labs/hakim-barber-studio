"use client";

import { useEffect, useState } from "react";
import { HERO_VIDEO_SRC, NAV_LINKS } from "@/data/site-data";

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
    <line x1="2" y1="8" x2="13" y2="8" />
    <polyline points="8,3 13,8 8,13" />
  </svg>
);

export const MainNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <>
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobileMenu"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </div>

      <nav id="mainNav" className={`${scrolled ? "scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
        <a href="#" className="nav-logo">
          Hakim Studio
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a href="#booking" className="nav-book">
            Book now
          </a>
          <button
            type="button"
            className={`nav-menu-btn${menuOpen ? " open" : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
};

export const HeroSection = () => (
  <section className="hero">
    <video
      className="hero-bg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src={HERO_VIDEO_SRC} type="video/mp4" />
    </video>
    <div className="hero-overlay" />
    <div className="hero-content">
      <p className="label hero-eyebrow">Cairo · Nasr City · Est. 2020</p>
      <h1 className="hero-h1">
        The art
        <br />
        of the
        <br />
        <em>perfect</em>
        <br />
        cut.
      </h1>
      <p className="hero-tagline">
        Precision fades, braids & cuts.
        <br />
        Where craft meets culture.
      </p>
      <div className="hero-actions">
        <a href="#booking" className="btn-fill">
          Book your seat
        </a>
        <a href="#gallery" className="btn-outline">
          View our work
          <ArrowIcon />
        </a>
      </div>
    </div>
    <div className="hero-scroll-hint">
      <div className="scroll-line" />
      <span>Scroll</span>
    </div>
  </section>
);
