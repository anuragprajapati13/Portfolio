import React from "react";
import "./Certificates.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const certificateList = [
  {
    title: "Google Analytics Certificate",
    issuer: "Google",
    description:
      "Certification focused on Google Analytics fundamentals, reporting workflows, and performance measurement for digital products.",
    href: "/certificates/Google_Analytics.pdf",
  },
  {
    title: "Introduction To MS Excel",
    issuer: "Microsoft (Simplilearn SkillUp)",
    description:
      "Gained hands-on experience in Excel fundamentals, including data handling, formulas, functions, and spreadsheet analysis to support data-driven decision-making.",
    href: "/certificates/Introduction_To_MS_Excel.pdf",
  },
  {
    title: "Introduction To Generative AI Studio",
    issuer: "Google Cloud",
    description:
      "Gained practical knowledge of generative AI concepts, prompt design, and building AI-driven solutions using Google Cloud AI Studio for real-world applications.",
    href: "/certificates/Introduction_To_Generative_AI_Studio.pdf",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    description:
      "Certificate covering fundamental Python programming concepts, including variables, data types, control structures, functions, and basic problem-solving techniques.",
    href: "/certificates/Python_Essentials_1.pdf",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL (IIT Hyderabad)",
    description:
      "Gained in-depth knowledge of cybersecurity, privacy risks, and protection techniques in social media, along with understanding real-world security challenges.",
    href: "/certificates/Privacy_and_Security_in_Online_Social_Media.pdf",
  },
  {
    title: "Oracle Certified Foundations Associate (AI Foundations)",
    issuer: "Oracle University",
    description:
      "Gained strong foundational knowledge in AI, including machine learning concepts, cloud-based AI services, and practical use cases using Oracle Cloud Infrastructure.",
    href: "/certificates/Oracle_Certified_Foundations_Associate_AI_Foundations.pdf",
  },
];

function Certificates() {
  useGSAP(() => {
    const certificatesTimeline = gsap.timeline({
      defaults: {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: "#certificates",
        start: "top 78%",
      },
    });

    certificatesTimeline
      .from(".certificates-eyebrow", {})
      .from(".certificates-title", {}, "-=0.35")
      .from(".certificates-subtitle", {}, "-=0.35")
      .from(".certificate-item", { stagger: 0.12 }, "-=0.2");
  });

  return (
    <section id="certificates">
      <div className="certificates-header">
        <p className="certificates-eyebrow">CERTIFICATIONS</p>
        <h2 className="certificates-title">My Certificates</h2>
        <p className="certificates-subtitle">
          Verified learning milestones that reflect continued growth across
          analytics and generative AI.
        </p>
      </div>

      <div className="certificates-grid">
        {certificateList.map((certificate) => (
          <div className="certificate-item" key={certificate.title}>
            <article className="certificate-card">
              <div className="certificate-badge">Certificate</div>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">
                Issued by {certificate.issuer}
              </p>
              <p className="certificate-description">
                {certificate.description}
              </p>
              <div className="certificate-actions">
                <a
                  className="certificate-link"
                  href={certificate.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
