<!-- @format -->

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

function goToSection(sectionId) {
  router.push('/').then(() => {
    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
</script>

<template>
  <nav class="fixed top-0 left-1/2 transform -translate-x-1/2 w-max py-2 px-8 flex justify-center items-center gap-x-8 text-white border border-white/35 rounded-full bg-white/6 my-6">
    <router-link @click="goToSection('home')" to="/" class="opacity-50 hover:opacity-100">Home</router-link>
    <router-link @click="goToSection('about-me')" to="/#about-me" class="opacity-50 hover:opacity-100">About Me</router-link>
    <router-link @click="goToSection('experiences')" to="/#experiences" class="opacity-50 hover:opacity-100">Experiences</router-link>
    <router-link @click="goToSection('projects')" to="/#projects" class="opacity-50 hover:opacity-100">Projects</router-link>
    <router-link @click="goToSection('services')" to="/#services" class="opacity-50 hover:opacity-100">Services</router-link>
    <router-link @click="goToSection('contacts')" to="/#contacts" class="opacity-50 hover:opacity-100">Contacts</router-link>
  </nav>
  <router-view></router-view>
</template>
