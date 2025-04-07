<!-- @format -->

<script setup>
import { experienceData } from '../store/DataPage.js';
</script>


<template>
  <section class="snap-start min-h-[100svh] lg:h-screen w-full flex flex-col items-center justify-start" id="experiences">

    <!-- Title untuk Mobile -->
    <div class="block lg:hidden mt-32 mb-4 text-white text-center">
      <h1 class="font-bold text-4xl">Experiences</h1>
    </div>

    <div class="flex flex-row gap-6 w-full h-full p-8 mt-4 lg:mt-16 justify-center text-white">
      <!-- Title untuk Desktop -->
      <div class="w-1/4 text-center hidden lg:flex flex-col items-center justify-center">
        <h1 class="font-bold text-5xl lg:text-7xl text-white ml-5">Experiences</h1>
      </div>

      <!-- Isi Konten -->
      <div class="w-full lg:max-h-screen overflow-y-auto">
        <div class="lg:min-h-full" v-for="(d, i) in experienceData" :key="i">
          <div class="flex flex-col lg:flex-row gap-6 w-full p-8 items-start justify-start text-white">
            <div class="w-full lg:w-1/4 flex flex-col justify-start">
              <h1 class="font-bold text-3xl lg:text-3xl">{{ d.year_start }} - {{ d.year_end }}</h1>
            </div>

            <div class="flex flex-col w-full h-full">
              <h1 class="font-bold text-3xl lg:text-2xl text-center mt-6 mb-6">{{ d.position }} | {{ d.company }}</h1>
              <p class="text-xl lg:text-3xl">
                {{ d.description }}
              </p>

              <div class="flex flex-wrap justify-start gap-2 mt-4 text-xl lg:text-2xl text-center">
                <p class="bg-primary-opacity40 p-2 border-1 rounded-full" v-for="(s, j) in d.skills" :key="j">{{ s }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
