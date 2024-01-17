const UserFavoriteAnimals = (props) => {
  const {fav} = props;
  return fav.map((item, index) => <li key={index}>{item}</li>);
};

export default UserFavoriteAnimals;
