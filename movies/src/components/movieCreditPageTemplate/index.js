import React from "react";
import MovieCredit from "../movieCredit";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";

function MovieCreditsListPageTemplate({ credits }) {

    return (

        <Grid container sx={{ padding: '15px' }}>
            <Grid item xs={12}>
                <Header title={`Movie Cast`} />
            </Grid>
            <Grid item container spacing={5} >
                <MovieCredit credits={credits}></MovieCredit>
            </Grid>
        </Grid>
    );
}
export default MovieCreditsListPageTemplate;