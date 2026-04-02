<template>
  <div class="app">
    <NavBar />
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
    <footer class="footer">
      <div class="footer-inner">
        <span class="footer-name">TEAYU</span>
        <span class="footer-copy">© 2024 — BUILT WITH VUE 3 + TYPESCRIPT</span>
        <a href="https://github.com/Teayu3333" target="_blank" rel="noopener" class="footer-link">GITHUB ↗</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main { flex: 1; }

.footer {
  border-top: 1px solid var(--border);
  padding: var(--s-lg) var(--s-xl);
}

.footer-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--s-lg);
  flex-wrap: wrap;
}

.footer-name {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.1em;
}

.footer-copy {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--text-dis);
}

.footer-link {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-dis);
  text-decoration: none;
  transition: color var(--t-fast) var(--ease);
}

.footer-link:hover { color: var(--text); }
</style>
