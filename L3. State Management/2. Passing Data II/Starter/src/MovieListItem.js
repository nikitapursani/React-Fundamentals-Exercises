import LikedUsersList from "./LikedUsersList";

const MovieListItem = ({ movie, likedByUsersList, users }) => {
  if (!likedByUsersList) {
    return <h3>{movie.name} has no likes</h3>;
  } else {
    return (
      <div>
        <h3>{movie.name}</h3>
        <LikedUsersList likedByUsersList={likedByUsersList} users={users} />
      </div>
    );
  }
};

export default MovieListItem;
