import React from "react";
import "./Contact.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const introTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: "#contact",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      introTimeline
        .from(".contact-heading", {
          y: 34,
          scale: 0.96,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".contact-heading-icon",
          {
            rotate: -20,
            scale: 0.6,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "<0.1",
        )
        .from(
          ".contact-info-card",
          {
            x: -60,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
          },
          "-=0.45",
        )
        .from(
          "form",
          {
            x: 72,
            rotateY: -8,
            transformOrigin: "left center",
            opacity: 0,
            duration: 0.9,
          },
          "-=0.62",
        )
        .from(
          "form > *",
          {
            y: 18,
            opacity: 0,
            duration: 0.52,
            stagger: 0.07,
            ease: "power2.out",
          },
          "-=0.45",
        );

      gsap.to(".contact-heading-icon", {
        y: -4,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-card-icon", {
        y: -4,
        duration: 1.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.18,
          from: "random",
        },
      });

      gsap.to("form", {
        y: -4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => media.revert();
  });
  return (
    <div id="contact">
      <div className="contact-heading">
        <span className="contact-heading-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M3.5 6.5L12 13.2L20.5 6.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </span>
        <h2>Get In Touch</h2>
      </div>
      <div className="leftcontact">
        <div className="contact-info-list">
          <a className="contact-info-card" href="mailto:prajapatianurag178@gmail.com">
            <span className="contact-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7.5L12 13.5L20 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3.5"
                  y="5.5"
                  width="17"
                  height="13"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
            <span className="contact-card-content">
              <span className="contact-card-title">Email</span>
              <span className="contact-card-text">prajapatianurag178@gmail.com</span>
            </span>
          </a>

          <a
            className="contact-info-card"
            href="https://www.linkedin.com/in/anuragprajapati13/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M8 10.5V16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="8" r="1" fill="currentColor" />
                <path
                  d="M12 16V12.8C12 11.8 12.8 11 13.8 11C14.8 11 15.6 11.8 15.6 12.8V16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="contact-card-content">
              <span className="contact-card-title">LinkedIn</span>
              <span className="contact-card-text">
                www.linkedin.com/in/anuragprajapati13/
              </span>
            </span>
          </a>

          <a
            className="contact-info-card"
            href="https://github.com/anuragprajapati13"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4.8C8 4.8 4.8 8 4.8 12C4.8 15.2 6.9 17.9 9.8 18.8V16.8C8.4 17.1 8.1 16.2 8.1 16.2C7.9 15.5 7.5 15.3 7.5 15.3C7 14.9 7.5 14.9 7.5 14.9C8.1 15 8.4 15.5 8.4 15.5C8.9 16.4 9.7 16.1 10 16C10 15.6 10.2 15.3 10.3 15.1C9.2 15 8.1 14.6 8.1 12.8C8.1 12.3 8.3 11.8 8.6 11.4C8.5 11.2 8.4 10.6 8.7 9.8C8.7 9.8 9.2 9.6 10.3 10.4C10.8 10.3 11.4 10.2 12 10.2C12.6 10.2 13.2 10.3 13.7 10.4C14.8 9.6 15.3 9.8 15.3 9.8C15.6 10.6 15.5 11.2 15.4 11.4C15.7 11.8 15.9 12.3 15.9 12.8C15.9 14.6 14.8 15 13.7 15.1C13.9 15.3 14.1 15.7 14.1 16.3V18.8C17.1 17.9 19.2 15.2 19.2 12C19.2 8 16 4.8 12 4.8Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="contact-card-content">
              <span className="contact-card-title">GitHub</span>
              <span className="contact-card-text">github.com/anuragprajapati13</span>
            </span>
          </a>
        </div>
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/mpwekwnv" method="POST">
          <input name="Username" type="text" placeholder="Name" />
          <input name="Email" type="email" placeholder="Email" />
          <textarea name="message" id="textarea" placeholder="message me" />
          <input type="submit" id="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
