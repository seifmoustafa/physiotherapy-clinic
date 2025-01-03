// src/App.js
import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { getDesignTokens } from "./theme";
import { createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import PatientsList from "./pages/PatientsList";
import PatientForm from "./components/PatientForm";
import PatientDetails from "./pages/PatientDetails";
import Footer from "./components/Footer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
  // حالة (State) للتبديل بين الوضعين
  const [mode, setMode] = useState("light");

  // إنشاء الثيم باستخدام createTheme كلما تغيّر الـ mode
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // دالة لتبديل الوضع
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline لإعادة ضبط ستايلات المتصفح وإعطاء خلفية حسب الثيم */}
      <CssBaseline />

      {/* نرسل toggleColorMode إلى الـ NavBar أو نضع زر هنا بشكل مباشر */}
      <NavBar onToggleTheme={toggleColorMode} currentMode={mode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/patients/new" element={<PatientForm />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
      </Routes>

      <Footer />

      {/* يمكن وضع زر طافي (Floating Action) أسفل يمين/يسار الشاشة - مثال */}
      <IconButton
        onClick={toggleColorMode}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "secondary.main",
          color: "white",
          "&:hover": { bgcolor: "secondary.dark" },
        }}
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </ThemeProvider>
  );
}

export default App;
