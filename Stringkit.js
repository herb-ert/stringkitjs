/**
 * Capitalizes the first character of a string.
 *
 * @param {string} string - The input string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(string) {
  assertString(string, 'string');
  if (string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts a string to title case. Optionally applies smart title casing to avoid capitalizing common short words.
 *
 * @param {string} string - The string to convert.
 * @param {boolean} [smart=false] - Whether to apply smart casing.
 * @returns {string} The title-cased string.
 */
export function title(string, smart = false) {
  assertString(string, 'string');
  if (typeof smart !== 'boolean') {
    throw new TypeError(`Expected "smart" to be a boolean, got ${typeof smart}`);
  }

  const exceptions = [
    'a', 'an', 'the', 'and', 'but', 'for', 'nor', 'or', 'so', 'to', 'up', 'yet', 'with', 'as', 'by', 'in', 'of', 'on', 'at', 'from',
  ];

  const words = string.split(' ');
  return words.map((word, index) => {
    if (!smart || index === 0 || index === words.length - 1 || !exceptions.includes(word.toLowerCase())) {
      return capitalize(word);
    }
    return word.toLowerCase();
  }).join(' ');
}

/**
 * Removes all HTML tags from a string.
 *
 * @param {string} string - The string to sanitize.
 * @returns {string} The sanitized string.
 */
export function stripTags(string) {
  assertString(string, 'string');
  return string.replace(/<[^>]*>/g, '');
}

/**
 * Converts a string into a URL-friendly slug.
 *
 * @param {string} string - The string to slugify.
 * @returns {string} The slugified string.
 */
export function slugify(string) {
  assertString(string, 'string');
  return string
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');
}

/**
 * Truncates a string to a specific length, appending "..." if truncated.
 *
 * @param {string} string - The string to truncate.
 * @param {number} length - The maximum length before truncation.
 * @returns {string} The truncated string.
 */
export function truncate(string, length) {
  assertString(string, 'string');
  if (typeof length !== 'number' || length < 0) {
    throw new TypeError(`Expected "length" to be a non-negative number, got ${length}`);
  }
  return string.length > length ? string.slice(0, length) + '...' : string;
}

/**
 * Converts a string to camelCase.
 *
 * @param {string} string - The string to convert.
 * @returns {string} The camelCased string.
 */
export function camelCase(string) {
  assertString(string, 'string');
  return string
  .toLowerCase()
  .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

/**
 * Converts a string to kebab-case.
 *
 * @param {string} string - The string to convert.
 * @returns {string} The kebab-cased string.
 */
export function kebabCase(string) {
  assertString(string, 'string');
  return string
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase();
}

/**
 * Converts a string to snake_case.
 *
 * @param {string} string - The string to convert.
 * @returns {string} The snake_cased string.
 */
export function snakeCase(string) {
  assertString(string, 'string');
  return string
  .replace(/([a-z])([A-Z])/g, '$1_$2')
  .replace(/[\s-]+/g, '_')
  .toLowerCase();
}

/**
 * Trims whitespace from the start and end of each line in a multi-line string.
 *
 * @param {string} string - The multi-line string to process.
 * @returns {string} The string with trimmed lines.
 */
export function trimLines(string) {
  assertString(string, 'string');
  return string
  .split('\n')
  .map(line => line.trim())
  .join('\n');
}

/**
 * Removes extra spaces from a string, reducing multiple spaces to a single space.
 *
 * @param {string} string - The string to normalize.
 * @returns {string} The string with extra spaces removed.
 */
export function removeExtraSpaces(string) {
  assertString(string, 'string');
  return string.trim().replace(/\s+/g, ' ');
}

/**
 * Checks whether a string is empty or contains only whitespace.
 *
 * @param {string} string - The string to check.
 * @returns {boolean} Returns true if the string is blank, otherwise false.
 */
export function isBlank(string) {
  assertString(string, 'string');
  return /^\s*$/.test(string);
}

/**
 * Checks if a string starts with a given prefix, ignoring case sensitivity.
 *
 * @param {string} string - The string to test.
 * @param {string} prefix - The prefix to match against.
 * @returns {boolean} Returns true if the string starts with the prefix (case-insensitive), otherwise false.
 */
export function startsWithIgnoreCase(string, prefix) {
  assertString(string, 'string');
  assertString(prefix, 'prefix');
  return string.toLowerCase().startsWith(prefix.toLowerCase());
}

/**
 * Checks if a string ends with a given suffix, ignoring case sensitivity.
 *
 * @param {string} string - The string to test.
 * @param {string} suffix - The suffix to match against.
 * @returns {boolean} Returns true if the string ends with the suffix (case-insensitive), otherwise false.
 */
export function endsWithIgnoreCase(string, suffix) {
  assertString(string, 'string');
  assertString(suffix, 'suffix');
  return string.toLowerCase().endsWith(suffix.toLowerCase());
}

/**
 * Checks if a string includes a given substring, ignoring case sensitivity.
 * @param string - The string to test.
 * @param substring - The substring to match against.
 * @returns {boolean} Returns true if the string includes the substring (case-insensitive), otherwise false.
 */
export function includesIgnoreCase(string, substring) {
  assertString(string, 'string');
  assertString(substring, 'substring');
  return string.toLowerCase().includes(substring.toLowerCase());
}

/**
 * Escapes special characters in a string for use in a regular expression.
 *
 * @param {string} string - The string to escape.
 * @returns {string} The escaped string safe for RegExp.
 */
export function escapeRegExp(string) {
  assertString(string, 'string');
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Removes ANSI escape codes from a string.
 *
 * @param {string} string - The string to clean.
 * @returns {string} The string without ANSI escape codes.
 */
export function stripAnsi(string) {
  assertString(string, 'string');
  return string.replace(/\x1B[\[\]0-?]*[ -/]*[@-~]/g, '');
}

/**
 * Repeats a string a specified number of times.
 *
 * @param {string} string - The string to repeat.
 * @param {number} times - The number of times to repeat it.
 * @returns {string} The resulting repeated string.
 */
export function repeatString(string, times) {
  assertString(string, 'string');
  if (!Number.isInteger(times) || times < 0) {
    throw new TypeError(`Expected "times" to be a non-negative integer, got ${times}`);
  }
  return string.repeat(times);
}

/**
 * Finds the longest common prefix among an array of strings.
 *
 * @param {string[]} strings - The strings to analyze.
 * @returns {string} The longest common prefix.
 */
export function commonPrefix(strings) {
  if (!Array.isArray(strings) || strings.some(str => typeof str !== 'string')) {
    throw new TypeError('Expected an array of strings');
  }
  if (strings.length === 0) return '';

  let prefix = strings[0];
  for (const str of strings) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }
  return prefix;
}

/**
 * Centers a string by padding it on both sides with a specified character.
 *
 * @param {string} string - The string to center.
 * @param {number} length - The total desired length after padding.
 * @param {string} [char=' '] - The character to use for padding.
 * @returns {string} The centered string.
 */
export function center(string, length, char = ' ') {
  assertString(string, 'string');
  assertString(char, 'char');
  if (char.length !== 1) {
    throw new TypeError('Padding character must be a single character.');
  }
  if (typeof length !== 'number' || length < 0) {
    throw new TypeError('Length must be a non-negative number.');
  }

  const totalPad = Math.max(0, length - string.length);
  const left = Math.floor(totalPad / 2);
  const right = totalPad - left;
  return char.repeat(left) + string + char.repeat(right);
}

/**
 * Pads the left side of a string to a specified total length.
 *
 * @param {string} string - The string to pad.
 * @param {number} length - The total desired length after padding.
 * @param {string} [char=' '] - The character to use for padding.
 * @returns {string} The left-padded string.
 */
export function lpad(string, length, char = ' ') {
  assertString(string, 'string');
  assertString(char, 'char');
  if (char.length !== 1) {
    throw new TypeError('Padding character must be a single character.');
  }
  if (typeof length !== 'number' || length < 0) {
    throw new TypeError('Length must be a non-negative number.');
  }

  const padLength = Math.max(0, length - string.length);
  return char.repeat(padLength) + string;
}

/**
 * Pads the right side of a string to a specified total length.
 *
 * @param {string} string - The string to pad.
 * @param {number} length - The total desired length after padding.
 * @param {string} [char=' '] - The character to use for padding.
 * @returns {string} The right-padded string.
 */
export function rpad(string, length, char = ' ') {
  assertString(string, 'string');
  assertString(char, 'char');
  if (char.length !== 1) {
    throw new TypeError('Padding character must be a single character.');
  }
  if (typeof length !== 'number' || length < 0) {
    throw new TypeError('Length must be a non-negative number.');
  }

  const padLength = Math.max(0, length - string.length);
  return string + char.repeat(padLength);
}

/**
 * Truncates a string to a specific number of words.
 *
 * @param {string} string - The string to truncate.
 * @param {number} wordCount - Maximum number of words to keep.
 * @returns {string} The truncated string.
 */
export function truncateWords(string, wordCount) {
  assertString(string, 'string');
  if (!Number.isInteger(wordCount) || wordCount < 0) {
    throw new TypeError(`Expected "wordCount" to be a non-negative integer, got ${wordCount}`);
  }
  const words = string.trim().split(/\s+/);
  return words.length > wordCount ? words.slice(0, wordCount).join(' ') + '...' : string;
}

/**
 * Converts a string to PascalCase.
 *
 * @param {string} string - The string to convert.
 * @returns {string} The PascalCased string.
 */
export function pascalCase(string) {
  assertString(string, 'string');
  return string
  .replace(/([a-z])([A-Z])/g, '$1 $2') // Separate camelCase words
  .replace(/[^a-zA-Z0-9]+/g, ' ')      // Replace non-alphanumeric separators
  .trim()
  .split(/\s+/)
  .map(word => capitalize(word))
  .join('');
}

/**
 * Reverses the characters in a string.
 *
 * @param {string} string - The string to reverse.
 * @returns {string} The reversed string.
 */
export function reverse(string) {
  assertString(string, 'string');
  return string.split('').reverse().join('');
}

/**
 * Asserts that the given value is a string.
 *
 * @param {*} value - The value to check.
 * @param {string} [name='value'] - The name of the parameter (used in the error message).
 * @throws {TypeError} Throws if the value is not a string.
 */
export function assertString(value, name = 'value') {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected "${name}" to be a string, but got ${typeof value}`);
  }
}