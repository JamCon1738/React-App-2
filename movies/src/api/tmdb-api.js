export const getMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/discover`
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

export const getMovie = (args) => {
  console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}`
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

export const getGenres = async () => {
  return fetch(
    "http://localhost:8080/api/movies/tmdb/genres"
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

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/tmdb/movieImages/${id}`
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

export const getMovieReviews = (id) => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/movieReviews/${id}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getUpcomingMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/upcoming`
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



export const getTopRatedMovies = async (page) => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/topRated/${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
}

export const getMovieRecommendations = (id) => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/recommendations`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};


export const getMovieCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}/credits`
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


export const getPerson = (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/tmdb/person/${id}`
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

export const getPersonCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/tmdb/person/${id}/credits`
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

export const getPopularReleases = () => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/popular` 
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

//will try to use later

export const getJobs = async () => {
  return fetch(
    "https://api.themoviedb.org/3/configuration/jobs?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US"
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
