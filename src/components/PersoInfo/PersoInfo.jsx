import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";

function PersoInfo({
  setSubmittedName,
  setSubmittedAge,
  setSubmittedEmail,
  setSubmittedPhone,
}) {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => setFullName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(fullName);
    setSubmittedAge(age);
    setSubmittedEmail(email);
    setSubmittedPhone(phone);
  };

  return (
    <Container className="container">
      <h1>Personal Information</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Full Name"
          value={fullName}
          onChange={handleNameChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={handleAgeChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
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

export default PersoInfo;
