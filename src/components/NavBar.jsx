// src/components/NavBar.jsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* شعار العيادة أو اسمها */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Physiotherapy Clinic
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/patients">
                        Patients
                    </Button>
                    <Button color="inherit" component={Link} to="/patients/new">
                        Add Patient
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
