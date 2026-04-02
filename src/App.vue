<template>
  <div class="app">
    <NavBar />
    <main>
      <HeroSection />
      <ProfileSection />
      <ScheduleSection />
      <GallerySection />
      <LinksSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import ScheduleSection from './components/ScheduleSection.vue'
import GallerySection from './components/GallerySection.vue'
import LinksSection from './components/LinksSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main { flex: 1; }
</style>
