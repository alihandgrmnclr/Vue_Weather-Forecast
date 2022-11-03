export const setFavourites = (city) => {
  if (city.length < 2) return;

  let favs = [city];

  let localFavs = localStorage.getItem("favourites") || false;

  if (localFavs) {
    localFavs = JSON.parse(localFavs);
    favs = [...new Set(localFavs.concat(favs))];
    localStorage.setItem("favourites", JSON.stringify(favs));
    console.log(favs);
  } else {
    localStorage.setItem("favourites", JSON.stringify(favs));
    console.log(favs);
  }
};
