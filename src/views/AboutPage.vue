<template>
  <section class="about-section" id="about">
    <div class="about-overlay"></div>
    <div class="about-content fade-in">
      <h2 class="about-title">About Me</h2>

      <div class="about-grid">
        <!-- Skills Section -->
        <div class="about-card slide-up">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4F46E5">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
            </svg>
          </div>
          <h3>My Skills</h3>
          <div class="skills-container">
            <div class="skill-item"><i class="fab fa-html5 skill-icon html"></i></div>
            <div class="skill-item"><i class="fab fa-css3-alt skill-icon css"></i></div>
            <div class="skill-item"><i class="fab fa-js-square skill-icon js"></i></div>
            <div class="skill-item"><i class="fab fa-node-js skill-icon nodejs"></i></div>
            <div class="skill-item"><i class="fas fa-code skill-icon code"></i></div>
            <div class="skill-item"><i class="fab fa-bootstrap skill-icon bootstrap"></i></div>
            <div class="skill-item"><i class="fas fa-wind skill-icon wind"></i></div>
            <div class="skill-item"><i class="fas fa-mobile-alt skill-icon mobile"></i></div>
            <div class="skill-item"><i class="fab fa-react skill-icon react"></i></div>
            <div class="skill-item"><i class="fab fa-vuejs skill-icon vue"></i></div>
            <div class="skill-item"><i class="fab fa-angular skill-icon angular"></i></div>
            <div class="skill-item"><i class="fab fa-node-js skill-icon nodejs"></i></div>
            <div class="skill-item"><i class="fas fa-database skill-icon database"></i></div>
            <div class="skill-item"><i class="fas fa-code-branch skill-icon git"></i></div>
            <div class="skill-item"><i class="fab fa-github skill-icon github"></i></div>
            <div class="skill-item"><i class="fab fa-docker skill-icon docker"></i></div>
            <div class="skill-item"><i class="fas fa-envelope-open-text skill-icon email"></i></div>
          </div>
        </div>

        <!-- Experience Section -->
        <div class="about-card slide-up">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10B981">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
            </svg>
          </div>
          <h3>Experience</h3>
          <p>
            Junior Front-End Developer with hands-on experience in building responsive web applications. Focused on
            writing clean, maintainable code with strong cross-device compatibility and performance.
          </p>
          <p>
            Comfortable working in Agile teams, solving real-world problems, and continuously learning new technologies.
          </p>
        </div>

        <!-- Education Section -->
        <div class="about-card slide-up">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          <h3>Education</h3>
          <div class="education-item">
            <span class="edu-icon">🎓</span>
            <div>
              <strong>Bachelor's in Computer Science</strong>
              <p>Faculty of Computers and Information, Menoufia University</p>
            </div>
          </div>
          <div class="education-item">
            <span class="edu-icon">🏛️</span>
            <div>
              <strong>UI/UX Development Program</strong>
              <p>Information Technology Institute (ITI), Cairo University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage"
}
</script>

<style scoped>
.about-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  align-items: stretch;
}

.about-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 800px;
  margin: 0 auto;
}

.skill-item {
  font-size: 2rem;
  padding: 10px;
}


@media (max-width: 600px) {
  .skills-container {
    gap: 10px;
  }

  .skill-item {
    font-size: 1.5rem;
    padding: 8px;
  }
}

/* .skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 1rem;
} */

.skill-item {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(79, 70, 229, 0.05);
  border-radius: 8px;
  transition: all 0.4s ease;
}

.skill-item:hover {
  transform: scale(1.1);
  background: #f0f0ff;
}

.skill-icon {
  font-size: 1.5rem;
}

.skill-icon.html {
  color: #e44d26;
}

.skill-icon.css {
  color: #264de4;
}

.skill-icon.js {
  color: #f7df1e;
}

.skill-icon.bootstrap {
  color: #563d7c;
}

.skill-icon.react {
  color: #61dafb;
}

.skill-icon.vue {
  color: #42b883;
}

.skill-icon.angular {
  color: #dd0031;
}

.skill-icon.nodejs {
  color: #3c873a;
}

.skill-icon.database {
  color: #4db33d;
}

.skill-icon.code {
  color: #2c3e50;
}

.skill-icon.git {
  color: #f1502f;
}

.skill-icon.github {
  color: #000000;
}

.skill-icon.docker {
  color: #0db7ed;
}

.skill-icon.email {
  color: #ea4335;
}

.skill-icon.mobile {
  color: #ff6f00;
}

.skill-icon.wind {
  color: #38bdf8;
}

.card-icon {
  width: 60px;
  height: 60px;
  background: rgba(79, 70, 229, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.card-icon svg {
  width: 30px;
  height: 30px;
}

.about-section {
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-content {
  max-width: 1200px;
  width: 100%;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  text-align: center;
  color: var(--primary);
}

.about-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

.education-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
  text-align: center;
}

.edu-icon {
  font-size: 1.5rem;
  margin-top: 0.3rem;
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

@media (max-width: 768px) {
  .about-grid {
    flex-direction: column;
  }
}
</style>
