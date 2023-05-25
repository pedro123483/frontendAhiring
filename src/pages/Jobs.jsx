// imports requireds
import { Grid } from "@mui/material";
import { Stack, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Navbar from "../components/Navbar.jsx";

// component responsible for rendering the job description page
const Jobs = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [industry, setIndustry] = useState("");
    const [keyWords, setKeywords] = useState("");
    const [tone, setTone] = useState("");
    const [numberWords, setNumberWords] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [textButton, setTextButton] = useState("Copy to clipboard");

    // get inputs from forms and then make api call to generate the description
    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "https://b706j7-8000.csb.app/job",
            data: {
                jobTitle,
                industry,
                keyWords,
                tone,
                numberWords
            }
        };

        try {
            axios(configuration).then((result) => {
                console.log(result.data);
                setJobDescription(result.data);
                setLoading(false);
                setJobTitle("");
                setIndustry("");
                setKeywords("");
                setTone("");
                setNumberWords("");
            }).catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    // copy text to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(jobDescription);
        setTextButton("Copied");
    };
    
    return (
        <>
            <Navbar />
            <Grid container justifyContent="space-evenly">
                {loading && (
                        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                            <CircularProgress color="inherit" />
                        </Backdrop>  
                        )}
                <Grid item md={5}>
                    <Stack mt={7} spacing={2} direction="column">
                        <TextField sx={{ backgroundColor: "white" }} id="btnTitle" label="Title" variant="filled" onChange={(e) => setJobTitle(e.target.value)} />
                        <TextField sx={{ backgroundColor: "white" }} id="btnIndustry" label="Industry" variant="filled" onChange={(e) => setIndustry(e.target.value)} />
                        <TextField id="keyWords" label="Key words" multiline rows={3} variant="filled" sx={{ backgroundColor: "white" }} onChange={(e) => setKeywords(e.target.value)} />
                        <TextField sx={{ backgroundColor: "white" }} id="btnTone" label="Tone" variant="filled" onChange={(e) => setTone(e.target.value)} />
                        <TextField sx={{ backgroundColor: "white" }} id="btnNumWords" label="Number of words" variant="filled" type="number" onChange={(e) => setNumberWords} />
                        <Button onClick={(e) => handleSubmit(e)} variant="contained">Generate job description</Button>
                    </Stack>
                </Grid>
                <Grid item md={5}>
                    <Stack mt={7} spacing={2}>
                        <TextField id="keyWords" label="AI Generated Job Description" multiline rows={10} variant="filled" sx={{ backgroundColor: "white" }} value={jobDescription} />
                        <Button variant="contained" onClick={() => copyToClipboard()}>{textButton}</Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default Jobs;