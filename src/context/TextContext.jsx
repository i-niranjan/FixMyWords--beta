import { createContext, useState } from "react";

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [text, setText] = useState("");
  const resetText = () => setText("");
  const [loading, setLoading] = useState(false);

  const openShareDialog = () => {
    console.log(`called`);

    setIsShareOpen(true);
  };
  const closeShareDialog = () => setIsShareOpen(false);

  return (
    <TextContext.Provider
      value={{
        text,
        setText,
        resetText,
        loading,
        setLoading,
        isShareOpen,
        openShareDialog,
        closeShareDialog,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};
