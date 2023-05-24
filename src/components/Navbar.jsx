import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

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
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography onClick={() => logOut()} variant="h5" sx={{ textDecoration: "none", cursor: "pointer" }}>Log out</Typography>
                    </Box>
            </Grid>
        </Container>
    );
};

export default Navbar;