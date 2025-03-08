import React from "react";
import {
  toUpperCase,
  toTitlecase,
  toLowerCase,
  toSentenceCase,
  resetTextArea,
  copyToClipboard,
} from "@/utils/textTransform";

export const textHandler = (text, type) => {
  console.log("Received text:", text); // Check if text is received
  console.log("Type:", type);
  switch (type) {
    case "toUpper":
      return toUpperCase(text);
    case "toLower":
      return toLowerCase(text);
    case "toTitle":
      return toTitlecase(text);
    case "toSentence":
      return toSentenceCase(text);
    case "toCopy":
      return copyToClipboard(text);

    default:
      return text;
  }
};
