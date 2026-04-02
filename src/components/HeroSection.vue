<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="hero-orb orb1"></div>
      <div class="hero-orb orb2"></div>
    </div>
    <div class="hero-content">
      <p class="hero-eyebrow">Software Engineer</p>
      <h1 class="hero-title">
        Hello, I'm <span class="accent">Teayu</span>
      </h1>
      <p class="hero-subtitle">
        フルスタックエンジニア / 社内SE志望<br />
        Java・Vue.js・AWS で、設計から実装・運用まで一気通貫で動けます。
      </p>
      <div class="hero-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">プロジェクトを見る</a>
        <a href="#contact" class="btn btn-ghost">Contact</a>
      </div>
      <div class="hero-social">
        <a href="https://github.com/Teayu3333" target="_blank" rel="noopener" class="social-link">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
    <div class="hero-scroll-hint">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = ['Java', 'Vue.js', 'TypeScript', 'Spring Boot', 'AWS', 'CI/CD']
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 8rem 2rem 4rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.orb1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #4f8ef7 0%, transparent 70%);
  top: -200px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.orb2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -30px); }
}

.hero-content {
  position: relative;
  max-width: 700px;
  text-align: center;
  animation: fadeUp 0.8s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-eyebrow {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.accent {
  color: var(--accent);
  position: relative;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-dim);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.tag {
  padding: 0.3rem 0.85rem;
  background: var(--accent-dim);
  border: 1px solid rgba(79, 142, 247, 0.25);
  border-radius: 100px;
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition);
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 0 30px var(--accent-glow);
}

.btn-primary:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 0 40px var(--accent-glow);
}

.btn-ghost {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-ghost:hover {
  opacity: 1;
  border-color: rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.05);
  transform: translateY(-2px);
}

.hero-social {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-dim);
  font-size: 0.9rem;
  transition: color var(--transition);
}

.social-link:hover {
  color: var(--text);
  opacity: 1;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dim);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeUp 1s 0.5s ease both;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--text-dim), transparent);
  animation: scrollDown 1.5s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}
</style>
