<template>
  <div class="p-4 min-w-[450px] mx-auto bg-white  rounded-lg h-[400px]">
    <!-- Header -->
    <div class="flex justify-around items-center mb-4">

      <div class="text-xl font-semibold text-gray-800">{{ monthYear }}</div>
      <div class="flex">
        <button @click="prevMonth"
          class="text-gray-600 font-bold h-9 w-9 rounded-full hover:bg-gray-200 flex items-center justify-center">
          &lt;
        </button>
        <button @click="nextMonth"
          class="text-gray-600 font-bold h-9 w-9 rounded-full hover:bg-gray-200 flex items-center justify-center">
          &gt;
        </button>
      </div>

    </div>

    <!-- Weekdays -->
    <div class="grid grid-cols-7 gap-0 text-center text-gray-700 text-sm mb-1">
      <div class="py-1">Su</div>
      <div class="py-1">Mo</div>
      <div class="py-1">Tu</div>
      <div class="py-1">We</div>
      <div class="py-1">Th</div>
      <div class="py-1">Fr</div>
      <div class="py-1">Sa</div>
    </div>

    <!-- Days -->
    <div class="grid grid-cols-7 gap-0 text-center h-[calc(100%-76px)]">
      <div v-for="blank in blanks" :key="blank" class="h-full flex items-center justify-center"></div>
      <div v-for="day in days" :key="day" :class="[
        'h-10 w-10 flex items-center justify-center transition-colors rounded-full',
        {
          'cursor-pointer hover:bg-gray-300': !isPast(day) && !isToday(day) && activeDay !== day,
          'bg-blue-500 text-white cursor-default font-medium': activeDay === day,
          'bg-gray-300 text-gray-700 cursor-default': isToday(day) && activeDay !== day, // Highlight today's date
          'text-gray-700': !isPast(day) && !isToday(day) && activeDay !== day,
          'text-gray-400 cursor-default': isPast(day), // Cursor default for past days
        },
      ]" @click="!isPast(day) && activeDay !== day && selectDay(day)">
        {{ day }}
      </div>
    </div>

  </div>
  <div class="p-5 mt-2 min-w-[450px] ">
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
import { ref, computed, provide, inject, watch } from 'vue'
import { createResource } from 'frappe-ui'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const selectedTimeSlot = ref('')

// Use the .value property in watch and conditionals
const selectedDate = inject('selectedDate', ref(new Date().toISOString().split('T')[0]))

// Define the resource with Authorization header
const post = createResource({
  url: 'https://demo-earthians.frappe.cloud/api/method/healthcare.healthcare.doctype.patient_appointment.patient_appointment.get_availability_data',
  method: 'GET',
  params: {
    date: '2024-8-26',
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


const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const activeDay = ref(null)
const today = ref(new Date()) // This is dynamic and will always be today's date

const days = computed(() => {
  const startOfMonth = new Date(currentYear.value, currentMonth.value, 1)
  const endOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0)
  const startDay = startOfMonth.getDay()
  const totalDays = endOfMonth.getDate()

  const daysArray = []
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i)
  }

  return daysArray
})

const blanks = computed(() => {
  const startOfMonth = new Date(currentYear.value, currentMonth.value, 1)
  const startDay = startOfMonth.getDay()
  return startDay === 0 ? [] : Array(startDay).fill('')
})

const monthYear = computed(() => {
  return `${new Date(currentYear.value, currentMonth.value).toLocaleString(
    'default',
    { month: 'long' }
  )} ${currentYear.value}`
})

const isToday = (day) => {
  const date = new Date(currentYear.value, currentMonth.value, day)
  return (
    date.getDate() === today.value.getDate() &&
    date.getMonth() === today.value.getMonth() &&
    date.getFullYear() === today.value.getFullYear()
  )
}

const isPast = (day) => {
  const date = new Date(currentYear.value, currentMonth.value, day)
  return date < today.value && !isToday(day)
}

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value -= 1
  } else {
    currentMonth.value -= 1
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value += 1
  } else {
    currentMonth.value += 1
  }
}

function selectDay(day) {
  const date = new Date(currentYear.value, currentMonth.value, day)
  const localDate = date.toLocaleDateString('en-CA') // Use 'en-CA' for ISO format

  selectedDate.value = localDate
  activeDay.value = day
  fetchAvailability()
}

// Mock function to fetch availability data (replace with real API call)
function fetchAvailability() {
  console.log(`Fetching availability for ${selectedDate.value}...`)
  // Replace with actual fetch logic
}
// In Calendar.vue
provide('selectedDate', selectedDate)

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
