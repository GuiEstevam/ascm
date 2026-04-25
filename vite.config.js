import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/',
  resolve: {
    dedupe: ['ionicons', '@stencil/core'],
  },
  optimizeDeps: {
    include: ['ionicons', 'ionicons/loader'],
  },
  build: {
    esbuild: {
      drop: ['console', 'debugger'],
    },
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        quemSomos: resolve(__dirname, 'quem-somos.html'),
        areas: resolve(__dirname, 'areas.html'),
        profissionais: resolve(__dirname, 'profissionais.html'),
        clientes: resolve(__dirname, 'clientes.html'),
        contato: resolve(__dirname, 'contato.html'),
        privacidade: resolve(__dirname, 'privacidade.html'),
      },
    },
  },
});
