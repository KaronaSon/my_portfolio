<template>
  <section id="skills" class="py-16 bg-black text-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-4xl font-bold mb-10 text-center text-green-500 animate__animated animate__fadeInUp">
        Skills
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Programming Languages -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
          <h3 class="text-2xl font-semibold text-green-400 mb-4">Programming Languages & Databases</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>HTML, CSS, JavaScript</li>
            <li>Python, Java, Dart</li>
            <li>MySQL, SQL</li>
          </ul>
        </div>

        <!-- Frameworks & Libraries -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
          <h3 class="text-2xl font-semibold text-green-400 mb-4">Frameworks & Libraries</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>Flutter, TailwindCSS, Bootstrap</li>
            <li>Node.js, Nuxt.js, Vue.js</li>
            <li>FastAPI, Flask</li>
          </ul>
        </div>

        <!-- Testing & Tools -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-3s">
          <h3 class="text-2xl font-semibold text-green-400 mb-4">Testing & Tools</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>Git/GitHub, GitLab</li>
            <li>Docker, Postman, Figma</li>
            <li>Microservices, RESTful APIs, Atomic Design</li>
          </ul>
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
