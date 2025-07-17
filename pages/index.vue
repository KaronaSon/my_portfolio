<template>
  <div class="min-h-screen bg-gray-100 font-sans">
    <Header />
    <Home />
    <About />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'animate.css';

export default {
  name: 'PortfolioPage',
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements with animate__animated class on scroll
    gsap.from('.animate__animated', {
      scrollTrigger: {
        trigger: '.animate__animated',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });

    // List of section IDs you want to track
    const sections = ['home', 'about', 'education', 'skills', 'experience', 'contact'];

    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          history.replaceState(null, null, `#${id}`);
        },
        onEnterBack: () => {
          history.replaceState(null, null, `#${id}`);
        },
      });
    });
  },
};
</script>
