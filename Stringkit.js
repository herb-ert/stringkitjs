/**
 * Capitalizes the first character of a string.
 *
 * @param {string} string - The input string to capitalize.
 * @return {string} The capitalized string.
 */
export function capitalize(string) {
  if (string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts a string to title case. Optionally applies smart title casing to avoid capitalizing common short words.
 *
 * @param {string} string - The string to convert.
 * @param {boolean} [smart=false] - Whether to apply smart casing (ignores short words except at boundaries).
 * @return {string} The title-cased string.
 */
export function title(string, smart = false) {
  const exceptions = [
    "a", "an", "the", "and", "but", "for", "nor", "or", "so", "to", "up", "yet", "with", "as", "by", "in", "of", "on", "at", "from",
  ];

  return string
  .split(" ")
  .map((word, index) => {
    if (index === 0 || index === string.split(" ").length - 1 || !smart || !exceptions.includes(word.toLowerCase())) {
      return capitalize(word);
    }
    return word.toLowerCase();
  })
  .join(" ");
}

/**
 * Removes all HTML tags from a string.
 *
 * @param {string} string - The string to sanitize.
 * @return {string} The string without HTML tags.
 */
export function stripTags(string) {
  return string.replace(/<[^>]+>/g, "");
}

/**
 * Converts a string into a URL-friendly slug.
 *
 * @param {string} string - The string to slugify.
 * @return {string} The slugified string.
 */
export function slugify(string) {
  return string.toLowerCase().replace(/ /g, "-");
}

/**
 * Truncates a string to a specific length, appending "..." if truncated.
 *
 * @param {string} string - The string to truncate.
 * @param {number} length - The maximum length before truncation.
 * @return {string} The truncated string.
 */
export function truncate(string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
}

/**
 * Converts a string to camelCase.
 *
 * @param {string} string - The string to convert.
 * @return {string} The camelCased string.
 */
export function camelCase(string) {
  return string
  .toLowerCase()
  .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

/**
 * Converts a string to kebab-case.
 *
 * @param {string} string - The string to convert.
 * @return {string} The kebab-cased string.
 */
export function kebabCase(string) {
  return string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, "-")
  .toLowerCase();
}

/**
 * Converts a string to snake_case.
 *
 * @param {string} string - The string to convert.
 * @return {string} The snake_cased string.
 */
export function snakeCase(string) {
  return string
  .replace(/([a-z])([A-Z])/g, "$1_$2")
  .replace(/[\s\-]+/g, "_")
  .toLowerCase();
}

/**
 * Trims whitespace from the start and end of each line in a multi-line string.
 *
 * @param {string} string - The multi-line string to process.
 * @return {string} The string with trimmed lines.
 */
export function trimLines(string) {
  return string
  .split("\n")
  .map(line => line.trim())
  .join("\n");
}

/**
 * Removes extra spaces from a string, reducing multiple spaces to a single space.
 *
 * @param {string} string - The string to normalize.
 * @return {string} The string with extra spaces removed.
 */
export function removeExtraSpaces(string) {
  return string.trim().replace(/\s+/g, " ");
}

/**
 * Checks whether a string is empty or contains only whitespace.
 *
 * @param {string} string - The string to check.
 * @return {boolean} Returns true if the string is blank, otherwise false.
 */
export function isBlank(string) {
  return /^\s*$/.test(string);
}

/**
 * Checks if a string starts with a given prefix, ignoring case sensitivity.
 *
 * @param {string} string - The string to test.
 * @param {string} prefix - The prefix to match against.
 * @return {boolean} Returns true if the string starts with the prefix (case-insensitive), otherwise false.
 */
export function startsWithIgnoreCase(string, prefix) {
  return string.toLowerCase().startsWith(prefix.toLowerCase());
}
