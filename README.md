# 🧩 Stringkit.js

A focused, zero-dependency utility library for common string manipulations in JavaScript. Clean API, no global prototype pollution, and built for real-world use.

[![NPM version](https://img.shields.io/npm/v/@herb-ert/stringkitjs)](https://www.npmjs.com/package/@herb-ert/stringkitjs)
[![NPM downloads](https://img.shields.io/npm/dw/@herb-ert/stringkitjs)](https://www.npmjs.com/package/@herb-ert/stringkitjs)
[![GitHub issues](https://img.shields.io/github/issues/herb-ert/stringkitjs)](https://github.com/herb-ert/stringkitjs/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/herb-ert/stringkitjs)](https://github.com/herb-ert/stringkitjs/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/herb-ert/stringkitjs)](https://github.com/herb-ert/stringkitjs/graphs/contributors)
[![GitHub forks](https://img.shields.io/github/forks/herb-ert/stringkitjs)](https://github.com/herb-ert/stringkitjs/network)
[![GitHub stars](https://img.shields.io/github/stars/herb-ert/stringkitjs)](https://github.com/herb-ert/stringkitjs/stargazers)

## ✨ Features

- A suite of clean, composable string utilities
- No global prototype modifications
- Safe and immutable methods
- Designed for real-world use cases
- Fully documented and tested

## 📦 Installation

```bash
npm install @herb-ert/stringkitjs
```

If you're using ES Modules:

```js
import * as stringkit from '@herb-ert/stringkitjs';
```

Or with CommonJS:

```js
const stringkit = require('@herb-ert/stringkitjs');
```

## 🚀 Usage

```js
import { capitalize, kebabCase } from '@herb-ert/stringkitjs';

console.log(capitalize("hello world")); // "Hello world"
console.log(kebabCase("Hello World"));  // "hello-world"
```

## 🧠 API

### Functions

| Method                 | Description                                                                                                      |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| `capitalize(string)`   | Capitalizes the first character of a string.                                                                     |
| `title(string, smart)` | Converts a string to title case. Optionally applies smart title casing to avoid capitalizing common short words. |
| `stripTags(string)`    | Removes all HTML tags from a string.                                                                             |
| `slugify(string)` | Converts a string into a URL-friendly slug.                                                                                                                 |
| `truncate(string, length)` | Truncates a string to a specific length, appending "..." if truncated.                                                                                                                 |
| `camelCase(string)` | Converts a string to camelCase.                                                                                                                 |
| `kebabCase(string)` | Converts a string to kebab-case.                                                                                                                 |
| `snakeCase(string)` | Converts a string to snake_case.                                                                                                                 |
| `trimLines(string)` | Trims whitespace from the start and end of each line in a multi-line string.                                                                                                                 |
| `removeExtraSpaces(string)` | Removes extra spaces from a string, reducing multiple spaces to a single space.                                                                                                                 |
| `isBlank(string)` | Checks whether a string is empty or contains only whitespace.                                                                                                                 |
| `startsWithIgnoreCase(string, prefix)` | Checks if a string starts with a given prefix, ignoring case sensitivity.                                                                                                                 |
| `endsWithIgnoreCase(string, suffix)` | Checks if a string ends with a given suffix, ignoring case sensitivity.|
| `includesIgnoreCase(string, substring)` | Checks if a string includes a given substring, ignoring case sensitivity.|
| `escapeRegExp(string)` | Escapes special characters in a string for use in a regular expression.|
| `stripAnsi(string)` | Removes ANSI escape codes from a string.|
| `repeatString(string, times)` | Repeats a string a specified number of times.|
| `commonPrefix(strings)` | Finds the longest common prefix among an array of strings.|
| `center(string, length, char = ' ')` | Centers a string by padding it on both sides with a specified character.|
| `lpad(string, length, char = ' ')` | Pads the left side of a string to a specified total length.|
| `rpad(string, length, char = ' ')` | Pads the right side of a string to a specified total length.|
| `truncateWords(string, wordCount)` | Truncates a string to a specific number of words.|
| `pascalCase(string)` | Converts a string to PascalCase.|
| `reverse(string)` | Reverses the characters in a string.|
| `assertString(value, name)` | Asserts that the given value is a string.                                                                        |


## 📦 More Examples

```js
import {
  snakeCase,
  stripTags,
  title,
  startsWithIgnoreCase
} from '@herb-ert/stringkitjs';

console.log(snakeCase("Hello World"));                    // "hello_world"
console.log(stripTags("<p>Hello</p>"));                   // "Hello"
console.log(title("the big brown fox"));                  // "The Big Brown Fox"
console.log(startsWithIgnoreCase("JavaScript", "java"));  // true
```

## 🧪 Validation

All functions are pure and expect valid strings. Invalid types will throw helpful errors.

```js
capitalize(42); // ❌ TypeError: Expected "string" to be a string, but got number
```

## 🔧 License

MIT © herb-ert