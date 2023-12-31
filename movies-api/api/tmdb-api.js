import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch genres: "+response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};  



export const getMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
             );

        if (!response.ok) {
            throw new Error(response.json().message);
        }
    return await response.json();
} catch (error) {
    throw error;
}
};


export const getMovie = async (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
  });
  };


  export const getMovieReviews = async (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      });
  };  


  export const getTopRatedMovies = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&page=${page}`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getMovieRecommendations = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };


  export const getMovieCredits = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };

  export const getPopularReleases = async (page) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};


  export const getPerson = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };   



  export const getPersonCredits = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };    
  