import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        dir: `./dist/${version}/`,
        entryFileNames: 'plugin.js',
        assetFileNames: 'plugin.css',
        chunkFileNames: "chunk.js",
        manualChunks: undefined,
      },
    },
  },
})
