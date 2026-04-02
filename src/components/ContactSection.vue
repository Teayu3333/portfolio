<template>
  <section id="contact" class="section dot-bg">
    <div class="container">
      <div class="sec-header">
        <p class="sec-label">05 — CONTACT</p>
        <h2 class="sec-title">GET IN TOUCH</h2>
        <p class="sec-desc">// お仕事のご相談・採用のお問い合わせはこちらから</p>
      </div>

      <div class="contact-layout">
        <div class="contact-main">
          <p class="contact-lead">
            社内SE・コーポレートITポジションへの転職を検討中です。<br />
            フルスタック開発経験を活かせるポジションをお待ちしています。
          </p>

          <div class="contact-links">
            <a
              href="https://github.com/Teayu3333"
              target="_blank"
              rel="noopener"
              class="contact-link"
            >
              <div class="cl-left">
                <span class="cl-index">01</span>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </div>
              <div class="cl-body">
                <span class="cl-type">GITHUB</span>
                <span class="cl-value">github.com/Teayu3333</span>
              </div>
              <span class="cl-arrow">→</span>
            </a>
          </div>
        </div>

        <div class="contact-note">
          <div class="note-head">
            <span class="note-label">// NOTE</span>
          </div>
          <p class="note-body">
            採用担当者の方は GitHub プロフィールまたはこのポートフォリオを経由してご連絡ください。
            お気軽にお声がけいただけますと幸いです。
          </p>
          <div class="note-divider"></div>
          <div class="note-status">
            <span class="status-dot"></span>
            <span class="status-text">OPEN TO WORK — 2024</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sec-header {
  margin-bottom: var(--s-3xl);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--s-xl);
  align-items: start;
}

.contact-lead {
  font-size: 15px;
  color: var(--text-sec);
  line-height: 1.9;
  margin-bottom: var(--s-xl);
  border-left: 2px solid var(--red);
  padding-left: var(--s-md);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: var(--s-sm);
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--s-lg);
  border: 1px solid var(--border);
  padding: var(--s-lg);
  text-decoration: none;
  transition: border-color var(--t-fast) var(--ease), background var(--t-fast) var(--ease);
}

.contact-link:hover {
  border-color: var(--text-dis);
  background: var(--bg-2);
}

.cl-left {
  display: flex;
  align-items: center;
  gap: var(--s-sm);
  color: var(--text-sec);
}

.cl-index {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-dis);
}

.cl-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.cl-type {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-dis);
}

.cl-value {
  font-size: 14px;
  color: var(--text-body);
}

.cl-arrow {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-dis);
  transition: color var(--t-fast) var(--ease), transform var(--t-fast) var(--ease);
  display: inline-block;
}

.contact-link:hover .cl-arrow {
  color: var(--text);
  transform: translateX(4px);
}

/* Note card */
.contact-note {
  border: 1px solid var(--border);
  padding: var(--s-lg);
}

.note-head {
  margin-bottom: var(--s-md);
}

.note-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--text-dis);
}

.note-body {
  font-size: 13px;
  color: var(--text-sec);
  line-height: 1.8;
}

.note-divider {
  height: 1px;
  background: var(--border);
  margin: var(--s-lg) 0;
}

.note-status {
  display: flex;
  align-items: center;
  gap: var(--s-sm);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--red);
  flex-shrink: 0;
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.status-text {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-sec);
}

@media (max-width: 860px) {
  .contact-layout { grid-template-columns: 1fr; }
}
</style>
