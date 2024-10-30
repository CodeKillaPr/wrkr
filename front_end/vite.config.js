import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/main.jsx/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://wrkr.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
