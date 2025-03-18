import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard";
import { TextProvider } from "./context/TextContext";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import { AuthProvider } from "./context/authProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster />
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TextProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </TextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
