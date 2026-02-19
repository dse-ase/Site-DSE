import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Site-DSE/', // Important for GitHub Pages
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'), // Add this for easier imports
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    assetsDir: 'assets', // This will put assets in build/assets
    // Copy assets that are not imported
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
  },
  // Ensure assets are served correctly in dev
  publicDir: 'public',
});