import { Grid, Typography, TextField, Stack, Button } from "@mui/material";
import "../styles/Register.css";

const Register = () => {
    return (
        <Grid container justifyContent="center">
            <Stack mt={5} spacing={5} direction="column">
                <Typography variant="h2">Get Started</Typography>
                <TextField sx={{ backgroundColor: "white", width: "400px" }} id="btnFirstName" label="First name" variant="filled" />
                <TextField sx={{ backgroundColor: "white" }} id="btnLastName" label="Last name" variant="filled" />
                <TextField sx={{ backgroundColor: "white" }} id="btnEmail" label="Email" variant="filled" />
                <TextField sx={{ backgroundColor: "white" }} id="btnPassword" label="Password" variant="filled" />
                <Button variant="contained">Create account</Button>
            </Stack>
        </Grid>
    );
};

export default Register;