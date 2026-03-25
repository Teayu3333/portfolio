/**
 * ========================================
 *  ポートフォリオ設定ファイル
 *  ここを編集してポートフォリオをカスタマイズ
 * ========================================
 */
const portfolioConfig = {

  // ── 基本情報 ──────────────────────────────
  githubUsername: "your-username",   // GitHubのユーザー名
  displayName:    "Your Name",       // 表示名
  bio:            "ひとこと自己紹介をここに書いてください。",
  avatarUrl:      "",                // 空にするとGitHubのアイコンを自動取得

  // ── SNS / リンク ──────────────────────────
  links: [
    // { label: "Twitter", url: "https://twitter.com/your-handle", icon: "fab fa-twitter" },
    // { label: "Zenn",    url: "https://zenn.dev/your-handle",   icon: "fas fa-pen" },
    // { label: "Blog",    url: "https://your-blog.com",          icon: "fas fa-rss" },
  ],

  // ── 作品一覧 ──────────────────────────────
  // repo:        "ユーザー名/リポジトリ名"  ← 必須
  // liveUrl:     GitHub Pages などのURL（省略可・空にするとGitHub Pagesを自動推定）
  // previewMode: "iframe" | "screenshot" | "none"
  //              iframe      → liveUrlをiframeで埋め込み表示
  //              screenshot  → ogpや画像のサムネ表示（デフォルト）
  //              none        → プレビューなし
  // featured:    true にするとトップに大きく表示
  projects: [
    // ── ここに作品を追加してください ──────────────
    // {
    //   repo:        "your-username/awesome-app",
    //   liveUrl:     "https://your-username.github.io/awesome-app",
    //   previewMode: "iframe",
    //   featured:    true,
    // },
    // {
    //   repo:        "your-username/another-project",
    //   previewMode: "screenshot",
    // },
    // ─────────────────────────────────────────────
  ],

  // ── 表示設定 ──────────────────────────────
  theme: "dark",          // "dark" | "light" | "auto"
  accentColor: "#58a6ff", // アクセントカラー（CSS カラー値）
  showLanguageBadge: true,
  showStarCount:     true,
  showForkCount:     true,
};
