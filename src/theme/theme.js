// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // لون أساسي أزرق (يمكن تغييره لما يناسب عيادتك)
        },
        secondary: {
            main: '#ff9800', // لون ثانوي برتقالي
        },
        background: {
            default: '#f5f5f5', // لون خلفية عام
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        // يمكن تعديل الـ h1, h2,... إلخ
    },
});

export default theme;
