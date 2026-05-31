import { GALLERY_VIDEOS, INSTAGRAM_URL, SERVICES } from "@/data/site-data";

export const ServicesSection = () => (
  <section className="services" id="services">
    <div className="section-head">
      <div>
        <p className="label">What we do</p>
        <h2 className="section-title">Services</h2>
      </div>
      <a href="#booking" className="see-all">
        Book ↗
      </a>
    </div>
    <div className="services-list">
      {SERVICES.map((service) => (
        <a className="service-row" href="#booking" key={service.num}>
          <span className="service-row-num">{service.num}</span>
          <div className="service-row-info">
            <span className="service-row-name">{service.name}</span>
            <span className="service-row-desc">{service.desc}</span>
          </div>
          <span className="service-row-price">
            {service.price}
            <br />
            <span className="service-row-duration">{service.duration}</span>
          </span>
        </a>
      ))}
    </div>
  </section>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
    <line x1="2" y1="8" x2="13" y2="8" />
    <polyline points="8,3 13,8 8,13" />
  </svg>
);

export const GallerySection = () => (
  <section className="gallery" id="gallery">
    <div className="section-head">
      <div>
        <p className="label">Our work</p>
        <h2 className="section-title">Gallery</h2>
      </div>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="see-all">
        Instagram ↗
      </a>
    </div>
    <div className="gallery-grid">
      {GALLERY_VIDEOS.map((video) => (
        <div className={`gallery-cell ${video.className}`.trim()} key={video.src}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={video.alt}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-link"
    >
      View more on @hakim.studio
      <ArrowIcon />
    </a>
  </section>
);
