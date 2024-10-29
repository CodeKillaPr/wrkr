import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/wrkr-web/", // Set the base path to match your repository name
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
  build: {
    rollupOptions: {
      external: [
        "/wrkr-web/src/main.jsx", // Ensure this path is correctly externalized
      ],
    },
  },
});
