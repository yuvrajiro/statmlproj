import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { vitePluginMarkdown } from './plugins/vite-plugin-markdown';  // <--- Importing the function

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        process: true,
      },
    }),
    vitePluginMarkdown({
      markdownDir: path.resolve(__dirname, 'public/blogs'), // 👈 Folder where your Markdown files are stored
      outputFile: 'blogPosts.ts', // 👈 This will generate src/blogPosts.ts
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    historyApiFallback: true,
  },
});


