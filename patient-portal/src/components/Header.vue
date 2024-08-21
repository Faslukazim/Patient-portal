<template>
  <div class="h-screen w-screen font-sans">
    <MHeader />
    <div class="flex h-full pt-15 overflow-auto overflow-x-hidden">
      <Sidebar />
      <div class="flex-1 overflow-auto p-5 ml-48 space-y-12">
        <h1 class="text-blue-900 text-2xl font-medium">Book an appointment</h1>
        <h2 class="text-gray-800 mt-10 font-medium text-xl">Specialization:</h2>

        <div class="mt-5 flex gap-3 overflow-x-auto scrollbar-hide">
          <div v-for="Department in specializationList" :key="Department.department" :class="[
            'cursor-pointer border-t-blue-600 p-8 flex-shrink-0 items-center flex justify-center w-fit text-gray-800 font-medium bg-blue-100 border-2 hover:bg-blue-300 rounded-md transition-transform hover:translate-y-1',
            {
              'border-t-red-600':
                selectedDepartment === Department.department,
              'bg-blue-300': selectedDepartment === Department.department,
            },
          ]" @click="selectDepartment(Department.department)">
            {{ Department.department }}
          </div>
        </div>

        <h2 class="text-gray-800 mt-10 font-medium text-xl">
          Available Doctors:
        </h2>
        <div class="mt-5 flex gap-3 overflow-x-auto scrollbar-hide">
          <div v-for="Doctor in PractList" :key="Doctor.practitioner_name" :class="[
            'cursor-pointer border-t-blue-600 p-8 flex-shrink-0 items-center flex justify-center w-fit text-gray-800 bg-blue-100 border-2 hover:bg-blue-300 transition-transform hover:translate-y-1 rounded-md',
            {
              'border-t-red-600': selectedDoctor === Doctor.practitioner_name,
              'bg-blue-300': selectedDoctor === Doctor.practitioner_name,
            },
          ]">
            <div class="flex flex-col gap-3" @click="selectedDoctor = Doctor.practitioner_name">
              <span class="text-xl font-medium tracking-wider">{{
            Doctor.practitioner_name
          }}</span>
            </div>
            <img class="h-40 rounded-full" :src="Doctor.image" alt="" />
            <Button variant="solid" @click="openModal = true">Book Appointment</Button>
          </div>
        </div>
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
import Sidebar from '../components/Sidebar.vue'
import MHeader from '../components/Header.vue'
import { createListResource, Button, Dialog, FormControl } from 'frappe-ui'
import { computed, ref, watch } from 'vue'

const openModal = ref(false)
const appointmentDate = ref('')
const selectedDoctor = ref('')
const selectedDepartment = ref('')

// Create a list resource for specializations
const specializationResource = createListResource({
  doctype: 'Healthcare Practitioner',
  fields: ['department'],
  auto: true,
})

// Filter the list to only unique departments
const specializationList = computed(() => {
  const allDepartments = specializationResource.list.data || []
  const uniqueDepartments = Array.from(
    new Set(allDepartments.map((dept) => dept.department))
  )
  return uniqueDepartments.map((dept) => ({ department: dept }))
})


const PractResource = createListResource({
  doctype: 'Healthcare Practitioner',
  fields: ['name', 'practitioner_name', 'image'],
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

function selectDepartment(department) {
  selectedDepartment.value = department
}

function confiRm() {
  console.log('Selected Doctor:', selectedDoctor.value)
  console.log('Selected Department:', selectedDepartment.value)
  console.log('Appointment Date:', appointmentDate.value)
  openModal.value = false
}
</script>
