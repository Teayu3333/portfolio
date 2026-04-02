<template>
  <section id="gallery" class="section">
    <div class="container">
      <p class="sec-eyebrow" style="color: var(--red)">— FAN ART —</p>
      <h2 class="sec-title">ファンアートギャラリー</h2>
      <p class="sec-sub">
        ファンアートを描いてくれたらめちゃくちゃ喜ぶよ～！🐺💕<br />
        タグ <span class="tag-highlight">#刻耳きざみ</span> をつけてポストしてね！
      </p>

      <!-- Gallery grid (placeholder) -->
      <div class="gallery-grid">
        <div v-for="i in 6" :key="i" class="gallery-slot">
          <div class="slot-inner">
            <span class="slot-icon">🎨</span>
            <p class="slot-text">ファンアート<br />募集中！</p>
          </div>
        </div>
      </div>

      <!-- Submission CTA -->
      <div class="submit-cta card">
        <div class="cta-content">
          <h3 class="cta-title">ファンアート大募集！🐺</h3>
          <p class="cta-body">
            きざみの絵を描いてくれたらすごく喜ぶ！！<br />
            Xに <span style="color:var(--orange);font-weight:800">#刻耳きざみ</span> タグをつけてポストしてね。
            全部見てるよ～！💕
          </p>
        </div>
        <a href="https://x.com/Kizamimimimi" target="_blank" rel="noopener" class="cta-btn">
          Xに投稿する ↗
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sec-sub {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
  line-height: 1.8;
}

.tag-highlight {
  color: var(--orange);
  font-weight: 800;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.gallery-slot {
  aspect-ratio: 1;
  border: 2px dashed var(--border-2);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color var(--t), background var(--t);
  cursor: default;
}

.gallery-slot:hover {
  border-color: rgba(255,119,34,0.4);
  background: var(--orange-g);
}

.slot-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.slot-icon { font-size: 2.5rem; opacity: 0.4; }
.slot-text {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-align: center;
  font-weight: 700;
  line-height: 1.5;
}

/* CTA */
.submit-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  border-color: rgba(255,119,34,0.25);
  background: var(--orange-g);
}

.cta-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--orange);
  margin-bottom: 0.5rem;
}

.cta-body {
  font-size: 0.9rem;
  color: var(--text-sub);
  line-height: 1.8;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background: var(--orange);
  color: var(--bg);
  border-radius: 100px;
  font-weight: 800;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: all var(--t);
  box-shadow: 0 0 20px rgba(255,119,34,0.4);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(255,119,34,0.6);
}

@media (max-width: 560px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .submit-cta { flex-direction: column; align-items: flex-start; }
}
</style>
