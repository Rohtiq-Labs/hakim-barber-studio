"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  BOOKING_SERVICES,
  BOOKING_TIMES,
  FRESHA_URL,
} from "@/data/site-data";

export const BookingSection = () => {
  const [selectedTime, setSelectedTime] = useState("13:00");

  return (
    <section className="booking" id="booking">
      <div className="booking-inner">
        <ScrollReveal className="booking-intro" variant="left">
          <p className="label">Reserve your chair</p>
          <h2 className="section-title">
            Book a
            <br />
            session
          </h2>
          <p>
            Select your service and a time that works. We&apos;ll confirm your
            seat instantly via Fresha.
          </p>
        </ScrollReveal>
        <ScrollReveal className="booking-form" delay={120} variant="right">
          <div className="form-group">
            <label htmlFor="svc">Service</label>
            <select id="svc" defaultValue="">
              <option value="">Select a service</option>
              {BOOKING_SERVICES.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fname">Your name</label>
            <input type="text" id="fname" placeholder="Ahmed Hassan" />
          </div>
          <div className="form-group">
            <label>Available times — Today</label>
            <div className="time-grid">
              {BOOKING_TIMES.map((time) => (
                <button
                  type="button"
                  key={time}
                  className={`time-chip${selectedTime === time ? " selected" : ""}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="btn-book-full"
            onClick={() => window.open(FRESHA_URL, "_blank")}
          >
            Confirm booking ↗
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
