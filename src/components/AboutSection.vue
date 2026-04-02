<template>
  <section id="about" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <p class="section-label">About</p>
        <h2 class="section-title">自己PR</h2>
        <p class="section-desc">社内SEとして即戦力になれる3つの強みです。</p>
      </div>
      <div class="about-grid">
        <div v-for="(pr, i) in prItems" :key="i" class="pr-card">
          <div class="pr-index">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="pr-icon">{{ pr.icon }}</div>
          <h3 class="pr-title">{{ pr.title }}</h3>
          <p class="pr-body">{{ pr.body }}</p>
        </div>
      </div>
      <div class="about-profile">
        <div class="profile-inner">
          <div class="profile-avatar">
            <span>T</span>
          </div>
          <div class="profile-info">
            <h3 class="profile-name">Teayu（ティーユー）</h3>
            <p class="profile-title">Software Engineer → 社内SE志望</p>
            <p class="profile-bio">
              SIerで要件定義・設計・開発・テストを経験後、自社SaaS企業でフルスタック開発に従事。
              技術領域はバックエンド（Java/Spring Boot）からフロントエンド（Vue.js/TS）、
              AWSインフラ、CI/CDまで幅広く対応。<br /><br />
              技術力と業務理解を両立しながら、ユーザー部門に近い立場で社内ITを推進したいと考えています。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PRItem {
  icon: string
  title: string
  body: string
}

const prItems: PRItem[] = [
  {
    icon: '🚀',
    title: 'フルスタック×インフラの広い技術範囲',
    body: 'フロントエンド（Vue.js/TS）からバックエンド（Java/Spring Boot）、AWSインフラ、CI/CDまで一貫して対応できる。社内SEとして「なんでも自分で動ける」エンジニアとして即戦力になれる。',
  },
  {
    icon: '🧩',
    title: '業務理解力と設計力',
    body: 'SIer時代から要件定義・基本設計・詳細設計を経験。契約管理ドメインの深い業務知識も持つ。ユーザー部門との橋渡し役として、技術と業務の両面から課題解決できる。',
  },
  {
    icon: '⚡',
    title: '改善・自動化への積極性',
    body: 'CI/CDパイプライン整備、開発環境改善、ドキュメント標準化など、「今あるものをより良くする」取り組みを自発的に推進してきた。社内SEとして社内システムの継続改善に貢献できる。',
  },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.pr-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  position: relative;
  transition: border-color var(--transition), transform var(--transition);
}

.pr-card:hover {
  border-color: rgba(79, 142, 247, 0.3);
  transform: translateY(-3px);
}

.pr-index {
  font-family: 'Syne', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.pr-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.pr-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.pr-body {
  font-size: 0.875rem;
  color: var(--text-dim);
  line-height: 1.8;
}

.about-profile {
  max-width: 700px;
  margin: 0 auto;
}

.profile-inner {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.5rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.profile-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.profile-name {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.profile-title {
  font-size: 0.875rem;
  color: var(--accent);
  margin-bottom: 1rem;
  font-weight: 500;
}

.profile-bio {
  font-size: 0.875rem;
  color: var(--text-dim);
  line-height: 1.8;
}

@media (max-width: 600px) {
  .profile-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
