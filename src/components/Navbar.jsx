// imports requireds
import { Box, Stack } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Navbar component
const Navbar = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const logOut = () => {
        navigate("/");
        cookies.remove("TOKEN");
    };

    return (
        <Container>
            <Grid mt={5} container direction="row" justifyContent="space-between" alignItems="center">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5">AHIRING</Typography>
                    </Box>
                    <Stack direction="row" spacing={5}>
                        <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}><Typography variant="overline">Review candidates</Typography></Link>
                        <Link to="/jobs" style={{ color: "white", textDecoration: "none" }}><Typography variant="overline">Generate descriptions</Typography></Link>
                    </Stack>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography onClick={() => logOut()} variant="h5" sx={{ textDecoration: "none", cursor: "pointer" }}>Log out</Typography>
                    </Box>
            </Grid>
        </Container>
    );
};

export default Navbar;