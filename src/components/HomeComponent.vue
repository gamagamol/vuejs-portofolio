<!-- @format -->

<script setup></script>

<template>
  <section class="snap-start min-h-[100svh] lg:h-screen w-full flex items-center justify-center " id="home">
    <div class="flex flex-row gap-6 w-full h-full p-8 mt-[4rem]">
      <div class="w-full lg:w-1/2 flex items-center sm:justify-center text-white">
        <div class="ml-24">
          <h2 class="text-7xl lg:text-4xl my-2">I'm Gama Ariefsadya</h2>
          <h1 class="text-9xl lg:text-6xl my-6 font-bold">Software Engineer</h1>
          <p class="text-5xl lg:text-3xl">
            I Specialize in designing and building Application <br />
            Data Analyze and Build Data Warehouse
          </p>

          <button class="text-3xl lg:text-xl mt-4 bg-white text-black p-4 rounded-xl mr-2">
            <a href="https://www.linkedin.com/in/gama-ariefsadya/" target="_blank"> Get In Touch </a>
          </button>
          <button class="text-3xl lg:text-xl mt-4 border-4 border-white p-4 rounded-xl">
            <router-link :to="`/projects`">View More</router-link>
          </button>
        </div>
      </div>

      <div class="w-full hidden lg:w-1/2 lg:flex items-end justify-end h-full">
        <img src="../assets/profile.png" alt="profile" class="ml-auto h-full lg:h-full " />
      </div>

    </div>
  </section>
</template>
