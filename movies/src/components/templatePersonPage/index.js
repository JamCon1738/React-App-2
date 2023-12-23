// import React, { useState, useEffect } from "react";
import PersonHeader from "../headerPerson";
import Grid from "@mui/material/Grid";
import { getPerson } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateMoviePage = ({ person, children }) => {
    const { data, error, isLoading, isError } = useQuery(
        ["person", { id: person.id }],
        getPerson
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const image = data

    return (
        <>
            <PersonHeader people={person} />

            <Grid container spacing={5} sx={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${image.profile_path}`} alt={`${image.profile_path}`} width={200} height={300}></img>
                    </div>
                </Grid>

                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateMoviePage;