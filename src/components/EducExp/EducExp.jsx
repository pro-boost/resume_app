import { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import "./EducExp.css";

function EducExp({
  setSubmittedSchoolName,
  setSubmittedTitle,
  setSubmittedFromDate,
  setSubmittedToDate,
}) {
  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSchoolNameChange = (e) => setSchoolName(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleFromDateChange = (e) => setFromDate(e.target.value);
  const handleToDateChange = (e) => setToDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedSchoolName(schoolName);
    setSubmittedTitle(title);
    setSubmittedFromDate(fromDate);
    setSubmittedToDate(toDate);
  };

  return (
    <Container className="container">
      <h1>Educational Experience</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="School Name"
          value={schoolName}
          onChange={handleSchoolNameChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Title of Study"
          type="text"
          value={title}
          onChange={handleTitleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="From Date"
          type="date"
          value={fromDate}
          onChange={handleFromDateChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="To Date"
          type="date"
          value={toDate}
          onChange={handleToDateChange}
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

export default EducExp;
