// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 4,
                py: 2,
                textAlign: "center",
                backgroundColor: "#eee",
            }}
        >
            <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} Physiotherapy Clinic. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
