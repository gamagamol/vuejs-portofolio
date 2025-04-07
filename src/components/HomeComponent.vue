<!-- @format -->

<script setup></script>

<template>
  <section class="lg:h-screen w-full flex items-center justify-center snap-start" id="home">
    <div class="flex flex-row gap-6 w-full h-full p-8 mt-[4rem]">
      <div class="w-1/2 flex items-center text-white">
        <div class="ml-24">
          <h2 class="text-3xl lg:text-4xl my-2">I'm Gama Ariefsadya</h2>
          <h1 class="text-5xl lg:text-6xl my-6 font-bold">Software Engineer</h1>
          <p class="lg:text-xl">
            I Specialize in designing and building Application <br />
            Data Analyze and Build Data Warehouse
          </p>

          <button class="mt-4 bg-white text-black p-4 rounded-xl mr-2">
            <a href="https://www.linkedin.com/in/gama-ariefsadya/" target="_blank"> Get In Touch </a>
          </button>
          <button class="mt-4 border-4 border-white p-4 rounded-xl">
            <router-link :to="`/projects`">View More</router-link>
          </button>
        </div>
      </div>

      <div class="w-1/2 flex items-center justify-end   h-full">
        <img src="../assets/profile.png" alt="profile" class="ml-auto h-1/2 lg:h-full" />
      </div>
    </div>
  </section>
</template>
