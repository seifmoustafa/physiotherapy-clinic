// src/components/NavBar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function NavBar({ onToggleTheme, currentMode }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                    Physio Clinic
                </Typography>

                {/* قائمة روابط */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/patients">
                        Search Patients
                    </Button>
                    <Button color="inherit" component={Link} to="/patients/new">
                        Add Patient
                    </Button>
                </Box>

                {/* زر تبديل الثيم داخل الـ NavBar */}
                <IconButton color="inherit" sx={{ ml: 2 }} onClick={onToggleTheme}>
                    {currentMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
