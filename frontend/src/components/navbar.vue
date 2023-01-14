<template>
    <div class="navbar">
        <el-button size="large" type="primary" @click="handleRedirect('')">Demo</el-button>
        <div>
        <el-button :icon="Comment" size="large" type="primary" @click="handleRedirect('posts')">查看貼文</el-button>
        <el-button size="large" type="primary" @click="connectWallet()">Connect Wallet</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Comment } from '@element-plus/icons-vue'
import { useEtherStore } from '@/stores/etherStore'
const etherStore = useEtherStore()


const handleRedirect = (keyword: string) => {
    window.location.href = `/${keyword}`
}

const connectWallet = () => {
    etherStore.initialize()
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  background-color: #409eff;
}
</style>