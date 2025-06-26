<template>
  <div id="app">
    <NavbarApp />
    <router-view />
    <!-- <HomePage /> -->
    <AboutPage />
    <ProjectsPage />
    <ContactMe />
    <FooterApp />
  </div>
</template>

<script>
import NavbarApp from "./components/Navbar.vue"
import FooterApp from "./components/Footer.vue"
// import HomePage from "./views/Home.vue"
import AboutPage from "./views/AboutPage.vue"
import ProjectsPage from "./views/Projects.vue"
import ContactMe from "./views/Contact Me.vue"

export default {
  name: 'App',
  components: {
    NavbarApp,
    FooterApp,
    // HomePage,
    AboutPage,
    ProjectsPage,
    ContactMe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
