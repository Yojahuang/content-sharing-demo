import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
    state: () => ({
        dialogShowUp: false,
    }),
})