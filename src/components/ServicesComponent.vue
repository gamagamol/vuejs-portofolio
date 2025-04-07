<!-- @format -->

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { servicesData } from '../store/DataPage.js';

const serviceImages = import.meta.glob('../assets/services/*.png', {
  eager: true,
  import: 'default',
});

const getServiceImage = (name) => serviceImages[`../assets/services/${name}`] || '';

function servicesNext() {
  const Services = Array.from(document.querySelectorAll('.services')).filter((el) => !el.hasAttribute('hidden'));
  Services[0].setAttribute('hidden', 'true');
  let currentServicesIndex = parseInt(Services[0].id.split('_')[1]);
  let nextService = `services_${currentServicesIndex + 1}`;
  if (currentServicesIndex === lengthService()) {
    nextService = 'services_1';
  }
  document.getElementById(nextService).removeAttribute('hidden');
}

function servicesPrevious() {
  const Services = Array.from(document.querySelectorAll('.services')).filter((el) => !el.hasAttribute('hidden'));
  Services[0].setAttribute('hidden', 'true');
  let currentServicesIndex = parseInt(Services[0].id.split('_')[1]);
  let nextService = `services_${currentServicesIndex - 1}`;
  if (currentServicesIndex === 1) {
    nextService = 'services_' + lengthService();
  }
  document.getElementById(nextService).removeAttribute('hidden');
}

function lengthService() {
  return document.getElementsByClassName('services').length;
}
</script>

<template>
  <section class="snap-start min-h-[100svh] lg:h-screen w-full flex flex-col items-center " id="services">
    <h1 class="font-bold text-8xl lg:text-4xl text-white w-full text-center mt-32 lg:mt-24">My Services</h1>

    <div class="flex flex-row w-full h-1/2 p-8 mt-32 lg:mt-12 justify-center items-center text-white bg-red-300">
      <div class="w-1/2  lg:w-1/3 flex flex-col justify-center items-center services" :id="`services_${i + 1}`" v-for="(d, i) in servicesData" :key="i + 1" :hidden="i + 1 > 1">
        <div class="relative p-4 lg:w-[75%] h-full flex justify-center items-center bg-primary-opacity40 shadow-lg rounded-lg">
          <div class="absolute flex justify-center items-center top-[-35%] w-1/2 h-[40%] lg:top-[-42%] lg:w-1/4 lg:h-[50%] rounded-2xl bg-gray-300 text-center">
            <img class="" :alt="d.title" :src="getServiceImage(d.image)" />
          </div>

          <div class="w-full flex flex-wrap items-center justify-center mb-5">
            <h2 class="text-5xl lg:text-2xl font-bold text-center mb-2.5 mt-2">{{ d.title }}</h2>
            <p class="text-white text-2xl lg:text-xl text-center">{{ d.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row w-full justify-center items-center text-9xl lg:text-5xl">
      <div class="flex flex-col text-center mr-5 ">
        <button class="relative" id="btn-service-previous" @click="servicesPrevious">
          <font-awesome-icon :icon="['fas', 'circle']" class="text-gray-300/20 hover:text-gray-300/50 w-full h-full" />
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5" />
        </button>
      </div>
      <div class="flex flex-col text-center ">
        <button class="relative" id="btn-service-next" @click="servicesNext">
          <font-awesome-icon :icon="['fas', 'circle']" class="text-gray-300/20 hover:text-gray-300/50 w-full h-full" />
          <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5" />
        </button>
      </div>
    </div>
    
  </section>
</template>
