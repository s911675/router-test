import {fileURLToPath, URL} from "url";

import {defineConfig} from 'vite'

import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [vue(), eslintPlugin()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },

    build: {
        rollupOptions: {
            // https://rollupjs.org/guide/en/#outputmanualchunks
            output: {
                manualChunks: {
                    'group-user': [
                        './src/about/AboutView.vue',
                        './src/home/BrazilView.vue',
                    ],
                },
            },
        },
        assetsInlineLimit: 4096, // 0 : off
        cssCodeSplit: true,
        sourcemap: false, // true, inline, hidden

    },
})
