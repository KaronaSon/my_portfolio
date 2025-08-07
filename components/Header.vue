<template>
  <header class="bg-black text-white py-6 fixed top-0 w-full z-10">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo / Title -->
      <h1 class="text-2xl sm:text-3xl font-bold animate__animated animate__fadeIn">
        <a href="#home" class="relative hover-underline text-green-400">Son Karona</a>
      </h1>

      <!-- Hamburger Menu Button (Mobile Only) -->
      <button class="sm:hidden text-green-400 focus:outline-none" @click="toggleMenu">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Navigation -->
      <nav :class="{ 'hidden': !isOpen, 'block': isOpen }" class="sm:block sm:items-center">
        <ul class="flex flex-col sm:flex-row sm:space-x-6">
          <li><a href="#home" class="relative hover-underline text-green-400 py-2 inline-block">Home</a></li>
          <li><a href="#about" class="relative hover-underline text-green-400 py-2 inline-block">About</a></li>
          <li><a href="#skills" class="relative hover-underline text-green-400 py-2  inline-block">Skills</a></li>
          <li><a href="#experience" class="relative hover-underline text-green-400 py-2 inline-block">Experience</a></li>
          <li><a href="#contact" class="relative hover-underline text-green-400 py-2 inline-block">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    $route() {
      if (window.innerWidth < 640) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.hover-underline {
  position: relative;
  display: inline-block;
}

.hover-underline::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #90EE90;
  transition: width 0.3s ease;
}

.hover-underline:hover::after {
  width: 100%;
}

@media (max-width: 639px) {
  nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
    border-radius: 8px;
    padding: 1rem 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  }

  nav.block {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  nav ul {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  nav a {
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: #a9dfbf;
  }
}

@media (min-width: 640px) {
  nav {
    display: block !important;
    position: static;
    background-color: transparent;
    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  nav ul {
    flex-direction: row !important;
    gap: 1.5rem;
  }
}
</style>