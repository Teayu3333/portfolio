<template>
  <section id="schedule" class="section" style="background: var(--bg-2)">
    <div class="container">
      <p class="sec-eyebrow" style="color: var(--green)">— SCHEDULE —</p>
      <h2 class="sec-title">配信スケジュール</h2>
      <p class="sec-sub">最新スケジュールはXをチェック！🐺</p>

      <div class="week-grid">
        <div v-for="day in days" :key="day.name" class="day-card"
             :class="{ today: day.isToday, hasStream: day.streams.length > 0 }">
          <div class="day-head">
            <span class="day-name">{{ day.name }}</span>
            <span class="day-en">{{ day.en }}</span>
            <span v-if="day.isToday" class="today-badge">TODAY</span>
          </div>
          <div class="stream-list">
            <div v-for="s in day.streams" :key="s.time" class="stream-item">
              <span class="stream-time">{{ s.time }}</span>
              <span class="stream-title">{{ s.title }}</span>
            </div>
            <div v-if="day.streams.length === 0" class="stream-empty">—</div>
          </div>
        </div>
      </div>

      <div class="schedule-note card">
        <span class="note-icon">📢</span>
        <div>
          <p class="note-main">スケジュールは変更になることがあるよ！</p>
          <p class="note-sub">
            最新情報は
            <a href="https://x.com/Kizamimimimi" target="_blank" rel="noopener"
               class="note-link">@Kizamimimimi</a>
            をチェックしてね🐺
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const todayIdx = new Date().getDay() // 0=Sun

interface Stream { time: string; title: string }
interface Day { name: string; en: string; isToday: boolean; streams: Stream[] }

const rawDays: { name: string; en: string; streams: Stream[] }[] = [
  { name: '日', en: 'SUN', streams: [] },
  { name: '月', en: 'MON', streams: [] },
  { name: '火', en: 'TUE', streams: [{ time: '21:00', title: '雑談配信🐺' }] },
  { name: '水', en: 'WED', streams: [] },
  { name: '木', en: 'THU', streams: [{ time: '21:00', title: 'ゲーム配信🎮' }] },
  { name: '金', en: 'FRI', streams: [{ time: '21:00', title: 'ゲーム配信🎮' }] },
  { name: '土', en: 'SAT', streams: [{ time: '20:00', title: '特別配信✨' }] },
]

const days = computed<Day[]>(() =>
  rawDays.map((d, i) => ({ ...d, isToday: i === todayIdx }))
)
</script>

<style scoped>
.sec-sub {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

.week-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.day-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.875rem 0.6rem;
  transition: border-color var(--t), background var(--t);
  min-height: 100px;
}

.day-card.hasStream {
  border-color: rgba(57,255,140,0.25);
  background: rgba(57,255,140,0.04);
}

.day-card.today {
  border-color: var(--orange);
  background: var(--orange-g);
}

.day-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  margin-bottom: 0.6rem;
  position: relative;
}

.day-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
}

.day-en {
  font-family: var(--font-en);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: var(--text-dim);
}

.today-badge {
  position: absolute;
  top: -6px; right: -4px;
  font-family: var(--font-en);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  background: var(--orange);
  color: var(--bg);
  padding: 1px 4px;
  border-radius: 4px;
}

.stream-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.stream-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stream-time {
  font-family: var(--font-en);
  font-size: 0.65rem;
  color: var(--green);
  font-weight: 700;
}

.stream-title {
  font-size: 0.72rem;
  color: var(--text-sub);
  line-height: 1.3;
}

.stream-empty {
  text-align: center;
  color: var(--text-dim);
  font-size: 0.8rem;
}

/* Note */
.schedule-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.note-icon { font-size: 1.5rem; flex-shrink: 0; }
.note-main { font-weight: 700; color: var(--text); font-size: 0.9rem; margin-bottom: 0.25rem; }
.note-sub  { font-size: 0.85rem; color: var(--text-dim); }
.note-link {
  color: var(--orange);
  font-weight: 700;
  transition: opacity var(--t);
}
.note-link:hover { opacity: 0.75; }

@media (max-width: 680px) {
  .week-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 420px) {
  .week-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
