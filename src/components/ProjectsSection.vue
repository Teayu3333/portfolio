<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="sec-header">
        <p class="sec-label">03 — PROJECTS</p>
        <h2 class="sec-title">SELECTED WORK</h2>
        <p class="sec-desc">// 設計・実装・運用まで幅広く担当した代表的な取り組み</p>
      </div>

      <div class="projects-table">
        <div class="table-header">
          <span class="col-idx">#</span>
          <span class="col-cat">CATEGORY</span>
          <span class="col-title">PROJECT</span>
          <span class="col-result">OUTCOME</span>
          <span class="col-tech">STACK</span>
        </div>
        <div
          v-for="(proj, i) in projects"
          :key="i"
          class="table-row"
          :class="{ active: activeIdx === i }"
          @click="activeIdx = activeIdx === i ? -1 : i"
        >
          <div class="row-main">
            <span class="col-idx mono">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="col-cat">
              <span class="cat-badge">{{ proj.category }}</span>
            </span>
            <span class="col-title proj-title">{{ proj.title }}</span>
            <span class="col-result result-text">{{ proj.achievement }}</span>
            <span class="col-tech">
              <span v-for="tech in proj.tech.slice(0, 3)" :key="tech" class="mini-tag">{{ tech }}</span>
              <span v-if="proj.tech.length > 3" class="mini-tag">+{{ proj.tech.length - 3 }}</span>
            </span>
          </div>

          <!-- Expanded detail -->
          <div class="row-detail" v-if="activeIdx === i">
            <div class="detail-grid">
              <div class="detail-col">
                <span class="detail-label">// DESCRIPTION</span>
                <p class="detail-body">{{ proj.description }}</p>
              </div>
              <div class="detail-col">
                <span class="detail-label">// ROLE</span>
                <p class="detail-body">{{ proj.role }}</p>
                <span class="detail-label" style="margin-top: 16px">// FULL STACK</span>
                <div class="detail-tech">
                  <span v-for="tech in proj.tech" :key="tech" class="tech-chip">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="table-hint">// ROW をクリックで詳細展開</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  category: string
  title: string
  description: string
  role: string
  achievement: string
  tech: string[]
}

const activeIdx = ref(-1)

const projects: Project[] = [
  {
    category: 'SAAS',
    title: 'CLMプラットフォーム機能開発',
    description: '契約管理SaaSの新機能開発。契約ステータス管理・承認フロー・通知機能など複数機能を設計から実装・テストまで一貫担当。',
    role: 'フルスタック開発（設計〜実装〜テスト）',
    achievement: 'リリースサイクル短縮・操作性向上',
    tech: ['Vue.js', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
  },
  {
    category: 'INFRA',
    title: 'AWS環境移行・最適化',
    description: 'オンプレミスからAWSへの移行支援。EC2・S3・RDS・Lambdaを活用したアーキテクチャ設計とコスト最適化を実施。',
    role: 'インフラ設計・構築',
    achievement: 'コスト削減・可用性向上',
    tech: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'Linux'],
  },
  {
    category: 'DEVOPS',
    title: 'CI/CDパイプライン整備',
    description: 'Jenkinsを用いた自動ビルド・テスト・デプロイ環境の構築。ブランチ戦略と連携し、安定したリリースフローを実現。',
    role: 'パイプライン設計・実装',
    achievement: 'デプロイ自動化・エラー削減',
    tech: ['Jenkins', 'Git', 'Docker'],
  },
  {
    category: 'ENTERPRISE',
    title: '官公庁向け業務システム開発',
    description: '大規模業務システムの設計・開発。要件定義から基本設計・詳細設計・テストまで全工程を担当し、納期厳守で納品。',
    role: 'SE（要件定義〜テスト）',
    achievement: '納期厳守・品質基準クリア',
    tech: ['Java', 'Seasar2', 'Oracle', 'PostgreSQL'],
  },
  {
    category: 'INTERNAL',
    title: '社内SE的取り組み',
    description: '開発環境整備・ドキュメント標準化・新人オンボーディングプロセスの改善を自発的に推進。チーム全体の生産性向上に貢献。',
    role: '推進担当',
    achievement: 'オンボーディング期間短縮',
    tech: ['GitHub', 'Backlog', 'Markdown'],
  },
  {
    category: 'FRONTEND',
    title: 'レガシーシステムSPA化',
    description: '旧来のJSP/ServletシステムをVue.js SPAへ段階的にリファクタリング。ユーザー体験の改善と保守性向上を同時に達成。',
    role: 'フロントエンド刷新担当',
    achievement: '表示速度改善・保守性向上',
    tech: ['Vue.js', 'TypeScript', 'Java'],
  },
]
</script>

<style scoped>
.sec-header {
  margin-bottom: var(--s-3xl);
}

.projects-table {
  border: 1px solid var(--border);
}

.table-header {
  display: grid;
  grid-template-columns: 40px 120px 1fr 200px 180px;
  gap: var(--s-md);
  padding: var(--s-sm) var(--s-lg);
  border-bottom: 1px solid var(--border);
  background: var(--bg-2);
}

.table-header span {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-dis);
  text-transform: uppercase;
}

.table-row {
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: background var(--t-fast) var(--ease);
}

.table-row:last-child { border-bottom: none; }

.table-row:hover { background: var(--bg-2); }
.table-row.active { background: var(--bg-2); }

.table-row.active > .row-main {
  border-left: 2px solid var(--red);
}

.row-main {
  display: grid;
  grid-template-columns: 40px 120px 1fr 200px 180px;
  gap: var(--s-md);
  padding: var(--s-md) var(--s-lg);
  align-items: center;
  border-left: 2px solid transparent;
  transition: border-color var(--t-fast) var(--ease);
}

.mono {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dis);
}

.cat-badge {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-dis);
  border: 1px solid var(--border-2);
  padding: 2px var(--s-xs);
}

.proj-title {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-body);
}

.result-text {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-sec);
}

.mini-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-dis);
  border: 1px solid var(--border);
  padding: 1px 4px;
  margin-right: 3px;
  display: inline-block;
}

/* Expanded detail */
.row-detail {
  padding: var(--s-lg) var(--s-lg) var(--s-xl);
  border-top: 1px solid var(--border);
  background: var(--bg-3);
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--s-xl);
}

.detail-col {
  display: flex;
  flex-direction: column;
  gap: var(--s-sm);
}

.detail-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--text-dis);
  display: block;
}

.detail-body {
  font-size: 13px;
  color: var(--text-sec);
  line-height: 1.7;
}

.detail-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-xs);
  margin-top: var(--s-xs);
}

.tech-chip {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-sec);
  border: 1px solid var(--border-2);
  padding: 2px var(--s-sm);
}

.table-hint {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-dis);
  letter-spacing: 0.08em;
  margin-top: var(--s-sm);
}

/* Mobile */
@media (max-width: 860px) {
  .table-header { display: none; }

  .row-main {
    grid-template-columns: 36px 1fr;
    grid-template-rows: auto auto auto;
  }

  .col-idx { grid-row: 1; }
  .col-title { grid-column: 2; grid-row: 1; }
  .col-cat { grid-column: 2; grid-row: 2; }
  .col-result { display: none; }
  .col-tech { grid-column: 2; grid-row: 3; }

  .detail-grid { grid-template-columns: 1fr; }
}
</style>
