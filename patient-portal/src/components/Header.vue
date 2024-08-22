<template>
  <header class="fixed top-0 w-full bg-white shadow-sm z-10">
    <div class="flex justify-between items-center max-w-6xl mx-auto h-16 px-5">
      <router-link to="/" class="text-xl font-bold tracking-wider text-gray-800">
        Marley
      </router-link>
      <div class="flex gap-2 p-2 rounded-lg bg-gray-100 shadow-sm items-center">
        <Avatar :shape="'circle'" image="/doctor.png" label="A" size="md" />
        <p class="text-gray-600 text-sm">{{ session.user }}</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Avatar } from 'frappe-ui';
import { session } from '../data/session';
import { RouterLink } from 'vue-router'; // Import RouterLink
</script>
