export const recentRelease = (data, category) => {
  const filteredData = data.filter((movie) => {
    return movie.category === category;
  });

  return filteredData.sort((date1, date2) => {
    return new Date(date1.releaseDate) > new Date(date2.releaseDate) ? -1 : 1;
  });
};

export const suggested = (data) => {
  return data.filter((movie) => {
    return movie.voteAverage >= 8;
  });
};

export const mostViewed = (data) => {
  return data.sort((movie1, movie2) => {
    return movie1.popularity > movie2.popularity ? -1 : 1;
  });
};
