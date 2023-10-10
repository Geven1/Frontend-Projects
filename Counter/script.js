var x=0;
const decr = document.getElementById('decrease');
const res = document.getElementById('reset');
const incr = document.getElementById('increase');
const num = document.getElementById('variable');
res.addEventListener("click",function(){
    x=0;
    num.textContent = x;
});
decr.addEventListener("click", function(){  
    window.x--;
    num.textContent = x
}
);
incr.addEventListener("click",function(){
    window.x++;
    num.textContent = x;
}
);