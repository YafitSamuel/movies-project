var arrayimg = [
    "https://i.pinimg.com/564x/8f/29/a2/8f29a26f792f3fb17e41ca79d667a242.jpg",
    "https://i.pinimg.com/564x/04/93/17/049317bd6e38e1dc4ba505924b292007.jpg",
    "https://i.pinimg.com/564x/e9/2f/b3/e92fb3f6eab67823716d4d7c8e1db282.jpg",
    "https://i.pinimg.com/564x/67/80/d4/6780d48efdb9495c1a0e036aec4295f5.jpg",
    
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
var x = window.setInterval(() => { img() }, 2000)
