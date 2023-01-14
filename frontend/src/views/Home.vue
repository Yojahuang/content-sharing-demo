<template>
    <div class="middle">
        <h1>Demo: Web3 of content sharing media</h1>
        <el-button type="primary" @click="dialogShowUp = true">Upload your own video</el-button>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore()
const { dialogShowUp } = storeToRefs(postStore)
</script>


<style scoped>
.middle {
    text-align: center;
}
</style>
