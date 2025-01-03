// src/pages/PatientsList.jsx
import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";

function PatientsList() {
    // بيانات ثابتة للتجربة:
    const [patientsData] = useState([
        {
            id: 1,
            name: "Mohamed Ahmed",
            diagnosis: "Back Pain",
            visits: [
                { visitId: 101, date: "2024-01-01", notes: "First session" },
                { visitId: 102, date: "2024-01-05", notes: "Follow-up" },
            ],
        },
        {
            id: 2,
            name: "Mohamed Ahmed",
            diagnosis: "Neck Pain",
            visits: [
                { visitId: 201, date: "2024-01-10", notes: "Different record" },
            ],
        },
        {
            id: 3,
            name: "Sara Ali",
            diagnosis: "Knee Injury",
            visits: [{ visitId: 301, date: "2024-01-15", notes: "MRI required" }],
        },
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredPatients = patientsData.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <TextField
                    label="Search by name"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mr: 2 }}
                />
            </Box>

            <Typography variant="h4" gutterBottom>
                Patients
            </Typography>

            <Grid container spacing={2}>
                {filteredPatients.map((patient, index) => (
                    <Grid item xs={12} sm={6} md={4} key={`${patient.id}-${index}`}>
                        <Card sx={{ bgcolor: "background.paper" }}>
                            <CardActionArea component={Link} to={`/patients/${patient.id}`}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {patient.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Diagnosis: {patient.diagnosis}
                                    </Typography>
                                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                        {`Visits: ${patient.visits.length}`}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {filteredPatients.length === 0 && (
                <Typography variant="body1" color="error" sx={{ mt: 2 }}>
                    No patients found with that name.
                </Typography>
            )}
        </Container>
    );
}

export default PatientsList;
