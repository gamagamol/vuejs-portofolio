<!-- @format -->

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { servicesData } from '../store/DataPage.js';

const data = [
  {
    title: 'Data Analyst',
    description: 'I turn raw data into meaningful insights, helping businesses make smarter decisions',
    image: 'data_analyst.png',
  },
  {
    title: 'Software Engineer',
    description: 'I love building things that make life easier and solving complex problems with clean, efficient code',
    image: 'software_engineer.png',
  },
  {
    title: 'Mentor',
    description: 'I’m passionate about sharing knowledge and making learning easier for others',
    image: 'mentor.png',
  },
];

function servicesNext() {
  const Services = Array.from(document.querySelectorAll('.services')).filter((el) => !el.hasAttribute('hidden'));
  Services[0].setAttribute('hidden', 'true');
  let currentServicesIndex = parseInt(Services[0].id.split('_')[1]);

  let nextService = `services_${currentServicesIndex + 1}`;

  if (currentServicesIndex == lengthService()) {
    nextService = 'services_1';
  }
  document.getElementById(nextService).removeAttribute('hidden');
}

function servicesPrevious() {
  const Services = Array.from(document.querySelectorAll('.services')).filter((el) => !el.hasAttribute('hidden'));
  Services[0].setAttribute('hidden', 'true');
  let currentServicesIndex = parseInt(Services[0].id.split('_')[1]);

  let nextService = `services_${currentServicesIndex - 1}`;

  if (currentServicesIndex == 1) {
    nextService = 'services_' + lengthService();
  }
  document.getElementById(nextService).removeAttribute('hidden');
}

function lengthService() {
  return document.getElementsByClassName('services').length;
}
</script>

<template>
  <section class="h-screen w-full flex flex-col items-center snap-start" id="services">
    <h1 class="font-bold text-4xl text-white w-full text-center mt-24">My Services</h1>

    <div class="flex flex-row w-full h-1/2 p-8 mt-12 justify-center items-center text-white">
      <div class="w-1/3 flex flex-col justify-center items-center services" :id="`services_${i + 1}`" v-for="(d, i) in servicesData" :key="i + 1" :hidden="i + 1 > 1">
        <div class="relative p-4 w-[75%] h-full flex justify-center items-center bg-primary-opacity40 shadow-lg rounded-lg">
          <div class="absolute flex justify-center items-center top-[-30%] w-1/2 h-[40%] lg:top-[-42%] lg:w-1/4 lg:h-[50%] rounded-2xl bg-gray-300 text-center">
            <img class="" :alt="`${d.title}`" :src="`../src/assets/services/${d.image}`" />
          </div>

          <div class="w-full flex flex-wrap items-center justify-center mb-5">
            <h2 class="text-2xl font-bold text-center mb-2.5 mt-2">{{ d.title }}</h2>
            <p class="text-white text-xl text-center">{{ d.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row w-full justify-center items-center text-5xl">
      <div class="flex flex-col text-center mr-5">
        <button class="relative" id="btn-service-previous" @click="servicesPrevious">
          <font-awesome-icon :icon="['fas', 'circle']" class="text-gray-300/20 hover:text-gray-300/50 w-full h-full" />
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5" />
        </button>
      </div>
      <div class="flex flex-col text-center">
        <button class="relative" id="btn-service-next" @click="servicesNext">
          <font-awesome-icon :icon="['fas', 'circle']" class="text-gray-300/20 hover:text-gray-300/50 w-full h-full" />
          <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
</template>
