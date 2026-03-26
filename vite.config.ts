import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => {
  // Load env vars from .env, .env.local, .env.[mode], .env.[mode].local
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // ── Dev Server ─────────────────────────────────
    server: {
      port: 3000,
      host: '0.0.0.0',
      headers: {
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
      }
    },

    // ── Preview Server ─────────────────────────────
    preview: {
      port: 4173,
      host: true,
    },

    // ── Plugins ────────────────────────────────────
    plugins: [react(), cloudflare()],

    // ── Path Aliases ───────────────────────────────
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '@components': path.resolve(__dirname, './components'),
        '@assets': path.resolve(__dirname, './Assets'),
      },
    },

    // ── Environment Variables ──────────────────────
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
    },

    // ── Build Optimizations ────────────────────────
    build: {
      target: 'esnext',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false, // Disable sourcemaps in production for security
      minify: 'esbuild',

      // Chunk splitting for optimal caching
      rollupOptions: {
        output: {
          // Manual chunk splitting by vendor category
          manualChunks: (id) => {
            // React ecosystem — core bundle
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
            // Animation library
            if (id.includes('node_modules/framer-motion')) {
              return 'vendor-motion';
            }
            // Icons library
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
            // Three.js / 3D rendering
            if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
              return 'vendor-three';
            }
            // Form libraries
            if (id.includes('node_modules/@formspree')) {
              return 'vendor-forms';
            }
          },
          // Naming convention for chunks
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },

      // Asset size reporting
      chunkSizeWarningLimit: 1000,

      // Inline small assets as base64 (< 4KB)
      assetsInlineLimit: 4096,
    },

    // ── CSS Configuration ──────────────────────────
    css: {
      devSourcemap: true,
    },

    // ── Dependency Pre-Bundling ────────────────────
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'scheduler',
        'framer-motion',
        'lucide-react',
        'use-sync-external-store/shim/index.js',
        'use-sync-external-store/shim/with-selector.js',
      ],
      exclude: ['@react-three/fiber', 'three'], // Loaded lazily
    },
  };
});