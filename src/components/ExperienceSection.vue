<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="sec-header">
        <p class="sec-label">02 — EXPERIENCE</p>
        <h2 class="sec-title">WORK HISTORY</h2>
        <p class="sec-desc">// 5年以上の開発経験 — SIerから自社SaaSプロダクト開発まで</p>
      </div>

      <div class="exp-list">
        <div v-for="(job, i) in jobs" :key="i" class="exp-item">
          <!-- Left: index + line -->
          <div class="exp-left">
            <span class="exp-idx">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="exp-line" v-if="i < jobs.length - 1"></div>
          </div>

          <!-- Right: content -->
          <div class="exp-content">
            <div class="exp-top-row">
              <div class="exp-period">{{ job.period }}</div>
              <div class="exp-type-tag">{{ job.type }}</div>
            </div>
            <h3 class="exp-company">{{ job.company }}</h3>
            <p class="exp-role">{{ job.role }}</p>
            <p class="exp-desc">{{ job.description }}</p>
            <div class="exp-tech-row">
              <span v-for="tech in job.tech" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Job {
  period: string
  type: string
  company: string
  role: string
  description: string
  tech: string[]
}

const jobs: Job[] = [
  {
    period: '2022 — PRESENT',
    type: 'IN-HOUSE SAAS',
    company: 'ContractS株式会社',
    role: 'Software Engineer',
    description:
      'CLM（Contract Lifecycle Management）SaaSプロダクトのフルスタック開発。契約ステータス管理・承認フロー・通知機能など新機能を設計から実装・テストまで一貫担当。AWS環境の運用・最適化、JenkinsによるCI/CDパイプライン整備も推進。',
    tech: ['Vue.js', 'TypeScript', 'Java', 'Spring Boot', 'AWS', 'Jenkins', 'MySQL'],
  },
  {
    period: '— 2022',
    type: 'SIER',
    company: 'SIer企業',
    role: 'Systems Engineer',
    description:
      '官公庁・大手企業向け業務システムの設計・開発。要件定義から基本設計・詳細設計・テストまで全工程を一貫対応。Java/Seasar2でのバックエンド開発を中心に、大規模プロジェクトのデリバリーを経験。',
    tech: ['Java', 'Seasar2', 'Oracle', 'PostgreSQL', 'Redmine'],
  },
]
</script>

<style scoped>
.sec-header {
  margin-bottom: var(--s-3xl);
}

.exp-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.exp-item {
  display: flex;
  gap: var(--s-xl);
  padding-bottom: var(--s-3xl);
}

.exp-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 32px;
}

.exp-idx {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  color: var(--red);
  letter-spacing: 0.05em;
  margin-bottom: var(--s-sm);
  flex-shrink: 0;
}

.exp-line {
  width: 1px;
  flex: 1;
  background: var(--border);
  min-height: 60px;
}

.exp-content {
  flex: 1;
  border: 1px solid var(--border);
  padding: var(--s-xl) var(--s-lg);
  transition: border-color var(--t-fast) var(--ease), background var(--t-fast) var(--ease);
}

.exp-content:hover {
  border-color: var(--border-2);
  background: var(--bg-2);
}

.exp-top-row {
  display: flex;
  align-items: center;
  gap: var(--s-md);
  margin-bottom: var(--s-md);
}

.exp-period {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--text-dis);
}

.exp-type-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--red);
  border: 1px solid var(--red);
  padding: 1px var(--s-xs);
}

.exp-company {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.05em;
  margin-bottom: var(--s-xs);
}

.exp-role {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-sec);
  text-transform: uppercase;
  margin-bottom: var(--s-md);
}

.exp-desc {
  font-size: 14px;
  color: var(--text-sec);
  line-height: 1.8;
  margin-bottom: var(--s-lg);
}

.exp-tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-xs);
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-dis);
  border: 1px solid var(--border);
  padding: 2px var(--s-sm);
}

@media (max-width: 600px) {
  .exp-item { gap: var(--s-md); }
  .exp-content { padding: var(--s-lg) var(--s-md); }
}
</style>
