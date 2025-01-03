// src/pages/Home.jsx
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

function Home() {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box
                sx={{
                    textAlign: "center",
                    bgcolor: "background.paper",
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 1,
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Welcome to Our Physiotherapy Clinic
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    We provide top-notch physical therapy services to help you recover and
                    maintain your health.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Book an Appointment
                </Button>
            </Box>
        </Container>
    );
}

export default Home;
