<!-- @format -->

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { projectsData } from '../store/DataPage.js';

const projectImages = import.meta.glob('../assets/projects/*.png', {
  eager: true,
  import: 'default',
});

const getProjectImage = (name) => projectImages[`../assets/projects/${name}.png`] || '';
</script>

<template>
  <section class="h-screen w-full flex flex-col items-center snap-start overflow-y-hidden" id="projects">
    <h1 class="font-bold text-4xl text-white w-full text-center mt-20 lg:mt-24">Projects</h1>

    <div class="flex flex-row gap-6 flex-wrap w-full h-full lg:w-1/2 lg:h-1/2 p-8 lg:mt-12 justify-center text-white">
      <div class="flex flex-col bg-primary-opacity40 shadow-lg rounded-lg p-4" v-for="images in projectsData.images" :key="images">
        <div class="w-full flex justify-between gap-2 mb-5">
          <h2 class="text-1xl font-bold">{{ images }}</h2>
          <span class="w-6 h-6 flex items-center justify-center bg-[rgb(230,230,230)] relative rounded-full text-center">
            <div class="absolute inset-0 bg-[rgba(247,243,243,0.2)] rounded-full"></div>
            <a href="#" class="relative text-[10px] text-gray-800">
              <font-awesome-icon icon="fa-solid fa-up-right-and-down-left-from-center" />
            </a>
          </span>
        </div>
        <img class="w-full rounded-2xl" :alt="`${images}`" :src="getProjectImage(images)" />
      </div>
    </div>

    <div class="flex flex-row lg:mt-32">
      <button class="text-1xl rounded-xl border-white border-2 p-2 text-white">
        <a href=""> View More </a>
      </button>
    </div>
  </section>
</template>
