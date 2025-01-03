// src/components/PatientForm.jsx
import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
    IconButton,
    Stack,
    Avatar,
    Snackbar,
    Alert,       // مكوّن التنبيه من MUI
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios"; // كمثال لو ستستخدمه للتواصل مع الباك ايند

function PatientForm() {
    const [name, setName] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [notes, setNotes] = useState("");
    const [files, setFiles] = useState([]);

    // للتحكم في الـ Snackbar
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    // دالة لغلق snackbar
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prev) => [...prev, ...selectedFiles]);
    };

    const handleRemoveFile = (indexToRemove) => {
        setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // تجهيز البيانات للإرسال
        const formData = new FormData();
        formData.append("name", name);
        formData.append("diagnosis", diagnosis);
        formData.append("notes", notes);

        files.forEach((file, idx) => {
            formData.append(`files_${idx}`, file);
        });

        try {
            // مثال على استدعاء API باستخدام axios
            // const response = await axios.post("https://your-api.com/patients", formData);

            // لو العملية نجحت:
            setSnackbarMessage("Patient added successfully!");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);

            // إعادة تعيين الحقول
            setName("");
            setDiagnosis("");
            setNotes("");
            setFiles([]);
        } catch (error) {
            // لو حدث خطأ في الحفظ
            setSnackbarMessage("An error occurred while adding the patient!");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper sx={{ p: 3, boxShadow: 3 }} elevation={3}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
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

                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<UploadFileIcon />}
                        component="label"
                        sx={{ mb: 2 }}
                    >
                        Upload Files
                        <input
                            hidden
                            type="file"
                            multiple
                            onChange={handleFileChange}
                        />
                    </Button>

                    <Stack direction="row" spacing={2} flexWrap="wrap">
                        {files.map((file, index) => {
                            const isImage = file.type.startsWith("image/");
                            const fileUrl = URL.createObjectURL(file);

                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        position: "relative",
                                        width: 100,
                                        height: 100,
                                        border: "1px solid #ccc",
                                        borderRadius: 2,
                                        overflow: "hidden",
                                    }}
                                >
                                    {isImage ? (
                                        <Avatar
                                            variant="square"
                                            src={fileUrl}
                                            alt={file.name}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <Box sx={{ textAlign: "center", pt: 3 }}>
                                            <UploadFileIcon fontSize="large" />
                                            <Typography variant="caption">{file.name}</Typography>
                                        </Box>
                                    )}
                                    <IconButton
                                        color="error"
                                        size="small"
                                        onClick={() => handleRemoveFile(index)}
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                            bgcolor: "white",
                                            m: 0.5,
                                        }}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            );
                        })}
                    </Stack>

                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" type="submit">
                            Save Patient
                        </Button>
                    </Box>
                </Box>
            </Paper>

            {/* Snackbar لعرض رسالة النجاح/الخطأ */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000} // 3 ثوانٍ، يمكن تغييره
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // موقع الظهور
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    variant="filled"
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default PatientForm;
