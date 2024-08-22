<template>
  <header class="fixed top-0 w-full bg-white shadow-sm z-10">
    <div class="flex justify-between items-center max-w-4xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
      <router-link to="/" class="text-xl font-bold tracking-wider text-gray-800">
        Marley
      </router-link>
      <div class="flex items-center gap-2 p-2 rounded-lg bg-gray-100 shadow-sm">
        <Avatar :shape="'circle'" image="/doctor.png" label="A" size="sm" />
        <p class="text-gray-600 text-sm hidden sm:block">{{ session.user }}</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Avatar } from 'frappe-ui';
import { session } from '../data/session';
import { RouterLink } from 'vue-router'; // Import RouterLink
</script>

<style scoped>
/* Optional custom styles */
</style>
