
import fs from 'fs';
import path from 'path';

// 1. Content for _redirects to handle SPA routing inside the build folder (extra safety)
const redirectsContent = '/* /index.html 200';

// Ensure public folder exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

try {
  fs.writeFileSync('public/_redirects', redirectsContent);
  console.log('✅ public/_redirects created.');
} catch (err) {
  console.error('❌ Failed to create _redirects:', err);
  process.exit(1);
}

// 2. Content for netlify.toml to disable secrets scanning AND set publish directory
// Note: This script runs during 'npm run build'.
// CRITICAL: You must commit the generated 'netlify.toml' to your repo for Netlify to see the [build] config before the build starts.
const netlifyTomlContent = `
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  SECRETS_SCAN_ENABLED = "false"
  NODE_VERSION = "20"

[context.production.environment]
  SECRETS_SCAN_ENABLED = "false"
`;

try {
  fs.writeFileSync('netlify.toml', netlifyTomlContent.trim());
  console.log('✅ netlify.toml created (Configured to disable secrets scanning & set publish=dist).');
  console.log('⚠️  IMPORTANT: Verify "netlify.toml" is present in your repo root before pushing to Netlify.');
} catch (err) {
  console.error('❌ Failed to create netlify.toml:', err);
  process.exit(1);
}
