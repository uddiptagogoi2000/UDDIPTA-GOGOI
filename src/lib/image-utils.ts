/**
 * Utility functions for handling images with fallbacks
 * Uses free placeholder APIs for missing images
 */

// Free placeholder image APIs
const PLACEHOLDER_SERVICES = {
  picsum: (width: number, height: number, seed?: number) => 
    `https://picsum.photos/seed/${seed || Math.floor(Math.random() * 1000)}/${width}/${height}`,
  placeholder: (width: number, height: number, text?: string) =>
    `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(text || 'No+Image')}`,
  dummyimage: (width: number, height: number, bg?: string, fg?: string) =>
    `https://dummyimage.com/${width}x${height}/${bg || 'CCCCCC'}/${fg || '666666'}`,
};

// Simple SVG placeholders
export const PLACEHOLDER_IMAGE_SVG = (width = 800, height = 600) => 
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect fill="%23e5e7eb" width="${width}" height="${height}"/><text fill="%239ca3af" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">No Image</text></svg>`)}`;

export const PLACEHOLDER_AVATAR_SVG = (size = 400) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect fill="%23e5e7eb" width="${size}" height="${size}"/><circle cx="${size/2}" cy="${size/3}" r="${size/8}" fill="%239ca3af"/><path d="M ${size/4} ${size*2/3} Q ${size/2} ${size*3/4} ${size*3/4} ${size*2/3}" stroke="%239ca3af" stroke-width="${size/20}" fill="none" stroke-linecap="round"/></svg>`)}`;

// Use free API for better images
export const PLACEHOLDER_IMAGE = (width = 800, height = 600) => 
  PLACEHOLDER_SERVICES.picsum(width, height);

export const PLACEHOLDER_AVATAR = (size = 400) =>
  PLACEHOLDER_SERVICES.picsum(size, size, 100); // Fixed seed for consistent avatar

/**
 * Get a placeholder image URL based on type and dimensions
 */
export function getPlaceholderImage(type: "image" | "avatar", width?: number, height?: number): string {
  if (type === "avatar") {
    const size = width || 400;
    return PLACEHOLDER_AVATAR(size);
  }
  return PLACEHOLDER_IMAGE(width || 800, height || 600);
}

/**
 * Checks if an image exists, returns placeholder if not
 */
export function getImageSrc(src: string | undefined, type: "image" | "avatar" = "image", width?: number, height?: number): string {
  if (!src || src.trim() === "" || src.startsWith("/images/")) {
    // If it's a local path that might not exist, use placeholder
    return getPlaceholderImage(type, width, height);
  }
  return src;
}