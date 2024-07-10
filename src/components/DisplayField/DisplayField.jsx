import { Container, Box, Typography } from "@mui/material";

function DisplayField({ personalInfo, educExp, pracExp }) {
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
        <Typography>Full Name: {personalInfo.name}</Typography>
        <Typography>Age: {personalInfo.age}</Typography>
        <Typography>Email: {personalInfo.email}</Typography>
        <Typography>Phone Number: {personalInfo.phone}</Typography>
      </Box>
      {educExp.map((edu, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "rgb(202, 210, 255)",
            padding: "20px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}>
          <Typography variant="h5">Educational Experience</Typography>
          <Typography>School Name: {edu.schoolName}</Typography>
          <Typography>Title of Study: {edu.title}</Typography>
          <Typography>
            Date of Study: from {edu.startDate} to {edu.endDate}
          </Typography>
        </Box>
      ))}
      {pracExp.map((exp, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "rgb(202, 210, 255)",
            padding: "20px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}>
          <Typography variant="h5">Practical Experience</Typography>
          <Typography>Company Name: {exp.companyName}</Typography>
          <Typography>Position Title: {exp.positionTitle}</Typography>
          <Typography>Main Responsibilities: {exp.responsibilities}</Typography>
          <Typography>
            Date of Study: from {exp.startDate} to {exp.endDate}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}

export default DisplayField;
