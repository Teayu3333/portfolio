<template>
  <section id="hero" class="hero dot-bg">
    <div class="hero-inner">
      <!-- Top meta row -->
      <div class="hero-meta">
        <span class="meta-item">SW.ENG — v5.0+</span>
        <span class="meta-sep">|</span>
        <span class="meta-item">CORPORATE IT TARGET</span>
        <span class="meta-sep">|</span>
        <span class="meta-item meta-status">
          <span class="status-dot"></span>OPEN TO WORK
        </span>
      </div>

      <!-- Main display -->
      <h1 class="hero-name">TEAYU</h1>
      <p class="hero-role">SOFTWARE ENGINEER</p>

      <!-- Description -->
      <p class="hero-desc">
        Java · Vue.js · AWS ——<br />
        フルスタック開発から社内SE志望。<br />
        設計から運用まで一気通貫で動けます。
      </p>

      <!-- Skill chips -->
      <div class="hero-chips">
        <span v-for="chip in chips" :key="chip" class="chip">{{ chip }}</span>
      </div>

      <!-- CTA row -->
      <div class="hero-actions">
        <a href="#projects" class="btn-primary">[ VIEW WORK ]</a>
        <a href="https://github.com/Teayu3333" target="_blank" rel="noopener" class="btn-ghost">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style="flex-shrink:0">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GITHUB
        </a>
        <a href="#contact" class="btn-ghost">[ CONTACT ]</a>
      </div>

      <!-- Stats row -->
      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-ind">
      <span class="scroll-text">SCROLL</span>
      <div class="scroll-bar"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const chips = ['Java', 'Spring Boot', 'Vue.js', 'TypeScript', 'AWS', 'Jenkins', 'MySQL', 'Linux']

const stats = [
  { value: '5+',  label: 'YRS EXP' },
  { value: '2',   label: 'COMPANIES' },
  { value: '6+',  label: 'PROJECTS' },
  { value: 'CLM', label: 'DOMAIN' },
]
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px var(--s-xl) var(--s-4xl);
  position: relative;
  border-top: none;
}

.hero-inner {
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
}

/* Meta row */
.hero-meta {
  display: flex;
  align-items: center;
  gap: var(--s-md);
  margin-bottom: var(--s-xl);
  flex-wrap: wrap;
}

.meta-item {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--text-dis);
}

.meta-sep {
  color: var(--border-2);
  font-family: var(--font-mono);
}

.meta-status {
  display: flex;
  align-items: center;
  gap: var(--s-xs);
  color: var(--text-sec);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--red);
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* Hero name */
.hero-name {
  font-family: var(--font-display);
  font-size: clamp(72px, 14vw, 160px);
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.05em;
  line-height: 1.0;
  margin-bottom: var(--s-xs);
}

.hero-role {
  font-family: var(--font-mono);
  font-size: clamp(12px, 2vw, 16px);
  font-weight: 700;
  letter-spacing: 0.3em;
  color: var(--text-dis);
  margin-bottom: var(--s-2xl);
}

/* Description */
.hero-desc {
  font-size: 16px;
  color: var(--text-sec);
  line-height: 1.8;
  margin-bottom: var(--s-xl);
  max-width: 480px;
  border-left: 2px solid var(--red);
  padding-left: var(--s-md);
}

/* Chips */
.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-xs);
  margin-bottom: var(--s-xl);
}

.chip {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dis);
  border: 1px solid var(--border-2);
  padding: var(--s-2xs) var(--s-sm);
}

/* Actions */
.hero-actions {
  display: flex;
  gap: var(--s-md);
  flex-wrap: wrap;
  margin-bottom: var(--s-3xl);
  align-items: center;
}

.btn-primary {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--bg);
  background: var(--text);
  padding: var(--s-sm) var(--s-xl);
  text-decoration: none;
  transition: background var(--t-fast) var(--ease), color var(--t-fast) var(--ease);
  display: inline-block;
}

.btn-primary:hover {
  background: var(--red);
  color: var(--text);
}

.btn-ghost {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-dis);
  border: 1px solid var(--border-2);
  padding: var(--s-sm) var(--s-md);
  text-decoration: none;
  transition: color var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
  display: inline-flex;
  align-items: center;
  gap: var(--s-xs);
}

.btn-ghost:hover {
  color: var(--text);
  border-color: var(--text-dis);
}

/* Stats */
.hero-stats {
  display: flex;
  gap: var(--s-3xl);
  flex-wrap: wrap;
  padding-top: var(--s-xl);
  border-top: 1px solid var(--border);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: var(--s-xs);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.05em;
  line-height: 1;
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--text-dis);
}

/* Scroll indicator */
.scroll-ind {
  position: absolute;
  bottom: var(--s-xl);
  right: var(--s-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-xs);
}

.scroll-text {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.2em;
  color: var(--text-dis);
  writing-mode: vertical-lr;
}

.scroll-bar {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--text-dis), transparent);
  animation: scrollAnim 2s ease-in-out infinite;
}

@keyframes scrollAnim {
  0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
  49%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
  50%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
  100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
}

@media (max-width: 600px) {
  .hero { padding-top: 100px; }
  .hero-stats { gap: var(--s-2xl); }
  .scroll-ind { display: none; }
}
</style>
