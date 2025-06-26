<template>
  <section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="content-wrapper fade-in">
      <!-- Text Column -->
      <div class="text-content slide-up">
        <h1 class="heading fade-text">
          Hello, I'm <span class="name-static">Sama Ibrahim</span>
        </h1>

        <p class="typewriter-loop">Creative Frontend Developer</p>

        <!-- <p class="description">
          I craft stunning web interfaces with clean code, elegant animations, and seamless responsiveness.
          Let’s bring your ideas to life.
        </p> -->
        <p class="description">
          I craft stunning web interfaces with clean code, elegant animations, and seamless responsiveness.
          I also build dynamic, easy-to-manage websites using WordPress — giving clients full control and flexibility.
          Let’s bring your ideas to life.
        </p>
        <!-- <div class="cta-buttons">
          <a href="#contact" class="btn btn-primary">Hire Me</a>
          <a href="#work" class="btn btn-secondary">View Projects</a>
        </div> -->
        <!-- Social Icons -->
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/sama-ebrahim-7627851b7/" target="_blank" class="icon-link"><i
              class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/samaebrahim322" target="_blank" class="icon-link"><i class="fab fa-github"></i></a>
          <a href="https://www.behance.net/samaebrahimgoda278" target="_blank" class="icon-link"><i
              class="fab fa-behance"></i></a>
        </div>

        <!-- CV Button -->
        <div class="cv-button-wrapper">
          <a href="/Sama-Ebrahim-CV-.pdf" target="_blank" class="btn btn-tertiary">Show CV</a>
        </div>

      </div>
      <!-- Image Column -->
      <div class="image-content fade-in">
        <div class="circle-frame">
          <img src="../assets/Samabg.png" alt="Sama Ibrahim" class="hero-image" />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>


<style scoped>
.social-icons {
  display: flex;
  gap: 1rem;
  margin: 2rem 0 1rem;
  justify-content: center;
}

@media (min-width: 992px) {
  .social-icons {
    justify-content: flex-start;
  }
}

.icon-link {
  background-color: var(--white);
  color: var(--primary);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
}

.icon-link:hover {
  background-color: var(--primary);
  color: var(--white);
  transform: scale(1.05);
}

.cv-button-wrapper {
  margin-top: 1.5rem;
}

.btn-tertiary {
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 0.8rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-tertiary:hover {
  background-color: var(--primary);
  color: var(--white);
  transform: translateY(-2px);
}

.name-static {
  color: var(--primary);
  font-weight: 800;
  animation: fadeIn 1.2s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.typewriter-loop {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--primary);
  animation:
    typing-loop 4s steps(30, end) infinite,
    blink 0.8s step-end infinite;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: 0.5rem;
}

.hero-section {
  position: relative;
  background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
  padding: 6rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem;
  z-index: 1;
  align-items: center;
}

@media (min-width: 992px) {
  .content-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
}

.text-content {
  max-width: 600px;
  text-align: center;
}

@media (min-width: 992px) {
  .text-content {
    text-align: left;
  }
}

.heading {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--text);
  line-height: 1.2;
}

.description {
  font-size: 1.1rem;
  color: var(--muted);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 992px) {
  .cta-buttons {
    justify-content: flex-start;
  }
}

.btn {
  padding: 0.8rem 1.8rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--white);
  box-shadow: var(--shadow-btn);
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-btn-hover);
}

.btn-secondary {
  border: 2px solid var(--border-color);
  color: var(--border-color);
  background-color: transparent;
}

.btn-secondary:hover {
  background-color: rgba(107, 33, 168, 0.08);
  color: var(--text);
  border-color: var(--border-hover);
}

.image-content {
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.circle-frame {
  background: linear-gradient(135deg, var(--bg-gradient-end), var(--bg-gradient-start));
  padding: 6px;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.circle-frame:hover {
  transform: scale(1.05);
}

.hero-image {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  display: block;
}

.fade-in {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

.slide-up {
  animation: slideUp 1.2s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes typing-loop {
  0% {
    width: 0;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
