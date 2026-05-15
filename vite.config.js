import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Serve the root-level "images/" folder as static assets at "/"
  // So images/farm.jpg → /farm.jpg  |  images/back.mp4 → /back.mp4
  publicDir: 'images',

  server: {
    proxy: {
      // Any request to /api/chat gets forwarded to Anthropic's API.
      // The API key is injected here — it NEVER goes to the browser.
      '/api/chat': {
        target: 'https://api.anthropic.com',
        changeOrigin: true,
        rewrite: (path) => '/v1/messages',
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            // Inject your Anthropic API key — set VITE_ANTHROPIC_KEY in .env
            const key = process.env.VITE_ANTHROPIC_KEY || process.env.ANTHROPIC_API_KEY || '';
            proxyReq.setHeader('x-api-key', key);
            proxyReq.setHeader('anthropic-version', '2023-06-01');
          });
        },
      },
    },
  },
})

