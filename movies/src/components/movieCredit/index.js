import Grid from "@mui/material/Grid";
import MovieCredits from "../movieCredits";
import React from "react";

const MovieCredit = ({ credits }) => {

    let cast = credits.cast
    let creditsCard = cast.map((c) => (
        <Grid key={c.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCredits key={c.id} credit={c} />
        </Grid>
    ));
    return creditsCard;
}

export default MovieCredit;