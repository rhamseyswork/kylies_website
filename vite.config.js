import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';

// run package config
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  // define process env
  define: {
    'process.env': process.env
  },
  base: "/",
  server: {
    port: 3000, // Change to the desired port number
    proxy: {
      // Proxy settings if needed
    },
    https: false, // Set to true if you want to enable HTTPS
  },
  build: {
    minify: true,
    sourcemap: true,
  },
});
