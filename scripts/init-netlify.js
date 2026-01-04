import fs from 'fs';
import path from 'path';

// Content for _redirects to handle SPA routing inside the build folder (extra safety)
const redirectsContent = '/* /index.html 200';

// Ensure public folder exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

try {
  fs.writeFileSync('public/_redirects', redirectsContent);
  console.log('✅ public/_redirects created.');
  
  // Note: netlify.toml is now a static file in the root to ensure 
  // SECRETS_SCAN_ENABLED="false" is read before the build starts.
} catch (err) {
  console.error('❌ Failed to create configuration files:', err);
  process.exit(1);
}