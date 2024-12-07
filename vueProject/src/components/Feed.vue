<script setup>

import {onMounted, reactive, ref} from "vue";
import Recipe from "@/components/Recipe.vue";

let recipes = ref([])

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

  fetch("http://localhost:3000/recipe", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        recipes.value = result;
      })
      .catch((error) => console.error(error));
})


</script>

<template>
  <h1 class="text-2xl font-bold m-2 mb-4">My Feed</h1>
  <RouterLink class="btn m-2 bg-red-500 hover:bg-red-400 p-2 rounded text-white" to="#">Create new Recipe</RouterLink>


  <Recipe v-for="recipe in recipes" :key="recipe.recipeID" :recipe="recipe" />
</template>

<style scoped>

</style>