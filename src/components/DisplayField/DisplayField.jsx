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
      <Box
        sx={{
          backgroundColor: "rgb(202, 210, 255)",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}>
        <Typography variant="h5">Educational Experience</Typography>
        <Typography>School Name: {educExp.schoolName}</Typography>
        <Typography>Title of Study: {educExp.title}</Typography>
        <Typography>
          Date of Study: from {educExp.startDate} to {educExp.endDate}
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
        <Typography>Company Name: {pracExp.companyName}</Typography>
        <Typography>Position Title: {pracExp.PositionTitle}</Typography>
        <Typography>
          Main Responsibilities: {pracExp.Responsibilities}
        </Typography>
        <Typography>
          Date of Study: from {pracExp.startDate} to {pracExp.endDate}
        </Typography>
      </Box>
    </Container>
  );
}

export default DisplayField;
