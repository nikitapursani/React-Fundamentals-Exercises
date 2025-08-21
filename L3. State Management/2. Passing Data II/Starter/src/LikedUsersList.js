const LikedUsersList = ({ likedByUsersList, users }) => {
  return (
    <ul>
      {likedByUsersList.map((userId) => {
        return <li key={userId}>{users[userId].name}</li>;
      })}
    </ul>
  );
};

export default LikedUsersList;
