class Movie {
  movieName;
  rating;
  synopsis;
  image;
  linkToMovie;
  constructor(_movieName, _rating, _synopsis, _image, _linkToMovie) {
    this.movieName = _movieName;
    this.rating = _rating;
    this.synopsis = _synopsis;
    this.image = _image;
    this.linkToMovie = _linkToMovie;
  }
} 
async function apiFunction(bApi, option) {
  try {
    return await fetch(bApi, option).then(response=>response.json())
  } catch (error) {
    return error;
  }
}

btnSearch.onclick = () => {
  let movie = new Movie(
    movieName.value,
    ratingInput.value,
    imageInput.value,
    synopsisInput.value,
    linkInput.value
  );
  console.log(movie);

  let option = {
    method:"POST",
    body: JSON.stringify({ movie }),
    headers: { "Content-Type": "application/json" },
  }
  apiFunction("https://moviesmern.herokuapp.com/movies/saveMovie", option);
};


// update
put.onclick = () => {
let options = {
  method:"PUT",
  body: JSON.stringify({ movie }),
  headers: { "Content-Type": "application/json" }
}
apiFunction("https://moviesmern.herokuapp.com/movies/movie/:id", options);
};




