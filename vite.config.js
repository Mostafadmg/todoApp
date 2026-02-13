// vite.config.js - Vite Configuration File
// This file tells Vite how to run and build your project

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    devSourcemap: true, // Show original CSS file in DevTools during dev
  },
  // Development server settings
  server: {
    port: 3000, // Dev server runs on http://localhost:3000
    open: true, // Auto-open browser when server starts
    host: true, // Allow network access (for testing on phone/tablet)
  },

  // Production build settings
  build: {
    outDir: "dist", // Output folder for production build
    sourcemap: true, // Generate source maps (helps debugging)
    minify: "terser", // Minify JavaScript for smaller file size
  },

  // Base public path (important for deployment)
  base: "./", // Use relative paths (works on any server)
});
