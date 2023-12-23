import Grid from "@mui/material/Grid";
import MovieRecommendations from "../movieRecommendations";
import React, { useEffect, useState } from "react";
import { getMovieRecommendations } from "../../api/tmdb-api";

const MovieRecommendation = ({ movie }) => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        getMovieRecommendations(movie.id).then((recommendations) => {
            setRecommendations(recommendations);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let movieCards = recommendations.slice(0, 4).map((m) => (
        <Grid key={m.id} item xs={4} sm={6} md={4} lg={3} xl={2}>
            <MovieRecommendations key={m.id} recommendation={m} />
        </Grid>
    ));
    return movieCards;
};

export default MovieRecommendation;