const values=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const btn = document.getElementById('button');
const color = document.querySelector('.color');
//By Geven
btn.addEventListener('click', function(){
    let result="#";
    for(let x=0;x<6;x++)
    {
        let x= getRandom();
        result+=values[x];
    }
    document.body.style.backgroundColor = result;
    color.textContent=result;

})
function getRandom(){
    return Math.floor(Math.random() * values.length);
}
