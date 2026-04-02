<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="sec-header">
        <p class="sec-label">01 — SKILLS</p>
        <h2 class="sec-title">TECH STACK</h2>
        <p class="sec-desc">// フロントエンドからインフラまで、フルスタックで対応</p>
      </div>

      <div class="skills-grid">
        <div v-for="group in skillGroups" :key="group.category" class="skill-block">
          <div class="skill-block-head">
            <span class="skill-index">{{ group.index }}</span>
            <span class="skill-cat">{{ group.category }}</span>
          </div>
          <div class="skill-list">
            <div v-for="skill in group.skills" :key="skill" class="skill-row">
              <span class="skill-bullet">—</span>
              <span class="skill-name">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SkillGroup {
  index: string
  category: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    index: '01',
    category: 'BACKEND',
    skills: ['Java', 'Python', 'Spring Boot', 'Seasar2'],
  },
  {
    index: '02',
    category: 'FRONTEND',
    skills: ['Vue.js', 'TypeScript', 'JavaScript', 'HTML / CSS'],
  },
  {
    index: '03',
    category: 'CLOUD / INFRA',
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'Linux'],
  },
  {
    index: '04',
    category: 'DATABASE',
    skills: ['MySQL', 'PostgreSQL', 'Oracle'],
  },
  {
    index: '05',
    category: 'TOOLS / CI-CD',
    skills: ['Jenkins', 'Git', 'GitHub', 'Backlog', 'Redmine'],
  },
  {
    index: '06',
    category: 'DOMAIN',
    skills: ['契約管理 (CLM)', '要件定義', '基本設計', '詳細設計', 'テスト'],
  },
]
</script>

<style scoped>
.sec-header {
  margin-bottom: var(--s-3xl);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
}

.skill-block {
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: var(--s-xl) var(--s-lg);
  transition: background var(--t-fast) var(--ease);
}

.skill-block:hover {
  background: var(--bg-2);
}

.skill-block-head {
  display: flex;
  align-items: baseline;
  gap: var(--s-sm);
  margin-bottom: var(--s-lg);
}

.skill-index {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--red);
  font-weight: 700;
  letter-spacing: 0.05em;
}

.skill-cat {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--s-xs);
}

.skill-row {
  display: flex;
  align-items: center;
  gap: var(--s-sm);
}

.skill-bullet {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dis);
}

.skill-name {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-sec);
}

.skill-block:hover .skill-name {
  color: var(--text-body);
}
</style>
