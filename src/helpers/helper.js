function truncateSentence(sen) {
  return (sen = sen.slice(0, Math.floor(sen.length / 2)) + "...");
}

export { truncateSentence };
