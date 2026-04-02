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
      <p>© 2024 Teayu. Built with Vue 3 + TypeScript.</p>
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

main {
  flex: 1;
}

.footer {
  text-align: center;
  padding: 2rem;
  color: var(--text-dim);
  font-size: 0.875rem;
  border-top: 1px solid var(--border);
}
</style>
