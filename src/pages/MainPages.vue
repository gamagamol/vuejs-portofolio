<!-- @format -->

<script setup>
import AboutMeComponent from '../components/AboutMeComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import ExperiencesComponent from '../components/ExperiencesComponent.vue';
import HomeComponent from '../components/HomeComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import ProjectComponent from '../components/ProjectComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';

</script>

<template>
  <!-- <NavbarComponent /> -->
  <div class="snap-y snap-mandatory h-screen overflow-y-scroll">
    <HomeComponent />
    <AboutMeComponent />
    <ExperiencesComponent />
    <ProjectComponent />
    <ServicesComponent />
    <ContactComponent />
  </div>
</template>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.infinite-scroll-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.infinite-scroll-content {
  display: flex;
  animation: scroll 5s linear infinite;
}

/* Pause animation on hover */
.infinite-scroll-content:hover {
  animation-play-state: paused;
}
</style>
