<template>
    <nav class="custom-navbar">
        <div class="container nav-content">
            <router-link class="navbar-logo" to="/">
                <!-- <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="logo" width="36" height="36" /> -->
            <img src="../assets/samalogo.png" alt="logo" width="36" height="36" />

            </router-link>

            <!-- Burger Menu Icon -->
            <button class="burger-btn" @click="toggleMenu">
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
            </button>

            <!-- Navigation Links -->
            <!-- <ul class="nav-links" :class="{ show: isOpen }">
                <li>
                    <router-link class="nav-link" exact-active-class="active" to="/"
                        @click="closeMenu">Home</router-link>
                </li>
                <li>
                    <router-link class="nav-link" exact-active-class="active" to="/about"
                        @click="closeMenu">About</router-link>
                </li>
                <li>
                    <router-link class="nav-link" exact-active-class="active" to="/projects"
                        @click="closeMenu">Projects</router-link>
                </li>
                <li>
                    <router-link class="nav-link" exact-active-class="active" to="/contact"
                        @click="closeMenu">Contact</router-link>
                </li>
            </ul> -->
       <ul class="nav-links" :class="{ show: isOpen }">
  <li>
    <a class="nav-link" href="#home" @click="closeMenu">Home</a>
  </li>
  <li>
    <a class="nav-link" href="#about" @click="closeMenu">About</a>
  </li>
  <li>
    <a class="nav-link" href="#projects" @click="closeMenu">Projects</a>
  </li>
  <li>
    <a class="nav-link" href="#contact" @click="closeMenu">Contact</a>
  </li>
</ul>

        </div>
    </nav>
</template>

<script>
export default {
    name: "NavbarApp",
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>
.custom-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--white);
    padding: 1rem 0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
    z-index: 1000;
}

.nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.navbar-logo img {
    display: block;
}

/* Burger Menu */
.burger-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    border: none;
    background: transparent;
    cursor: pointer;
    z-index: 1100;
}

.burger-btn span {
    width: 25px;
    height: 3px;
    background-color: var(--text);
    border-radius: 4px;
    transition: all 0.3s ease;
}

.burger-btn span.open:nth-child(1) {
    transform: rotate(45deg) translateY(8px);
}

.burger-btn span.open:nth-child(2) {
    opacity: 0;
}

.burger-btn span.open:nth-child(3) {
    transform: rotate(-45deg) translateY(-8px);
}

/* Nav Links */
.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-link {
    font-weight: 500;
    color: var(--text);
    text-decoration: none;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: var(--primary);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link.active {
    color: var(--primary);
    font-weight: 700;
}

.nav-link.active::after {
    width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
    .burger-btn {
        display: flex;
    }

    .nav-links {
        position: absolute;
        top: 100%;
        right: 0;
        flex-direction: column;
        background-color: var(--white);
        width: 100%;
        padding: 1rem;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
    }

    .nav-links.show {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
    }
}
</style>
