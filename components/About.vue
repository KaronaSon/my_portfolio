<template>
  <section id="about" class="h-screen bg-black text-white flex items-center justify-center px-4">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-4xl font-bold mb-6 text-center text-green-500 animate__animated animate__fadeInUp">
        About Me
      </h2>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto text-center animate__animated animate__fadeInUp animate__delay-1s">
        Ambitious fourth-year Software Development student at Norton University, with a strong foundation in programming languages and data analysis. I'm seeking a Full-Stack Developer Intern position to apply my skills in real-world software development environments, with a passion for creating efficient, user-friendly applications.
      </p>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Personal Information -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
          <h3 class="text-2xl font-semibold text-green-500 mb-4">Personal Information</h3>
          <ul class="space-y-2 text-gray-300">
            <li><strong>Date of Birth:</strong> February 15, 2005</li>
            <li><strong>Place of Birth:</strong> Kandal Province</li>
            <li><strong>Nationality:</strong> Khmer</li>
            <li><strong>Height:</strong> 155 cm</li>
          </ul>
        </div>

        <!-- Characteristics -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInRight">
          <h3 class="text-2xl font-semibold text-green-500 mb-4">Characteristics</h3>
          <ul class="space-y-2 text-gray-300">
            <li>✔️ Teamwork and Open-minded</li>
            <li>✔️ Respect and Time Management</li>
            <li>✔️ Kind and Friendly</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>
