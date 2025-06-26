<template>
    <section class="projects-section" id="projects">
        <div class="about-overlay"></div>
        <div class="container">
            <div class="projects-wrapper fade-in">
                <h2 class="section-title">My Projects</h2>
                <p class="projects-intro">
                    A selection of my favorite work — from responsive websites and UI/UX design to WordPress development
                    and custom dashboards.
                </p>

                <div class="projects-grid">
                    <div class="project-card" v-for="(project, index) in projects" :key="index">
                        <img :src="project.image" :alt="project.title" class="project-image" />
                        <div class="project-overlay">
                            <h3 class="project-title">{{ project.title }}</h3>
                            <p class="project-description">{{ project.description }}</p>
                            <div class="project-links">
                                <a v-if="project.github" :href="project.github" target="_blank">GitHub</a>
                                <a v-if="project.live" :href="project.live" target="_blank">Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ProjectsPage",
    data() {
        return {
            projects: [
                {
                    title: "Wethaq Website & Dashboard",
                    description:
                        "Developed a fully responsive Arabic marriage website and admin dashboard for a Saudi non-profit using HTML, CSS, JavaScript, and Bootstrap. Supports RTL layout and delivers a seamless user experience.",
                    image: require("@/assets/pone.jpg"),
                    github: "https://github.com/samaibrahim/wethaq",
                    live: "https://wethaq.sa"
                },
                {
                    title: "VetraMax UI/UX Design",
                    description:
                        "Designed intuitive UI/UX for VetraMax — a pet product platform for wholesalers, retailers, and farmers. Delivered smooth user journeys through user research, wireframes, and prototypes using Figma & Adobe XD.",
                    image: require("@/assets/ptwo.jpg"),
                    github: "",
                    live: ""
                },
                {
                    title: "Soma Cosmetics - WordPress Store",
                    description:
                        "Built a responsive WordPress store for selling hair, skin, and perfume products using WooCommerce. Focused on clean design, mobile-friendly layout, and easy product management.",
                    image: require("@/assets/soma.jpg"),
                    github: "",
                    live: "https://somacosmetics1.com/"
                },
                {
                    title: "Hilinica GmbH - Empowerment Platform",
                    description:
                        "Developed a clean, multi-language WordPress website for a German company empowering women to start beauty centers. Includes service showcase, contact forms, and SEO optimization.",
                    image: require("@/assets/hilinica.jpg"),
                    github: "",
                    live: "https://hilinica.de/"
                },
                {
                    title: "King Billard Café Website",
                    description:
                        "Created a modern WordPress website for a billiard café in Germany. Includes event booking, offers, location details, and a contact form with responsive design.",
                    image: require("@/assets/king.jpg"),
                    github: "",
                    live: "https://kingbillardcafe.de/"
                },
                {
                    title: "Wedding Page – ITI Project",
                    description:
                        "Crafted a fully responsive wedding-themed landing page using Bootstrap, HTML, CSS, and JavaScript. The project showcases elegant layout design, smooth animations, and mobile-first responsiveness as part of ITI training.",
                    image: require("@/assets/page.jpg"),
                    github: "https://github.com/samaebrahim322/wedding-page-iti",
                    live: "https://samaebrahim322.github.io/wedding-page-iti/"
                }


            ]
        };
    }
};
</script>

<style scoped>
.projects-section {
    position: relative;
    background-color: var(--white);
    padding: 6rem 2rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.projects-wrapper {
    width: 100%;
}

.section-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 1rem;
}

.projects-intro {
    font-size: 1.1rem;
    max-width: 750px;
    margin: 0 auto 3rem;
    color: var(--text);
    line-height: 1.6;
}

.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
}

@media (min-width: 768px) {
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1200px) {
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.project-card {
    position: relative;
    overflow: hidden;
    border-radius: 18px;
    max-width: 360px;
    width: 100%;
    height: 260px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    transition: transform 0.4s ease;
    cursor: pointer;
}

.project-card:hover {
    transform: scale(1.03);
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .project-image {
    transform: scale(1.1);
}

.project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.85));
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.4s ease;
    text-align: left;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.project-description {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: #e2e2e2;
}

.project-links {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
}

.project-links a {
    padding: 0.4rem 1.1rem;
    border-radius: 50px;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.85rem;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.project-links a:hover {
    background-color: white;
    color: #111;
}

/* Optional fade-in effect */
.fade-in {
    animation: fadeIn 1s ease forwards;
    opacity: 0;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>
