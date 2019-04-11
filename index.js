const heyJude = () => {
  const str = "Na na na na na na na, na na na na, hey Jude.";
  return str.repeat(16);
}

const prohibitedLanguage = username => {
  return username.search(/candycorn|brusselssprouts/);
}
