// src/pages/PatientsList.jsx
import React, { useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import PatientCard from "../components/PatientCard";

function PatientsList() {
    // بيانات ثابتة مؤقتًا
    const [patients] = useState([
        { id: 1, name: "Mohamed Ahmed", diagnosis: "Back Pain" },
        { id: 2, name: "Sara Ali", diagnosis: "Knee Injury" },
        { id: 3, name: "John Smith", diagnosis: "Shoulder Strain" },
    ]);

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Patients List
            </Typography>
            <Grid container>
                {patients.map((patient) => (
                    <Grid item xs={12} sm={6} md={4} key={patient.id}>
                        <PatientCard patient={patient} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default PatientsList;
