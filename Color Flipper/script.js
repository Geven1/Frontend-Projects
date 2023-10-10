const colors=['aqua', 'black','blue','fuchsia','gray', 'green','lime','maroon','navy','olive','purple', 'red',' silver', 'teal',' white','yellow'];

const querycolor = document.querySelector(".color");
const btn  = document.getElementById("button");

//By Geven
btn.addEventListener('click',function(){
    let x = getRandom();
    let randomColor = colors[x];

document.body.style.backgroundColor = colors[x];
querycolor.textContent=colors[x];

})

function getRandom(){
    return Math.floor(Math.random() * colors.length)
}