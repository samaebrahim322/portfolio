<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="contact-header">
        <h2>Let's Work Together</h2>
        <p>Got a project or just want to say hello? I’d love to hear from you!</p>
      </div>

      <div class="contact-content">
      <!-- Info Panel -->
        <div class="contact-details">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:samagoda322@gmail.com">samagoda322@gmail.com</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <a href="tel:+201128590822">+02 112 859 0822</a>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Cairo, Egypt</span>
          </div>
        </div>
              <!-- Form Panel -->
        <form class="contact-form" @submit.prevent>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
.contact-section {
  padding: 6rem 2rem;
  background-color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 1rem;
}

.contact-header p {
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.6;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 768px) {
  .contact-content {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
}

.contact-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  color: var(--text);
}

.contact-item i {
  color: var(--primary);
  font-size: 1.2rem;
}

.contact-item a {
  color: var(--text);
  text-decoration: none;
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;
}

.contact-form button {
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: var(--primary-hover);
}
</style>
