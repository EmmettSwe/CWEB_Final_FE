<script setup>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SignUp from "@/components/SignUp.vue";
</script>

<template>
  <div class="container bg-white">
    <Navbar />

    <SignUp />

    <Footer />
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  height: 100vh;
  margin: 0 auto;
}
</style>
