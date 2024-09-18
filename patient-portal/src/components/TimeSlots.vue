<template>
  <div class="p-5 mt-2 w-1/3">
    <h2 class="text-lg font-bold mb-4">Time Slots</h2>

    <!-- Ensure you're accessing .value in v-if -->
    <div v-if="selectedDate.value" class="text-center">Select a date to see available slots</div>
    <div v-else-if="post.error" class="text-center text-red-500">{{ post.error.message }}</div>
    <div v-else-if="slotDetails.length > 0 && slotDetails[0]?.avail_slot.length > 0" class="grid grid-cols-3 gap-2">
      <button v-for="slot in slotDetails[0]?.avail_slot" :key="slot.name"
        @click="selectTimeSlot(formatTime(slot.from_time))" :class="{
          'bg-blue-500 text-white': selectedTimeSlot === formatTime(slot.from_time),
          'border-blue-300 text-dark': selectedTimeSlot !== formatTime(slot.from_time),
          'hover:border-gray-700': true
        }" class="w-32 border py-2 px-1 rounded-md items-center text-sm flex justify-between gap-1">
        <span class="whitespace-nowrap">{{ formatTime(slot.from_time) }} - {{ formatTime(slot.to_time) }}</span>
        <span class="" style="font-size: 8px;">&#x1F7E2;</span>
      </button>
    </div>

    <!-- Book Button -->
    <div class="flex justify-center">
      <button v-if="selectedTimeSlot" @click="goToNextStep"
        class="w-52 mt-5 p-2 rounded-md border-blue-300 border bg-blue-500 text-white font-medium text-center cursor-pointer hover:border-white">
        Book
      </button>
    </div>
  </div>
</template>

<script setup>
import { createResource } from 'frappe-ui'
import { ref, computed, inject, watch } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// Inject the selected date from the parent component
const selectedTimeSlot = ref('')

// Use the .value property in watch and conditionals
const selectedDate = inject('selectedDate', ref(new Date().toISOString().split('T')[0]))


// Define the resource with Authorization header
const post = createResource({
  url: 'https://demo-earthians.frappe.cloud/api/method/healthcare.healthcare.doctype.patient_appointment.patient_appointment.get_availability_data',
  method: 'GET',
  params: {
    date: selectedDate.value,
    practitioner: 'HLC-PRAC-2024-00001',
    appointment: JSON.stringify({
      doctype: "Patient Appointment",
      practitioner: "HLC-PRAC-2024-00001"
    })
  },
  headers: {
    'Authorization': 'token 1557a1f5525e986:30392d6357339c5'
  },
  cache: false
});

// Fetch data when component is mounted
post.fetch()

// Automatically re-fetch data when the selected date changes
watch(() => selectedDate.value, (newValue) => {
  selectedTimeSlot.value = '' // Clear selected time slot on date change
  console.log("Selected date changed to:", newValue);
  post.fetch();
});

// Computed property to get slot details
const slotDetails = computed(() => post.data?.slot_details || [])

// Function to select a time slot
function selectTimeSlot(fromTime) {
  selectedTimeSlot.value = fromTime
}

// Function to format the time from 24-hour to 12-hour format
function formatTime(time) {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const minute = parseInt(minutes)
  const period = hour >= 12 ? 'PM' : 'AM'
  const formattedHour = hour % 12 || 12
  return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${period}`.replace(/:00 /g, ' ')
}

// Function to proceed to the next step
function goToNextStep() {
  toast("Success!", { theme: "light", type: "info" })
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #e5e5e5;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #f7fafc;
}
</style>
