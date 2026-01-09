import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: 'index.html',
        sidepanel: 'sidepanel.html',
        background: 'src/background.ts',
        contentScript: 'src/contentScript.ts',
        outlookContentScript: 'src/outlookContentScript.ts',
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === 'background') return 'background.js';
          if (chunk.name === 'contentScript') return 'contentScript.js';
          if (chunk.name === 'outlookContentScript') return 'outlookContentScript.js';
          return 'assets/[name]-[hash].js';
        },
      },
    },
  },
});