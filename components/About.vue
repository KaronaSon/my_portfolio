<template>
  <section id="about" class="min-h-screen bg-gradient-to-br from-black to-black text-white px-6 py-16">
    <div ref="container" class="container mx-auto max-w-7xl">
      <h2
        class="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent text-center md:text-left mb-12">
        About Me
      </h2>
      <div class="grid grid-cols-[260px_1fr] gap-6 items-start">
        <div class="flex justify-center md:justify-start" ref="image">
          <div
            class="relative w-[240px] h-[380px] bg-gradient-to-br from-green-900 to-black rounded-[2rem] border-[4px] border-transparent shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]">
            <div class="absolute inset-0 rounded-[2rem] p-[4px] bg-gradient-to-r from-green-500 to-teal-500 animate-gradient"></div>
            <div class="absolute inset-0 rounded-[2rem] light-runner"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-20 pointer-events-none"></div>
            <img src="/img/karona02.jpg" alt="Profile"
              class="w-full h-full object-cover rounded-[1.5rem] z-10" />
            <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-md z-20"></div>
          </div>
        </div>
        <div class="space-y-10" ref="content">
          <p class="text-lg text-gray-300 leading-relaxed font-serif italic tracking-wide text-center">
            Ambitious fourth-year
            <span class="text-green-400 font-semibold">Software Development</span>
            student at
            <span class="text-green-400 font-semibold">Norton University</span>,
            with a strong foundation in programming languages and data analysis.
          </p>
          <div class="flex flex-wrap gap-6" ref="cards">
            <div
              class="bg-gray-800 p-6 w-[400px] rounded-2xl border border-green-500 hover:shadow-green-500/30 shadow-xl text-sm">
              <h3 class="text-2xl font-semibold text-green-400 mb-4">
                🌱 Personal Information
              </h3>
              <ul class="text-gray-200 space-y-2">
                <li><strong>📅 Date of Birth:</strong> February 15, 2005</li>
                <li><strong>📍 Place of Birth:</strong> Kandal Province</li>
                <li><strong>🌏 Nationality:</strong> Khmer</li>
                <li><strong>📏 Height:</strong> 155 cm</li>
              </ul>
            </div>
            <div
              class="bg-gray-800 p-6 w-[400px] rounded-2xl border border-teal-500 hover:shadow-teal-500/30 shadow-xl text-sm">
              <h3 class="text-2xl font-semibold text-teal-400 mb-4">
                💎 Characteristics
              </h3>
              <ul class="text-gray-200 space-y-2">
                <li>✔️ Teamwork and Open-minded</li>
                <li>✔️ Respect and Time Management</li>
                <li>✔️ Kind and Friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "AboutPage",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate phone-style image
    gsap.from(this.$refs.image, {
      scrollTrigger: {
        trigger: this.$refs.image,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate text content
    gsap.from(this.$refs.content, {
      scrollTrigger: {
        trigger: this.$refs.content,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    // Animate cards with stagger
    gsap.from(this.$refs.cards.children, {
      scrollTrigger: {
        trigger: this.$refs.cards,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out",
      delay: 0.6,
    });
  },
};
</script>

<style scoped>
.animate-gradient {
  background: linear-gradient(90deg, #22c55e, #14b8a6, #22c55e);
  background-size: 200% 100%;
  animation: gradientFlow 4s linear infinite;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.light-runner::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 2rem;
  background: linear-gradient(90deg, transparent, #22c55e, transparent);
  background-size: 200% 100%;
  animation: lightRun 2s linear infinite;
  z-index: 5;
}

@keyframes lightRun {
  0% { background-position: 0% 50%; }
  100% { background-position: 400% 50%; }
}
</style>
