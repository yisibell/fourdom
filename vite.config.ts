import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isBuildLib = () => {
  return process.env.BUILD_TYPE === 'lib'
}

const outDir = isBuildLib() ? 'lib' : 'dist'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fourdom/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: isBuildLib()
    ? {
        outDir,
        target: 'es2015',
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(__dirname, 'src/lib/main.ts'),
          name: 'Fourdom',
          // the proper extensions will be added
          fileName: 'fourdom',
          formats: ['es', 'cjs', 'umd'],
        },
        // rollupOptions: {
        //   external: [],
        // },
        copyPublicDir: false,
        cssTarget: ['chrome35'],
      }
    : { outDir },
})
