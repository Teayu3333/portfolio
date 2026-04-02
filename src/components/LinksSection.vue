<template>
  <section id="links" class="section" style="background: var(--bg-2)">
    <div class="container">
      <p class="sec-eyebrow" style="color: var(--green)">— LINKS —</p>
      <h2 class="sec-title">リンク集</h2>
      <p class="sec-sub">きざみを見つけられるところ全部！🐺</p>

      <div class="links-grid">
        <a v-for="link in links" :key="link.label"
           :href="link.url" target="_blank" rel="noopener"
           class="link-card" :style="`--c: ${link.color}`">
          <div class="link-icon-wrap">
            <span class="link-icon" v-html="link.icon"></span>
          </div>
          <div class="link-body">
            <span class="link-platform">{{ link.platform }}</span>
            <span class="link-label">{{ link.label }}</span>
          </div>
          <span class="link-arrow">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Link {
  platform: string
  label: string
  url: string
  color: string
  icon: string
}

const links: Link[] = [
  {
    platform: 'YouTube',
    label: '@Kizamimimimi',
    url: 'https://www.youtube.com/@Kizamimimimi',
    color: '#ff2244',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.2 0 7-.2c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9.2l5.5 2.7-5.5 2.6z"/>
    </svg>`,
  },
  {
    platform: 'X / Twitter',
    label: '@Kizamimimimi',
    url: 'https://x.com/Kizamimimimi',
    color: '#ffffff',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>`,
  },
  {
    platform: 'Twitch',
    label: 'Kizamimimimi',
    url: 'https://www.twitch.tv/Kizamimimimi',
    color: '#9147ff',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
    </svg>`,
  },
]
</script>

<style scoped>
.sec-sub {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin-bottom: 2.5rem;
  font-weight: 700;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  max-width: 900px;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: all var(--t);
  position: relative;
  overflow: hidden;
}

.link-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, color-mix(in srgb, var(--c) 12%, transparent), transparent 70%);
  opacity: 0;
  transition: opacity var(--t);
}

.link-card:hover {
  border-color: color-mix(in srgb, var(--c) 50%, transparent);
  transform: translateY(-3px);
  box-shadow: 0 8px 32px color-mix(in srgb, var(--c) 15%, transparent);
}

.link-card:hover::before { opacity: 1; }

.link-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--c) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--c) 25%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.link-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  position: relative;
  z-index: 1;
}

.link-platform {
  font-family: var(--font-en);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-dim);
}

.link-label {
  font-size: 1rem;
  font-weight: 800;
  color: var(--text);
}

.link-arrow {
  font-size: 1.1rem;
  color: var(--text-dim);
  transition: color var(--t), transform var(--t);
  position: relative;
  z-index: 1;
}

.link-card:hover .link-arrow {
  color: var(--c);
  transform: translate(3px, -3px);
}
</style>
