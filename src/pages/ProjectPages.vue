<!-- @format -->

<script setup>
import ContactComponent from '../components/ContactComponent.vue';
import ProjectComponent from '../components/ProjectComponent.vue';
</script>

<template>
  <div class="snap-y snap-mandatory h-screen overflow-y-scroll">
    <ProjectComponent :showAllProjects="true" />
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
