<template>
  <section id="hero" class="hero">
    <!-- Animated bg blobs -->
    <div class="bg-blobs" aria-hidden="true">
      <div class="blob blob-orange"></div>
      <div class="blob blob-green"></div>
      <div class="blob blob-red"></div>
    </div>

    <!-- Tentacle SVG decorations -->
    <svg class="tentacle t-left" viewBox="0 0 120 600" preserveAspectRatio="none" aria-hidden="true">
      <path d="M60,0 C20,80 100,160 40,240 C-20,320 90,400 50,480 C20,540 60,600 60,600"
            stroke="rgba(255,119,34,0.25)" stroke-width="2" fill="none" stroke-dasharray="8 6"/>
      <path d="M80,0 C30,100 110,180 50,270 C0,350 80,430 40,520 C20,560 70,600 70,600"
            stroke="rgba(57,255,140,0.15)" stroke-width="1.5" fill="none" stroke-dasharray="4 8"/>
    </svg>
    <svg class="tentacle t-right" viewBox="0 0 120 600" preserveAspectRatio="none" aria-hidden="true">
      <path d="M60,0 C100,80 20,160 80,240 C140,320 30,400 70,480 C100,540 60,600 60,600"
            stroke="rgba(255,34,68,0.2)" stroke-width="2" fill="none" stroke-dasharray="8 6"/>
      <path d="M40,0 C90,100 10,180 70,270 C120,350 40,430 80,520 C100,560 50,600 50,600"
            stroke="rgba(255,119,34,0.15)" stroke-width="1.5" fill="none" stroke-dasharray="4 8"/>
    </svg>

    <div class="hero-inner">
      <!-- Tag -->
      <div class="hero-tag">
        <span class="tag-dot"></span>
        <span>狼娘VTuber</span>
        <span class="tag-sep">•</span>
        <span>Wolf Girl</span>
        <span class="tag-sep">•</span>
        <span>触手生命体</span>
      </div>

      <!-- Main title -->
      <h1 class="hero-title">
        <span class="title-sub glow-orange">刻耳</span>
        <span class="title-main">きざみ</span>
      </h1>

      <!-- Catchphrase -->
      <p class="hero-catch">
        わふー！元気いっぱい配信中だよ～！<span class="catch-em">🐺</span>
      </p>

      <!-- Stats row -->
      <div class="hero-stats">
        <div v-for="s in stats" :key="s.label" class="hstat">
          <span class="hstat-icon">{{ s.icon }}</span>
          <span class="hstat-label">{{ s.label }}</span>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="hero-btns">
        <a href="https://www.youtube.com/@Kizamimimimi" target="_blank" rel="noopener"
           class="btn btn-yt">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.2 0 7-.2c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9.2l5.5 2.7-5.5 2.6z"/>
          </svg>
          YouTube
        </a>
        <a href="https://x.com/Kizamimimimi" target="_blank" rel="noopener"
           class="btn btn-x">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
          </svg>
          X / Twitter
        </a>
        <a href="#profile" class="btn btn-ghost">もっと見る ↓</a>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="scroll-hint">
      <div class="scroll-line"></div>
      <span>SCROLL</span>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { icon: '🐺', label: '狼娘' },
  { icon: '🐙', label: '触手生命体' },
  { icon: '🎮', label: 'ゲーム配信' },
  { icon: '✨', label: '形態変化自由' },
]
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 7rem 1.5rem 4rem;
}

/* Blobs */
.bg-blobs { position: absolute; inset: 0; pointer-events: none; }
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
}
.blob-orange {
  width: 500px; height: 500px;
  background: var(--orange);
  top: -100px; left: -100px;
  animation: blobMove 12s ease-in-out infinite;
}
.blob-green {
  width: 400px; height: 400px;
  background: var(--green);
  bottom: -80px; right: -80px;
  animation: blobMove 15s ease-in-out infinite reverse;
}
.blob-red {
  width: 300px; height: 300px;
  background: var(--red);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: blobMove 10s ease-in-out infinite 3s;
}
@keyframes blobMove {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(40px, -30px) scale(1.05); }
  66%       { transform: translate(-20px, 30px) scale(0.95); }
}

/* Tentacle decorations */
.tentacle {
  position: absolute;
  top: 0; bottom: 0;
  width: 120px;
  pointer-events: none;
  opacity: 0.6;
}
.t-left  { left: 0; }
.t-right { right: 0; }

/* Inner */
.hero-inner {
  position: relative;
  text-align: center;
  max-width: 700px;
  animation: fadeUp 0.8s ease both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Tag */
.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  border: 1px solid rgba(255,119,34,0.4);
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-sub);
  background: rgba(255,119,34,0.08);
  margin-bottom: 1.75rem;
}
.tag-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  animation: pulse 2s ease infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
.tag-sep { color: var(--text-dim); }

/* Title */
.hero-title {
  line-height: 1.1;
  margin-bottom: 1.25rem;
}
.title-sub {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 10vw, 6rem);
  color: var(--orange);
  letter-spacing: 0.05em;
}
.title-main {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(3rem, 14vw, 9rem);
  color: var(--text);
  letter-spacing: 0.02em;
  text-shadow: 0 0 60px rgba(255,255,255,0.15);
}

/* Catch */
.hero-catch {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: var(--text-sub);
  margin-bottom: 2rem;
  font-weight: 700;
}
.catch-em { font-size: 1.4em; }

/* Stats */
.hero-stats {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.hstat {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  background: var(--bg-card);
  color: var(--text-sub);
  backdrop-filter: blur(6px);
}
.hstat-icon { font-size: 1rem; }

/* Buttons */
.hero-btns {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 100px;
  font-weight: 800;
  font-size: 0.9rem;
  font-family: var(--font-body);
  transition: all var(--t);
  cursor: pointer;
  border: none;
}
.btn-yt {
  background: var(--red);
  color: #fff;
  box-shadow: 0 0 24px rgba(255,34,68,0.5);
}
.btn-yt:hover { transform: translateY(-2px); box-shadow: 0 0 36px rgba(255,34,68,0.7); }

.btn-x {
  background: #111;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
}
.btn-x:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.3); }

.btn-ghost {
  background: transparent;
  color: var(--text-sub);
  border: 1px solid var(--border-2);
}
.btn-ghost:hover { color: var(--text); border-color: var(--orange); transform: translateY(-2px); }

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-dim);
  font-size: 0.65rem;
  font-family: var(--font-en);
  letter-spacing: 0.2em;
}
.scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, var(--orange), transparent);
  animation: scrollDrop 1.5s ease infinite;
}
@keyframes scrollDrop {
  0%   { transform: scaleY(0); transform-origin: top; }
  49%  { transform: scaleY(1); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 480px) {
  .tentacle { display: none; }
  .title-main { font-size: clamp(2.5rem, 18vw, 6rem); }
}
</style>
