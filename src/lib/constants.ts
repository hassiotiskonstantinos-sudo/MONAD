// Base path for GitHub Pages deployment
// In production, the site is served from /MONAD subdirectory
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/MONAD' : '';

// Helper function to get asset path with base path prefix
export function getAssetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
