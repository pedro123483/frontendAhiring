// imports requireds
import { Grid, Typography, TextField, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useState, useContext, forwardRef } from "react";
import { ContextAPI } from "../context/contextAPI";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

// component responsible for rendering the login page
const Login = () => {
    const [vertical, setVertical] = useState("top");
    const [horizontal, setHorizontal] = useState("right");
    const { isRegistered, setIsRegistered } = useContext(ContextAPI);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);
    const [emailDoesNotMatch, setEmailDoesNotMatch] = useState(false);
    const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false);

    // feedback registered successfully
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if(reason === "clickaway") {
            return;
        }

        setIsRegistered(false);
    };

    // get inputs and then make api call to save the information in the database
    const handleLogin = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "https://b706j7-8000.csb.app/user/login",
            data: {
                email,
                password
            }
        };

        if(email && password) {
            axios(configuration).then((result) => {
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });
                navigate("/dashboard");
            }).catch((error) => {
                if(error.response.status == 404) {
                    setEmailDoesNotMatch(true);
                } else if (error.response.status == 400) {
                    setPasswordDoesNotMatch(true);
                } else {
                    console.log(error.response.status);
                }
            })
        }
        setIsSubmit(true);
    };

    return (
        <Grid container justifyContent="center">
            {isRegistered && (
                <Snackbar autoHideDuration={6000} anchorOrigin={{ vertical, horizontal }} open={isRegistered} onClose={handleClose} key={vertical + horizontal}>
                <Alert onClose={handleClose} severity="success">
                    Registration completed successfully!
                </Alert>
            </Snackbar>
            )}
            <Stack mt={10} spacing={5} direction="column">
                <Typography variant="h2">Sign In</Typography>
                <TextField sx={{ backgroundColor: "white", width: "400px" }} id="btnLoginEmail" label="Email" variant="filled" onChange={(e) => setEmail(e.target.value)} error={isSubmit && email === "" || (emailDoesNotMatch || passwordDoesNotMatch)} helperText={isSubmit && email  === "" ? "Type your email" : ""} />
                <TextField sx={{ backgroundColor: "white" }} id="btnLoginPassword" label="Password" variant="filled" type="password" onChange={(e) => setPassword(e.target.value)} error={isSubmit && password === "" || (passwordDoesNotMatch || emailDoesNotMatch)} helperText={isSubmit && password === "" || (passwordDoesNotMatch || emailDoesNotMatch) ? (passwordDoesNotMatch || emailDoesNotMatch) ? "E-mail or password incorrects" : "Type your password" : ""} />
                <Button onClick={(e) => handleLogin(e)} variant="contained">Enter</Button>
                <Typography>Not registered yet? <Link to="/register" style={{ textDecoration: 'none', color: "white" }}>Create account</Link></Typography>
            </Stack>
        </Grid>
    );
};

export default Login;