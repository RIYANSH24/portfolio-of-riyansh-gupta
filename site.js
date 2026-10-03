import { profile, projects, experiences, certificates, internshipCertificates, recognition } from "./data.js?v=3";

const page = document.body.dataset.page || "home";
const navItems = [
  { id: "home", label: "About", href: "index.html" },
  { id: "projects", label: "Projects & experience", href: "projects.html" },
  { id: "certifications", label: "Certifications", href: "certifications.html" },
  { id: "contact", label: "Contact", href: "contact.html" }
];

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function renderShell() {
  const current = navItems.find((item) => item.id === page);
  document.querySelector("#site-header").innerHTML = `
    <header class="site-header" id="site-header-inner">
      <div class="nav-wrap">
        <a class="wordmark" href="index.html" aria-label="Riyansh Gupta, About page"><span class="wordmark-dot" aria-hidden="true">R</span><span>RIYANSH<br>GUPTA<span class="wordmark-period">.</span></span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu"><span></span><span></span></button>
        <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
          ${navItems.map((item) => `<a href="${item.href}" ${item.id === page ? 'aria-current="page"' : ""}>${escapeHtml(item.label)}${item.id === page ? '<span class="nav-active-dot" aria-hidden="true"></span>' : ""}</a>`).join("")}
        </nav>
        <div class="nav-actions"><a class="resume-link" data-resume-link href="public/Riyansh-Gupta-Resume.pdf" download hidden>Resume <span aria-hidden="true">↓</span></a><a class="nav-contact" href="contact.html">Let’s talk <span aria-hidden="true">↗</span></a></div>
      </div>
    </header>`;

  document.querySelector("#site-footer").innerHTML = `
    <footer class="site-footer section-wrap">
      <div class="footer-top"><a class="footer-name" href="index.html">RIYANSH<br>GUPTA<span class="period">.</span></a><p>Digital marketing<br>Content<br>Creative strategy</p><a class="footer-back" href="#main">Back to top <span aria-hidden="true">↑</span></a></div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Riyansh Gupta</span><div>${navItems.map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`).join("")}</div><a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
    </footer>`;

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open menu");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Open menu");
      nav?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  });

  const stickyHeader = document.querySelector(".site-header");
  const onScroll = () => stickyHeader?.classList.toggle("is-compact", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function revealSections() {
  const elements = document.querySelectorAll(".section-space, .page-cta, .contact-layout, .availability-band, .intro-strip");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  elements.forEach((element) => observer.observe(element));
}

const filters = ["All work", "Social media", "Instagram", "Reels", "SEO", "Branding", "Campaigns"];
const projectPalette = ["project-coral", "project-blue", "project-lime", "project-lavender", "project-yellow"];
const brandIcons = {
  facebook: "<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'><path fill='currentColor' d='M13.4 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V10H7v3h2.8v8h3.6z'/></svg>",
  instagram: "<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'><rect x='3.25' y='3.25' width='17.5' height='17.5' rx='5.25' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='12' cy='12' r='4.1' fill='none' stroke='currentColor' stroke-width='1.8'/><circle cx='17.55' cy='6.65' r='1.15' fill='currentColor'/></svg>",
  x: "<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'><path fill='currentColor' d='M18.9 2H22l-7.1 8.1L23.3 22h-6.6l-5.2-7.1L5.3 22H2.1l7.5-8.6L1.6 2h6.8l4.7 6.6zm-1.2 18h1.7L7.3 3.9H5.5z'/></svg>",
  website: "<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'><circle cx='12' cy='12' r='9' fill='none' stroke='currentColor' stroke-width='1.7'/><ellipse cx='12' cy='12' rx='4' ry='9' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M3.4 9h17.2M3.4 15h17.2' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>",
  "google-business": "<svg viewBox='0 0 24 24' aria-hidden='true' focusable='false'><path d='M4 10.5h16v9H4zM3 10.5 5 4h14l2 6.5M8 19.5v-5h4v5M4 10.5a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.6'/></svg>"
};

function projectCard(project, index) {
  const words = project.title.split(/\s+/).slice(0, 3).map(escapeHtml).join("<br>");
  return `<article class="project-card ${projectPalette[index % projectPalette.length]}" id="${escapeHtml(project.id)}" data-project-card data-tags="${escapeHtml(project.tags.join("|"))}">
    <button class="project-open" type="button" data-project-id="${escapeHtml(project.id)}" aria-label="View ${escapeHtml(project.title)} details">
      <span class="project-card-top"><span>${escapeHtml(project.number)} / ${escapeHtml(project.type)}</span><span class="project-arrow" aria-hidden="true">↗</span></span>
      <span class="project-art" aria-hidden="true"><span class="project-art-ring"></span><span class="project-art-word">${words}</span><span class="project-art-brand">${escapeHtml(project.brand)}</span></span>
      <span class="project-meta"><span class="project-category">${escapeHtml(project.category)}</span><strong>${escapeHtml(project.title)}</strong><span class="project-brand">${escapeHtml(project.brand)}</span></span>
      <span class="project-tags">${project.tags.slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</span>
      <span class="project-card-cta">View project <span aria-hidden="true">↗</span></span>
    </button>
  </article>`;
}

function renderProjects() {
  const filterRoot = document.querySelector("#project-filters");
  const grid = document.querySelector("#project-grid");
  if (!filterRoot || !grid) return;
  filterRoot.innerHTML = filters.map((filter, index) => `<button class="filter-chip ${index === 0 ? "is-active" : ""}" type="button" data-filter="${escapeHtml(filter)}" aria-pressed="${index === 0}">${escapeHtml(filter)}</button>`).join("");
  grid.innerHTML = projects.map(projectCard).join("");

  filterRoot.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const selected = button.dataset.filter;
    filterRoot.querySelectorAll("[data-filter]").forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    grid.querySelectorAll("[data-project-card]").forEach((card) => {
      const tags = card.dataset.tags.split("|");
      const visible = selected === "All work" || tags.includes(selected) || (selected === "Campaigns" && tags.includes("Campaigns"));
      card.hidden = !visible;
    });
  });
  grid.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-project-id]");
    if (opener) openProject(opener.dataset.projectId, opener);
  });
  const dialog = document.querySelector("#project-dialog");
  dialog?.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  if (window.location.hash) {
    window.setTimeout(() => document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView({ block: "center", behavior: "smooth" }), 100);
  }
}

function renderExperience() {
  const root = document.querySelector("#experience-list");
  if (!root) return;
  root.innerHTML = experiences.map((item, index) => {
    const certificate = item.certificateImage ? `<a class="experience-proof" href="${escapeHtml(item.certificateImage)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(item.organization)} internship certificate in a new tab"><img src="${escapeHtml(item.certificateImage)}" alt="${escapeHtml(item.organization)} internship certificate" loading="lazy"><span>View internship certificate <span aria-hidden="true">↗</span></span></a>` : "";
    const brandLinks = (item.brandLinks || []).map((link) => {
      const icon = brandIcons[link.icon];
      if (!icon) return "";
      const label = escapeHtml(link.label);
      return `<a class="brand-link brand-link--${escapeHtml(link.icon)}" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(item.organization)} ${label} in a new tab" title="${label}">${icon}<span>${label}</span><span class="brand-link-arrow" aria-hidden="true">↗</span></a>`;
    }).join("");
    const channels = brandLinks ? `<div class="experience-brand-links"><span class="label-small">BRAND CHANNELS</span><div class="brand-link-list">${brandLinks}</div></div>` : "";
    return `<article class="experience-card" id="${escapeHtml(item.id)}">
    <div class="experience-marker"><span>0${index + 1}</span><i></i></div>
    <div class="experience-main"><div class="experience-title-row"><div><p class="experience-location">${escapeHtml(item.location || "Internship")}</p><h3>${escapeHtml(item.organization)}</h3></div><span class="experience-date">${escapeHtml(item.dates)}</span></div>
    <p class="experience-role">${escapeHtml(item.role)}</p><p class="experience-summary">${escapeHtml(item.summary)}</p>
    <div class="experience-work"><span class="label-small">WHAT I WORKED ON</span><div class="skill-list">${item.work.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}</div></div>
    ${channels}${certificate}</div></article>`;
  }).join("");
}

function openProject(id, opener) {
  const project = projects.find((item) => item.id === id);
  const dialog = document.querySelector("#project-dialog");
  if (!project || !dialog) return;
  const metrics = project.metrics?.length ? `<section class="dialog-metrics"><p class="label-small">${escapeHtml(project.metricsLabel || "Verified project metrics")}</p><div class="metric-grid">${project.metrics.map((metric) => `<div class="metric-item"><strong>${escapeHtml(metric.value)}</strong><span>${escapeHtml(metric.label)}</span></div>`).join("")}</div></section>` : "";
  const external = project.link ? `<a class="button button-primary" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">Open REDiaries on Instagram <span aria-hidden="true">↗</span></a>` : "";
  dialog.innerHTML = `<div class="dialog-shell"><button class="dialog-close" type="button" aria-label="Close project details">×</button>
    <div class="dialog-heading"><p class="eyebrow">${escapeHtml(project.number)} · ${escapeHtml(project.type)}</p><h2 id="dialog-title">${escapeHtml(project.title)}<span class="period">.</span></h2><p class="dialog-brand">${escapeHtml(project.brand)}${project.date ? ` · ${escapeHtml(project.date)}` : ""}</p></div>
    <div class="dialog-grid"><div><p class="dialog-role">${escapeHtml(project.role)}</p><p class="dialog-description">${escapeHtml(project.description)}</p></div><div class="dialog-details"><div><span class="label-small">OBJECTIVE</span><p>${escapeHtml(project.objective)}</p></div><div><span class="label-small">APPROACH</span><p>${escapeHtml(project.approach)}</p></div><div><span class="label-small">TOOLS & AREAS</span><div class="skill-list">${project.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}</div></div></div></div>
    ${metrics}
    <div class="dialog-actions">${external}<button class="button button-text dialog-close-text" type="button">Close details <span aria-hidden="true">×</span></button></div>
    </div>`;
  dialog.querySelectorAll(".dialog-close, .dialog-close-text").forEach((button) => button.addEventListener("click", () => dialog.close()));
  dialog.showModal();
  dialog.querySelector(".dialog-close")?.focus();
  dialog.addEventListener("close", () => opener?.focus(), { once: true });
}

function certificateCover(entry, index, kind = "course") {
  const kindLabel = kind === "award" ? "AWARD" : kind === "internship" ? "INTERNSHIP" : "COURSE";
  const fallback = `<div class="certificate-placeholder certificate-tone-${index % 6}"><span class="certificate-monogram">${kind === "award" ? "✦" : "RG"}</span><span class="certificate-placeholder-copy">${escapeHtml(entry.issuer.split("·")[0].trim())}</span><span class="certificate-placeholder-label">${kind === "award" ? "RECOGNITION" : "CERTIFICATE"}</span></div>`;
  const cover = `<span class="certificate-cover">${fallback}<img src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)} certificate" loading="lazy" data-fallback-image></span>`;
  const hasPost = /^https:\/\/(www\.)?linkedin\.com\//i.test(entry.linkedInPost || "");
  const fileTarget = entry.sourceDocument || entry.image;
  const target = hasPost ? entry.linkedInPost : fileTarget;
  const action = hasPost ? "View LinkedIn post" : kind === "internship" ? "View completion certificate" : entry.sourceDocument ? "Open original PDF" : "Open full certificate image";
  const postStatus = !hasPost && kind !== "internship" ? `<span class="certificate-post-status">LinkedIn post link not added</span>` : "";
  const linkContent = `<span class="certificate-content"><span class="certificate-count">${String(index + 1).padStart(2, "0")} / ${kindLabel}</span><strong>${escapeHtml(entry.title)}</strong><span class="certificate-issuer">${escapeHtml(entry.issuer)}</span>${entry.date ? `<span class="certificate-date">${escapeHtml(entry.date)}</span>` : ""}${entry.detail ? `<span class="certificate-detail">${escapeHtml(entry.detail)}</span>` : ""}${entry.credentialId ? `<span class="credential-id">Credential ID · ${escapeHtml(entry.credentialId)}</span>` : ""}<span class="certificate-visit">${action} <span aria-hidden="true">↗</span></span>${postStatus}</span>`;
  return `<article class="certificate-card"><a class="certificate-link" href="${escapeHtml(target)}" target="_blank" rel="noreferrer" aria-label="${hasPost ? `Open ${escapeHtml(entry.title)} LinkedIn post` : action + ` for ${escapeHtml(entry.title)}`} in a new tab">${cover}${linkContent}</a></article>`;
}

function renderCertificates() {
  const root = document.querySelector("#certificate-grid");
  if (!root) return;
  root.innerHTML = certificates.map((item, index) => certificateCover(item, index)).join("");
  const internshipRoot = document.querySelector("#internship-certificate-grid");
  if (internshipRoot) internshipRoot.innerHTML = internshipCertificates.map((item, index) => certificateCover(item, index, "internship")).join("");
  const awardRoot = document.querySelector("#recognition-list");
  if (awardRoot) awardRoot.innerHTML = recognition.map((item, index) => `<article class="recognition-card">${certificateCover(item, index, "award")}</article>`).join("");
  document.querySelectorAll("[data-fallback-image]").forEach((image) => image.addEventListener("error", () => image.remove(), { once: true }));
}

function setupContact() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const status = document.querySelector("#form-status");
  const submit = form.querySelector("[type=submit]");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const message = form.elements.message.value.trim();
    if (message.length < 20) {
      form.elements.message.setCustomValidity("Please add a little more detail (at least 20 characters).");
      form.elements.message.reportValidity();
      form.elements.message.addEventListener("input", () => form.elements.message.setCustomValidity(""), { once: true });
      return;
    }
    const endpoint = window.PORTFOLIO_CONFIG?.formEndpoint?.trim();
    if (!endpoint) {
      status.textContent = "The form is ready, but it hasn’t sent your message because an email service isn’t connected yet. Please email me directly instead.";
      status.classList.add("status-error");
      return;
    }
    const original = submit.innerHTML;
    submit.disabled = true;
    submit.innerHTML = "Sending…";
    status.textContent = "Sending your message…";
    status.classList.remove("status-error", "status-success");
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      form.reset();
      status.textContent = "Thanks — your message has been sent.";
      status.classList.add("status-success");
    } catch (error) {
      status.textContent = "The message could not be sent. Please email me directly at riyanshgupta844@gmail.com.";
      status.classList.add("status-error");
    } finally {
      submit.disabled = false;
      submit.innerHTML = original;
    }
  });
}

function addStructuredData() {
  const siteUrl = window.PORTFOLIO_CONFIG?.siteUrl?.replace(/\/$/, "");
  if (siteUrl) {
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    const fileName = location.pathname.split("/").pop() || "index.html";
    canonical.href = fileName === "index.html" ? `${siteUrl}/` : `${siteUrl}/${fileName}`;
    document.head.append(canonical);
    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.content = canonical.href;
    document.head.append(ogUrl);
  }
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
    email: profile.email,
    url: siteUrl || undefined,
    sameAs: [profile.linkedin]
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(person);
  document.head.append(script);
}

renderShell();
renderExperience();
renderProjects();
renderCertificates();
setupContact();
addStructuredData();
revealSections();

document.querySelectorAll("[data-resume-link]").forEach(async (link) => {
  try {
    const response = await fetch(link.getAttribute("href"), { method: "HEAD" });
    if (response.ok) link.hidden = false;
  } catch {}
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const heroScene = document.querySelector(".hero-art");
  if (heroScene) {
    heroScene.addEventListener("pointermove", (event) => {
      const rect = heroScene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroScene.style.setProperty("--scene-tilt-x", `${(-y * 7).toFixed(2)}deg`);
      heroScene.style.setProperty("--scene-tilt-y", `${(x * 8).toFixed(2)}deg`);
    });
    heroScene.addEventListener("pointerleave", () => {
      heroScene.style.setProperty("--scene-tilt-x", "0deg");
      heroScene.style.setProperty("--scene-tilt-y", "0deg");
    });
  }
  document.querySelectorAll(".project-card, .home-work-card, .certificate-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${-y * 5}deg`);
      card.style.setProperty("--tilt-y", `${x * 6}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}
