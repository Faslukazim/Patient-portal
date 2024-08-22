<template>
    <div class="w-screen font-sans flex justify-center">
        <MHeader />
        <div class="flex max-w-6xl h-full mt-28 shadow-sm border border-gray-50 rounded-md">
            <div class="flex-1 overflow-auto p-5">
                <h1 class="text-gray-900 text-2xl font-medium">Book an appointment</h1>
                <h2 class="text-gray-800 mt-10 font-medium text-xl">Specialization:</h2>

                <div class="mt-5 flex gap-3 overflow-x-auto scrollbar-hide">
                    <!-- Loop for displaying specializations -->

                    <div v-for="Department in specializationList" :key="Department.department" :class="[
                        'cursor-pointer p-2 flex-shrink-0 items-center flex justify-center w-fit text-gray-800 font-medium text-base shadow-sm hover:bg-gray-200 bg-gray-100 rounded-md transition-transform hover:scale-95',
                        {
                            'bg-gray-100': selectedDepartment === Department.department,
                        },
                    ]" @click="selectDepartment(Department.department)">
                        {{ Department.department }}
                    </div>

                </div>

                <div class="mt-5 flex gap-3 overflow-x-auto scrollbar-hide">
                    <!-- Loop for displaying doctors -->

                    <div v-for="Doctor in PractList" :key="Doctor.practitioner_name" :class="[
                        'cursor-pointer w-52 h-52 p-1 flex-col flex-shrink-0 items-center flex justify-center text-gray-800 shadow-sm hover:bg-gray-50 border transition-transform hover:scale-105 rounded-md gap-2',
                        {
                            'bg-gray-100': selectedDoctor === Doctor.practitioner_name,
                        },
                    ]" @click="selectDoctor(Doctor.practitioner_name)">
                        <img class="h-20 w-16 bg-gray-50 rounded-md" :src="Doctor.image" alt="" />
                        <span class="text-xl font-medium tracking-wider">{{ Doctor.practitioner_name }}</span>
                    </div>

                </div>

                <div v-if="selectedDoctor" class="mt-2 flex justify-end">
                    <Button variant="solid" size="sm" @click="bookAppointment">Next</Button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { createListResource, Button } from 'frappe-ui'
import MHeader from '../components/Header.vue'

const router = useRouter()
const selectedDoctor = ref('')
const selectedDepartment = ref('')
const booking = ref(false)

const specializationResource = createListResource({
    doctype: 'Healthcare Practitioner',
    fields: ['department'],
    auto: false,
})

const PractResource = createListResource({
    doctype: 'Healthcare Practitioner',
    fields: ['name', 'practitioner_name', 'image'],
    auto: false,
    filters: {
        department: selectedDepartment.value,
    },
})

const specializationList = computed(() => {
    const allDepartments = specializationResource.list.data || []
    const uniqueDepartments = Array.from(new Set(allDepartments.map(dept => dept.department)))
    return uniqueDepartments.map(department => ({ department }))
})

const PractList = computed(() => PractResource.list.data || [])

watch(selectedDepartment, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        PractResource.list.params.filters.department = newVal
        PractResource.list.fetch()
    }
})


specializationResource.list.fetch()

function selectDepartment(department) {
    selectedDepartment.value = department
}

function selectDoctor(doctorName) {
    selectedDoctor.value = doctorName
}

function bookAppointment() {
    booking.value = true
    router.push({
        path: '/home',
        query: {
            department: selectedDepartment.value,
            doctor: selectedDoctor.value,
        },
    })
}
</script>
