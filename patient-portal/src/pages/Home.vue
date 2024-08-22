<template>
  <div class="w-screen font-sans flex flex-col lg:flex-row justify-center">
    <MHeader />
    <div class="flex flex-col lg:flex-row max-w-6xl h-full mt-28 shadow-sm border border-gray-50 rounded-md">
      <div class="flex-1 overflow-auto p-5">
        <div class="mt-5 flex justify-center flex-wrap gap-3 overflow-x-auto scrollbar-hide">
          <div v-for="Doctor in filteredPractList" :key="Doctor.practitioner_name" :class="[
            'cursor-pointer w-full sm:w-52 h-52 p-1 flex-col flex-shrink-0 items-center flex justify-center text-gray-800 shadow-sm hover:bg-gray-50 border transition-transform hover:scale-105 rounded-md gap-2',
            {
              'bg-gray-100': selectedDoctor === Doctor.practitioner_name,
            },
          ]">
            <img class="h-20 w-16 bg-gray-50 rounded-md" :src="Doctor.image" alt="" />
            <span class="text-lg font-medium tracking-wider">{{ Doctor.practitioner_name }}</span>
            <span class="text-xs font-medium tracking-wider">{{ Doctor.name }}</span>

            <span class="text-xs font-medium tracking-wider">{{ Doctor.department }}</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col   md:flex-row gap-5 p-5 lg:p-0 transition-all">
        <Calendar class="w-full lg:w-1/2  h-full" />
        <TimeSlots class="w-full lg:w-1/2  h-full" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import Calendar from '../components/Calendar.vue'
import MHeader from '../components/Header.vue'
import TimeSlots from '../components/TimeSlots.vue'
import { createListResource, Button, Dialog, FormControl } from 'frappe-ui'
import { useRoute } from 'vue-router'

const openModal = ref(false)
const appointmentDate = ref('')
const booking = ref(false)

const route = useRoute()
const selectedDoctor = computed(() => route.query.doctor || '')
const selectedDepartment = computed(() => route.query.department || '')

const PractResource = createListResource({
  doctype: 'Healthcare Practitioner',
  fields: ['name', 'practitioner_name', 'image', 'department'],
  auto: true,
})

const PractList = computed(() => {
  const data = PractResource.list.data
  console.log('PractList data:', data)
  return Array.isArray(data) ? data : [] // Ensure PractList is always an array
})

// Filter PractList based on selectedDoctor
const filteredPractList = computed(() => {
  console.log('Selected Doctor:', selectedDoctor.value)
  console.log('Selected Department:', selectedDepartment.value)
  if (!Array.isArray(PractList.value)) {
    console.error('PractList is not an array:', PractList.value)
    return []
  }
  // Filter to only show the selected doctor if selectedDoctor is not empty
  return PractList.value.filter(Doctor => Doctor.practitioner_name === selectedDoctor.value)
})

watch(selectedDepartment, (newVal) => {
  if (PractResource.list && PractResource.list.params) {
    PractResource.list.params.filters.department = newVal
    PractResource.list.fetch()
  }
})

function confiRm() {
  console.log('Selected Doctor:', selectedDoctor.value)
  console.log('Selected Department:', selectedDepartment.value)
  console.log('Appointment Date:', appointmentDate.value)
  openModal.value = false
}
</script>

<style scoped>
/* Optional custom styles */
</style>
