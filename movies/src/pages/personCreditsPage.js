import React from "react";
import { useParams } from 'react-router-dom';
import { getPersonCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import PersonCreditsPageTemplate from "../components/templarePersonCreditsPage";
import Spinner from '../components/spinner'



const PersonCreditsPage = (props) => {
    const { id } = useParams();

    const { data, error, isLoading, isError } = useQuery(
        ["person", { id: id }, "movie_credits"],
        getPersonCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <>

            <PersonCreditsPageTemplate credits={data}></PersonCreditsPageTemplate>

        </>
    );
};

export default PersonCreditsPage;