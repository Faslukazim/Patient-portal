<template>
  <aside
    class="fixed bg-blue-200 text-gray-600 h-full min-w-fit p-5 flex justify-center"
  >
    <nav>
      <ul class="space-y-1 pt-6 text-md">
        <li class="flex gap-2 items-center bg-gray-100 rounded-md p-1">
          <img class="h-5" src="/grid.svg" alt="" />
          <p>Dashboard</p>
        </li>
        <li class="flex gap-2 items-center hover:bg-gray-100 rounded-md p-1">
          <img class="h-5" src="/calendar.svg" alt="" />
          <p>Appointments</p>
        </li>
        <li class="flex gap-2 items-center hover:bg-gray-100 rounded-md p-1">
          <img class="h-5" src="/user.svg" alt="" />
          <p>Profile</p>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<script setup></script>
