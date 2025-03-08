export const toTitlecase = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export const toSentenceCase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
export const toUpperCase = (text) => {
  return text.toUpperCase();
};
export const toLowerCase = (text) => {
  return text.toLowerCase();
};
export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  console.log("Copied to clipboard:", text);
};
export const resetTextArea = () => {
  const textArea = document.getElementById(textArea);
  if (textArea) textArea.value = "";
};
