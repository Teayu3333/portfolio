<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="brand-name">刻耳きざみ</span>
        <span class="brand-tag">狼娘VTuber</span>
      </div>
      <div class="footer-links">
        <a href="https://www.youtube.com/@Kizamimimimi" target="_blank" rel="noopener" class="flink">YouTube</a>
        <a href="https://x.com/Kizamimimimi"           target="_blank" rel="noopener" class="flink">X</a>
        <a href="https://www.twitch.tv/Kizamimimimi"   target="_blank" rel="noopener" class="flink">Twitch</a>
      </div>
      <p class="footer-copy">© 2024 刻耳きざみ All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 2rem 1.5rem;
}
.footer-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.brand-name {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--orange);
}
.brand-tag {
  font-size: 0.75rem;
  color: var(--text-dim);
  font-weight: 700;
}
.footer-links {
  display: flex;
  gap: 1.5rem;
}
.flink {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-dim);
  transition: color var(--t);
}
.flink:hover { color: var(--orange); }
.footer-copy {
  font-size: 0.75rem;
  color: var(--text-dim);
}
</style>
