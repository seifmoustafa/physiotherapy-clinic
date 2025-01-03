// src/pages/PatientDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardContent, Box, Divider } from "@mui/material";

const patientsData = [
    {
        id: 1,
        name: "Mohamed Ahmed",
        diagnosis: "Back Pain",
        notes: "Some notes about back pain treatment.",
        visits: [
            { visitId: 101, date: "2024-01-01", notes: "First session" },
            { visitId: 102, date: "2024-01-05", notes: "Follow-up" },
        ],
    },
    {
        id: 2,
        name: "Mohamed Ahmed",
        diagnosis: "Neck Pain",
        notes: "Another record.",
        visits: [
            { visitId: 201, date: "2024-01-10", notes: "Neck therapy" },
        ],
    },
    {
        id: 3,
        name: "Sara Ali",
        diagnosis: "Knee Injury",
        notes: "Patient has a knee injury from sports accident.",
        visits: [
            { visitId: 301, date: "2024-01-15", notes: "MRI required" },
        ],
    },
];

function PatientDetails() {
    const { id } = useParams();
    const patientId = parseInt(id, 10);
    const patient = patientsData.find((p) => p.id === patientId);

    if (!patient) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography variant="h5" color="error">
                    Patient not found.
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {patient.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Diagnosis: {patient.diagnosis}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Notes: {patient.notes}
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Visits History
            </Typography>

            {/* عرض كل زيارة بشكل منفصل */}
            {patient.visits.map((visit) => (
                <Card key={visit.visitId} sx={{ mb: 2, boxShadow: 2 }}>
                    <CardContent>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Visit ID: {visit.visitId}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Date: {visit.date}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Notes: {visit.notes}
                        </Typography>
                    </CardContent>
                </Card>
            ))}

            {/* قسم الصور / الأشعة لو متوفرة */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6">Uploaded X-rays / Documents</Typography>
                {/* Placeholder أو يمكنك جلب صور حقيقية من الـ Backend */}
                <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}>
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
        </Container>
    );
}

export default PatientDetails;
