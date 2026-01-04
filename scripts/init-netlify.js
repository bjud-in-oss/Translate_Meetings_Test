
import fs from 'fs';
import path from 'path';

// Content for _redirects to handle SPA routing
const redirectsContent = '/* /index.html 200';

// Content for netlify.toml
// CRITICAL: SECRETS_SCAN_ENABLED = "false" is required because we are using
// the API key client-side in this specific architecture.
const netlifyTomlContent = `[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  SECRETS_SCAN_ENABLED = "false"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Cross-Origin-Opener-Policy = "same-origin-allow-popups"
    Cross-Origin-Embedder-Policy = "unsafe-none"`;

// Ensure public folder exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

try {
  fs.writeFileSync('public/_redirects', redirectsContent);
  console.log('✅ public/_redirects created.');
  
  fs.writeFileSync('netlify.toml', netlifyTomlContent);
  console.log('✅ netlify.toml created.');
} catch (err) {
  console.error('❌ Failed to create configuration files:', err);
  process.exit(1);
}
