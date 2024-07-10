import { TextField, Button, Container, Box } from "@mui/material";

function PracExp({
  handlePracExp,
  handleSubmit,
  handleClear,
  pracExp,
  handleAdd,
  index,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handlePracExp(index, name, value);
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
          value={pracExp.companyName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="positionTitle"
          label="Position Title"
          value={pracExp.positionTitle}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="responsibilities"
          label="Main Responsibilities"
          value={pracExp.responsibilities}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="startDate"
          label="From Date"
          type="date"
          value={pracExp.startDate}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="endDate"
          label="To Date"
          type="date"
          value={pracExp.endDate}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button onClick={handleClear} variant="contained" color="primary">
          Clear
        </Button>
        <Button onClick={handleAdd} variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </Container>
  );
}

export default PracExp;
