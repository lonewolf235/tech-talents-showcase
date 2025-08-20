import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirname(fileURLToPath(import.meta.url)), "./client/src"),
      "@shared": path.resolve(dirname(fileURLToPath(import.meta.url)), "./shared"),
      "@assets": path.resolve(dirname(fileURLToPath(import.meta.url)), "./attached_assets"),
    },
  },
  root: path.resolve(dirname(fileURLToPath(import.meta.url)), "./client"),
  build: {
    outDir: path.resolve(dirname(fileURLToPath(import.meta.url)), "./dist"),
    emptyOutDir: true,
  },
});
