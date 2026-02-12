import { defineConfig } from "vite";

export default defineConfig({
  base: "/my-tepakorn/", // ← ชื่อ repo บน GitHub
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
