<template>
  <section id="contact" class="py-16 bg-black text-white">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-4xl font-bold mb-10 text-center text-green-500 animate__animated animate__fadeInUp">
        Contact
      </h2>

      <!-- Contact Info -->
      <div class="text-gray-300 text-lg space-y-2 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
        <p><strong class="text-green-400">Phone:</strong> 0967389599</p>
        <p><strong class="text-green-400">Email:</strong> sonkarona7@gmail.com</p>
        <p><strong class="text-green-400">Address:</strong> Nol06, St Keo Chenda, Chroy Changva, Phnom Penh</p>
        <p class="mt-4"><strong class="text-green-400">Reference:</strong> Mr. Sek Socheat, Lecturer at Norton University</p>
        <p><strong class="text-green-400">Reference Contact:</strong> 017879967, socheat.sek@gmail.com</p>
      </div>

      <!-- Contact Form -->
      <div class="bg-gray-900 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp animate__delay-2s">
        <h3 class="text-2xl font-semibold text-green-400 mb-6">Get in Touch</h3>
        <div class="contact-form space-y-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
          />
          <textarea
            v-model="form.message"
            placeholder="Your Message"
            class="w-full p-3 h-32 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
          ></textarea>
          <button
            @click="submitForm"
            class="w-full bg-green-500 text-black font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      alert('Form submitted! (This is a placeholder. Implement actual form submission logic.)');
      this.form = { name: '', email: '', message: '' };
    },
  },
};
</script>
