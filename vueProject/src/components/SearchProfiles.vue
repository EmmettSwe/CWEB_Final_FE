<script setup>

import {onMounted, ref} from "vue";

const users = ref([])

onMounted(() => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "");
  myHeaders.append("X-Requested-With", "XmlHttpRequest");
  myHeaders.append("Origin", "http://localhost:3000");
  myHeaders.append("Content-Type", "application/json; charset=utf-8");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch("http://localhost:3000/user", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        users.value = result;
        users.value = users.value.reverse();
      })
      .catch((error) => console.error(error));
})

</script>

<template>
  <h1 class="text-2xl font-bold m-2">Search Profiles</h1>
  <ul v-for="user in users">
    <li>
      <p class="text-lg m-2">
        <RouterLink :to="`/profile/${user.userID}`">
          {{user.firstName}} {{user.lastName}}
        </RouterLink>
      </p>
    </li>
  </ul>
</template>

<style scoped>

</style>