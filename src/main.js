import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './views/Home.vue'
import './assets/styles/variables.css';


import { createRouter,createWebHistory } from 'vue-router'
import AboutPage from './views/AboutPage.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AQbout', component: AboutPage }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
