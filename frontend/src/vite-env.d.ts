/// <reference types="vite/client" />
import { MetaMaskInpageProvider } from "@metamask/providers";

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare global {
    interface Window{
        ethereum?:MetaMaskInpageProvider
    }
}