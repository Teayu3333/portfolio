<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">
        <span class="logo-jp">刻耳</span><span class="logo-kana">きざみ</span>
      </a>
      <nav class="nav-links">
        <a v-for="item in links" :key="item.id" :href="`#${item.id}`" class="nav-link">
          {{ item.label }}
        </a>
      </nav>
      <button class="nav-toggle" @click="open = !open" :aria-expanded="open">
        <span class="bar" :class="{ open }"></span>
        <span class="bar" :class="{ open }"></span>
        <span class="bar" :class="{ open }"></span>
      </button>
    </div>
    <div class="nav-drawer" :class="{ open }">
      <a v-for="item in links" :key="item.id" :href="`#${item.id}`"
         class="drawer-link" @click="open = false">{{ item.label }}</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const open = ref(false)

const links = [
  { id: 'profile',  label: 'プロフィール' },
  { id: 'schedule', label: 'スケジュール' },
  { id: 'gallery',  label: 'ギャラリー' },
  { id: 'links',    label: 'リンク' },
]

function onScroll() { isScrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background var(--t), border-color var(--t);
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(6,0,8,0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--border);
}
.nav-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.2rem;
  display: flex;
  align-items: baseline;
  gap: 2px;
}
.logo-jp  { color: var(--orange); }
.logo-kana { color: var(--text); font-size: 0.85rem; }

.nav-links { display: flex; gap: 2rem; }
.nav-link {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-dim);
  transition: color var(--t);
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 0;
  height: 2px;
  background: var(--orange);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t);
}
.nav-link:hover { color: var(--text); }
.nav-link:hover::after { transform: scaleX(1); }

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.bar {
  display: block;
  width: 22px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform var(--t), opacity var(--t);
}

.nav-drawer {
  display: none;
  flex-direction: column;
  background: rgba(6,0,8,0.97);
  border-top: 1px solid var(--border);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}
.nav-drawer.open { max-height: 300px; }
.drawer-link {
  padding: 1rem 1.5rem;
  font-weight: 700;
  color: var(--text-dim);
  border-bottom: 1px solid var(--border);
  transition: color var(--t), background var(--t);
}
.drawer-link:hover { color: var(--orange); background: var(--orange-g); }

@media (max-width: 680px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  .nav-drawer { display: flex; }
}
</style>
