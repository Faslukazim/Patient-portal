<template>
  <div class="p-4 min-w-[450px] mx-auto bg-white shadow-sm rounded-lg h-[400px]">
    <!-- Header -->
    <div class="flex justify-center gap-5 items-center mb-4">
      <button @click="prevMonth" class="text-gray-700 bg-gray-200 h-8 w-8 rounded-full hover:bg-gray-300 text-lg">
        &lt;
      </button>
      <div class="text-lg font-semibold">{{ monthYear }}</div>
      <button @click="nextMonth" class="text-gray-700 bg-gray-200 h-8 w-8 rounded-full hover:bg-gray-300 text-lg">
        &gt;
      </button>
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
          'bg-black text-white cursor-default font-medium': activeDay === day,
          'bg-gray-300 text-gray-700 cursor-default': isToday(day) && activeDay !== day, // Highlight today's date
          'text-gray-700': !isPast(day) && !isToday(day) && activeDay !== day,
          'text-gray-400 cursor-default': isPast(day), // Cursor default for past days
        },
      ]" @click="!isPast(day) && activeDay !== day && selectDay(day)">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const activeDay = ref(null)
const today = ref(new Date())

const days = computed(() => {
  const startOfMonth = new Date(currentYear.value, currentMonth.value, 1)
  const endOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0)
  const startDay = startOfMonth.getDay()
  const totalDays = endOfMonth.getDate()

  const daysArray = []
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i)
  }

  return [...Array(startDay).fill(''), ...daysArray]
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
  const selectedDate = new Date(currentYear.value, currentMonth.value, day)
  activeDay.value = day
  console.log(selectedDate.toDateString())
}
</script>

<style scoped>
/* Optional custom styles */
</style>
