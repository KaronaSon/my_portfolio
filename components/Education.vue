<template>
  <section id="education" class="py-16 bg-black text-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-4xl font-bold mb-10 text-center text-green-500 animate__animated animate__fadeInUp">
        Education
      </h2>
      <div class="space-y-10">

        <!-- Norton University -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
          <h3 class="text-2xl font-semibold text-green-400">Norton University <span class="text-white">(2022 - Present)</span></h3>
          <p class="text-gray-300 mt-2">Fourth-year student in Software Development</p>
        </div>

        <!-- ETEC Center -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
          <h3 class="text-2xl font-semibold text-green-400">ETEC Center</h3>
          <p class="text-gray-300 mt-2">Completed training courses in:</p>
          <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>Basic/Advanced C/C++/OOP and Project Courses</li>
            <li>Basic/Advanced Java/SQL Server/Report and Project Courses</li>
            <li>Basic/Advanced Flutter/Dart/API and Project Courses</li>
          </ul>
        </div>

        <!-- High School -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-3s">
          <h3 class="text-2xl font-semibold text-green-400">High School <span class="text-white">(2016 - 2022)</span></h3>
          <p class="text-gray-300 mt-2">Graduated from:</p>
          <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>PUK RUESSEI Primary School (2016)</li>
            <li>PUK RUESSEI Secondary School (2019)</li>
            <li>HUN SUN KSACH KANADAL High School (2022)</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Education',
};
</script>
