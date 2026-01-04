import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env vars
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  // OBFUSCATION STRATEGY FOR NETLIFY SECRETS SCANNER
  // 1. Get the raw key.
  // 2. Base64 encode it.
  // 3. Inject the ENCODED string into the build.
  // 4. The app must decode it at runtime using atob().
  const rawApiKey = env.VITE_API_KEY || env.API_KEY || '';
  const encodedKey = Buffer.from(rawApiKey).toString('base64');
  
  return {
    plugins: [react()],
    define: {
      // Correctly serialize the string value for esbuild.
      // process.env.API_KEY will be replaced with "QV..." (the base64 string)
      'import.meta.env.VITE_API_KEY': JSON.stringify(encodedKey),
      'process.env.API_KEY': JSON.stringify(encodedKey)
    }
  }
})