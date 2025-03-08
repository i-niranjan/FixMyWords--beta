import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard";
import { TextProvider } from "./context/TextContext";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TextProvider>
          <Navbar />
          <Dashboard />
          <Toaster />
        </TextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
