import axios from 'axios';

const API_KEY = '31449444226ba6345698313fe055564a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=uk&page=1`
  );
  return data.results;
};

export const searchByMovies = async (query, page, total_pages) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`,
    {
      params: {
        query,
        page,
        limit: total_pages,
      },
    }
  );
  return data.results;
};

export const searchGeneralInfo = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const dataMovies = {
    originalTitle: data.original_title,
    title: data.title,
    genres: data.genres,
    overview: data.overview,
    poster: data.poster_path,
    releaseDate: data.release_date.slice(0, 4),
    voteAverage: data.vote_average,
  };
  return dataMovies;
};

export const fetchMovieCasts = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const castInfo = data.cast.map(({ id, name, profile_path }) => ({
    id,
    name,
    profilePath: profile_path,
  }));
  return castInfo;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const reviewsInfo = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));

  return reviewsInfo;
};
