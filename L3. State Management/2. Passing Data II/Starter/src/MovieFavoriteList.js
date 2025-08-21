import MovieListItem from "./MovieListItem";

const MovieFavoriteList = ({ profiles, movies, users }) => {
  const movieIdLikesMap = {};
  profiles.forEach((profile) => {
    const movieId = profile.favoriteMovieID;

    if (!movieIdLikesMap[movieId]) {
      movieIdLikesMap[movieId] = [];
    }
    movieIdLikesMap[movieId].push(profile.userID);
  });

  const moviesArray = Object.values(movies);

  return (
    <ul>
      {moviesArray.map((movie) => (
        <li key={movie.id}>
          <MovieListItem
            movie={movie}
            likedByUsersList={movieIdLikesMap[movie.id]}
            users={users}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieFavoriteList;
