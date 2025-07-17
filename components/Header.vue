<template>
  <header class="bg-black text-white py-6 fixed top-0 w-full z-10">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <h1 class="text-3xl font-bold animate__animated animate__fadeIn">
        <a href="#home" class="relative hover-underline text-green-400">Son Karona</a>
      </h1>
      <nav>
        <ul class="flex space-x-6">
          <li><a href="#home" class="relative hover-underline text-green-400">Home</a></li>
          <li><a href="#about" class="relative hover-underline text-green-400">About</a></li>
          <li><a href="#skills" class="relative hover-underline text-green-400">Skills</a></li>
          <li><a href="#experience" class="relative hover-underline text-green-400">Experience</a></li>
          <li><a href="#contact" class="relative hover-underline text-green-400">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* Hover underline effect */
.hover-underline {
  position: relative;
  display: inline-block;
}

.hover-underline::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #90EE90; /* Light green */
  transition: width 0.3s ease;
}

.hover-underline:hover::after {
  width: 100%;
}
</style>
