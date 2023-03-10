const aliases = require('./aliases.config')

import { defineConfig } from 'vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    root: 'src',
    server: {
        open: true
    },
    resolve: {
        alias: aliases
    },
    plugins: [
        ViteEjsPlugin(),
        vue()
    ],
    css: {
        postcss: { path: false }
    }
})