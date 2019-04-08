// Code your solution here
const heyJude = () => {
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16);
};

const prohibitedLanguage = (input) => {
  let badWords = /candycorn|brusselssprouts/;
  return input.search(badWords);
};
