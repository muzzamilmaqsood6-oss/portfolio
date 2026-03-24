import { useEffect, useMemo, useRef, useState } from "react";
import {
  aboutLines,
  contactCards,
  dynamicPhrases,
  heroStats,
  profileBlocks,
  projectCards,
  projectDetails,
  skillGroups,
  timeline,
} from "./content";
import aiFocusLogo from "./assets/ai-focus.webp";
import githubLogo from "./assets/github-logo.webp";
import isprLogo from "./assets/ispr-logo.jpg";
import linkedinLogo from "./assets/linkedin-logo.webp";
import mailLogo from "./assets/mail-logo.webp";
import profileImage from "./assets/muzzamil-profile.jpg";
import nutechLogo from "./assets/nutech-logo.webp";
import whatsappLogo from "./assets/whatsapp-logo.webp";

const logoMap = {
  aiFocus: aiFocusLogo,
  ispr: isprLogo,
  nutech: nutechLogo,
  whatsapp: whatsappLogo,
  linkedin: linkedinLogo,
  github: githubLogo,
  mail: mailLogo,
};

function CRMPreview() {
  return (
    <div className="crm-shell">
      <div className="crm-rail">
        <span className="rail-badge active">WA</span>
        <span className="rail-badge">IG</span>
        <span className="rail-badge">FB</span>
        <span className="rail-badge">WEB</span>
      </div>
      <div className="crm-window">
        <div className="crm-topbar">
          <span className="crm-title">Unified Inbox</span>
          <span className="crm-live">AI Live</span>
        </div>
        <div className="crm-dialogue">
          <div className="crm-bubble incoming">Need pricing and WhatsApp follow-up.</div>
          <div className="crm-bubble outgoing">AI suggests qualified lead with warm sentiment.</div>
          <div className="crm-bubble incoming short">Schedule demo tomorrow.</div>
        </div>
        <div className="crm-ai-chip">AI routing + context continuity</div>
      </div>
      <div className="crm-sidepanel">
        <div className="crm-mini-card">
          <span className="mini-label">Lead Score</span>
          <strong>87</strong>
        </div>
        <div className="crm-mini-card">
          <span className="mini-label">Sentiment</span>
          <strong>Positive</strong>
        </div>
        <div className="crm-mini-card wide">
          <span className="mini-label">Next Action</span>
          <strong>Assign sales + reply</strong>
        </div>
      </div>
    </div>
  );
}

function ChatyPreview() {
  return (
    <div className="chaty-card">
      <div className="chaty-row">
        <span>Featured Project</span>
        <span>2026</span>
      </div>
      <h3>Chaty_PDFs - AI-Powered PDF Chatbot</h3>
      <p>
        An AI-powered document chatbot that extracts content, chunks files, retrieves relevant
        context, and responds with grounded answers.
      </p>
      <ul className="project-tags compact-tags">
        <li>FastAPI</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
        <li>ChromaDB</li>
        <li>RAG</li>
      </ul>
    </div>
  );
}

function SearchPreview() {
  return (
    <div className="search-shell">
      <div className="search-toolbar">
        <span className="search-dot"></span>
        <span className="search-bar"></span>
        <span className="search-status">Local Network</span>
      </div>
      <div className="search-body">
        <div className="query-card">
          <span className="query-label">Query Image</span>
          <div className="query-frame">
            <span className="query-dot dot-one"></span>
            <span className="query-dot dot-two"></span>
            <span className="query-line"></span>
          </div>
          <div className="query-meta">
            <span>ResNet-50</span>
            <span>CLIP</span>
          </div>
        </div>
        <div className="results-panel">
          <div className="result-card top-match">
            <div className="result-thumb featured-thumb"></div>
            <div className="result-copy">
              <span className="result-score">Top Match 97%</span>
              <strong>same image detected</strong>
            </div>
          </div>
          <div className="result-row">
            <span className="result-card small">
              <span className="result-thumb"></span>
              <small>94%</small>
            </span>
            <span className="result-card small">
              <span className="result-thumb alt"></span>
              <small>91%</small>
            </span>
            <span className="result-card small">
              <span className="result-thumb alt-two"></span>
              <small>89%</small>
            </span>
          </div>
        </div>
      </div>
      <div className="search-grid">
        <span className="search-tag">ResNet-50</span>
        <span className="search-tag">CLIP</span>
        <span className="search-tag">Histograms</span>
        <span className="search-tag">Flask</span>
        <span className="search-tag">Pickle</span>
      </div>
      <div className="search-footer">
        <div className="search-badge">same + similar image retrieval</div>
        <div className="retrieval-metrics">
          <span>18k indexed</span>
          <span>local access</span>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ preview, modal = false }) {
  const wrapperClass = `${preview}-preview${modal ? " modal-preview-fill" : ""}`;

  if (preview === "crm") {
    return (
      <div className={wrapperClass}>
        <CRMPreview />
      </div>
    );
  }

  if (preview === "chaty") {
    return (
      <div className={wrapperClass}>
        <ChatyPreview />
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <SearchPreview />
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  if (project.id === "imageSearch") {
    return (
      <article className={project.cardClass} data-reveal="up">
        <ProjectPreview preview={project.preview} />
        <div className="stack-card-top">
          <span className="project-label">{project.label}</span>
          <span className="stack-signal"></span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="stack-cloud">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button className={project.buttonClass} type="button" onClick={onOpen}>
          View Project
        </button>
      </article>
    );
  }

  return (
    <article className={project.cardClass} data-reveal="up">
      <div className={project.previewClass}>
        {project.preview === "crm" ? <CRMPreview /> : <ChatyPreview />}
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span className="project-label">{project.label}</span>
          <span className="project-year">{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.tags.length ? (
          <ul className={`project-tags${project.id === "chaty" ? " compact-tags" : ""}`}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        <button className={project.buttonClass} type="button" onClick={onOpen}>
          View Project
        </button>
      </div>
    </article>
  );
}

function App() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [openProjectKey, setOpenProjectKey] = useState(null);
  const [portraitTransform, setPortraitTransform] = useState({ x: 0, y: 0 });
  const [formStatus, setFormStatus] = useState("");
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const canvasRef = useRef(null);
  const reducedMotionRef = useRef(false);

  const selectedProject = useMemo(
    () => (openProjectKey ? projectDetails[openProjectKey] : null),
    [openProjectKey]
  );

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reducedMotionRef.current) return undefined;

    const intervalId = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % dynamicPhrases.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    const scrollRevealItems = revealItems.filter((item) => !item.closest(".hero"));

    if (reducedMotionRef.current) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    scrollRevealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotionRef.current) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    let width = 0;
    let height = 0;
    let nodes = [];
    let frameId = 0;

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.25,
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const nodeCount = Math.min(40, Math.max(22, Math.floor(width / 54)));
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.26,
        vy: (Math.random() - 0.5) * 0.26,
        r: Math.random() * 1.9 + 1.1,
      }));
    };

    const drawGlow = () => {
      const primary = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 180);
      primary.addColorStop(0, "rgba(121, 231, 255, 0.18)");
      primary.addColorStop(1, "rgba(121, 231, 255, 0)");
      context.fillStyle = primary;
      context.fillRect(0, 0, width, height);

      const secondary = context.createRadialGradient(width * 0.82, height * 0.18, 0, width * 0.82, height * 0.18, 240);
      secondary.addColorStop(0, "rgba(255, 184, 110, 0.08)");
      secondary.addColorStop(1, "rgba(255, 184, 110, 0)");
      context.fillStyle = secondary;
      context.fillRect(0, 0, width, height);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      drawGlow();

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            context.beginPath();
            context.strokeStyle = `rgba(121, 231, 255, ${0.22 - distance / 920})`;
            context.lineWidth = 1;
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
        if (pointerDistance < 180) {
          context.beginPath();
          context.strokeStyle = `rgba(255, 184, 110, ${0.18 - pointerDistance / 1200})`;
          context.lineWidth = 1;
          context.moveTo(node.x, node.y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }

        context.beginPath();
        context.fillStyle = "rgba(121, 231, 255, 0.85)";
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerLeave = () => {
      pointer.x = width * 0.5;
      pointer.y = height * 0.25;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(openProjectKey));

    if (!openProjectKey) {
      return undefined;
    }

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 40);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenProjectKey(null);
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = [
        ...modalRef.current.querySelectorAll(
          'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ),
      ];

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openProjectKey]);

  useEffect(() => {
    if (!openProjectKey && lastFocusedRef.current) {
      lastFocusedRef.current.focus();
    }
  }, [openProjectKey]);

  const handlePortraitMove = (event) => {
    if (reducedMotionRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 14;
    const rotateX = (0.5 - y) * 12;
    setPortraitTransform({ x: rotateX, y: rotateY });
  };

  const resetPortraitMove = () => {
    setPortraitTransform({ x: 0, y: 0 });
  };

  const openProject = (projectKey, event) => {
    lastFocusedRef.current = event.currentTarget;
    setOpenProjectKey(projectKey);
  };

  const closeModal = () => {
    setOpenProjectKey(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name || !email || !message) {
      setFormStatus("Please fill in all fields before sending your message.");
      return;
    }

    const mailTo = `mailto:muzzamilmaqsood6@gmail.com?subject=${encodeURIComponent(
      `Portfolio inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLocation: Islamabad\n\n${message}`
    )}`;

    setFormStatus("Opening your email app with a prepared message.");
    window.location.href = mailTo;
    event.currentTarget.reset();
  };

  const portraitStyle = {
    transform: `rotateX(${portraitTransform.x}deg) rotateY(${portraitTransform.y}deg)`,
  };

  return (
    <>
      <canvas id="neuralCanvas" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="ambient-shell" aria-hidden="true">
        <span className="ambient-glow glow-cyan"></span>
        <span className="ambient-glow glow-amber"></span>
        <span className="ambient-grid"></span>
        <span className="ambient-beam"></span>
      </div>

      <header className="site-header">
        <div className="container nav-wrap glass-panel">
          <a className="brand" href="#hero" aria-label="Muzzamil Maqsood home">
            <span className="brand-mark">
              <img src={profileImage} alt="Muzzamil Maqsood" className="brand-avatar" />
            </span>
            <span className="brand-copy">
              <strong>Muzzamil Maqsood</strong>
              <small>AI Systems | Intelligent Software</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="button button-ghost button-small nav-resume"
            href="./resume.html"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <section className="section hero" id="hero">
          <div className="container hero-layout">
            <div className="hero-copy" data-reveal="up">
              <span className="section-kicker">AI | Intelligent Systems | Product Engineering</span>
              <h1>
                I build{" "}
                <span className="dynamic-wrap">
                  <span key={phraseIndex} className="dynamic-word">
                    {dynamicPhrases[phraseIndex]}
                  </span>
                </span>{" "}
                into product-grade software.
              </h1>
              <p className="hero-lead">
                Final-semester Computer Science student in <strong>Islamabad</strong> focused on AI
                automation, retrieval-driven applications, backend architecture, and premium
                interfaces that make complex systems feel clear and useful.
              </p>

              <div className="hero-actions">
                <a className="button" href="#projects">
                  Projects
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact
                </a>
                <a className="button button-ghost" href="./resume.html" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>

              <div className="intro-links" data-reveal="up">
                <a
                  className="intro-link whatsapp"
                  href="https://wa.me/923175253522"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <span className="social-icon">
                    <img src={whatsappLogo} alt="WhatsApp logo" className="social-icon-image" />
                  </span>
                  <span>WhatsApp</span>
                </a>
                <a
                  className="intro-link"
                  href="https://www.linkedin.com/in/muzzamil-maqsood-7495823b2"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn profile"
                >
                  <span className="social-icon">
                    <img src={linkedinLogo} alt="LinkedIn logo" className="social-icon-image" />
                  </span>
                  <span>LinkedIn</span>
                </a>
                <a
                  className="intro-link"
                  href="https://github.com/muzzamilmaqsood6-oss/muzzamil"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open GitHub profile"
                >
                  <span className="social-icon">
                    <img
                      src={githubLogo}
                      alt="GitHub logo"
                      className="social-icon-image github-icon-image"
                    />
                  </span>
                  <span>GitHub</span>
                </a>
              </div>

              <div className="hero-stats">
                {heroStats.map((stat) => (
                  <article className="stat-card glass-panel" data-reveal="up" key={stat.label}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual" data-reveal="left">
              <div
                className="portrait-card glass-panel"
                style={portraitStyle}
                onPointerMove={handlePortraitMove}
                onPointerLeave={resetPortraitMove}
              >
                <div className="portrait-grid"></div>
                <div className="portrait-frame">
                  <img
                    src={profileImage}
                    alt="Portrait of Muzzamil Maqsood"
                    className="portrait-image"
                  />
                  <span className="portrait-shine"></span>
                  <span className="portrait-outline outline-one"></span>
                  <span className="portrait-outline outline-two"></span>
                </div>
                <div className="floating-chip chip-top">AI Automation</div>
                <div className="floating-chip chip-left">Docker + Kubernetes</div>
                <div className="floating-chip chip-right">Islamabad</div>
                <div className="visual-panel status-panel glass-panel">
                  <span>Core stack</span>
                  <strong>Python, FastAPI, React, PostgreSQL</strong>
                </div>
                <div className="visual-panel focus-panel glass-panel">
                  <span>Direction</span>
                  <strong>Intelligent products with real system thinking</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-heading" data-reveal="up">
              <span className="section-kicker">About</span>
              <h2>AI-focused software builder with backend discipline and product clarity.</h2>
              <p>
                Final-semester Computer Science student focused on intelligent applications,
                retrieval workflows, backend systems, and clear product execution.
              </p>
            </div>

            <div className="about-layout">
              <article className="about-card glass-panel" data-reveal="up">
                <p className="about-intro">
                  Final-semester Computer Science student focused on AI engineering, intelligent
                  applications, and cloud-oriented software systems.
                </p>
                <div className="about-sequence">
                  {aboutLines.map((line) => (
                    <p className="about-line" data-reveal="up" key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </article>

              <aside className="about-side">
                {profileBlocks.map((block) => (
                  <article className="identity-card glass-panel" data-reveal="left" key={block.kicker}>
                    <span className="identity-kicker">{block.kicker}</span>
                    <h3>{block.title}</h3>
                    <ul className="identity-list">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading" data-reveal="up">
              <span className="section-kicker">Skills</span>
              <h2>Focused on intelligent systems, deployment-ready thinking, and product execution.</h2>
              <p>
                Core strengths across AI automation, RAG-style reasoning, backend architecture,
                cloud deployment, and modern UI development.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card glass-panel" data-reveal="up" key={group.number}>
                  <div className="skill-topline">
                    <span>{group.number}</span>
                    <strong>{group.category}</strong>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-tags">
                    {group.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading" data-reveal="up">
              <span className="section-kicker">Selected Work</span>
              <h2>Real work centered on AI products, retrieval systems, and clear execution.</h2>
              <p>Selected projects across CRM, document intelligence, and computer vision.</p>
            </div>

            <div className="projects-grid">
              {projectCards.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={(event) => openProject(project.id, event)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading" data-reveal="up">
              <span className="section-kicker">Experience</span>
              <h2>Experience and academic milestones.</h2>
              <p>
                Academic and professional experience across AI systems, backend engineering, and
                communication-driven work.
              </p>
            </div>

            <div className="timeline">
              {timeline.map((item) => {
                const logo = item.logoKey ? logoMap[item.logoKey] : null;
                const content = logo ? (
                  <div className="edu-head">
                    <img src={logo} alt={item.logoAlt} className="edu-logo" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );

                return (
                  <article
                    className={`timeline-item${item.logoKey === "nutech" ? " timeline-education" : ""} glass-panel`}
                    data-reveal="up"
                    key={`${item.year}-${item.title}`}
                  >
                    <span className="timeline-year">{item.year}</span>
                    <div>{content}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="contact-shell glass-panel">
              <div className="contact-copy" data-reveal="up">
                <span className="section-kicker">Contact</span>
                <h2>Available for AI, backend, and intelligent software roles.</h2>
                <p>
                  For internships, entry-level roles, or project collaboration, reach out through
                  WhatsApp, email, LinkedIn, or GitHub.
                </p>

                <div className="contact-grid">
                  {contactCards.map((card) => (
                    <a
                      className={card.className}
                      href={card.href}
                      key={card.id}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noreferrer" : undefined}
                    >
                      <span className="contact-icon">
                        <img
                          src={logoMap[card.iconKey]}
                          alt={card.alt}
                          className={`contact-icon-image${card.iconClassName ? ` ${card.iconClassName}` : ""}`}
                        />
                      </span>
                      <span className="contact-text">
                        <small>{card.label}</small>
                        <strong>{card.value}</strong>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <form className="contact-form" id="contactForm" data-reveal="left" onSubmit={handleFormSubmit}>
                <label>
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about the role, team, or project."
                    required
                  ></textarea>
                </label>
                <button className="button" type="submit">
                  Send Message
                </button>
                <p className="form-status" id="formStatus" aria-live="polite">
                  {formStatus}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>Muzzamil Maqsood</p>
          <span>AI-focused Computer Science student based in Islamabad</span>
        </div>
      </footer>

      <div
        className={`project-modal${selectedProject ? " is-open" : ""}`}
        aria-hidden={selectedProject ? "false" : "true"}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="modal-backdrop" data-modal-close onClick={closeModal}></div>
        <div className="modal-panel glass-panel" ref={modalRef}>
          <button
            className="modal-close"
            type="button"
            data-modal-close
            aria-label="Close project details"
            onClick={closeModal}
            ref={closeButtonRef}
          >
            <span></span>
            <span></span>
          </button>
          {selectedProject ? (
            <div className="modal-layout">
              <div className="modal-visual">
                <ProjectPreview preview={selectedProject.preview} modal />
              </div>
              <div className="modal-copy">
                <span className="project-label" id="modalLabel">
                  {selectedProject.label}
                </span>
                <h3 id="modalTitle">{selectedProject.title}</h3>
                <p className="modal-summary" id="modalSummary">
                  {selectedProject.summary}
                </p>
                <div className="modal-block">
                  <h4>Overview</h4>
                  <p id="modalOverview">{selectedProject.overview}</p>
                </div>
                <div className="modal-block">
                  <h4>Why it matters</h4>
                  <p id="modalImpact">{selectedProject.impact}</p>
                </div>
                <ul className="project-tags" id="modalTags">
                  {selectedProject.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="modal-actions" id="modalActions">
                  {selectedProject.actions.map((action) => {
                    const className =
                      action.variant === "secondary"
                        ? "button button-secondary"
                        : action.variant === "ghost"
                          ? "button button-ghost"
                          : "button";

                    return (
                      <a
                        className={className}
                        href={action.href}
                        key={action.label}
                        onClick={action.href.startsWith("#") ? closeModal : undefined}
                        target={action.href.startsWith("http") ? "_blank" : undefined}
                        rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {action.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
