<script setup>

import {ref} from "vue";

const createUser = () => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "");
  myHeaders.append("X-Requested-With", "XmlHttpRequest");
  myHeaders.append("Origin", "http://localhost:3000");
  myHeaders.append("Content-Type", "application/json; charset=utf-8");

  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    username: username.value,
    password: password.value
  };

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(user),
    redirect: "follow"
  };
  const router =
  fetch("http://localhost:3000/user", requestOptions)
      .then((response) => response.text())
      .then((result) => route.push("/login"))
      .catch((error) => console.error(error));
}

let firstName = ref("")
let lastName = ref("")
let username = ref("")
let password = ref("")
let confirm = ref("")




</script>

<template>
  <div class="bg-gray-900 text-gray-100 p-5 rounded-2xl">
    <h1 class="text-center title mb-2">Sign Up</h1>
    <form class="flex flex-col" @submit.prevent="createUser">
      <div class="m-5 flex justify-between">
        <label class="w-32" for="firstName">First Name</label>
        <input v-model="firstName" class="w-60 text-black" type="text" name="firstName" id="firstName">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="lastName">Last Name</label>
        <input v-model="lastName" class="w-60 text-black" type="text" name="lastName" id="lastName">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="username">Username</label>
        <input v-model="username" class="w-60 text-black" type="text" name="username" id="username">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="password">Password</label>
        <input v-model="password" class="w-60 text-black" type="password" name="password" id="password">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="confirm">Confirm Password</label>
        <input v-model="confirm" class="w-60 text-black" type="password" name="confirm" id="confirm">
      </div>

      <div class="m-5 flex justify-between">
        <button class="bg-gray-400 hover:bg-gray-300 rounded" type="submit">Submit</button>
        <button class="bg-red-500 hover:bg-red-400 rounded" type="reset">Reset Form</button>
      </div>
    </form>
  </div>

</template>

<style scoped>
.bg-gray-900 {
  width: 50%;
  margin: 5rem auto;
}

button {
  padding: 5px 8px;
  margin: 0 auto;
}

.title {
  font-size: 32px;
}
</style>