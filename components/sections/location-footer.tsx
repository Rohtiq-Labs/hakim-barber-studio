import { ScrollReveal } from "@/components/scroll-reveal";
import {
  FADEZY_URL,
  FRESHA_URL,
  INSTAGRAM_URL,
  MAP_EMBED_URL,
  MAPS_URL,
  NAV_LINKS,
  PHONE_NUMBER,
  PHONE_URL,
  STUDIO_ADDRESS,
  WHATSAPP_URL,
} from "@/data/site-data";

export const LocationSection = () => (
  <section className="location" id="location">
    <ScrollReveal className="section-head">
      <div>
        <p className="label">Come visit</p>
        <h2 className="section-title">Find us</h2>
      </div>
    </ScrollReveal>
    <ScrollReveal className="location-map" delay={100} variant="in">
      <iframe
        src={MAP_EMBED_URL}
        loading="lazy"
        allowFullScreen
        title={`Hakim Studio — ${STUDIO_ADDRESS.line1}`}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </ScrollReveal>
    <ScrollReveal className="location-details" delay={180}>
      <div className="loc-cell">
        <div className="loc-label">Address</div>
        <div className="loc-value">
          {STUDIO_ADDRESS.line1}
          <br />
          {STUDIO_ADDRESS.line2}
          <br />
          {STUDIO_ADDRESS.line3}
        </div>
      </div>
      <div className="loc-cell">
        <div className="loc-label">Hours</div>
        <div className="loc-value">
          Mon – Sat
          <br />
          10am – 9pm
        </div>
      </div>
      <div className="loc-cell">
        <div className="loc-label">Phone</div>
        <div className="loc-value">
          <a href={PHONE_URL}>{PHONE_NUMBER}</a>
        </div>
      </div>
      <div className="loc-cell">
        <div className="loc-label">Instagram</div>
        <div className="loc-value">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            @hakim.studio
          </a>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export const FooterSection = () => (
  <footer>
    <ScrollReveal className="footer-top">
      <div>
        <div className="footer-brand-name">Hakim Studio</div>
        <div className="footer-brand-sub">Fades · Braids · Cuts · Cairo</div>
      </div>
      <div className="footer-cols">
        <div className="footer-col">
          <div className="footer-col-title">Navigate</div>
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Connect</div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={FRESHA_URL} target="_blank" rel="noopener noreferrer">
            Fresha
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
        </div>
      </div>
    </ScrollReveal>
    <ScrollReveal className="footer-bottom" delay={120} variant="in">
      <p className="footer-copy">
        © 2026 Hakim Barber Studio, Powered By{" "}
        <a href={FADEZY_URL} target="_blank" rel="noopener noreferrer">
          Fadezy
        </a>
        . All rights reserved.
      </p>
      <div className="footer-social">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          IG
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WA
        </a>
      </div>
    </ScrollReveal>
  </footer>
);
