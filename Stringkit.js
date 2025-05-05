export function capitalize(string) {
  if (string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}


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

export function slugify(string) {
  return string.toLowerCase().replace(/ /g, "-");
}

export function truncate(string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
}