// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                textAlign: "center",
                backgroundColor: (theme) =>
                    theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                mt: 4,
            }}
        >
            <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} Physio Clinic. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
