import React from "react";
import PersonCreditsListed from "../personCreditsListed";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";

function PersonCreditsPageTemplate({ credits }) {

    return (

        <Grid container sx={{ padding: '20px'}}>
            <Grid item xs={12}>
                <Header title={`Credits:`} />
            </Grid>
            <Grid item container spacing={5} >
                <PersonCreditsListed credits={credits}></PersonCreditsListed>
            </Grid>
        </Grid>
    );
}
export default PersonCreditsPageTemplate;