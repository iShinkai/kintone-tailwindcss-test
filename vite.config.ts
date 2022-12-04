import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.indexOf('css') > 0) {
            return 'css/style.css'
          }
          return `assets/[name].[ext]`
        },
        chunkFileNames: `js/[name].js`,
        entryFileNames: `js/[name].js`,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
