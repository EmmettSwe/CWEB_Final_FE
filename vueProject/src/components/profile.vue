<script setup>
import {onMounted, ref} from "vue";
import Recipe from "@/components/Recipe.vue";
import {useRouter} from "vue-router";
//TODO: shows all reciepes still

//Authorization
const router = useRouter();
let token = ref();
onMounted(() => {
  token.value = localStorage.getItem("token");
  if (token.value === undefined || token.value === null) {
    router.push("/login");
  }
})


let recipes = ref([])
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  recipe: {
    type: Object,
  }
})
let user;
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
  fetch(`http://localhost:3000/user/${props.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        user = result;
        console.log(user);
      })
      .catch((error) => console.error(error));

  fetch("http://localhost:3000/recipe", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        recipes.value = result;
        recipes.value = recipes.value.reverse();
      })
      .catch((error) => console.error(error));

})
</script>

<template>
  <div class="text-2xl font-bold m-auto content-center">
    <div v-if="user">
      <RouterLink class="btn  bg-red-500 hover:bg-red-400 p-2 rounded text-white" to="#">Edit Profile</RouterLink>
      <h1>{{user.firstName}} {{user.lastName}}</h1>
    </div>
    <div>
    <Recipe v-for="recipe in recipes" :key="items.recipeID" :recipe="recipe"/>
    </div>
  </div>
</template>

<style scoped>

</style>