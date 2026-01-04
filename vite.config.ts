import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env vars
  const env = loadEnv(mode, process.cwd(), '');
  
  // OBFUSCATION STRATEGY
  // 1. Prioritize VITE_API_KEY, fallback to API_KEY (system env)
  const rawApiKey = env.VITE_API_KEY || env.API_KEY || '';
  const validKey = typeof rawApiKey === 'string' ? rawApiKey : '';
  const encodedKey = Buffer.from(validKey).toString('base64');
  
  return {
    plugins: [react()],
    define: {
      // 1. Inject the encoded key safely.
      // We use a JSON.stringify'd string so it replaces to "..." in the code.
      // Renamed to __APP_API_KEY__ to resolve ReferenceError mismatches.
      '__APP_API_KEY__': JSON.stringify(encodedKey),
      
      // 2. Polyfill process.env for libraries
      'process.env': {},
    }
  }
})