import { TextField, Button, Container, Box } from "@mui/material";

function EducExp({ handleEducExp, handleSubmit, handleClear, educExp }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleEducExp(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Container className="container">
      <h1>Educational Experience</h1>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          name="schoolName"
          value={educExp.schoolName}
          label="School Name"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="title"
          value={educExp.title}
          label="Title of Study"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="startDate"
          value={educExp.startDate}
          label="Start Date"
          type="date"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="endDate"
          value={educExp.endDate}
          label="End Date"
          type="date"
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
      </Box>
    </Container>
  );
}

export default EducExp;
