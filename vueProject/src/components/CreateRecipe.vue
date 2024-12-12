<script setup>

import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
let token = ref();


onMounted(() => {
  token.value = localStorage.getItem("token");
  if (token.value === undefined || token.value === null) {
    router.push("/login");
  }
})

const createRecipe = () => {
  if (!formValidation()){
    console.log(errors)
    return;
  }
  const myHeaders = new Headers();
  myHeaders.append("Accept", "");
  myHeaders.append("X-Requested-With", "XmlHttpRequest");
  myHeaders.append("Origin", "http://localhost:3000");
  myHeaders.append("Content-Type", "application/json; charset=utf-8");
  myHeaders.append("Authorization", token);

  const recipe = {
    title: title.value,
    calories: calories.value,
    estimatedTime: estimatedTime.value,
    ingredients: ingredients.value,
    steps: steps.value
  };

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(recipe),
    redirect: "follow"
  };
  console.log("Fetch token is: " + token);
  fetch("http://localhost:3000/recipe", requestOptions)
      .then((response) => response.text())
      .then((result) => router.push("/"))
      .catch((error) => console.error(error));
}

let title = ref("")
let calories = ref("")
let estimatedTime = ref("")
let ingredients = ref("")
let steps = ref("")

let errors = ref({
  title: "",
  calories: "",
  estimatedTime: "",
  ingredients: "",
  steps: ""
})

const formValidation = () => {
  let valid = true
  errors.value = {
    calories: "",
    estimatedTime: "",
    ingredients: "",
    steps: "",
    title: ""
  }

  if ((title.value ===  "")) {
    errors.title = "Please enter a title"
    valid = false
  }
  if ((calories.value ===  "")) {
    errors.calories = "Please enter a value for calories"
    valid = false
  }
  if ((estimatedTime.value ===  "")) {
    errors.estimatedTime = "Please enter a time estimate"
    valid = false
  }
  if ((ingredients.value ===  "")) {
    errors.ingredients = "Please enter ingredients"
    valid = false
  }
  return valid;
}
</script>

<template>
  <p>
    <b>Please correct the following error(s):</b>
    <ul>
      <li >{{errors.title}}</li>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <div class="bg-gray-900 text-gray-100 p-5 rounded-2xl">
    <h1 class="text-center title mb-2">Create New Recipe</h1>
    <form class="flex flex-col" @submit.prevent="createRecipe">
      <div class="m-5 flex justify-between">
        <label class="w-32" for="title">Title</label>
        <input v-model="title" class="w-60 text-black" type="text" name="title" id="title"/>
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="calories">Calories</label>
        <input v-model="calories" class="w-60 text-black" type="text" name="calories" id="calories">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="estimatedTime">Estimated Time</label>
        <input v-model="estimatedTime" class="w-60 text-black" type="text" name="estimatedTime" id="estimatedTime">
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="ingredients">Ingredients</label>
        <textarea v-model="ingredients" class="w-60 text-black" name="ingredients" id="ingredients"></textarea>
      </div>

      <div class="m-5 flex justify-between">
        <label class="w-32" for="steps">Steps</label>
        <textarea v-model="steps" class="w-60 text-black" name="steps" id="steps"></textarea>
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

input {
  padding: 1px 2px;
}

.title {
  font-size: 32px;
}
</style>