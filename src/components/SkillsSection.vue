<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Skills</p>
        <h2 class="section-title">技術スタック</h2>
        <p class="section-desc">フロントエンドからインフラまで、フルスタックで対応できます。</p>
      </div>
      <div class="skills-grid">
        <div v-for="group in skillGroups" :key="group.category" class="skill-card">
          <div class="skill-card-header">
            <span class="skill-icon">{{ group.icon }}</span>
            <h3>{{ group.category }}</h3>
          </div>
          <div class="skill-items">
            <span v-for="skill in group.skills" :key="skill" class="skill-chip">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'バックエンド',
    icon: '⚙️',
    skills: ['Java', 'Python', 'Spring Boot', 'Seasar2'],
  },
  {
    category: 'フロントエンド',
    icon: '🎨',
    skills: ['Vue.js', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'インフラ・クラウド',
    icon: '☁️',
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'Linux'],
  },
  {
    category: 'データベース',
    icon: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'Oracle'],
  },
  {
    category: 'ツール・CI/CD',
    icon: '🔧',
    skills: ['Jenkins', 'Git', 'GitHub', 'Backlog', 'Redmine'],
  },
  {
    category: '業務知識',
    icon: '📋',
    skills: ['契約管理 (CLM)', '要件定義', '基本設計', '詳細設計', 'テスト'],
  },
]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  transition: border-color var(--transition), transform var(--transition);
}

.skill-card:hover {
  border-color: rgba(79, 142, 247, 0.3);
  transform: translateY(-3px);
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.skill-icon {
  font-size: 1.5rem;
}

.skill-card-header h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-chip {
  padding: 0.3rem 0.75rem;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.8rem;
  color: var(--text-dim);
  transition: color var(--transition), border-color var(--transition);
}

.skill-card:hover .skill-chip {
  color: var(--text);
  border-color: rgba(79, 142, 247, 0.2);
}
</style>
