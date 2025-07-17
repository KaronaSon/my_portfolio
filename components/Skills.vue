<template>
  <section id="skills" class="py-20 bg-black text-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2
        class="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent text-center md:text-left mb-6">
        Skills
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="flex flex-row gap-6 overflow-x-auto px-2 py-4 max-w-full no-scrollbar">
          <div class="glow-border rounded-xl p-4 w-64 h-20 text-left mb-4">
            <h3
              class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 tracking-wide drop-shadow-md">
              Languages Databases
            </h3>
          </div>

          <!-- HTML -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-green-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(34,197,94,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/html-5.png" alt="HTML" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-green-400 drop-shadow-md text-center">HTML</span>
          </div>

          <!-- CSS -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-blue-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(59,130,246,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/css.png" alt="CSS" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-blue-400 drop-shadow-md text-center">CSS</span>
          </div>

          <!-- JavaScript -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-yellow-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(234,179,8,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/javascript.png" alt="JavaScript" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-yellow-400 drop-shadow-md text-center">JavaScript</span>
          </div>

          <!-- Python -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-blue-600 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(37,99,235,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/python.png" alt="Python" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-blue-600 drop-shadow-md text-center">Python</span>
          </div>

          <!-- Java -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-red-500 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(239,68,68,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/java1.png" alt="Java" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-red-500 drop-shadow-md text-center">Java</span>
          </div>

          <!-- Dart -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-cyan-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(6,182,212,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/dart.png" alt="Dart" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-cyan-400 drop-shadow-md text-center">Dart</span>
          </div>

          <!-- MySQL -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-indigo-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(129,140,248,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/mysql.png" alt="MySQL" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-indigo-400 drop-shadow-md text-center">MySQL</span>
          </div>

          <!-- SQL -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-teal-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(20,184,166,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/sql.png" alt="SQL" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-teal-400 drop-shadow-md text-center">SQL</span>
          </div>
        </div>

        <!-- Frameworks & Libraries -->
        <div class="flex flex-row gap-6 overflow-x-auto px-2 py-4 max-w-full no-scrollbar">
          <!-- Heading (optional to scroll with cards) -->
          <div class="glow-border rounded-xl p-4 w-64 h-20 text-left mb-4">
            <h3
              class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 tracking-wide drop-shadow-md">
              Frameworks Libraries
            </h3>
          </div>

          <!-- Flutter -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-purple-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(192,132,252,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/flutter.png" alt="Flutter" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-purple-400 drop-shadow-md text-center">Flutter</span>
          </div>

          <!-- TailwindCSS -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-sky-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(56,189,248,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/tailwind_css.png" alt="TailwindCSS" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-sky-400 drop-shadow-md text-center">TailwindCSS</span>
          </div>

          <!-- FastAPI -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-emerald-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(52,211,153,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/framework/fastapi.png" alt="FastAPI"
              class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-emerald-400 drop-shadow-md text-center">FastAPI</span>
          </div>

          <!-- Nuxt.js -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-orange-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(251,146,60,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/framework/nuxt.png" alt="Nuxt.js" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-orange-400 drop-shadow-md text-center">Nuxt.js</span>
          </div>

          <!-- Vue.js -->
          <div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-red-400 border-opacity-60
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(248,113,113,0.8)] transition-transform duration-300 cursor-pointer
    hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/framework/vue.png" alt="Vue.js" class="w-16 h-16 object-contain filter brightness-110" />
            <span class="text-base font-semibold text-red-400 drop-shadow-md text-center">Vue.js</span>
          </div>

        </div>
        <!-- Testing & Tools -->
        <div class="flex flex-row gap-6 overflow-x-auto px-2 py-4 max-w-full no-scrollbar">
          <div class="glow-border rounded-xl p-4 w-64 h-20 text-left mb-4">
            <h3
              class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 tracking-wide drop-shadow-md">
              Testing Tools
            </h3>
          </div>

          <!-- Git (Indigo) -->
          <div class="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-indigo-500 border-opacity-70
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(99,102,241,0.8)]
    transition-transform duration-300 cursor-pointer hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/framework/git.png" alt="Git" class="w-16 h-16 object-contain filter brightness-110 mb-2" />
            <span class="text-base font-semibold text-indigo-400 drop-shadow-md text-center">Git</span>
          </div>

          <!-- GitHub (Cyan) -->
          <div class="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-cyan-500 border-opacity-70
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(6,182,212,0.8)]
    transition-transform duration-300 cursor-pointer hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/framework/github.png" alt="GitHub"
              class="w-16 h-16 object-contain filter brightness-110 mb-2" />
            <span class="text-base font-semibold text-cyan-400 drop-shadow-md text-center">GitHub</span>
          </div>

          <!-- GitLab (Fuchsia) -->
          <div class="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-fuchsia-500 border-opacity-70
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(217,70,239,0.8)]
    transition-transform duration-300 cursor-pointer hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/framework/gitlab.png" alt="GitLab"
              class="w-16 h-16 object-contain filter brightness-110 mb-2" />
            <span class="text-base font-semibold text-fuchsia-400 drop-shadow-md text-center">GitLab</span>
          </div>

          <!-- Docker (Teal) -->
          <div class="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-teal-500 border-opacity-70
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(20,184,166,0.8)]
    transition-transform duration-300 cursor-pointer hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/framework/docker.png" alt="Docker"
              class="w-16 h-16 object-contain filter brightness-110 mb-2" />
            <span class="text-base font-semibold text-teal-400 drop-shadow-md text-center">Docker</span>
          </div>

          <!-- Postman (Pink) -->
          <div class="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
    border border-pink-500 border-opacity-70
    shadow-md hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(236,72,153,0.8)]
    transition-transform duration-300 cursor-pointer hover:border-opacity-100 w-48 flex-shrink-0">
            <img src="/img/framework/postman.png" alt="Postman"
              class="w-16 h-16 object-contain filter brightness-110 mb-2" />
            <span class="text-base font-semibold text-pink-400 drop-shadow-md text-center">Postman</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
};
</script>
<style>
.glow-border {
  border: 2px solid #10b981;
  box-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981;
  animation: glowPulse 2s infinite ease-in-out;
}

@keyframes glowPulse {

  0%,
  100% {
    box-shadow: 0 0 10px #10b981, 0 0 20px #10b981;
  }

  50% {
    box-shadow: 0 0 20px #10b981, 0 0 30px #10b981;
  }
}
</style>