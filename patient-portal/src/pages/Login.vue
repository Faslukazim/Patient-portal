<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <Card title="Signup for your FrappeUI App!" class="w-full max-w-md">
      <form class="flex flex-col space-y-2 w-full" @submit.prevent="submit">
        <Input required name="fullName" type="text" placeholder="John Doe" label="Full Name" v-model="full_name" />
        <Input required name="email" type="email" placeholder="johndoe@email.com" label="Email" v-model="user_email" />
        <Input required name="mobile" type="number" placeholder="••••••" label="Mobile No" v-model="user_mobile" />
        <Button type="submit" variant="solid">Signup</Button>
      </form>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { createListResource } from 'frappe-ui'
import { ref } from 'vue'

const full_name = ref('')
const user_email = ref('')
const user_mobile = ref('')

function submit() {
  const userList = createListResource({
    doctype: 'Patient',
    fields: ['first_name', 'email', 'mobile', 'invite_user'],
    auto: true,
    transform(d) {
      console.log(d)
    },
  })

  createUser()

  function createUser() {
    userList.insert
      .submit({
        first_name: full_name.value,
        email: user_email.value,
        mobile: user_mobile.value,
        invite_user: 1,
        sex: 'male',
      })
      .then((response) => {
        console.log('User created successfully', response)
      })
      .catch((error) => {
        console.error('Error creating user', error)
      })
  }
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
