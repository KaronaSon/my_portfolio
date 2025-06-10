<template>
  <section id="experience" class="py-16 bg-black text-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-4xl font-bold mb-10 text-center text-green-500 animate__animated animate__fadeInUp">
        Experience
      </h2>
      <div class="space-y-10">

        <!-- Internship at iOne Cambodia -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
          <h3 class="text-2xl font-semibold text-green-400">
            iOne Cambodia <span class="text-white text-base font-normal">(Internship, Backend Developer, Mar–May 2025)</span>
          </h3>
          <ul class="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>Developed a full-stack Sales Service system using FastAPI (Python) and MySQL.</li>
            <li>Designed and analyzed relational database schemas for products, categories, and orders.</li>
            <li>Containerized FastAPI service using Docker for consistent development environments.</li>
            <li>Performed API testing with Postman and optimized SQL queries for performance.</li>
            <li>Designed API documentation for frontend developers and stakeholders.</li>
            <li>Integrated backend APIs with a dashboard for internal use.</li>
            <li>Used GitLab for version control and conducted research on Nuxt.js.</li>
          </ul>
        </div>

        <!-- Volunteer Experience -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
          <h3 class="text-2xl font-semibold text-green-400">
            Volunteer Experience <span class="text-white text-base font-normal">(2024)</span>
          </h3>
          <ul class="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>Managed a project titled <strong class="text-green-400">"Meet Doctor Web Application"</strong> at Norton University.</li>
            <li>Presented project purpose, significance, and practical usage during a project exhibition.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
};
</script>
