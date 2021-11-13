let basicApi = "https://moviesmern.herokuapp.com/movies/all";

async function apiFunction(bApi) {
  try {
    return await fetch(bApi).then(response => response.json());
  } catch (error) {
    return error;
  }
}
function showAllToScreen(object) {
  for (const item of object) {
    myDiv.innerHTML += `<div class="container"> 
      <a href ="./data.html?id=${item._id}"><h2><b>${item.movieName} <b></h2> </a>
      <h3><b> rating:${item.rating}<b></h3>
      <img class=" image"src="${item.image}"><br>
      <button id="${item._id}" onclick="callDelete(this.id)" class="deleteMovie"> deleteMovie </button>
      <a href ="./add.html?id=${item._id}"<button id="${item._id}" class="editMovie"> editMovie </button></a>
      </div>`;
  }
}
apiFunction(`${basicApi}${inputSearch.value}`).then((res) => {
  showAllToScreen(res.data);
});


// Delete
async function deleteFromApi(id, option) {
  try {
    return await fetch(
      `https://moviesmern.herokuapp.com/movies/movie/${id}`,
      option
    ).then((response) => response.json());
  } catch (error) {
    return error;
  }
}
function callDelete(deleteId) {
  const options = {
    method: "DELETE",
  };
  deleteFromApi(deleteId, options).then(alert("The movie has been deleted"))
  if(alert)  location.reload() ;
  
}

// search movie by name
async function searchByName(nameInput) {
  try {
    return await fetch(
      `https://moviesmern.herokuapp.com/movies/movie/searchByName/${nameInput}`
    ).then((res) => res.json());
  } catch (error) {
    return error;
  }
}
function showOneMovieByName(object) {
  for (const item of object) {
    myDiv.innerHTML = `<div class="container"> 
      <a href ="./data.html?id=${item._id}"><h1><b>${item.movieName} <b></h1> </a>
      <h3><b> rating: ${item.rating}<b></h3>
      <img class=" image"src="${item.image} ">
      <button onclick="callDelete("${item._id}")" class="deleteMovie">deleteMovie</button>
      </div>`;
  }
}
inputSearch.oninput = () => {
  if (inputSearch.value.length > 3) {
    searchByName(inputSearch.value).then((res) => {
      showOneMovieByName(res.data);
    });
  } else {
    myDiv.innerHTML = "";
  }
};



// edit
// function editMovie(_id) {
//   let movie = new Movie(
//     movieName.value,
//     ratingInput.value,
//     imageInput.value,
//     synopsisInput.value,
//     linkInput.value
//   )
//   let options = {
//     method:"PUT",
//     body: JSON.stringify({ movie }),
//     headers: { "Content-Type": "application/json" }
//   }
//   apiFunction(`https://moviesmern.herokuapp.com/movies/movie/${_id}`, options);
//   };




 



