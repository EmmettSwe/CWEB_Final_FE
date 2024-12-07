<script setup>

</script>

<template>
  <nav class="flex p-5 bg-gray-900 text-gray-100 justify-between ">
    <div class="flex items-center">
      <a href="/" class="title font-bold p-2">RecipeBook</a>
      <ul class="flex pl-5">
        <li class="p-2 hover:text-gray-400"><RouterLink to="#">Create Recipe</RouterLink></li>
        <li class="p-2 hover:text-gray-400"><RouterLink to="#">My Profile</RouterLink></li>
        <li class="p-2 hover:text-gray-400"><RouterLink to="#">Search Profiles</RouterLink></li>
      </ul>
    </div>

    <RouterLink to="/login" class="btn bg-red-500 hover:bg-red-400 p-2 rounded">Login</RouterLink>
  </nav>

</template>

<style scoped>
.title {
  font-size: 18px;
}

nav {
  border: #2c3e50 1px solid;
}
</style>