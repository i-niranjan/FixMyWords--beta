import { createContext, useState } from "react";

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const resetText = () => setText("");
  const [loading, setLoading] = useState(false);

  return (
    <TextContext.Provider
      value={{ text, setText, resetText, loading, setLoading }}
    >
      {children}
    </TextContext.Provider>
  );
};
