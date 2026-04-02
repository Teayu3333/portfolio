<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">TEAYU</a>
      <nav class="nav-links">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" class="nav-link">
          [ {{ item.label }} ]
        </a>
      </nav>
      <button class="nav-toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="menu">
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
    <div class="nav-mobile" :class="{ open: menuOpen }">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="nav-mobile-link"
        @click="menuOpen = false"
      >[ {{ item.label }} ]</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { id: 'skills',     label: 'SKILLS' },
  { id: 'experience', label: 'EXP' },
  { id: 'projects',   label: 'WORK' },
  { id: 'about',      label: 'ABOUT' },
  { id: 'contact',    label: 'CONTACT' },
]

function onScroll() { isScrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background var(--t-base) var(--ease), border-color var(--t-base) var(--ease);
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: rgba(0,0,0,0.95);
  border-bottom-color: var(--border);
}

.nav-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: var(--s-md) var(--s-xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  color: var(--text);
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: color var(--t-fast) var(--ease);
}

.nav-logo:hover { color: var(--red); }

.nav-links {
  display: flex;
  gap: var(--s-xl);
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-dis);
  text-decoration: none;
  transition: color var(--t-fast) var(--ease);
}

.nav-link:hover { color: var(--text); }

.nav-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border-2);
  color: var(--text-sec);
  font-family: var(--font-mono);
  font-size: 11px;
  padding: var(--s-xs) var(--s-sm);
  cursor: pointer;
  letter-spacing: 0.05em;
}

.nav-toggle span::before { content: '≡ MENU'; }
.nav-toggle span.open::before { content: '✕ CLOSE'; }

.nav-mobile {
  display: none;
  flex-direction: column;
  background: var(--bg-2);
  border-bottom: 1px solid var(--border);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s var(--ease);
}

.nav-mobile.open { max-height: 300px; }

.nav-mobile-link {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-dis);
  text-decoration: none;
  padding: var(--s-md) var(--s-xl);
  border-bottom: 1px solid var(--border);
  transition: color var(--t-fast) var(--ease), background var(--t-fast) var(--ease);
}

.nav-mobile-link:hover {
  color: var(--text);
  background: var(--bg-3);
}

@media (max-width: 720px) {
  .nav-links { display: none; }
  .nav-toggle { display: block; }
  .nav-mobile { display: flex; }
}
</style>
