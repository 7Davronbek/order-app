import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Copy _redirects to the root of the build output directory
        assetFileNames: "_redirects",
      },
    },
  },
});
