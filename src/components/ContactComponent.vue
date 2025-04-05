<!-- @format -->

<script setup>
const icons = ['golang', 'php', 'python', 'dotnet', 'laravel', 'js', 'vue', 'react', 'mysql', 'postgres', 'mongo', 'redis'];
const connect_icons = ['instagram', 'github', 'linkedin', 'upwork', 'whatsapp', 'youtube'];
</script>

<template>
  <section class="h-screen w-full flex flex-col items-center snap-start" id="contact">
    <h1 class="font-bold text-4xl text-white w-full text-center mt-24">Tools</h1>
    <div class="infinite-scroll-container relative w-full h-1/2 overflow-hidden">
      <div class="infinite-scroll-content flex gap-6 p-4 items-center animate-scroll">
        <template v-for="icon in icons" :key="`original-${icon}`">
          <div class="flex flex-col bg-primary-opacity40 rounded-lg py-2 items-center p-4 min-w-1/4">
            <img class="rounded-2xl" :alt="icon" :src="`/src/assets/icons/${icon}.png`" />
          </div>
        </template>
        <template v-for="icon in icons" :key="`duplicate-${icon}`">
          <div class="flex flex-col bg-primary-opacity40 rounded-lg py-2 items-center p-4 min-w-1/4">
            <img class="rounded-2xl" :alt="icon" :src="`/src/assets/icons/${icon}.png`" />
          </div>
        </template>
      </div>
    </div>

    <div class="flex flex-row gap-6 w-full h-1/2">
      <div class="flex flex-col w-1/2 justify-center items-start pl-16">
        <h1 class="text-5xl text-white font-bold mb-5">Let’s Work Together</h1>
        <p class="text-white text-xl mb-5">Want to discuss an opportunity to create something great? I’m ready when you are</p>
        <button class="p-4 text-black bg-white text-2xl rounded-xl">Let’s Talk</button>
      </div>
      <div class="flex flex-col w-1/2 justify-end items-end p-4">
        <p class="text-white text-xl mb-5">Connect with me</p>

        <div class="flex flex-row gap-2">
          <a class="" href="http://" v-for="icon in connect_icons">
            <img :src="`/src/assets/icons/${icon}.png`" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
