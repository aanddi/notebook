import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, './public'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()]
})