<script setup>

import {onMounted, ref, watch} from "vue";

const props = defineProps({
  recipe: {
    type: Object,
  },
  id:{
    type: String,
  }
})

watch(
    () => props.recipe?.owner, () => {
      let newOwnerId = props.recipe?.owner;
      if (newOwnerId) {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "");
        myHeaders.append("X-Requested-With", "XmlHttpRequest");
        myHeaders.append("Origin", "http://localhost:3000");
        myHeaders.append("Content-Type", "application/json; charset=utf-8");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        // Fetch the owner data from the backend
        fetch(`http://localhost:3000/user/${newOwnerId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              owner.value = result; // Update the `owner` reactive variable
            })
            .catch((error) => console.error(error));
      }
    },
    { immediate: true }
)

let owner = ref()

</script>

<template>

  <div class="bg-gray-900 text-gray-100 p-5 rounded-2xl m-5">
    <h1 class="text-3xl ml-5 font-bold mb-1"><RouterLink :to="`/recipe/${recipe.recipeID}`">{{recipe.title}}</RouterLink></h1>
    <p v-if="owner" class="text-sm ml-5">Created by {{owner.firstName}} {{owner.lastName}}</p>
    <p class="text-sm ml-5">Upload date: {{new Date(recipe.uploadDate).toLocaleDateString()}}</p>
    <br>
    <p class="ml-5">Calories: {{recipe.calories}}</p>
    <p class="ml-5">Estimated time: {{recipe.estimatedTime}}</p>
    <br>
    <h3 class="ml-5 text-xl">Ingredients:</h3>
    <ul class="ml-5 list-disc" v-for="item in recipe.ingredients.split(', ')">
      <li class="ml-5">{{item}}</li>
    </ul>
    <br>
    <h3 class="ml-5 text-xl">Steps:</h3>
    <ul class="ml-5 list-disc" v-for="item in recipe.steps.split(', ').slice(0,2)">
      <li class="ml-5">{{item}}</li>
    </ul>
    <br>
    <p v-if="recipe.steps.split(', ').length > 2"><RouterLink :to="`/recipe/${recipe.recipeID}`">See more</RouterLink></p>
  </div>
</template>

<style scoped>
div {
  width: 60%;
}
</style>