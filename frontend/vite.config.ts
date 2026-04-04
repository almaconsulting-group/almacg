import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: [
      "website-mods-1.preview.emergentagent.com",
      "website-mods-1.cluster-0.preview.emergentagent.cloud",
      ".emergentagent.com",
      ".emergentagent.cloud"
    ]
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: [
      "website-mods-1.preview.emergentagent.com",
      "website-mods-1.cluster-0.preview.emergentagent.cloud",
      ".emergentagent.com",
      ".emergentagent.cloud"
    ]
  },
  build: {
    outDir: "dist",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
