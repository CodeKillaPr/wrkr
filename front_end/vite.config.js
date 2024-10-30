import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  base: "/wrkr-web/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./node_modules", import.meta.url)),
    },
  },
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
