import { Grid, Typography, TextField, Stack, Button } from "@mui/material";
import "../styles/Register.css";

const Login = () => {
    return (
        <Grid container justifyContent="center">
            <Stack mt={15} spacing={5} direction="column">
                <Typography variant="h2">Sign In</Typography>
                <TextField sx={{ backgroundColor: "white", width: "400px" }} id="btnLoginEmail" label="Email" variant="filled" />
                <TextField sx={{ backgroundColor: "white" }} id="btnLoginPassword" label="Password" variant="filled" />
                <Button variant="contained">Create account</Button>
            </Stack>
        </Grid>
    );
};

export default Login;