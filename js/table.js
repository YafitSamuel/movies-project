let basicApi = "https://moviesmern.herokuapp.com/movies/all";

async function apiFunction(bApi) {
  try {
    return await fetch(bApi).then((response) => response.json());
  } catch (error) {
    return error;
  }
}
function showAllToScreen(object) {
  for (const item of object) {
    myTable.innerHTML += `
     <tr>
     <td><img id="image"src="${item.image} "></td>
       <td>${item.movieName} </td>
       <td>${item._id} </td>
       <td>${item.linkToMovie} </td>
       <td>${item.image} </td>
       <td>${item.rating}</td>  
       <td>${item.synopsis}</td>  
    </tr>   
      `
  }
}
apiFunction(`${basicApi}`).then((res) => {
  showAllToScreen(res.data);
});







