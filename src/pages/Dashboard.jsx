import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [candidateEmail, setCandidateEmail] = useState("");
    const [hasEmail, setHasEmail] = useState(false);

    const handleFile = (e) => {
        const formData = new FormData();

        formData.append("pdfFile", e.target.files[0]);

        setLoading(true);

        fetch("https://b706j7-8000.csb.app/curriculum", {
            method: "post",
            body: formData,
        }).then(response => {
            return response.text();
        }).then(extractedText => {
            setResult(extractedText);
            setLoading(false);
            setCandidateEmail(extractEmailFromString(extractedText));
            console.log(extractEmailFromString(extractedText));
            hasEmail(true);
        }).catch(error => console.log(error));
    };

    const extractEmailFromString = (sentence) => {
        const emailRegex = /[\w.-]+@[\w.-]+\.[\w.-]+/; // Regular expression pattern for email matching
        const matches = sentence.match(emailRegex); // Find matches in the sentence
      
        if (matches && matches.length > 0) {
          return matches[0]; // Return the first match (email address)
        } else {
          return null; // No email address found
        }
      }

    return (
        <>
            <Navbar />
            <Grid container mt={20} justifyContent="center">
                {loading && (
                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                        <CircularProgress color="inherit" />
                    </Backdrop>  
                    )}
                <TextField
            id="summary"
            label="Candidate summary"
            multiline
            rows={10}
            value={result}
            variant="filled"
            sx={{ backgroundColor: "white", width: "80%" }} />
                <Stack mt={3} direction="row" spacing={80}>
                    <Button variant="contained" component="label">
                        Upload file<input type="file" hidden onChange={(e) => handleFile(e)} />
                    </Button>
                    <Button variant="contained" component="a" href={`mailto:${candidateEmail}`}>
                        Contact candidate <a href="mailto:pg308758@gmail.com"></a>
                    </Button>
                </Stack>
            </Grid>
        </>
    );
};

export default Dashboard;