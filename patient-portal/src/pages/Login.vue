<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <Card title="Register for your Appointment!" class="w-full max-w-md">
      <form class="flex flex-col space-y-2 w-full" @submit.prevent="submit">
        <Input required name="firstName" type="text" placeholder="John" label="First Name" v-model="first_name" />
        <div class="flex items-center space-x-4 ml-3">
          <label>
            <input type="radio" name="gender" value="male" v-model="gender" required />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" v-model="gender" required />
            Female
          </label>
        </div>
        <Input required name="lastName" type="text" placeholder="Doe" label="Last Name" v-model="last_name" />
        <Input required name="email" type="email" placeholder="johndoe@email.com" label="Email" v-model="user_email" />
        <Input required name="mobile" type="number" placeholder="••••••" label="Mobile No" v-model="user_mobile" />
        <Button type="submit" variant="solid">Signup</Button>
      </form>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const first_name = ref('')
const last_name = ref('')
const gender = ref('') // Add gender state
const user_email = ref('')
const user_mobile = ref('')

const router = useRouter()

function submit() {
  // Create user (dummy functionality for now)
  console.log('Submitting user:', { first_name: first_name.value, last_name: last_name.value, gender: gender.value, user_email: user_email.value, user_mobile: user_mobile.value })

  // Show toast on success
  toast("Registration Successful!", { type: "success", theme: "light" })

  // Redirect to patient portal after 2 seconds
  setTimeout(() => {
    router.push('/')
  }, 2000)
}
</script>

<style scoped>
::v-deep input[type='number']::-webkit-outer-spin-button,
::v-deep input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

::v-deep input[type='number'] {
  -moz-appearance: textfield;
}
</style>
