<script setup lang="ts">
import Navbar from "@/components/navbar.vue"
import uploadPostDialog from "@/components/uploadPostDialog.vue"
</script>

<template>
  <Navbar />
  <uploadPostDialog />
  <router-view />
</template>


<style scoped>
</style>