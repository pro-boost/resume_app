import { TextField, Button, Container, Box } from "@mui/material";

function EducExp({ handleEducExp }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleEducExp(name, value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <Container className="container">
      <h1>Educational Experience</h1>
      <Box
        component="form"
        // onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          name="schoolName"
          label="School Name"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="title"
          label="Title of Study"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="startDate"
          label="Start Date"
          type="date"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="endDate"
          label="End Date"
          type="date"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        {/* <Button type="submit" variant="contained" color="primary">
          Submit
        </Button> */}
      </Box>
    </Container>
  );
}

export default EducExp;
