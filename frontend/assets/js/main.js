const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = [...document.querySelectorAll(".reveal")];
const heroVisual = document.querySelector(".hero__visual");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!prefersReducedMotion.matches) {
  document.documentElement.classList.add("motion-ready");
}

const setScrollMotion = () => {
  if (prefersReducedMotion.matches) {
    return;
  }

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

  document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
};

setScrollMotion();
window.addEventListener("scroll", setScrollMotion, { passive: true });
window.addEventListener("resize", setScrollMotion);

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isMatch);
      });
    });
  },
  { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 }
);

sections.forEach((section) => navObserver.observe(section));

if (heroVisual && !prefersReducedMotion.matches) {
  const setHeroMotion = (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    heroVisual.style.setProperty("--pointer-x", x.toFixed(3));
    heroVisual.style.setProperty("--pointer-y", y.toFixed(3));
  };

  heroVisual.addEventListener("pointermove", setHeroMotion);
  heroVisual.addEventListener("pointerleave", () => {
    heroVisual.style.setProperty("--pointer-x", "0");
    heroVisual.style.setProperty("--pointer-y", "0");
  });
}
