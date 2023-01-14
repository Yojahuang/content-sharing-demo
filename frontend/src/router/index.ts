import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";

let history = createWebHistory();
let routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/posts",
        name: "Post",
        component: Post,
    },
];

export default createRouter({ history, routes });