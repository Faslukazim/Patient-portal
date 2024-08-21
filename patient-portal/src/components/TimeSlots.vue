<template>
  <div class="w-fit h-fit p-2 border border-gray-50 rounded-md shadow-sm bg-white">
    <h3 class="text-md font-medium mb-3 whitespace-nowrap">Available Slots</h3>
    <div class="flex flex-col gap-4">
      <div v-for="slot in timeSlots" :key="slot" :class="[
        'p-0.5 items-center flex justify-center font-medium text-md cursor-pointer shadow-sm rounded-md',
        slot === selectedTimeSlot ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'
      ]" @click="selectTimeSlot(slot)">
        {{ slot }}
      </div>
    </div>
    <div v-if="selectedTimeSlot"
      class="mt-5 p-0.5 rounded-md bg-black text-white font-medium text-center cursor-pointer" @click="goToNextStep">
      Book
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const timeSlots = ref([
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
])
const selectedTimeSlot = ref('')

function selectTimeSlot(slot) {
  selectedTimeSlot.value = slot
  console.log('Selected Time Slot:', selectedTimeSlot.value)
}

function goToNextStep() {
  // Implement the action to be performed when "Next" is clicked
  console.log('Proceeding to the next step...')
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
