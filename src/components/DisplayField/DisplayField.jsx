import React from "react";
import { Container, Box, Typography } from "@mui/material";

function DisplayField({
  submittedName,
  submittedAge,
  submittedEmail,
  submittedPhone,
  submittedSchoolName,
  submittedTitle,
  submittedFromDate,
  submittedToDate,
  submittedCompany,
  submittedPosition,
  submittedResponsibilities,
  submittedFrom,
  submittedTo,
}) {
  return (
    <Container className="container">
      <h1>DisplayField</h1>
      <Box
        sx={{
          backgroundColor: "rgb(202, 210, 255)",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}>
        <Typography variant="h5">Personal Information</Typography>
        <Typography>Full Name: {submittedName}</Typography>
        <Typography>Age: {submittedAge}</Typography>
        <Typography>Email: {submittedEmail}</Typography>
        <Typography>Phone Number: {submittedPhone}</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(202, 210, 255)",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}>
        <Typography variant="h5">Educational Experience</Typography>
        <Typography>School Name: {submittedSchoolName}</Typography>
        <Typography>Title of Study: {submittedTitle}</Typography>
        <Typography>
          Date of Study: from {submittedFromDate} to {submittedToDate}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(202, 210, 255)",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}>
        <Typography variant="h5">Practical Experience</Typography>
        <Typography>Company Name: {submittedCompany}</Typography>
        <Typography>Position Title: {submittedPosition}</Typography>
        <Typography>
          Main Responsibilities: {submittedResponsibilities}
        </Typography>
        <Typography>
          Date of Study: from {submittedFrom} to {submittedTo}
        </Typography>
      </Box>
    </Container>
  );
}

export default DisplayField;
