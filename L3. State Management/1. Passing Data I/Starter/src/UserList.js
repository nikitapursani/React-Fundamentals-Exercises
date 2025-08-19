import "./UserList.css";

const UserList = ({ profiles, users, movies }) => {
  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Favorite Movies</h2>
      <ul className="user-list">
        {profiles.map((profile) => (
          <li key={profile.id} className="user-list-item">
            <span className="user-name">{users[profile.userID].name}</span>
            {"'s favorite movie is "}
             <span className="movie-name">
              {movies[profile.favoriteMovieID].name}
            </span>
            .
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
