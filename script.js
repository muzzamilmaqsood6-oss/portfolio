const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll("[data-reveal]");
const heroDynamicText = document.getElementById("heroDynamicText");
const modal = document.getElementById("projectModal");
const modalOpeners = document.querySelectorAll(".project-trigger");
const modalClosers = document.querySelectorAll("[data-modal-close]");
const portraitCard = document.getElementById("portraitCard");
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const canvas = document.getElementById("neuralCanvas");
let lastFocusedElement = null;
let phraseIndex = 0;
const scrollRevealItems = [...revealItems].filter((item) => !item.closest(".hero"));

const rotatingPhrases = [
  "intelligent machines",
  "AI systems",
  "retrieval workflows",
  "context-aware products",
  "machine-assisted software",
];

const projectData = {
  crm: {
    label: "Flagship AI Project",
    title: "AI-Powered Multi-Channel CRM System",
    summary:
      "A cloud-native CRM direction that unifies WhatsApp, Instagram, Facebook, and website chat inside one intelligent workspace.",
    overview:
      "Built as a final year collaboration with Rockville Technologies, the system centralizes fragmented communication channels so teams can respond from one operational inbox instead of switching between disconnected tools.",
    impact:
      "The AI layer supports response assistance, sentiment analysis, lead management, and context continuity through vector embeddings and pgVector. The value is practical: faster handling, better context, and smarter communication flow.",
    tags: ["React", "FastAPI", "PostgreSQL", "Kafka", "Spark", "Docker", "Kubernetes", "AWS", "pgVector"],
    previewMarkup: `
      <div class="crm-preview modal-preview-fill">
        <div class="crm-shell">
          <div class="crm-rail">
            <span class="rail-badge active">WA</span>
            <span class="rail-badge">IG</span>
            <span class="rail-badge">FB</span>
            <span class="rail-badge">WEB</span>
          </div>
          <div class="crm-window">
            <div class="crm-topbar">
              <span class="crm-title">Unified Inbox</span>
              <span class="crm-live">AI Live</span>
            </div>
            <div class="crm-dialogue">
              <div class="crm-bubble incoming">Need pricing and WhatsApp follow-up.</div>
              <div class="crm-bubble outgoing">AI suggests qualified lead with warm sentiment.</div>
              <div class="crm-bubble incoming short">Schedule demo tomorrow.</div>
            </div>
            <div class="crm-ai-chip">AI routing + context continuity</div>
          </div>
          <div class="crm-sidepanel">
            <div class="crm-mini-card">
              <span class="mini-label">Lead Score</span>
              <strong>87</strong>
            </div>
            <div class="crm-mini-card">
              <span class="mini-label">Sentiment</span>
              <strong>Positive</strong>
            </div>
            <div class="crm-mini-card wide">
              <span class="mini-label">Next Action</span>
              <strong>Assign sales + reply</strong>
            </div>
          </div>
        </div>
      </div>
    `,
    actions: [
      { label: "GitHub Profile", href: "https://github.com/muzzamilmaqsood6-oss/muzzamil", variant: "ghost" },
      { label: "Contact", href: "#contact", variant: "primary" },
    ],
  },
  chaty: {
    label: "Document Intelligence",
    title: "Chaty_PDFs - AI-Powered PDF Chatbot",
    summary:
      "A retrieval-first chatbot that turns PDFs into grounded, interactive question-answer experiences.",
    overview:
      "This project extracts PDF text, chunks documents into retrievable units, and lets users ask natural questions in a clean interface instead of manually scanning long files.",
    impact:
      "Its strength comes from RAG-style retrieval, vector search, and grounded responses. That makes the system more useful than generic chat because it answers from the uploaded material instead of guessing without context.",
    tags: ["FastAPI", "Tailwind", "JavaScript", "HuggingFace", "ChromaDB", "RAG"],
    previewMarkup: `
      <div class="chaty-preview modal-preview-fill">
        <div class="chaty-card">
          <div class="chaty-row">
            <span>Featured Project</span>
            <span>2026</span>
          </div>
          <h3>Chaty_PDFs - AI-Powered PDF Chatbot</h3>
          <p>An AI-powered document chatbot that extracts content, chunks files, retrieves relevant context, and responds with grounded answers.</p>
          <ul class="project-tags compact-tags">
            <li>FastAPI</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>ChromaDB</li>
            <li>RAG</li>
          </ul>
        </div>
      </div>
    `,
    actions: [
      { label: "GitHub Profile", href: "https://github.com/muzzamilmaqsood6-oss/muzzamil", variant: "ghost" },
      { label: "Contact", href: "#contact", variant: "secondary" },
    ],
  },
  ispr: {
    label: "Experience Snapshot",
    title: "ISPR Communication Operations",
    summary:
      "Professional experience in digital communication, documentation, coordination, and disciplined execution.",
    overview:
      "During the ISPR internship, the work centered on content drafting, communication support, documentation handling, and organized coordination in a professional environment.",
    impact:
      "This experience matters because it strengthened execution discipline, communication clarity, and professional confidence. Those skills directly improve how I work inside technical teams and product environments.",
    tags: ["Communication", "Documentation", "Coordination", "Content Drafting", "Professional Workflow"],
    previewMarkup: `
      <div class="ops-preview modal-preview-fill">
        <div class="ops-ring"></div>
        <div class="ops-core">
          <span class="ops-pill">Professional Snapshot</span>
          <strong>ISPR Communication Workflow Support</strong>
        </div>
      </div>
    `,
    actions: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/muzzamil-maqsood-7495823b2", variant: "ghost" },
      { label: "Contact", href: "#contact", variant: "primary" },
    ],
  },
  imageSearch: {
    label: "Computer Vision Project",
    title: "Image Search Engine Using CNN",
    summary:
      "An image retrieval system designed to find the same or similar images inside large datasets through deep visual features.",
    overview:
      "The project used ResNet-50, CLIP, and color histograms for feature extraction, then stored feature vectors and metadata in Pickle files to support efficient similarity lookups.",
    impact:
      "It strengthened practical computer vision, feature engineering, and ML deployment skills by combining multiple retrieval signals inside a Flask web app with password-protected local network access.",
    tags: ["ResNet-50", "CLIP", "Color Histograms", "Flask", "Pickle", "Computer Vision"],
    previewMarkup: `
      <div class="search-preview modal-preview-fill">
        <div class="search-shell">
          <div class="search-toolbar">
            <span class="search-dot"></span>
            <span class="search-bar"></span>
            <span class="search-status">Local Network</span>
          </div>
          <div class="search-body">
            <div class="query-card">
              <span class="query-label">Query Image</span>
              <div class="query-frame">
                <span class="query-dot dot-one"></span>
                <span class="query-dot dot-two"></span>
                <span class="query-line"></span>
              </div>
              <div class="query-meta">
                <span>ResNet-50</span>
                <span>CLIP</span>
              </div>
            </div>
            <div class="results-panel">
              <div class="result-card top-match">
                <div class="result-thumb featured-thumb"></div>
                <div class="result-copy">
                  <span class="result-score">Top Match 97%</span>
                  <strong>same image detected</strong>
                </div>
              </div>
              <div class="result-row">
                <span class="result-card small">
                  <span class="result-thumb"></span>
                  <small>94%</small>
                </span>
                <span class="result-card small">
                  <span class="result-thumb alt"></span>
                  <small>91%</small>
                </span>
                <span class="result-card small">
                  <span class="result-thumb alt-two"></span>
                  <small>89%</small>
                </span>
              </div>
            </div>
          </div>
          <div class="search-grid">
            <span class="search-tag">ResNet-50</span>
            <span class="search-tag">CLIP</span>
            <span class="search-tag">Histograms</span>
            <span class="search-tag">Flask</span>
            <span class="search-tag">Pickle</span>
          </div>
          <div class="search-footer">
            <div class="search-badge">same + similar image retrieval</div>
            <div class="retrieval-metrics">
              <span>18k indexed</span>
              <span>local access</span>
            </div>
          </div>
        </div>
      </div>
    `,
    actions: [
      { label: "GitHub Profile", href: "https://github.com/muzzamilmaqsood6-oss/muzzamil", variant: "ghost" },
      { label: "Contact", href: "#contact", variant: "secondary" },
    ],
  },
};

const modalElements = {
  label: document.getElementById("modalLabel"),
  title: document.getElementById("modalTitle"),
  summary: document.getElementById("modalSummary"),
  overview: document.getElementById("modalOverview"),
  impact: document.getElementById("modalImpact"),
  tags: document.getElementById("modalTags"),
  visual: document.getElementById("modalVisual"),
  actions: document.getElementById("modalActions"),
};

const focusableSelector = 'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getButtonClass = (variant) => {
  if (variant === "secondary") return "button button-secondary";
  if (variant === "ghost") return "button button-ghost";
  return "button";
};

const renderModalActions = (actions) => {
  if (!modalElements.actions) return;
  modalElements.actions.innerHTML = actions
    .map((action) => {
      const external = action.href.startsWith("http");
      return `<a class="${getButtonClass(action.variant)}" href="${action.href}" ${external ? 'target="_blank" rel="noreferrer"' : ""}>${action.label}</a>`;
    })
    .join("");
};

const setModalContent = (projectKey) => {
  const project = projectData[projectKey];
  if (!project || !modal) return;

  modalElements.label.textContent = project.label;
  modalElements.title.textContent = project.title;
  modalElements.summary.textContent = project.summary;
  modalElements.overview.textContent = project.overview;
  modalElements.impact.textContent = project.impact;
  modalElements.tags.innerHTML = project.tags.map((tag) => `<li>${tag}</li>`).join("");
  modalElements.visual.innerHTML = project.previewMarkup;
  renderModalActions(project.actions);
};

const getModalFocusables = () => {
  if (!modal) return [];
  return [...modal.querySelectorAll(focusableSelector)];
};

const openModal = (projectKey, trigger) => {
  if (!modal) return;
  setModalContent(projectKey);
  lastFocusedElement = trigger;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close")?.focus();
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus?.();
};

modalOpeners.forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.project, button));
});

modalClosers.forEach((element) => {
  element.addEventListener("click", closeModal);
});

if (modal) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }

    if (event.key === "Tab" && modal.classList.contains("is-open")) {
      const focusable = getModalFocusables();
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
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;

    if (modal?.classList.contains("is-open")) {
      closeModal();
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  });
});

const initDynamicText = () => {
  if (!heroDynamicText || prefersReducedMotion) return;

  window.setInterval(() => {
    phraseIndex = (phraseIndex + 1) % rotatingPhrases.length;
    const nextPhrase = rotatingPhrases[phraseIndex];

    if (window.gsap) {
      gsap.to(heroDynamicText, {
        opacity: 0,
        y: -10,
        duration: 0.22,
        onComplete: () => {
          heroDynamicText.textContent = nextPhrase;
          gsap.fromTo(heroDynamicText, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.28 });
        },
      });
      return;
    }

    heroDynamicText.style.opacity = "0";
    window.setTimeout(() => {
      heroDynamicText.textContent = nextPhrase;
      heroDynamicText.style.opacity = "1";
    }, 220);
  }, 2200);
};

const initPortraitTilt = () => {
  if (!portraitCard || prefersReducedMotion) return;

  portraitCard.addEventListener("pointermove", (event) => {
    const rect = portraitCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 14;
    const rotateX = (0.5 - y) * 12;
    portraitCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  portraitCard.addEventListener("pointerleave", () => {
    portraitCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
};

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const message = data.get("message")?.toString().trim() || "";

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all fields before sending your message.";
      return;
    }

    const mailTo = `mailto:muzzamilmaqsood6@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nLocation: Islamabad\n\n${message}`)}`;

    formStatus.textContent = "Opening your email app with a prepared message.";
    window.location.href = mailTo;
    form.reset();
  });
}
const initReveals = () => {
  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    scrollRevealItems.forEach((item) => {
      const fromX = item.dataset.reveal === "left" ? -32 : 0;
      gsap.fromTo(
        item,
        { autoAlpha: 0, x: fromX, y: 36 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            once: true,
          },
        }
      );
    });

    gsap.from(".hero-copy > *", {
      y: 26,
      autoAlpha: 0,
      duration: 0.86,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.12,
    });

    gsap.from(".hero-visual", {
      x: 32,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.18,
    });

    if (document.querySelectorAll(".about-line").length) {
      gsap.from(".about-line", {
        y: 24,
        autoAlpha: 0,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 72%",
          once: true,
        },
      });
    }

  } else {
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
  }
};

const initCanvas = () => {
  if (!canvas || prefersReducedMotion) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  let width = 0;
  let height = 0;
  let nodes = [];
  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.25,
    active: false,
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

    window.requestAnimationFrame(draw);
  };

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });

  window.addEventListener("pointerleave", () => {
    pointer.active = false;
    pointer.x = width * 0.5;
    pointer.y = height * 0.25;
  });

  resize();
  draw();
  window.addEventListener("resize", resize);
};

initDynamicText();
initPortraitTilt();
initReveals();
initCanvas();
