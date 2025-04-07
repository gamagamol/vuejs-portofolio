<!-- @format -->

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { projectsData } from '../store/DataPage.js';

const projectData = import.meta.glob('../assets/projects/*.png', {
  eager: true,
  import: 'default',
});

const getProjectImage = (name) => projectData[`../assets/projects/${name}`] || '';

const { showAllProjects } = defineProps({
  showAllProjects: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="snap-start min-h-[100svh] lg:min-h-screen w-full flex flex-col items-center  overflow-y-hidden" id="projects">
    <h1 class="font-bold text-8xl  lg:text-4xl text-white w-full text-center sm:my-32 lg:mt-24">Projects</h1>
    <div class="flex flex-row gap-6 flex-wrap w-full h-full lg:w-1/2 lg:h-1/2 p-8 lg:mt-12 justify-center text-white">
      <div class="w-full sm:w-[45%] lg:w-[45%] flex flex-col bg-primary-opacity40 shadow-lg rounded-lg p-4" v-for="pd in showAllProjects ? projectsData : projectsData.slice(0, 4)" :key="pd.image">
        <div class="w-full flex justify-between gap-2 mb-5">
          <h2 class="text-3xl lg:text-1xl font-bold">{{ pd.title }}</h2>
        </div>
        <img class="w-full rounded-2xl mb-4" :alt="pd.title" :src="getProjectImage(pd.image)" />
        <p class="text-3xl lg:text-sm">{{ pd.description }}</p>
      </div>
    </div>

    <div class="flex flex-row lg:mt-24" v-if="!showAllProjects">
      <button class="text-5xl lg:text-1xl rounded-xl border-white border-2 p-2 text-white mb-24">
        <router-link :to="`/projects`">View More</router-link>
      </button>
    </div>
  </section>
</template>
