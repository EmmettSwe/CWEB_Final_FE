<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
let token = ref();
//TODO: incomplete
onMounted(() => {
  token.value = localStorage.getItem("token");
  if (token.value === undefined || token.value === null) {
    router.push("/login");
  }
})

</script>

<template>
  <div class="bg-gray-900 text-gray-100 p-5 rounded-2xl">
    <h1 class="text-center title mb-2">Sign Up</h1>
    <form class="flex flex-col" @submit.prevent="createUser">
      <div class="m-5 flex justify-between">
        <label class="w-32" for="firstName">First Name</label>
        <input v-model="" class="w-60 text-black" type="text" name="firstName" id="firstName">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="lastName">Last Name</label>
        <input v-model="" class="w-60 text-black" type="text" name="lastName" id="lastName">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="username">Username</label>
        <input v-model="" class="w-60 text-black" type="text" name="username" id="username">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="password">Password</label>
        <input v-model="" class="w-60 text-black" type="password" name="password" id="password">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="confirm">Confirm Password</label>
        <input v-model="" class="w-60 text-black" type="password" name="confirm" id="confirm">
      </div>

      <div class="m-5 flex justify-between">
        <button class="bg-gray-400 hover:bg-gray-300 rounded" type="submit">Submit</button>
        <button class="bg-red-500 hover:bg-red-400 rounded" type="reset">Reset Form</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>