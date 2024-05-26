// src/utils/urlHelpers.js
import slugify from "react-slugify";

/**
 * Create a slug from a title.
 * @param {string} title - The title to be slugified.
 * @returns {string} - The generated slug.
 */     
export function createSlug(title) {
  return slugify(title);
}

/**
 * Parse the id and slug from a combined idSlug string.
 * @param {string} idSlug - The combined id and slug string.
 * @returns {Object} - An object containing the id and slug.
 */
export function parseIdSlug(idSlug) {
  const [id, ...slugParts] = idSlug.split("-");
  const slug = slugParts.join("-");
  return { id, slug };
}
