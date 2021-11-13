var arrayimg = [
    "http://intothenight.net/wp-content/uploads/2018/04/black-panther-michael-b.jordan.jpg",
    "https://www.themoviedb.org/t/p/original/rYPM8jq4ucF7FCIN6Ae1uschpP0.jpg",
    "https://upload.wikimedia.org/wikipedia/he/e/ec/Fatherhood_Netflix.jpg",
    "http://moridimtv.com/images/xl/movies_new/tm3sUH72854h.jpg",
    
]


let index = 0;
image.src = arrayimg[0]
function img() {
    image.src = arrayimg[index];
    image.src = arrayimg[index++]

    if (index == arrayimg.length) {
        index = 0;
    }
}
var x = window.setInterval(() => { img() }, 1300)
