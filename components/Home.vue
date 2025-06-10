<template>
  <section id="home" class="h-screen bg-black text-white flex items-center justify-center px-4">
    <div class="flex flex-row items-center max-w-6xl w-full">
      <div class="flex-1 text-left py-8 animate__animated animate__fadeInLeft">
        <h1
          class="text-5xl font-bold mb-4 text-teal-500 hover:text-cyan-300 animate__animated animate__fadeInDown animate__delay-500ms">
          Welcome to My Portfolio
        </h1>

        <div ref="animatedTextWrapper" class="relative w-full">
          <p ref="animatedText"
            class="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 whitespace-pre-wrap leading-snug"></p>
        </div>

        <a ref="bounceBtn" href="#about" @mouseenter="triggerBounce"
          class="inline-block bg-transparent border border-green-500 text-green-500 px-6 py-3 rounded-lg transition duration-200 hover:bg-green-500 hover:text-cyan-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] animate-bounceOnce">
          Learn More About Me
        </a>

        <div class="flex flex-col items-start space-y-4 animate__animated animate__zoomIn mt-6">
          <div class="flex space-x-4">
            <button ref="getInTouchBtn" @mouseenter="triggerBounceBtn"
              class="bg-gradient-to-r from-blue-300 to-green-400 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:from-green-400 hover:to-blue-300 hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]">
              Get in Touch
            </button>
            <button ref="viewProjectsBtn" @click="triggerBounceProjects" @mouseenter="triggerBounceProjects"
              class="bg-gray-800 text-white px-6 py-3 rounded-lg">
              View Projects
            </button>
          </div>
          <div class="flex space-x-4">
            <div class="bg-gray-900 p-4 rounded-lg text-center">
              <p class="text-2xl font-bold text-green-500">3 months</p>
              <p class="text-gray-400">Experience</p>
            </div>
            <div class="bg-gray-900 p-4 rounded-lg text-center">
              <p class="text-2xl font-bold text-green-500">2+</p>
              <p class="text-gray-400">Projects Completed</p>
            </div>
          </div>
          <button class="bg-gradient-to-r from-green-400 to-green-500 text-black px-6 py-3 rounded-lg">
            Backend Developer
          </button>
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <img src="/img/karona.jpg" alt="Son Karona Profile"
          class="w-72 h-72 rounded-full object-cover border-4 border-green-500 shadow-lg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      const text =
        "Hi, I'm Son Karona a passionate Backend Developer, Frontend Developer, and Mobile App Developer.";
      const textElement = this.$refs.animatedText;
      textElement.innerHTML = '';
      const startColors = ['#14b8a6', '#3b82f6', '#10b981', '#8b5cf6']; 
      const endColor = '#ffffff';

      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.color = startColors[index % startColors.length]; 
        span.style.display = 'inline-block';
        span.style.transition = `opacity 0.7s ease ${index * 70}ms, transform 0.7s ease ${index * 70}ms, color 0.7s ease ${index * 70}ms`;
        textElement.appendChild(span);

        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
          span.style.color = endColor; 
        }, 40 * index);
      });
    },
    triggerBounce() {
      const btn = this.$refs.bounceBtn;
      btn.classList.remove('animate-bounceOnce');
      void btn.offsetWidth;
      btn.classList.add('animate-bounceOnce');
    },
    triggerBounceBtn() {
      const btn = this.$refs.getInTouchBtn;
      btn.classList.remove('animate-bounceOnce');
      void btn.offsetWidth;
      btn.classList.add('animate-bounceOnce');
    },
    triggerBounceProjects() {
      const btn = this.$refs.viewProjectsBtn;
      btn.classList.remove('animate-bounceOnce');
      void btn.offsetWidth;
      btn.classList.add('animate-bounceOnce');
    },
  },
};
</script>

<style scoped>
p span {
  transition: opacity 0.4s ease, transform 0.4s ease, color 0.4s ease;
}
</style>
