// src/theme.js
import { createTheme } from "@mui/material/styles";

// دالة ترجع الثيم حسب "light" أو "dark"
export const getDesignTokens = (mode) => {
    const isLight = mode === "light";

    return {
        palette: {
            mode,
            primary: {
                main: isLight ? "#FF5722" : "#FF8A50",  // لون أساسي بدرجتين مختلفتين
            },
            secondary: {
                main: isLight ? "#2196F3" : "#4FC3F7",  // لون ثانوي
            },
            background: {
                // خلفية عامة (default) وخلفية البطاقات (paper)
                default: isLight ? "#F1F8E9" : "#303030",
                paper: isLight ? "#FFFFFFD9" : "#424242D9",
            },
        },
        typography: {
            fontFamily: "Poppins, Roboto, Arial, sans-serif",
            h1: {
                fontWeight: 700,
                fontSize: "2.2rem",
            },
            h2: {
                fontWeight: 600,
                fontSize: "1.8rem",
            },
        },
        components: {
            // أمثلة للتخصيص
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        textTransform: "none",
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        // استخدام تدرج لوني في الـ AppBar
                        background: isLight
                            ? "linear-gradient(60deg, #FF5722 10%, #FF9800 90%)"
                            : "linear-gradient(60deg, #212121 10%, #37474F 90%)",
                    },
                },
            },
        },
    };
};
