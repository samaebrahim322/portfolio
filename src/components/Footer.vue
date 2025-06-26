<template>
  <footer class="site-footer">
    <div class="container footer-content">
      <p class="footer-name">Sama Ibrahim</p>

      <div class="footer-socials">
        <a href="https://github.com/samaebrahim322" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sama-ebrahim-7627851b7/" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:samagoda322@gmail.com" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>

      <p class="footer-copy">&copy; 2025 Sama Ibrahim. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
    export default {
        name:"FooterApp"
    }
</script>

<style scoped>
.site-footer {
  background-color: var(--light);
  padding: 2rem 1rem;
  text-align: center;
  color: var(--text);
  border-top: 1px solid #eee;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.footer-socials a {
  color: var(--text);
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.footer-socials a:hover {
  color: var(--primary-hover);
}

.footer-copy {
  font-size: 0.9rem;
  color: var(--muted);
}
</style>