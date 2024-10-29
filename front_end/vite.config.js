import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/wrkr/front_end/",
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
