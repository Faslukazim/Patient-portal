<template>
  <div class="w-screen font-sans flex justify-center">

    <MHeader />
    <div class="flex max-w-6xl h-full mt-28 shadow-sm border border-gray-50 rounded-md">
      <div class="flex-1 overflow-auto p-5">
        <!-- <h1 class="text-gray-900 text-2xl font-medium">Selected:</h1> -->
        <!-- <h2 class="text-gray-800 mt-10 font-medium text-xl">Specialization:</h2> -->



        <div class="mt-5 flex gap-3 overflow-x-auto scrollbar-hide">
          <div v-for="Doctor in PractList" :key="Doctor.practitioner_name" :class="[
            'cursor-pointer w-52 h-52 p-1 flex-col flex-shrink-0 items-center flex justify-center  text-gray-800 shadow-sm hover:bg-gray-50 border transition-transform hover:scale-105 rounded-md gap-2',
            {
              'bg-gray-100': selectedDoctor === Doctor.practitioner_name,
            },
          ]">

            <img class="h-20 w-16 bg-gray-50 rounded-md" :src="Doctor.image" alt="" />
            <span class="text-xl font-medium tracking-wider">{{
            Doctor.practitioner_name
          }}</span>
            <!-- <span class="text-sm font-medium tracking-wider">{{
              Doctor.name
            }}</span> -->
            <span class="text-md font-medium tracking-wider">{{
              Doctor.department
            }}</span>
            <!-- <Button variant="outline" size="sm" @click="booking = true">Book Appointment</Button> -->
          </div>
        </div>
      </div>

      <div class="flex gap-5 transition-all">
        <Calendar class="w-full h-full" />

        <TimeSlots />
      </div>
    </div>

    <Dialog v-model="openModal">
      <template #body-title>
        <h3 class="font-medium">Book Appointment</h3>
      </template>
      <template #body-content>
        <div class="p-2">
          <FormControl type="date" size="sm" variant="subtle" placeholder="Select date" v-model="appointmentDate"
            label="Appointment Date" />
        </div>
      </template>
      <template #actions>
        <Button variant="solid" @click="confiRm">Confirm</Button>
        <Button class="ml-2" @click="openModal = false">Close</Button>
      </template>
    </Dialog>
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

const specializationResource = createListResource({
  doctype: 'Healthcare Practitioner',
  fields: ['department'],
  auto: true,
})

const specializationList = computed(() => {
  const allDepartments = specializationResource.list.data || []
  const uniqueDepartments = Array.from(
    new Set(allDepartments.map((dept) => dept.department))
  )
  return uniqueDepartments.map((dept) => ({ department: dept }))
})

const PractResource = createListResource({
  doctype: 'Healthcare Practitioner',
  fields: ['name', 'practitioner_name', 'image', 'department'],
  auto: true,
  filters: {
    department: selectedDepartment.value,
  },
})

const PractList = computed(() => {
  return PractResource.list.data || []
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