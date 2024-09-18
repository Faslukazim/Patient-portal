<template>
    <mHeader />
    <div class="w-screen font-sans flex justify-center">
        <div class="w-full lg:w-[900px] flex flex-col h-full mt-28 shadow-sm border border-gray-50 rounded-md">
            <div class="flex-1 overflow-auto p-5">
                <h1 class="text-gray-900 text-2xl font-medium">Book an appointment</h1>
                <h2 class="text-gray-800 mt-10 font-medium text-xl">Specialization:</h2>

                <!-- Loop for displaying specializations -->
                <div class="mt-5 flex gap-3 overflow-x-auto scrollbar-hide flex-wrap sm:flex-nowrap">
                    <div v-for="Department in specializationList" :key="Department.department" :class="[
                        'cursor-pointer p-2 flex-shrink-0 items-center flex justify-center w-full sm:w-fit text-base font-medium shadow-sm rounded-md transition-transform hover:scale-95',
                        {
                            'bg-black text-white': selectedDepartment === Department.department,
                            'bg-gray-100 text-gray-800': selectedDepartment !== Department.department,
                        },
                    ]" @click="selectDepartment(Department.department)">
                        {{ Department.department }}
                    </div>
                </div>

                <!-- Loop for displaying doctors -->
                <div class="mt-5 flex gap-3 overflow-x-auto scrollbar-hide flex-wrap sm:flex-nowrap">
                    <div v-for="Doctor in filteredPractitioners" :key="Doctor.practitioner_name" :class="[
                        'cursor-pointer w-full sm:w-52 h-auto p-2 flex-col flex-shrink-0 items-center flex justify-center text-gray-800 shadow-sm hover:bg-gray-50 border transition-transform hover:scale-105 rounded-md gap-2',
                        {
                            'bg-gray-100': selectedDoctor === Doctor.practitioner_name,
                        },
                    ]" @click="selectDoctor(Doctor.practitioner_name)">
                        <img class="h-20 w-24 bg-gray-50 rounded-md" :src="Doctor.image" alt="" />
                        <span class="text-xl font-medium tracking-wider">{{ Doctor.practitioner_name }}</span>
                        <span class="text-xs font-medium tracking-wider">{{ Doctor.designation }}</span>
                    </div>
                </div>

                <!-- Next button -->
                <div v-if="selectedDoctor" class="mt-2 flex justify-end">
                    <Button variant="solid" size="sm" @click="bookAppointment">Next</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { createListResource, Button } from 'frappe-ui'
import mHeader from '../components/Header.vue'

const router = useRouter()
const selectedDoctor = ref('')
const selectedDepartment = ref('')

// Resources to fetch departments and practitioners
const specializationResource = createListResource({
    doctype: 'Healthcare Practitioner',
    fields: ['department'],
    auto: false
})

const PractResource = createListResource({
    doctype: 'Healthcare Practitioner',
    fields: ['name', 'practitioner_name', 'image', 'department', 'designation'],
    auto: false
})

// Fetch the list of specializations on mount
onMounted(async () => {
    await specializationResource.list.fetch()
    await PractResource.list.fetch()
})

// List of unique departments
const specializationList = computed(() => {
    const allDepartments = specializationResource.list.data || []
    const uniqueDepartments = Array.from(new Set(allDepartments.map(dept => dept.department)))
    return uniqueDepartments.map(department => ({ department }))
})

// Filtered list of practitioners based on selected department
const filteredPractitioners = computed(() => {
    return selectedDepartment.value
        ? PractResource.list.data.filter(pract => pract.department === selectedDepartment.value)
        : PractResource.list.data
})

// Select a department and filter doctors
function selectDepartment(department) {
    selectedDepartment.value = department
}

function selectDoctor(doctorName) {
    selectedDoctor.value = doctorName
}

// Navigate to the next step
function bookAppointment() {
    router.push({
        path: '/home',
        query: {
            department: selectedDepartment.value,
            doctor: selectedDoctor.value,
        },
    })
}
</script>
