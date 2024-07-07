import { TextField, Button, Container, Box } from "@mui/material";

function PersoInfo({ handlePersonalInfo }) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    handlePersonalInfo(name, value);
  };

  return (
    <Container className="container">
      <h1>Personal Information</h1>
      <Box
        component="form"
        // onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          name="name"
          label="Full Name"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="age"
          label="Age"
          type="number"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="email"
          label="Email Address"
          type="email"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="phone"
          label="Phone Number"
          type="tel"
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

export default PersoInfo;
