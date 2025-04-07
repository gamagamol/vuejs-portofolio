<!-- @format -->

<script setup>
import {experienceData } from "../store/DataPage.js"

</script>

<template>
  <section class="lg:h-screen w-full flex items-center justify-center snap-start" id="experiences">
    <div class="flex flex-row gap-6 w-full h-full p-8 mt-16 justify-center text-white">
      <div class="w-1/4 text-center flex flex-col items-center justify-center">
        <h1 class="font-bold text-5xl lg:text-7xl text-white ml-5">Experiences</h1>
      </div>
      
      <div class="w-full lg:max-h-screen overflow-y-auto">
        <div class="lg:min-h-full" v-for="(d, i) in experienceData" :key="i">
          <div class="flex flex-col lg:flex-row gap-6 w-full p-8 items-start justify-start text-white">
            <div class="w-full lg:w-1/4 flex flex-col justify-start">
              <h1 class="font-bold text-xl">{{ d.year_start }} - {{ d.year_end }}</h1>
            </div>

            <div class="flex flex-col w-full h-full">
              <h1 class="font-bold text-2xl text-center mt-6">{{ d.position }} | {{ d.company }}</h1>
              <p>
                {{ d.description }}
              </p>

              <div class="flex flex-wrap justify-start gap-2 mt-4 text-center">
                <p class="bg-primary-opacity40 p-2 border-1 rounded-full" v-for="(s, j) in d.skills" :key="j">{{ s }}</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
