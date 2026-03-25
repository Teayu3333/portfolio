# Portfolio

GitHubで作品を紹介する静的ポートフォリオサイトです。
GitHub Pages でそのまま公開できます。

## セットアップ

### 1. `config.js` を編集する

```js
const portfolioConfig = {
  githubUsername: "your-username",  // ← GitHubユーザー名に変える
  displayName:    "Your Name",      // ← 表示名
  bio:            "自己紹介文",

  projects: [
    {
      repo:        "your-username/awesome-app",    // ← リポジトリを追加
      liveUrl:     "https://your-username.github.io/awesome-app",
      previewMode: "iframe",   // "iframe" | "screenshot" | "none"
      featured:    true,       // トップに大きく表示
    },
  ],
};
```

### 2. GitHub Pages で公開する

リポジトリの **Settings → Pages** で `main` ブランチのルートを選択して保存するだけで公開されます。

---

## 作品の追加方法

`config.js` の `projects` 配列にオブジェクトを追加するだけです。

| プロパティ    | 必須 | 説明 |
|--------------|------|------|
| `repo`       | ✅   | `"ユーザー名/リポジトリ名"` |
| `liveUrl`    | -    | GitHub Pages等のURL（省略時は自動推定） |
| `previewMode`| -    | `"iframe"` / `"screenshot"` / `"none"` |
| `featured`   | -    | `true` にすると大きく表示 |

---

## ファイル構成

```
portfolio/
├── index.html      # メインHTML
├── config.js       # ← ここだけ編集すればOK
├── css/
│   └── style.css   # スタイル
└── js/
    └── app.js      # ロジック（GitHub API取得、カード生成）
```
