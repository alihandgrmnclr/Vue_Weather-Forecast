export const getFavourites = () => {
  const favs = localStorage.getItem("favourites") || false;
  console.log(favs);
};
