export function toCamelCase(text) {
  const textArr = text.split(" ");
  const firstWord = textArr[0].toLowerCase();
  const restWord = textArr
    .slice(1)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join("");
  return firstWord + restWord;
}
