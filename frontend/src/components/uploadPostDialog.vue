<template>
    <el-dialog v-model="dialogShowUp" width="40%">
        <template #header>
            <h2 class="h2-middle">Upload Post</h2>
        </template>

        <el-form
            label-width="100px"
            :model="uploadPost"
        >
            <el-form-item label="title">
                <el-input v-model="uploadPost.title" />
            </el-form-item>
            <el-form-item label="metaURL">
                <el-input v-model="uploadPost.metaURL" />
                <b>Please make sure the link works when using as src of iframe</b>
            </el-form-item>
            <el-form-item label="Description">
                <el-input v-model="uploadPost.description" type="textarea" />
            </el-form-item>
        </el-form>

        <el-button type="primary" @click="sendPost()">Send</el-button>
    </el-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePostStore } from "@/stores/postStore"
import { useEtherStore } from "@/stores/etherStore"
import { reactive, toRaw } from "vue"
import Post from "@/types/Post"

const postStore = usePostStore()
const { dialogShowUp } = storeToRefs(postStore)

const etherStore = useEtherStore()

const uploadPost = reactive<Post>({
    title: "",
    metaURL: "",
    description: "",
})

const sendPost = async() => {
    await etherStore.addPost(toRaw(uploadPost))
    dialogShowUp.value = false
}
</script>

<style scoped>
.h2-middle {
    text-align: center;
}
</style>