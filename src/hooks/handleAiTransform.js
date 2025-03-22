import { toast } from "sonner"; // Import toast

export const handleAITransform = async (
  useAi,
  text,
  setText,
  setLoading,
  loading
) => {
  if (!text) return; // Prevent empty input calls
  try {
    setLoading(true);

    const result = await useAi(text);
    setText(result);
    setLoading(false);
    toast.success("Text Updated 🎉", {
      description: "Your AI-transformed text is ready!",
      duration: 3000, // 3 seconds
    });
  } catch (error) {
    console.error("AI Processing Error:", error.message);
    toast.error("Error ❌", {
      description: "Something went wrong while processing. Try again!",
    });
  }
};
