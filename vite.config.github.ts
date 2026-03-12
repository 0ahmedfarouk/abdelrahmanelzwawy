// Farouk - Vite config specifically for GitHub Pages deployment
// This config does NOT require Replit environment variables (PORT, BASE_PATH)

import { defineConfig } from "vite"; // Farouk
import react from "@vitejs/plugin-react"; // Farouk
import tailwindcss from "@tailwindcss/vite"; // Farouk
import path from "path"; // Farouk
import { fileURLToPath } from "url"; // Farouk

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Farouk

// ============================================================
// IMPORTANT: Set your base path here before deploying.
//
// Option A — Custom domain (e.g. abdelrahmanelzwawy.com):
//   base: "/"
//
// Option B — Default GitHub Pages URL:
//   base: "/<your-repo-name>/"
//   e.g. base: "/sheikh-website/"
//
// The GitHub Actions workflow below passes this automatically.
// ============================================================
const GITHUB_BASE = process.env.GITHUB_BASE ?? "/"; // Farouk

export default defineConfig({ // Farouk
  base: GITHUB_BASE, // Farouk
  plugins: [ // Farouk
    react(), // Farouk
    tailwindcss(), // Farouk
  ], // Farouk
  resolve: { // Farouk
    alias: { // Farouk
      "@": path.resolve(__dirname, "src"), // Farouk
    }, // Farouk
  }, // Farouk
  root: path.resolve(__dirname), // Farouk
  build: { // Farouk
    outDir: path.resolve(__dirname, "dist"), // Farouk
    emptyOutDir: true, // Farouk
    rollupOptions: { // Farouk
      output: { // Farouk
        manualChunks: { // Farouk
          react: ["react", "react-dom"], // Farouk
          ui: ["lucide-react", "wouter"], // Farouk
        }, // Farouk
      }, // Farouk
    }, // Farouk
  }, // Farouk
}); // Farouk
