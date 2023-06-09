// imports requireds
import "../App.css";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// code responsible for rendering the index page
const Index = () => {
    return (
        <Grid container justifyContent="center">
            <Grid mt={17} item>
                <Typography variant="h1">Get hiring done with AI</Typography>
                <Typography variant="overline">Generate job descriptions and review candidates in seconds. Using Artificial Intelligence we make it easier hiring the<br/>best talent for your company.</Typography>
                <Stack spacing={3} justifyContent="center" direction="row" mt={5}>
                   <Link to="/register"><Button variant="contained" sx={{ color: "white" }}>Get started</Button></Link>
                   <Link to="/login"><Button variant="text" sx={{ color: "white" }}>Log in</Button></Link>
                </Stack>
                <Stack direction="row" justifyContent="space-between" mt={15}>
                    <Typography variant="subtitle2">&copy; Pedro Silva. All rights reserved.</Typography>
                    <Typography variant="subtitle2">Powered by ChatGPT.</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Index;