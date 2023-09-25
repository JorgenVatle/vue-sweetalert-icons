import { defineConfig } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        Vue()
    ],
    build: {
        lib: {
            entry: resolve(__dirname, './src/entry.js'),
            name: 'VueSweetalertIcons',
            fileName: 'vue-sweetalert-icons',
        },
        outDir: 'dist',
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                }
            }
        },
    }
})
