<script setup>

import {ref} from "vue";

const loginUser = () => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "");
  myHeaders.append("X-Requested-With", "XmlHttpRequest");
  myHeaders.append("Origin", "http://localhost:3000");
  myHeaders.append("Content-Type", "application/json; charset=utf-8");

  const user = {
    username: username.value,
    password: password.value
  };

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(user),
    redirect: "follow"
  };

  fetch("http://localhost:3000/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        localStorage.setItem("token", result.token)

      })
      .catch((error) => console.error(error));
}

let username = ref("")
let password = ref("")

</script>

<template>
  <div class="bg-gray-900 text-gray-100 p-5 rounded-2xl">
    <h1 class="text-center title mb-2">Login</h1>
    <form class="flex flex-col" @submit.prevent="loginUser">

      <div class="m-5 flex justify-between">
        <label class="w-32" for="username">Username</label>
        <input v-model="username" class="w-60 text-black" type="text" name="username" id="username">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="password">Password</label>
        <input v-model="password" class="w-60 text-black" type="password" name="password" id="password">
      </div>

      <div class="m-5 flex justify-between">
        <button class="bg-gray-400 hover:bg-gray-300 rounded" type="submit">Submit</button>
      </div>
    </form>
  </div>
  <p class="text-center mt-2 signup">Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink></p>

</template>

<style scoped>
.signup {
  margin-bottom: 9rem;
}

.bg-gray-900 {
  width: 40%;
  margin: 9rem auto 0;
}

button {
  padding: 5px 8px;
  margin: 0 auto;
}

.title {
  font-size: 32px;
}
</style>