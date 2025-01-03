// src/components/PatientCard.jsx
import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function PatientCard({ patient }) {
    return (
        <Card sx={{ maxWidth: 345, m: 1 }}>
            <CardActionArea component={Link} to={`/patients/${patient.id}`}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {patient.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Diagnosis: {patient.diagnosis}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default PatientCard;
