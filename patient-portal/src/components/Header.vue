<template>
  <header class="fixed top-0 w-full bg-white shadow-sm z-10">
    <div class="flex justify-between items-center max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
      <router-link to="/" class="text-xl font-bold tracking-wider text-gray-800">
        Marley
      </router-link>

      <!-- Search Bar Container -->
      <div class="flex gap-2">
        <div class="relative">
          <input type="text" placeholder="Search..."
            class="w-60 py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none"
            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35M14.65 14.65a7.5 7.5 0 1 0-10.6-10.6 7.5 7.5 0 0 0 10.6 10.6z" />
          </svg>
        </div>
        <div class="flex items-center gap-2 p-2 rounded-lg bg-gray-100 shadow-sm">
          <Avatar :shape="'circle'" image="/doctor.png" label="A" size="sm" />
          <p class="text-gray-600 text-sm hidden sm:block">{{ session.user }}</p>
        </div>
      </div>

      <!-- Profile Section -->

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
