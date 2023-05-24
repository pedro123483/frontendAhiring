import { Grid, Typography, TextField, Stack, Button } from "@mui/material";
import "../styles/Register.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Grid container justifyContent="center">
            <Stack mt={10} spacing={5} direction="column">
                <Typography variant="h2">Sign In</Typography>
                <TextField sx={{ backgroundColor: "white", width: "400px" }} id="btnLoginEmail" label="Email" variant="filled" />
                <TextField sx={{ backgroundColor: "white" }} id="btnLoginPassword" label="Password" variant="filled" type="password" />
                <Button variant="contained">Enter</Button>
                <Typography>Not registered yet? <Link to="/register" style={{ textDecoration: 'none', color: "white" }}>Create account</Link></Typography>
            </Stack>
        </Grid>
    );
};

export default Login;