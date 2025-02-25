import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true
    }),
  ],
  test: {
    globals: true,
    setupFiles: ['./setup.ts'],
    environment: 'happy-dom',
  },
})