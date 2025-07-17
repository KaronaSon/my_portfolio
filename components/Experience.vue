<template>
  <section id="experience" class="py-20 bg-black text-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2
        class="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent text-center mb-16 animate__animated animate__fadeInUp">
        Experience
      </h2>

      <div
        class="space-y-12 relative before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-green-500/30 before:rounded-full">

        <!-- iOne Cambodia -->
        <div class="relative pl-12 animate__animated animate__fadeInUp animate__delay-1s">
          <div class="absolute left-0 top-2 w-4 h-4 bg-green-400 rounded-full border-4 border-black shadow-md"></div>
          <div
            class="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500/30 hover:border-green-400/70 transition-all">
            <div class="flex items-center gap-6 mb-4">
              <!-- Logo -->
              <div class="flex-shrink-0">
                <a href="https://www.ione.com.kh/" target="_blank" rel="noopener noreferrer">
                  <img src="/img/framework/logo-ione.png" alt="iOne Cambodia Logo"
                    class="h-12 w-auto rounded-md shadow-sm hover:opacity-80 transition" />
                </a>
              </div>


              <!-- Role & Duration -->
              <div>
                <p class="text-lg text-green-400 font-semibold drop-shadow-md">
                  Internship, Backend Developer
                </p>
                <p class="text-sm text-gray-300 font-light">
                  Mar – May 2025
                </p>
              </div>

            </div>

            <div
              class="max-h-64 overflow-y-auto pr-2 scroll-smooth scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800">
              <ul class="space-y-3 text-base text-gray-300 leading-relaxed list-disc list-inside marker:text-green-400">
                <li>
                  Developed a full-stack <span class="text-white font-medium">Sales Service</span> system using
                  <span class="text-white font-medium">FastAPI</span> (Python) and <span
                    class="text-white font-medium">MySQL</span>.
                </li>
                <li>
                  Designed and analyzed relational database schemas for <span class="text-white">products, categories,
                    and orders</span>.
                </li>
                <li>
                  Containerized FastAPI service using <span class="text-white font-medium">Docker</span> for consistent
                  development environments.
                </li>
                <li>
                  Performed API testing with <span class="text-white font-medium">Postman</span> and optimized SQL
                  queries for performance.
                </li>
                <li>
                  Designed API documentation for frontend developers and stakeholders.
                </li>
                <li>
                  Integrated backend APIs with a dashboard for internal use.
                </li>
                <li>
                  Used <span class="text-white font-medium">GitLab</span> for version control and conducted research on
                  <span class="text-white font-medium">Nuxt.js</span>.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Volunteer Section stays unchanged -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
};
</script>
