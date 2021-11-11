
async function getData(id) {
  try {
      return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`).then((response) => response.json());
  
  } catch (error) {
    return error;
  }
}
let movieId = location.search.substr(4);
getData(movieId).then((movie) => {
  title.innerHTML = `
    <h3><b>${movie.data.movieName} <b></h3>
    <h3><b>${movie.data.rating}<b></h3>
    <h3><b>${movie.data.synopsis} <b></h3>
    <img id="image" src="${movie.data.image}">
   `;
});



