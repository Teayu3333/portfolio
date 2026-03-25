/**
 * Portfolio App
 * GitHub APIからリポジトリ情報を取得し、カードを動的に生成
 */

// ───────────────────────────────────────────
//  言語ごとの色マップ（GitHub準拠）
// ───────────────────────────────────────────
const LANG_COLORS = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
  Ruby:       "#701516", Go:         "#00ADD8", Rust:     "#dea584",
  Java:       "#b07219", "C++":      "#f34b7d", C:        "#555555",
  "C#":       "#178600", PHP:        "#4F5D95", Swift:    "#F05138",
  Kotlin:     "#A97BFF", HTML:       "#e34c26", CSS:      "#563d7c",
  Shell:      "#89e051", Vue:        "#41b883",  Svelte:  "#ff3e00",
  Dart:       "#00B4AB", Scala:      "#c22d40",  R:       "#198CE7",
};

// ───────────────────────────────────────────
//  ユーティリティ
// ───────────────────────────────────────────
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function githubPagesUrl(repo) {
  const [owner, name] = repo.split("/");
  return `https://${owner}.github.io/${name}/`;
}

// ───────────────────────────────────────────
//  GitHub API
// ───────────────────────────────────────────
async function fetchUser(username) {
  const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
  if (!res.ok) throw new Error(`User "${username}" not found (${res.status})`);
  return res.json();
}

async function fetchRepo(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}`);
  if (!res.ok) throw new Error(`Repo "${repo}" not found (${res.status})`);
  return res.json();
}

// ───────────────────────────────────────────
//  テーマ管理
// ───────────────────────────────────────────
function initTheme(config) {
  const saved = localStorage.getItem("portfolio-theme");
  let theme = saved || config.theme || "dark";
  if (theme === "auto") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = theme === "dark" ? "☀ Light" : "☾ Dark";
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}

// ───────────────────────────────────────────
//  ヘッダー構築
// ───────────────────────────────────────────
function buildHeader(config) {
  const header = document.getElementById("site-header");
  header.innerHTML = `
    <div class="container">
      <div class="header-inner">
        <span class="site-title">${escapeHtml(config.displayName || config.githubUsername)}</span>
        <button id="theme-toggle" class="theme-toggle" onclick="toggleTheme()">☀ Light</button>
      </div>
    </div>`;
}

// ───────────────────────────────────────────
//  ヒーローセクション構築
// ───────────────────────────────────────────
function buildHero(config, userInfo) {
  const avatar  = config.avatarUrl || (userInfo && userInfo.avatar_url) || "";
  const name    = config.displayName || (userInfo && userInfo.name) || config.githubUsername;
  const bio     = config.bio || (userInfo && userInfo.bio) || "";
  const username = config.githubUsername;

  const linksHtml = (config.links || []).map(l => `
    <a href="${escapeHtml(l.url)}" class="social-link" target="_blank" rel="noopener">
      ${l.icon ? `<i class="${escapeHtml(l.icon)}"></i>` : ""}
      ${escapeHtml(l.label)}
    </a>`).join("");

  document.getElementById("hero").innerHTML = `
    <div class="container">
      <div class="hero">
        ${avatar ? `<div class="avatar-wrapper"><img class="avatar" src="${escapeHtml(avatar)}" alt="${escapeHtml(name)}"></div>` : ""}
        <h1>${escapeHtml(name)}</h1>
        ${bio ? `<p class="bio">${escapeHtml(bio)}</p>` : ""}
        ${username && username !== "your-username" ? `
          <div style="margin-bottom:0.5rem">
            <a href="https://github.com/${encodeURIComponent(username)}" class="github-link" target="_blank" rel="noopener">
              <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              @${escapeHtml(username)}
            </a>
          </div>` : ""}
        ${linksHtml ? `<div class="social-links">${linksHtml}</div>` : ""}
      </div>
    </div>`;
}

// ───────────────────────────────────────────
//  プロジェクトカード構築
// ───────────────────────────────────────────
function buildProjectCard(projectConfig, repoData) {
  const repo  = projectConfig.repo;
  const name  = repoData.name  || repo.split("/")[1];
  const desc  = repoData.description || "(説明なし)";
  const lang  = repoData.language || "";
  const stars = repoData.stargazers_count || 0;
  const forks = repoData.forks_count || 0;
  const ghUrl = repoData.html_url || `https://github.com/${repo}`;

  const liveUrl = projectConfig.liveUrl !== undefined
    ? projectConfig.liveUrl
    : githubPagesUrl(repo);

  const previewMode = projectConfig.previewMode || "screenshot";
  const featured    = !!projectConfig.featured;

  const langColor = LANG_COLORS[lang] || "#8b949e";
  const langBadge = lang
    ? `<span><span class="lang-dot" style="background:${langColor}"></span> ${escapeHtml(lang)}</span>`
    : "";
  const starBadge = portfolioConfig.showStarCount
    ? `<span>★ ${stars.toLocaleString()}</span>` : "";
  const forkBadge = portfolioConfig.showForkCount
    ? `<span>⑂ ${forks.toLocaleString()}</span>` : "";

  // プレビューエリア
  let previewHtml = "";
  if (previewMode === "iframe" && liveUrl) {
    previewHtml = `
      <div class="card-preview">
        <iframe src="${escapeHtml(liveUrl)}" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms" title="${escapeHtml(name)}"></iframe>
        <div class="preview-overlay">
          <button class="btn-launch" onclick="openModal('${escapeHtml(name)}','${escapeHtml(liveUrl)}','${escapeHtml(ghUrl)}',event)">
            ▶ ライブプレビュー
          </button>
        </div>
      </div>`;
  } else if (previewMode !== "none") {
    const langEmoji = getLangEmoji(lang);
    previewHtml = `
      <div class="card-preview">
        <div class="preview-placeholder">
          <span class="lang-icon">${langEmoji}</span>
          <span>${escapeHtml(lang || "Code")}</span>
        </div>
        ${liveUrl ? `<div class="preview-overlay">
          <button class="btn-launch" onclick="openModal('${escapeHtml(name)}','${escapeHtml(liveUrl)}','${escapeHtml(ghUrl)}',event)">
            ▶ 開いてみる
          </button>
        </div>` : ""}
      </div>`;
  }

  const liveBtn = liveUrl
    ? `<button class="btn-sm primary" onclick="openModal('${escapeHtml(name)}','${escapeHtml(liveUrl)}','${escapeHtml(ghUrl)}',event)">▶ 動かす</button>`
    : "";

  return `
    <article class="project-card${featured ? " featured" : ""}" onclick="window.open('${escapeHtml(ghUrl)}','_blank')" role="button" tabindex="0">
      ${previewHtml}
      <div class="card-body">
        <div class="card-title">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8z"></path></svg>
          ${escapeHtml(name)}
        </div>
        <p class="card-desc">${escapeHtml(desc)}</p>
        <div class="card-meta">
          ${langBadge}${starBadge}${forkBadge}
        </div>
      </div>
      <div class="card-actions" onclick="event.stopPropagation()">
        ${liveBtn}
        <a class="btn-sm" href="${escapeHtml(ghUrl)}" target="_blank" rel="noopener">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          GitHub
        </a>
      </div>
    </article>`;
}

function getLangEmoji(lang) {
  const map = {
    JavaScript:"🟨", TypeScript:"🔷", Python:"🐍", Ruby:"💎",
    Go:"🐹", Rust:"🦀", Java:"☕", "C++":"⚙️", C:"⚙️", "C#":"🟦",
    PHP:"🐘", Swift:"🐦", Kotlin:"🎯", HTML:"🌐", CSS:"🎨",
    Shell:"🖥️", Vue:"💚", Svelte:"🔥", Dart:"🎯",
  };
  return map[lang] || "📦";
}

// ───────────────────────────────────────────
//  モーダル
// ───────────────────────────────────────────
let _currentGhUrl = "";

function openModal(title, liveUrl, ghUrl, event) {
  if (event) event.stopPropagation();
  _currentGhUrl = ghUrl;

  const backdrop = document.getElementById("modal-backdrop");
  const iframe   = document.getElementById("modal-iframe");
  const loading  = document.getElementById("modal-loading");
  const titleEl  = document.getElementById("modal-title");
  const openBtn  = document.getElementById("modal-open-btn");

  titleEl.textContent = title;
  openBtn.href = liveUrl;
  iframe.src = "";

  loading.style.display = "flex";
  iframe.style.display  = "none";

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";

  iframe.onload = () => {
    loading.style.display = "none";
    iframe.style.display  = "block";
  };
  iframe.src = liveUrl;
}

function closeModal() {
  const backdrop = document.getElementById("modal-backdrop");
  const iframe   = document.getElementById("modal-iframe");
  backdrop.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => { iframe.src = ""; }, 300);
}

// ───────────────────────────────────────────
//  メイン
// ───────────────────────────────────────────
async function main() {
  // テーマ適用
  initTheme(portfolioConfig);

  // アクセントカラー上書き
  if (portfolioConfig.accentColor) {
    document.documentElement.style.setProperty("--accent", portfolioConfig.accentColor);
  }

  // ヘッダー構築（ユーザーデータなし段階で先に）
  buildHeader(portfolioConfig);

  const username = portfolioConfig.githubUsername;
  const projects = portfolioConfig.projects || [];

  // 未設定チェック
  if (!username || username === "your-username") {
    buildHero(portfolioConfig, null);
    document.getElementById("projects-container").innerHTML = `
      <div class="notice-banner">
        <p style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem">⚙️ 設定が必要です</p>
        <p><code>config.js</code> を開いて <code>githubUsername</code> と <code>projects</code> を設定してください。</p>
      </div>`;
    return;
  }

  // GitHubユーザー情報取得
  let userInfo = null;
  try {
    userInfo = await fetchUser(username);
  } catch (e) {
    console.warn("GitHub user fetch failed:", e.message);
  }
  buildHero(portfolioConfig, userInfo);

  // 作品なし
  if (projects.length === 0) {
    document.getElementById("projects-container").innerHTML = `
      <div class="notice-banner">
        <p><code>config.js</code> の <code>projects</code> 配列に作品を追加してください。</p>
      </div>`;
    return;
  }

  // スケルトン表示
  const container = document.getElementById("projects-container");
  container.innerHTML = `<div class="cards-skeleton">
    ${projects.map(() => `<div class="skeleton-card"></div>`).join("")}
  </div>`;

  // リポジトリ情報を並列取得
  const results = await Promise.allSettled(projects.map(p => fetchRepo(p.repo)));

  const grid = document.createElement("div");
  grid.className = "projects-grid";

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      grid.innerHTML += buildProjectCard(projects[i], result.value);
    } else {
      console.error(`Failed to fetch ${projects[i].repo}:`, result.reason);
      grid.innerHTML += `
        <article class="project-card">
          <div class="card-body">
            <div class="card-title">⚠️ ${escapeHtml(projects[i].repo)}</div>
            <p class="card-desc" style="color:#f85149">${escapeHtml(result.reason.message)}</p>
          </div>
        </article>`;
    }
  });

  container.innerHTML = "";
  container.appendChild(grid);
}

// バックドロップクリックで閉じる
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("modal-backdrop")
    .addEventListener("click", e => { if (e.target === e.currentTarget) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  main();
});
