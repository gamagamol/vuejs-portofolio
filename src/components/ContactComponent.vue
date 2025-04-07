<!-- @format -->

<script setup>
import { contactData } from '../store/DataPage.js';

const icons = import.meta.glob('../assets/icons/*.png', {
  eager: true,
  import: 'default',
});

const getIconPath = (name) => icons[`../assets/icons/${name}.png`] || '';
</script>

<template>
  <section class="snap-start min-h-[100svh] lg:h-screen w-full flex flex-col items-center " id="contacts">
    <h1 class="font-bold text-8xl lg:text-4xl text-white w-full text-center mt-32 lg:mt-20">Tools</h1>

    <div class="infinite-scroll-container relative w-full h-1/2 lg:h-1/2 overflow-hidden">
      <div class="infinite-scroll-content flex gap-6 p-4 my-32 items-center animate-scroll">
        <template v-for="icon in contactData.icons" :key="`original-${icon}`">
          <div class="flex flex-col bg-primary-opacity40 rounded-lg py-2 items-center p-4  min-w-1/2 lg:min-w-1/4">
            <img class="rounded-2xl sm:w-1/2" :alt="icon" :src="getIconPath(icon)" />
          </div>
        </template>

        <template v-for="icon in contactData.icons" :key="`duplicate-${icon}`">
          <div class="flex flex-col bg-primary-opacity40 rounded-lg py-2 items-center p-4 min-w-1/4">
            <img class="rounded-2xl" :alt="icon" :src="getIconPath(icon)" />
          </div>
        </template>
      </div>
    </div>

    <div class="flex flex-row gap-6 w-full  h-full lg:h-1/2 mt-32 lg:mt-10 ">
      <div class="flex flex-col w-1/2 justify-center items-start lg:items-start pl-16">
        <h1 class="text-8xl lg:text-5xl text-white font-bold mb-5">Let’s Work Together</h1>
        <p class="text-white text-3xl lg:text-xl mb-5">Want to discuss an opportunity to create something great? I’m ready when you are</p>
        <button class="p-4 text-black bg-white text-6xl mt-24  lg:text-2xl rounded-xl">
          <a href="https://wa.me/6287708305938" target="_blank" rel="noopener noreferrer">Let’s Talk</a>
        </button>
      </div>

      <div class="flex flex-col w-1/2 justify-end items-end p-4">
        <p class="text-white  text-5xl lg:text-xl mb-5">Connect with me</p>

        <div class="flex flex-row gap-2">
          <a v-for="contac in contactData.connect_icons" :key="contac.icon" :href="contac.link" target="_blank" rel="noopener noreferrer">
            <img class="w-16 h-16 lg:w-10 lg:h-10" :src="getIconPath(contac.icon)" :alt="contac.icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
