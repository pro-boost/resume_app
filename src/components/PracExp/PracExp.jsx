import { TextField, Button, Container, Box } from "@mui/material";

function PracExp({ handlePracExp, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handlePracExp(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Container className="container">
      <h1>Practical Experience</h1>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          name="companyName"
          label="Company Name"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="PositionTitle"
          label="Position Title"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="Responsibilities"
          label="Main Responsibilities"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="startDate"
          label="From Date"
          type="date"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="endDate"
          label="To Date"
          type="date"
          onChange={handleChange}
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
