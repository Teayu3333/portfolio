<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Contact</p>
        <h2 class="section-title">お問い合わせ</h2>
        <p class="section-desc">お仕事のご相談・採用のお問い合わせはGitHubからどうぞ。</p>
      </div>
      <div class="contact-card">
        <div class="contact-links">
          <a
            href="https://github.com/Teayu3333"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            <div class="contact-link-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </div>
            <div class="contact-link-text">
              <span class="contact-link-label">GitHub</span>
              <span class="contact-link-value">github.com/Teayu3333</span>
            </div>
            <span class="contact-link-arrow">→</span>
          </a>
        </div>
        <div class="contact-note">
          <p>※ 採用担当者の方は GitHubプロフィール または このポートフォリオを経由してご連絡ください。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  max-width: 600px;
  margin: 0 auto;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  transition: all var(--transition);
}

.contact-link:hover {
  border-color: rgba(79, 142, 247, 0.4);
  background: var(--bg-3);
  opacity: 1;
  transform: translateX(4px);
}

.contact-link-icon {
  width: 52px;
  height: 52px;
  background: var(--accent-dim);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.contact-link-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
}

.contact-link-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-link-value {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
}

.contact-link-arrow {
  color: var(--accent);
  font-size: 1.25rem;
  transition: transform var(--transition);
}

.contact-link:hover .contact-link-arrow {
  transform: translateX(4px);
}

.contact-note {
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.contact-note p {
  font-size: 0.85rem;
  color: var(--text-dim);
  line-height: 1.7;
}
</style>
