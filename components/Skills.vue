<template>
  <section id="skills" class="min-h-screen bg-gradient-to-br from-black to-black text-white px-6 py-16">
    <div class="container mx-auto px-4 max-w-5xl">
      <h2 class="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-12">
        My Skills
      </h2>

      <div v-for="(section, index) in skillSections" :key="index" class="mb-10">
        <button
          @click="toggleSection(index)"
          class="w-full flex justify-between items-center bg-gray-800 px-6 py-4 rounded-xl border border-green-500 text-left text-2xl font-bold hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.01] transition-all duration-300"
        >
          <span class="text-green-400">{{ section.title }}</span>
          <span
            :class="{
              'rotate-180': openSections[index],
              'rotate-0': !openSections[index],
            }"
            class="transition-transform duration-300 text-green-300 text-xl"
          >&#9660;</span>
        </button>

        <transition name="fade-expand">
          <div
            v-show="openSections[index]"
            class="grid grid-cols-4 md:grid-cols-3 gap-6 mt-6 px-4 relative overflow-hidden"
          >
            <div
              v-for="skill in section.skills"
              :key="skill.name"
              class="bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:border-green-400 hover:shadow-md hover:shadow-green-500/10"
            >
              <img
                :src="skill.icon"
                :alt="skill.name"
                class="w-10 h-10 md:w-12 md:h-12 mb-2 object-contain filter brightness-110 transition animate-pretty-slide"
              />
              <span class="text-sm font-medium text-center text-green-300">{{ skill.name }}</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      openSections: [true, false, false],
      skillSections: [
        {
          title: 'Languages & Databases',
          skills: [
            { name: 'HTML', icon: '/img/html-5.png' },
            { name: 'CSS', icon: '/img/css.png' },
            { name: 'JavaScript', icon: '/img/javascript.png' },
            { name: 'Python', icon: '/img/python.png' },
            { name: 'Java', icon: '/img/java1.png' },
            { name: 'Dart', icon: '/img/dart.png' },
            { name: 'MySQL', icon: '/img/mysql.png' },
            { name: 'SQL', icon: '/img/sql.png' },
          ],
        },
        {
          title: 'Frameworks & Libraries',
          skills: [
            { name: 'Flutter', icon: '/img/flutter.png' },
            { name: 'TailwindCSS', icon: '/img/tailwind_css.png' },
            { name: 'FastAPI', icon: '/img/framework/fastapi.png' },
            { name: 'Nuxt.js', icon: '/img/framework/nuxt.png' },
            { name: 'Vue.js', icon: '/img/framework/vue.png' },
          ],
        },
        {
          title: 'Tools & Testing',
          skills: [
            { name: 'Git', icon: '/img/framework/git.png' },
            { name: 'GitHub', icon: '/img/framework/github.png' },
            { name: 'GitLab', icon: '/img/framework/gitlab.png' },
            { name: 'Docker', icon: '/img/framework/docker.png' },
            { name: 'Postman', icon: '/img/framework/postman.png' },
          ],
        },
      ],
    };
  },
  methods: {
    toggleSection(index) {
      this.openSections[index] = !this.openSections[index];
    },
  },
};
</script>

<style scoped>
.fade-expand-enter-active,
.fade-expand-leave-active {
  transition: all 0.4s ease-in-out;
}
.fade-expand-enter-from,
.fade-expand-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

/* Neon border effect for skill icons */
.neon-border {
  border: 1px solid #00FF99;
  border-radius: 4px;
  padding: 1px;
  box-shadow: 0 0 4px #00FF99, 0 0 8px rgba(0, 255, 153, 0.6);
  transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
}
.neon-border:hover {
  border-color: #00FFCC;
  box-shadow: 0 0 6px #00FFCC, 0 0 12px rgba(0, 255, 204, 0.8);
}

/* Prettier right-to-left animation with bounce and glow */
.animate-pretty-slide {
  animation: prettySlide 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes prettySlide {
  0% {
    transform: translateX(100%) scale(0.9);
    opacity: 0;
    filter: brightness(0.5);
  }
  70% {
    transform: translateX(10%) scale(1.05);
    opacity: 1;
    filter: brightness(1.2);
    box-shadow: 0 0 15px rgba(0, 255, 153, 0.7);
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
    filter: brightness(1.1);
    box-shadow: 0 0 10px rgba(0, 255, 153, 0.5);
  }
}
</style>