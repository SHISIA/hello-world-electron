import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type {Plugin} from 'vite'
// Custom plugin to modify the HTML template
const htmlPlugin = (): Plugin => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      // Replace the CSP meta tags with a single one that allows styles
      return html.replace(
        /<!-- https:\/\/developer\.mozilla\.org\/en-US\/docs\/Web\/HTTP\/CSP -->\s*<meta\s+http-equiv="Content-Security-Policy"\s+content="default-src 'self'; script-src 'self'"\s*\/>\s*<meta\s+http-equiv="content-security-policy"\s+content="default-src 'self'; script-src 'self'"\s*\/>/g,
        `<!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
  <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"
  />`
      )
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin()],
  base:"./",
  build:{
    outDir:'dist-react'
  },
  "server": {
    port: 5123,
    strictPort:true,
  }
})
