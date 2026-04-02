<template>
  <section id="profile" class="section">
    <div class="container">
      <p class="sec-eyebrow" style="color: var(--orange)">— PROFILE —</p>
      <h2 class="sec-title">プロフィール</h2>

      <div class="profile-layout">
        <!-- Avatar placeholder -->
        <div class="avatar-wrap">
          <div class="avatar-frame">
            <div class="avatar-inner">
              <span class="avatar-emoji">🐺</span>
              <p class="avatar-name">刻耳きざみ</p>
              <p class="avatar-hint">イラスト準備中…</p>
            </div>
            <!-- Orbit decoration -->
            <div class="orbit orbit-1"></div>
            <div class="orbit orbit-2"></div>
          </div>
          <!-- Tags under avatar -->
          <div class="avatar-tags">
            <span class="chip" style="color:var(--orange);border-color:var(--orange);background:var(--orange-g)">狼娘</span>
            <span class="chip" style="color:var(--green);border-color:var(--green);background:var(--green-g)">触手生命体</span>
            <span class="chip" style="color:var(--red);border-color:var(--red);background:var(--red-g)">形態変化</span>
          </div>
        </div>

        <!-- Info -->
        <div class="profile-info">
          <div class="info-block">
            <h3 class="info-name glow-orange">刻耳きざみ</h3>
            <p class="info-read">（きざみ）</p>
          </div>

          <div class="data-table">
            <div v-for="row in rows" :key="row.key" class="data-row">
              <span class="data-key">{{ row.key }}</span>
              <span class="data-val" v-html="row.val"></span>
            </div>
          </div>

          <div class="pr-box">
            <p class="pr-text">
              わふわふ～！狼娘VTuberのきざみだよ～！<br />
              実は触手生命体なので姿は自由自在🐙<br />
              でもおっぱいとお尻を大きくするのが好きだから<br />
              だいたいその形でいるよ🐺✨<br />
              元気いっぱいに配信してるから気軽に遊びに来てね！！
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rows = [
  { key: '名前',     val: '刻耳きざみ' },
  { key: '種族',     val: '狼娘 <span style="color:var(--text-dim)">（実は触手生命体）</span>' },
  { key: '特技',     val: '形態自由変化・元気を届けること' },
  { key: '好き',     val: 'ゲーム・雑談・みんなと遊ぶこと 🎮' },
  { key: '活動',     val: 'YouTube / Twitch / X' },
  { key: 'ハッシュタグ', val: '<span style="color:var(--orange)">#刻耳きざみ</span>' },
]
</script>

<style scoped>
.profile-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 3rem;
  align-items: start;
  margin-top: 2.5rem;
}

/* Avatar */
.avatar-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.avatar-frame {
  position: relative;
  width: 260px;
  height: 260px;
}

.avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-3);
  border: 2px solid var(--border-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.avatar-inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 40% 40%, var(--orange-g), transparent 60%),
              radial-gradient(circle at 70% 70%, var(--green-g), transparent 60%);
}

.avatar-emoji { font-size: 4rem; position: relative; }
.avatar-name {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text);
  position: relative;
}
.avatar-hint { font-size: 0.7rem; color: var(--text-dim); position: relative; }

/* Orbit rings */
.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.orbit-1 {
  width: 290px; height: 290px;
  border-color: rgba(255,119,34,0.2);
  animation: spin 20s linear infinite;
}
.orbit-2 {
  width: 320px; height: 320px;
  border-color: rgba(57,255,140,0.12);
  animation: spin 30s linear infinite reverse;
}
@keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

.avatar-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; }

/* Info */
.info-block { margin-bottom: 1.5rem; }
.info-name {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--orange);
  margin-bottom: 0.2rem;
}
.info-read { font-size: 0.85rem; color: var(--text-dim); }

/* Data table */
.data-table {
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.data-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid var(--border);
  font-size: 0.9rem;
  transition: background var(--t);
}
.data-row:last-child { border-bottom: none; }
.data-row:hover { background: var(--bg-card); }
.data-key {
  color: var(--text-dim);
  font-weight: 700;
  font-size: 0.82rem;
  white-space: nowrap;
}
.data-val { color: var(--text-sub); font-weight: 500; }

/* PR box */
.pr-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--orange);
  border-radius: 0 12px 12px 0;
  padding: 1.25rem 1.5rem;
}
.pr-text {
  font-size: 0.95rem;
  color: var(--text-sub);
  line-height: 2;
}

@media (max-width: 760px) {
  .profile-layout { grid-template-columns: 1fr; }
  .avatar-wrap { margin: 0 auto; }
}
</style>
