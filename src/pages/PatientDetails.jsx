// src/pages/PatientDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";

const patientsData = [
    {
        id: 1,
        name: "Mohamed Ahmed",
        diagnosis: "Back Pain",
        notes: "Some notes about back pain treatment.",
    },
    {
        id: 2,
        name: "Sara Ali",
        diagnosis: "Knee Injury",
        notes: "Patient has a knee injury from a sports accident.",
    },
    {
        id: 3,
        name: "John Smith",
        diagnosis: "Shoulder Strain",
        notes: "Chronic shoulder pain from repetitive stress at work.",
    },
];

function PatientDetails() {
    const { id } = useParams();
    const patientId = parseInt(id, 10);
    const patient = patientsData.find((p) => p.id === patientId);

    if (!patient) {
        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h5" color="error">Patient not found.</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Card>
                <CardContent>
                    <Typography variant="h5">{patient.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Diagnosis: {patient.diagnosis}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1">
                            <strong>Notes:</strong> {patient.notes}
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6">Uploaded X-rays / Documents</Typography>
                        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                            {/* Placeholder */}
                            <img
                                src="https://via.placeholder.com/200"
                                alt="X-ray placeholder"
                                style={{ borderRadius: 8 }}
                            />
                            <img
                                src="https://via.placeholder.com/200"
                                alt="X-ray placeholder"
                                style={{ borderRadius: 8 }}
                            />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

export default PatientDetails;
