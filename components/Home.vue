<template>
  <section id="home" class="h-screen bg-black flex items-center justify-center px-4">
    <div class="flex flex-row items-center max-w-6xl w-full flex-wrap md:flex-nowrap">
      <div class="flex-1 text-left py-8 animate__animated animate__fadeInLeft">
        <h1
          class="text-5xl font-bold mb-4 text-teal-500 hover:text-cyan-300 animate__animated animate__fadeInDown animate__delay-500ms">
          Welcome to My Portfolio
        </h1>

        <div ref="animatedTextWrapper" class="w-full max-w-md text-left">
          <p ref="animatedText"
            class="text-base sm:text-lg md:text-xl font-semibold text-white mb-6 whitespace-pre-wrap break-keep leading-snug animate__animated animate__fadeInUp animate__delay-1s">
          </p>
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

          <!-- Animated Button -->
          <button class="animated-gradient-btn text-white font-semibold px-6 py-3 rounded-lg shadow-md">
            Backend Developer
          </button>
        </div>
      </div>

      <!-- Right: Image with Clean Glow -->
      <div class="flex justify-center items-center mt-8 md:mt-0 flex-1 animate__animated animate__fadeInRight">
        <div class="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 flex items-center justify-center floating">
          <!-- Glow background -->
          <div class="absolute inset-0 flex items-center justify-center z-0">
            <div
              class="w-[22rem] h-[22rem] rounded-full bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 blur-3xl opacity-40"
              style="animation: pulseGlow 5s ease-in-out infinite;">
            </div>
          </div>

          <!-- Clear Profile Image -->
          <img
            src="/img/karona.jpg"
            alt="Son Karona Profile"
            class="w-full h-full rounded-full object-cover border-[6px] border-green-400 shadow-[0_0_40px_rgba(34,197,94,0.6)] relative z-10"
          />
        </div>
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
      const text = "Hi, I'm Son Karona a passionate Backend Developer, Frontend Developer, and Mobile App Developer.";
      const textElement = this.$refs.animatedText;
      textElement.innerHTML = '';

      const delayPerLetter = 60;
      const startColors = ['#14b8a6', '#3b82f6', '#10b981', '#8b5cf6'];
      const endColor = '#ffffff';

      const words = text.split(' ');
      let letterIndex = 0;

      words.forEach((word) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
        wordSpan.style.marginRight = '8px';

        for (let i = 0; i < word.length; i++) {
          const char = word[i];
          const span = document.createElement('span');
          span.innerHTML = char;
          span.style.opacity = '0';
          span.style.transform = 'translateY(10px)';
          span.style.display = 'inline-block';
          span.style.color = startColors[letterIndex % startColors.length];

          setTimeout(() => {
            span.style.transition = 'opacity 0.4s ease, transform 0.4s ease, color 0.4s ease';
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
            span.style.color = endColor;
          }, letterIndex * delayPerLetter);

          wordSpan.appendChild(span);
          letterIndex++;
        }

        textElement.appendChild(wordSpan);
      });

      const totalDuration = letterIndex * delayPerLetter + 1000;
      setTimeout(() => {
        this.animateText();
      }, totalDuration);
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

<style>
img {
  image-rendering: auto;
  backface-visibility: hidden;
}

/* Floating Effect */
@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.6;
  }
}

/* Gradient button shimmer */
@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.animated-gradient-btn {
  background: linear-gradient(270deg, #22c55e, #0ea5e9);
  background-size: 400% 400%;
  animation: shimmer 6s ease infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.animated-gradient-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(14, 165, 233, 0.5), 0 0 40px rgba(34, 197, 94, 0.5);
}
</style>
