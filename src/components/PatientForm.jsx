// src/components/PatientForm.jsx
import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
} from "@mui/material";

function PatientForm() {
    const [name, setName] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, diagnosis, notes });
        // هنا ستستدعي API الباك اند لعمل حفظ (POST)
        // ثم تعود إلى قائمة المرضى أو تعرض رسالة نجاح

        setName("");
        setDiagnosis("");
        setNotes("");
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper sx={{ p: 3 }} elevation={3}>
                <Typography variant="h5" gutterBottom>
                    Add New Patient
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        label="Patient Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Diagnosis"
                        variant="outlined"
                        fullWidth
                        required
                        value={diagnosis}
                        onChange={(e) => setDiagnosis(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Notes"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Save Patient
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default PatientForm;
