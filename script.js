const progressBar = document.getElementById("readingProgress");
const backTopBtn = document.getElementById("backTop");
const heroArt = document.querySelector(".hero-art");

const glossaryData = {
  "latent-space": {
    title: "潜在空间（Latent Space）",
    body: "可以把它理解成模型内部的“语义地图”。输入和输出都在这张地图上被定位、关联与重组。",
    linkText: "在百度查看“潜在空间”相关结果",
    link: "https://www.baidu.com/s?wd=%E6%BD%9C%E5%9C%A8%E7%A9%BA%E9%97%B4%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%20%E5%A4%A7%E6%A8%A1%E5%9E%8B",
    backupText: "备用来源：在360搜索查看“潜在空间”",
    backupLink: "https://www.so.com/s?q=%E6%BD%9C%E5%9C%A8%E7%A9%BA%E9%97%B4%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%20%E5%A4%A7%E6%A8%A1%E5%9E%8B"
  },
  "prompt-engineering": {
    title: "提示词工程",
    body: "通过更清晰的任务描述、约束条件和输出格式设计，让模型稳定地产生更高质量结果。",
    linkText: "在百度查看“提示工程”相关结果",
    link: "https://www.baidu.com/s?wd=%E6%8F%90%E7%A4%BA%E5%B7%A5%E7%A8%8B%20%E5%A4%A7%E6%A8%A1%E5%9E%8B%20%E6%8F%90%E7%A4%BA%E8%AF%8D",
    backupText: "备用来源：在360搜索查看“提示工程”",
    backupLink: "https://www.so.com/s?q=%E6%8F%90%E7%A4%BA%E5%B7%A5%E7%A8%8B%20%E5%A4%A7%E6%A8%A1%E5%9E%8B%20%E6%8F%90%E7%A4%BA%E8%AF%8D"
  },
  "cli": {
    title: "命令行接口（CLI）",
    body: "一种以文本指令直接控制系统行为的方式。文中借它比喻“通过语言直接调度工具执行”。",
    linkText: "在百度查看“命令行接口”相关结果",
    link: "https://www.baidu.com/s?wd=%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%8E%A5%E5%8F%A3%20CLI",
    backupText: "备用来源：在360搜索查看“命令行接口”",
    backupLink: "https://www.so.com/s?q=%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%8E%A5%E5%8F%A3%20CLI"
  },
  "context-window": {
    title: "上下文窗口",
    body: "模型在一次处理里可“记住”的信息范围。窗口越高维，问题建模和推理质量通常越稳定。",
    linkText: "在百度查看“上下文窗口”相关结果",
    link: "https://www.baidu.com/s?wd=%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%20%E5%A4%A7%E6%A8%A1%E5%9E%8B",
    backupText: "备用来源：在360搜索查看“上下文窗口”",
    backupLink: "https://www.so.com/s?q=%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%20%E5%A4%A7%E6%A8%A1%E5%9E%8B"
  },
  "metadata": {
    title: "元数据",
    body: "简单说是“描述数据的数据”。在本文语境里，它指对价值判断、审美标准和思维框架的高层信息。",
    linkText: "在百度查看“元数据”相关结果",
    link: "https://www.baidu.com/s?wd=%E5%85%83%E6%95%B0%E6%8D%AE%20%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86",
    backupText: "备用来源：在360搜索查看“元数据”",
    backupLink: "https://www.so.com/s?q=%E5%85%83%E6%95%B0%E6%8D%AE%20%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86"
  },
  "abstraction": {
    title: "抽象化",
    body: "把复杂细节封装起来，只保留高层可操作能力。技术演进往往在降低门槛、提升意图表达效率。",
    linkText: "在百度查看“抽象化”相关结果",
    link: "https://www.baidu.com/s?wd=%E6%8A%BD%E8%B1%A1%E5%8C%96%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6",
    backupText: "备用来源：在360搜索查看“抽象化”",
    backupLink: "https://www.so.com/s?q=%E6%8A%BD%E8%B1%A1%E5%8C%96%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6"
  }
};

function updateReadingProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;

  if (scrollTop > 620) {
    backTopBtn.classList.add("show");
  } else {
    backTopBtn.classList.remove("show");
  }

  if (heroArt) {
    const translate = Math.min(24, scrollTop * 0.045);
    heroArt.style.transform = `translateY(${translate}px)`;
  }
}

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);
updateReadingProgress();

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
);

revealEls.forEach((el) => revealObserver.observe(el));

const chapterEls = document.querySelectorAll(".chapter[id]");
const tocLinks = document.querySelectorAll(".toc-link");

const tocObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) {
      return;
    }

    const activeId = `#${visibleEntry.target.id}`;
    tocLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === activeId);
    });
  },
  { threshold: [0.2, 0.35, 0.5, 0.7], rootMargin: "-10% 0px -50% 0px" }
);

chapterEls.forEach((section) => tocObserver.observe(section));

const glossaryPanel = document.getElementById("glossaryPanel");
const glossaryTitle = document.getElementById("glossaryTitle");
const glossaryBody = document.getElementById("glossaryBody");
const glossaryLink = document.getElementById("glossaryLink");
const glossaryFallbackLink = document.getElementById("glossaryFallbackLink");
const closeGlossary = document.getElementById("closeGlossary");
const terms = document.querySelectorAll(".term");

function openGlossary(termKey) {
  const item = glossaryData[termKey];
  if (!item) return;

  glossaryTitle.textContent = item.title;
  glossaryBody.textContent = item.body;
  glossaryLink.textContent = item.linkText;
  glossaryLink.href = item.link;
  if (item.backupLink && item.backupText) {
    glossaryFallbackLink.textContent = item.backupText;
    glossaryFallbackLink.href = item.backupLink;
    glossaryFallbackLink.classList.remove("hidden");
  } else {
    glossaryFallbackLink.classList.add("hidden");
  }
  glossaryPanel.classList.add("show");
}

terms.forEach((termBtn) => {
  termBtn.addEventListener("click", () => {
    openGlossary(termBtn.dataset.term);
  });
});

closeGlossary.addEventListener("click", () => {
  glossaryPanel.classList.remove("show");
});

document.addEventListener("click", (event) => {
  if (
    glossaryPanel.classList.contains("show") &&
    !glossaryPanel.contains(event.target) &&
    !event.target.closest(".term")
  ) {
    glossaryPanel.classList.remove("show");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    glossaryPanel.classList.remove("show");
  }
});

backTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
