// src/pages/Home.jsx
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

function Home() {
    return (
        <Box
            sx={{
                // خلفية متدرجة
                background: (theme) =>
                    theme.palette.mode === "light"
                        ? "linear-gradient(130deg, #FFF3E0 0%, #FCE4EC 100%)"
                        : "linear-gradient(130deg, #37474F 0%, #263238 100%)",
                minHeight: "calc(100vh - 64px)", // ملء الشاشة تقريبًا ناقص ارتفاع الـ AppBar
                py: 8,
                color: (theme) => (theme.palette.mode === "light" ? "inherit" : "#fff"),
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" align="center" sx={{ mb: 4, fontWeight: "bold" }}>
                    Welcome to Physio Clinic
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6 }}>
                    We provide top-notch physical therapy services to help you recover and
                    maintain a healthy lifestyle.
                </Typography>
                <Box textAlign="center">
                    <Button variant="contained" color="primary" size="large">
                        Book an Appointment
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Home;
