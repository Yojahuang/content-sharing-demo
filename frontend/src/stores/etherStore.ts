import { defineStore } from "pinia";
import { ethers } from "ethers";
import contractABI from '@/assets/contractABI.json'
import Post from "@/types/Post"
import { toRaw } from "vue"

export const useEtherStore = defineStore("ether", {
    state: () => {
        return {
            provider: null as any,
            signer: null as any,
            contractAddress: "",
            contractABI: [] as any[],
            contract: null as any,
        }
    },
    actions: {
        async initialize() {
            this.provider = new ethers.providers.Web3Provider(window.ethereum, "any")
            await this.provider.send("eth_requestAccounts", []);
            this.signer = this.provider.getSigner();
            console.log(this.signer)
            this.contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
            this.contractABI = contractABI
            this.contract = new ethers.Contract(toRaw(this.contractAddress), 
                toRaw(this.contractABI), 
                toRaw(this.signer)
            );
            console.log(this.contract)
        },
        async addPost(post: Post) {
            await this.initialize()
            const txSigner = await toRaw(this.contract).connect(toRaw(this.signer))
            await txSigner.addPost(post.title, post.metaURL, post.description)
        },
        async getPosts() {
            await this.initialize()
            console.log(this.contract)
            return await toRaw(this.contract).getAllPost()
        }
    },
})