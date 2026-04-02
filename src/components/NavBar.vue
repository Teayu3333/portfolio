<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">Teayu</a>
      <nav class="nav-links">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`">
          {{ item.label }}
        </a>
      </nav>
      <button class="nav-toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile" :class="{ open: menuOpen }">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        @click="menuOpen = false"
      >{{ item.label }}</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { id: 'skills', label: 'スキル' },
  { id: 'experience', label: '経歴' },
  { id: 'projects', label: 'プロジェクト' },
  { id: 'about', label: '自己PR' },
  { id: 'contact', label: 'Contact' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background var(--transition), border-color var(--transition);
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: rgba(13, 15, 20, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: var(--border);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--text);
  letter-spacing: -0.02em;
}

.nav-logo:hover {
  opacity: 1;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-dim);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition);
}

.nav-links a:hover {
  color: var(--text);
  opacity: 1;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 0;
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.nav-mobile.open {
  max-height: 300px;
}

.nav-mobile a {
  padding: 1rem 2rem;
  color: var(--text-dim);
  border-bottom: 1px solid var(--border);
  font-size: 0.95rem;
}

.nav-mobile a:hover {
  color: var(--text);
  opacity: 1;
}

@media (max-width: 700px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  .nav-mobile { display: flex; }
}
</style>
