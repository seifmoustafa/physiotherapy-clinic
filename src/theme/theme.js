// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00897B', // درجة من اللون Teal
        },
        secondary: {
            main: '#FFA000', // درجة من اللون Amber
        },
        background: {
            default: '#F2F4F4', // خلفية هادئة
            paper: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Rubik, Roboto, Arial, sans-serif',
        // يمكن تخصيص أحجام العناوين والخطوط كما تريد
    },
    components: {
        // مثال: تنسيقات جاهزة للأزرار أو غيرها
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // أزرار ذات حواف مستديرة
                    textTransform: 'none', // لتعطيل التحويل للحروف الكبيرة
                },
            },
        },
    },
});

export default theme;
