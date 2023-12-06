import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { server } from "typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // https://vitejs.dev/config/#server-options
  server: {
    host: "0.0.0.0",
    port: 4000,
    open: true, // open browser on server start
    proxy: {
      "/api": {
        target: "http://localhost:3000", // backend server
        changeOrigin: true, // needed for virtual hosted sites
      },
    },
  },
});
