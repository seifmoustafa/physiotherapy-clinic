// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import PatientsList from "./pages/PatientsList";
import PatientForm from "./components/PatientForm";
import PatientDetails from "./pages/PatientDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/patients/new" element={<PatientForm />} />
        <Route path="/patients/:id" element={<PatientDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
