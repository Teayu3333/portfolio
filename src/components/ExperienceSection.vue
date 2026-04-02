<template>
  <section id="experience" class="section section-alt">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Experience</p>
        <h2 class="section-title">職務経歴</h2>
        <p class="section-desc">5年以上の開発経験。SIerから自社SaaSプロダクト開発まで。</p>
      </div>
      <div class="timeline">
        <div v-for="(job, i) in jobs" :key="i" class="timeline-item">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
            <div class="marker-line" v-if="i < jobs.length - 1"></div>
          </div>
          <div class="timeline-card">
            <div class="timeline-meta">
              <span class="timeline-period">{{ job.period }}</span>
              <span class="timeline-badge">{{ job.type }}</span>
            </div>
            <h3 class="timeline-company">{{ job.company }}</h3>
            <p class="timeline-role">{{ job.role }}</p>
            <p class="timeline-desc">{{ job.description }}</p>
            <div class="timeline-tech">
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
    period: '2022 〜 現在',
    type: '自社SaaS',
    company: 'ContractS株式会社',
    role: 'ソフトウェアエンジニア',
    description:
      'CLM（Contract Lifecycle Management）SaaSプロダクトのフルスタック開発。契約ステータス管理・承認フロー・通知機能など新機能を設計から実装・テストまで一貫して担当。AWS環境の運用・最適化、JenkinsによるCI/CDパイプライン整備も推進。',
    tech: ['Vue.js', 'TypeScript', 'Java', 'Spring Boot', 'AWS', 'Jenkins', 'MySQL'],
  },
  {
    period: '〜 2022',
    type: 'SIer',
    company: 'SIer企業',
    role: 'システムエンジニア',
    description:
      '官公庁・大手企業向け業務システムの設計・開発。要件定義から基本設計・詳細設計・テストまで一貫対応。Java/Seasar2でのバックエンド開発を中心に、大規模プロジェクトのデリバリーを経験。',
    tech: ['Java', 'Seasar2', 'Oracle', 'PostgreSQL', 'Redmine'],
  },
]
</script>

<style scoped>
.timeline {
  max-width: 780px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 2rem;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 0.4rem;
}

.marker-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg);
  box-shadow: 0 0 0 2px var(--accent);
  flex-shrink: 0;
}

.marker-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, var(--accent), var(--border));
  margin: 0.5rem 0;
  min-height: 40px;
}

.timeline-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  flex: 1;
  margin-bottom: 2rem;
  transition: border-color var(--transition);
}

.timeline-card:hover {
  border-color: rgba(79, 142, 247, 0.3);
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.timeline-period {
  font-size: 0.8rem;
  color: var(--text-dim);
  font-weight: 500;
}

.timeline-badge {
  padding: 0.2rem 0.6rem;
  background: var(--accent-dim);
  border: 1px solid rgba(79, 142, 247, 0.2);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
}

.timeline-company {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.timeline-role {
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 1rem;
}

.timeline-desc {
  font-size: 0.9rem;
  color: var(--text-dim);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.25rem 0.65rem;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: 5px;
  font-size: 0.78rem;
  color: var(--text-dim);
}

@media (max-width: 600px) {
  .timeline-item {
    gap: 1rem;
  }
  .timeline-card {
    padding: 1.25rem;
  }
}
</style>
