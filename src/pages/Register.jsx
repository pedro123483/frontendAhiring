import { Grid, Typography, TextField, Stack, Button } from "@mui/material";
import "../styles/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = () => {
        const configuration = {
            method: "post",
            url: "https://b706j7-8000.csb.app/user",
            data: {
                firstName,
                lastName,
                email,
                password
            }
        };

        if(firstName && lastName && email && password) {
            try {
                axios(configuration).then((result) => {

                })
            } catch (error) {
                
            }
        }
    };
    return (
        <Grid container justifyContent="center">
            <Stack mt={5} spacing={5} direction="column">
                <Typography variant="h2">Get Started</Typography>
                <Stack direction="row" spacing={3}>
                    <TextField sx={{ backgroundColor: "white" }} id="btnFirstName" label="First name" variant="filled" onChange={(e) => setFirstName(e.target.value)} />
                    <TextField sx={{ backgroundColor: "white" }} id="btnLastName" label="Last name" variant="filled" onChange={(e) => setLastName(e.target.value)} />
                </Stack>
                <TextField sx={{ backgroundColor: "white" }} id="btnEmail" label="Email" variant="filled" onChange={(e) => setEmail(e.target.value)} />
                <TextField sx={{ backgroundColor: "white" }} id="btnPassword" label="Password" variant="filled" type="password" onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={() => handleSubmit()} variant="contained">Create account</Button>
                <Typography>Already have an account?<Link to="/login" style={{ textDecoration: 'none', color: "white" }}> Sign in</Link></Typography>
            </Stack>
        </Grid>
    );
};

export default Register;