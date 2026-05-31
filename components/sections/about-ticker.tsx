import { ScrollReveal } from "@/components/scroll-reveal";
import { TICKER_ITEMS } from "@/data/site-data";

export const TickerSection = () => (
  <ScrollReveal variant="in">
    <div className="ticker-wrap">
      <div className="ticker-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div className="ticker-item" key={`${item.bold}-${index}`}>
            {item.before}
            <b>{item.bold}</b>
            {item.after}
            <span className="ticker-dot" />
          </div>
        ))}
      </div>
    </div>
  </ScrollReveal>
);

export const AboutSection = () => (
  <section className="about-strip" id="about">
    <ScrollReveal className="about-left" variant="left">
      <p className="label">Our story</p>
      <h2 className="about-quote">
        Craft that
        <br />
        speaks for
        <br />
        <em>itself.</em>
      </h2>
    </ScrollReveal>
    <ScrollReveal className="about-right" variant="right" delay={120}>
      <p className="about-body">
        Hakim Studio is Cairo&apos;s premier destination for precision cuts,
        fades, and braids. Since 2020 we&apos;ve built a space where artistry
        and attention to detail define every single appointment.
      </p>
      <div className="about-stats">
        <div className="stat-cell">
          <div className="stat-num">4K+</div>
          <div className="stat-lbl">Followers</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">174</div>
          <div className="stat-lbl">Posts</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">5★</div>
          <div className="stat-lbl">Rated</div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);
