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