import PageTemplate from '../components/templateMovieListPage'
import { getPopularReleases } from "../api/tmdb-api";

import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import MustWatchIcon from "../components/cardIcons/mustWatch";


const PopularMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('Popular', getPopularReleases)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const popular = data.results;


    const mustWatch = popular.filter(m => m.mustWatch)
    localStorage.setItem('mustWatch', JSON.stringify(mustWatch))


    return (
        <PageTemplate
            title='Popular Movies'
            movies={popular}
            action={(movie) => {
                return <MustWatchIcon movie={movie} />
            }}
        />
    );
};
export default PopularMoviesPage;