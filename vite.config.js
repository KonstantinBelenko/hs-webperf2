import { defineConfig } from 'vite'
import cssnano from 'cssnano'
import imagemin from 'vite-plugin-imagemin'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
  },
  plugins: [imagemin(), cssnano()],
})
