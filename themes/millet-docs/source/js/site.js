(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  navToggle?.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
  });

  const progress = document.querySelector(".reading-progress span");
  if (progress && document.body.classList.contains("page-post")) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  document.querySelectorAll(".article-content .highlight").forEach((block) => {
    const code = block.querySelector(".code pre") || block.querySelector("pre");
    if (!code) return;

    const button = document.createElement("button");
    button.className = "copy-code";
    button.type = "button";
    button.textContent = "复制";
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        button.textContent = "已复制";
        window.setTimeout(() => {
          button.textContent = "复制";
        }, 1600);
      } catch {
        button.textContent = "复制失败";
      }
    });
    block.appendChild(button);
  });

  const tocLinks = [...document.querySelectorAll(".toc a")];
  const headings = tocLinks
    .map((link) => {
      try {
        return document.querySelector(decodeURI(link.hash));
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  if (headings.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tocLinks.forEach((link) => link.classList.remove("active"));
          const active = tocLinks.find((link) => decodeURI(link.hash) === `#${entry.target.id}`);
          active?.classList.add("active");
        });
      },
      { rootMargin: "-18% 0px -72% 0px" }
    );
    headings.forEach((heading) => observer.observe(heading));
  }
})();
