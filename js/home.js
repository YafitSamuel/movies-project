var arrayimg = [
    "https://i.pinimg.com/564x/5b/4c/7d/5b4c7d52af74554037dc7c599ec0b12e.jpg",
    "https://i.pinimg.com/564x/9c/2a/10/9c2a10809174dc313b9a7571cdbfcbca.jpg",
    "https://i.pinimg.com/474x/a9/03/0e/a9030ec46ba8388bd0433627b4ee7327.jpg",
    "https://i.pinimg.com/564x/e0/29/d9/e029d9e78da6486e72f9b2b5d6dc10ac.jpg",
    
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
