<script setup lang="ts">
import Post from "@/types/Post"
import { useEtherStore } from "@/stores/etherStore"
import { reactive, onMounted } from "vue"

const etherStore = useEtherStore()
const posts: Post[] = reactive([])

onMounted(async() => {
    const result = await etherStore.getPosts()
    console.log(result)

    for (let i = 0; i < result.length; ++i) {
        posts.push({
            title: result[i][0],
            metaURL: result[i][1],
            description: result[i][2],
        })
    }
})
</script>

<template>
    <div v-for="post in posts">
        <el-card :body-style="{ padding: '0px' }">
            <h3>{{ post.title }}</h3>
            <iframe :src="post.metaURL" width="640" height="480"></iframe>
            <div style="padding: 24px">
                {{ post.description }}
            </div>
        </el-card>
    </div>
</template>

<style scoped>
div {
    text-align: center;
    width: 700px;
    margin: auto;
    margin-bottom: 2px;
    margin-top: 2px;
}
</style>
