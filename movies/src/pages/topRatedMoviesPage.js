// import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";

import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import MustWatchIcon from "../components/cardIcons/mustWatch";


const TopRatedMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('TopRated', getTopRatedMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const toprated = data.results;

    const mustWatch = toprated.filter(m => m.mustWatch)
    localStorage.setItem('mustWatch', JSON.stringify(mustWatch))


    return (
        <PageTemplate
            title='Top Rated Movies'
            movies={toprated}
            action={(movie) => {
                return <MustWatchIcon movie={movie} />
            }}
        />
    );
};
export default TopRatedMoviesPage;