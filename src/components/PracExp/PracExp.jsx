import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";

function PracExp({
  setSubmittedCompany,
  setSubmittedPosition,
  setSubmittedResponsibilities,
  setSubmittedFrom,
  setSubmittedTo,
}) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleCompanyChange = (e) => setCompany(e.target.value);
  const handlePositionChange = (e) => setPosition(e.target.value);
  const handleResponsibilitiesChange = (e) =>
    setResponsibilities(e.target.value);
  const handleFromChange = (e) => setFrom(e.target.value);
  const handleToChange = (e) => setTo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCompany(company);
    setSubmittedPosition(position);
    setSubmittedResponsibilities(responsibilities);
    setSubmittedFrom(from);
    setSubmittedTo(to);
  };

  return (
    <Container className="container">
      <h1>Practical Experience</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Company Name"
          value={company}
          onChange={handleCompanyChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Position Title"
          value={position}
          onChange={handlePositionChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Main Responsibilities"
          value={responsibilities}
          onChange={handleResponsibilitiesChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="From Date"
          type="date"
          value={from}
          onChange={handleFromChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="To Date"
          type="date"
          value={to}
          onChange={handleToChange}
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default PracExp;
