<template>
  <section id="about" class="section">
    <div class="container">
      <div class="sec-header">
        <p class="sec-label">04 — ABOUT</p>
        <h2 class="sec-title">SELF PR</h2>
        <p class="sec-desc">// 社内SEとして即戦力になれる3つの強み</p>
      </div>

      <div class="about-layout">
        <!-- PR blocks -->
        <div class="pr-blocks">
          <div v-for="(item, i) in prItems" :key="i" class="pr-block">
            <div class="pr-block-head">
              <span class="pr-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="pr-sep">/</span>
              <span class="pr-label">{{ item.label }}</span>
            </div>
            <h3 class="pr-title">{{ item.title }}</h3>
            <p class="pr-body">{{ item.body }}</p>
          </div>
        </div>

        <!-- Profile card -->
        <div class="profile-card dot-bg">
          <div class="profile-top">
            <div class="profile-avatar">T</div>
            <div>
              <p class="profile-name">TEAYU</p>
              <p class="profile-kana">ティーユー</p>
            </div>
          </div>
          <div class="profile-divider"></div>
          <div class="profile-data">
            <div class="pd-row">
              <span class="pd-key">TARGET</span>
              <span class="pd-val">社内SE / コーポレートIT</span>
            </div>
            <div class="pd-row">
              <span class="pd-key">EXP</span>
              <span class="pd-val">5+ 年</span>
            </div>
            <div class="pd-row">
              <span class="pd-key">DOMAIN</span>
              <span class="pd-val">CLM / 業務システム</span>
            </div>
            <div class="pd-row">
              <span class="pd-key">GITHUB</span>
              <a class="pd-val pd-link" href="https://github.com/Teayu3333" target="_blank" rel="noopener">Teayu3333</a>
            </div>
          </div>
          <div class="profile-divider"></div>
          <p class="profile-bio">
            SIerで要件定義・設計・開発・テストを経験後、自社SaaS企業でフルスタック開発に従事。
            技術力と業務理解を両立しながら、ユーザー部門に近い立場で社内ITを推進したい。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PRItem {
  label: string
  title: string
  body: string
}

const prItems: PRItem[] = [
  {
    label: 'FULLSTACK + INFRA',
    title: 'フルスタック×インフラの広い技術範囲',
    body: 'フロントエンド（Vue.js/TS）からバックエンド（Java/Spring Boot）、AWSインフラ、CI/CDまで一貫して対応できる。社内SEとして「なんでも自分で動ける」エンジニアとして即戦力になれる。',
  },
  {
    label: 'DOMAIN KNOWLEDGE',
    title: '業務理解力と設計力',
    body: 'SIer時代から要件定義・基本設計・詳細設計を経験。契約管理ドメインの深い業務知識も持つ。ユーザー部門との橋渡し役として、技術と業務の両面から課題解決できる。',
  },
  {
    label: 'IMPROVEMENT MINDSET',
    title: '改善・自動化への積極性',
    body: 'CI/CDパイプライン整備・開発環境改善・ドキュメント標準化など「今あるものをより良くする」取り組みを自発的に推進。社内SEとして社内システムの継続改善に貢献できる。',
  },
]
</script>

<style scoped>
.sec-header {
  margin-bottom: var(--s-3xl);
}

.about-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--s-xl);
  align-items: start;
}

/* PR blocks */
.pr-blocks {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
}

.pr-block {
  padding: var(--s-xl) var(--s-lg);
  border-bottom: 1px solid var(--border);
  transition: background var(--t-fast) var(--ease);
}

.pr-block:last-child { border-bottom: none; }

.pr-block:hover { background: var(--bg-2); }

.pr-block-head {
  display: flex;
  align-items: center;
  gap: var(--s-xs);
  margin-bottom: var(--s-sm);
}

.pr-num {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  color: var(--red);
}

.pr-sep {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--border-2);
}

.pr-label {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-dis);
}

.pr-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--s-sm);
  line-height: 1.4;
}

.pr-body {
  font-size: 13px;
  color: var(--text-sec);
  line-height: 1.8;
}

/* Profile card */
.profile-card {
  border: 1px solid var(--border);
  padding: var(--s-xl) var(--s-lg);
  position: sticky;
  top: 80px;
}

.profile-top {
  display: flex;
  align-items: center;
  gap: var(--s-md);
  margin-bottom: var(--s-lg);
}

.profile-avatar {
  width: 48px;
  height: 48px;
  border: 1px solid var(--border-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  flex-shrink: 0;
}

.profile-name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.1em;
}

.profile-kana {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-dis);
  letter-spacing: 0.08em;
  margin-top: var(--s-2xs);
}

.profile-divider {
  height: 1px;
  background: var(--border);
  margin: var(--s-md) 0;
}

.profile-data {
  display: flex;
  flex-direction: column;
  gap: var(--s-sm);
}

.pd-row {
  display: flex;
  gap: var(--s-md);
  align-items: baseline;
}

.pd-key {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-dis);
  width: 60px;
  flex-shrink: 0;
}

.pd-val {
  font-size: 13px;
  color: var(--text-sec);
}

.pd-link {
  font-size: 13px;
  color: var(--text-sec);
  text-decoration: none;
  transition: color var(--t-fast) var(--ease);
}

.pd-link:hover { color: var(--text); }

.profile-bio {
  font-size: 12px;
  color: var(--text-sec);
  line-height: 1.8;
}

@media (max-width: 860px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
  .profile-card { position: static; }
}
</style>
