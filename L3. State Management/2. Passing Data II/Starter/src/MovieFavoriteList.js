const MovieFavoriteList = ({ profiles, movies }) => {
  const movieIdLikesMap = {};
  profiles.forEach((profile) => {
    const movieId = profile.favoriteMovieID;
    movieIdLikesMap[movieId] = (movieIdLikesMap[movieId] || 0) + 1;
  });

  const moviesArray = Object.values(movies);

  return (
    <ul>
      {moviesArray.map((movie) => (
        <li key={movie.id}>
          {movie.name} has {movieIdLikesMap[movie.id] || "No"} likes.
        </li>
      ))}
    </ul>
  );
};

export default MovieFavoriteList;
