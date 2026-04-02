<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Projects</p>
        <h2 class="section-title">プロジェクト実績</h2>
        <p class="section-desc">設計・実装・運用まで幅広く担当した代表的な取り組みです。</p>
      </div>
      <div class="projects-grid">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="project-card"
          :class="{ featured: project.featured }"
        >
          <div class="project-number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="project-content">
            <div class="project-category">{{ project.category }}</div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-role">
              <span class="role-label">役割:</span>
              <span class="role-value">{{ project.role }}</span>
            </div>
            <div class="project-achievement" v-if="project.achievement">
              <span class="achievement-icon">✓</span>
              <span>{{ project.achievement }}</span>
            </div>
            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-pill">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  category: string
  title: string
  description: string
  role: string
  achievement: string
  tech: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    category: 'SaaS Product',
    title: 'CLMプラットフォーム機能開発',
    description:
      '契約管理SaaSの新機能開発。契約ステータス管理・承認フロー・通知機能など複数機能を設計から実装・テストまで一貫して担当。',
    role: 'フルスタック開発（設計〜実装〜テスト）',
    achievement: 'リリースサイクル短縮・ユーザー操作性向上',
    tech: ['Vue.js', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
    featured: true,
  },
  {
    category: 'Infrastructure',
    title: 'AWS環境移行・最適化',
    description:
      'オンプレミスからAWSへの移行支援。EC2・S3・RDS・Lambdaを活用したアーキテクチャ設計とコスト最適化を実施。',
    role: 'インフラ設計・構築',
    achievement: 'インフラコスト削減・可用性向上',
    tech: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'Linux'],
    featured: true,
  },
  {
    category: 'DevOps',
    title: 'CI/CDパイプライン整備',
    description:
      'Jenkinsを用いた自動ビルド・テスト・デプロイ環境の構築。ブランチ戦略と連携し、安定したリリースフローを実現。',
    role: 'パイプライン設計・実装',
    achievement: 'デプロイ自動化・ヒューマンエラー削減',
    tech: ['Jenkins', 'Git', 'Docker'],
  },
  {
    category: 'Enterprise',
    title: '官公庁向け業務システム開発',
    description:
      '大規模業務システムの設計・開発。要件定義から基本設計・詳細設計・テストまで全工程を担当し、納期厳守で納品。',
    role: 'SE（要件定義〜テスト）',
    achievement: '納期厳守・品質基準クリア',
    tech: ['Java', 'Seasar2', 'Oracle', 'PostgreSQL'],
  },
  {
    category: 'Internal IT',
    title: '社内SE的取り組み',
    description:
      '開発環境整備・ドキュメント標準化・新人オンボーディングプロセスの改善を自発的に推進。チーム全体の生産性向上に貢献。',
    role: '推進担当',
    achievement: 'オンボーディング期間短縮',
    tech: ['GitHub', 'Backlog', 'Markdown'],
  },
  {
    category: 'Frontend',
    title: 'レガシーシステムSPA化',
    description:
      '旧来のJSP/ServletシステムをVue.js SPAへ段階的にリファクタリング。ユーザー体験の改善と保守性向上を同時に達成。',
    role: 'フロントエンド刷新担当',
    achievement: '表示速度改善・保守性向上',
    tech: ['Vue.js', 'TypeScript', 'Java'],
  },
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: border-color var(--transition), transform var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: transparent;
  transition: background var(--transition);
}

.project-card.featured::before {
  background: linear-gradient(90deg, var(--accent), #7c3aed);
}

.project-card:hover {
  border-color: rgba(79, 142, 247, 0.3);
  transform: translateY(-4px);
}

.project-number {
  font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--border);
  line-height: 1;
  margin-bottom: 1rem;
  transition: color var(--transition);
}

.project-card:hover .project-number {
  color: var(--accent-dim);
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-category {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text);
}

.project-desc {
  font-size: 0.875rem;
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 1rem;
  flex: 1;
}

.project-role {
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
}

.role-label {
  color: var(--text-dim);
  flex-shrink: 0;
}

.role-value {
  color: var(--text);
}

.project-achievement {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #34d399;
  margin-bottom: 1.25rem;
  padding: 0.5rem 0.75rem;
  background: rgba(52, 211, 153, 0.08);
  border-radius: 6px;
  border: 1px solid rgba(52, 211, 153, 0.15);
}

.achievement-icon {
  flex-shrink: 0;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
}

.tech-pill {
  padding: 0.2rem 0.6rem;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--text-dim);
}

@media (max-width: 680px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
