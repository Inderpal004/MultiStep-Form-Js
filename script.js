let Next1 = document.getElementById('Next1');
let Next2 = document.getElementById('Next2');
let Prev1 = document.getElementById('Prev1');
let Prev2 = document.getElementById('Prev2');

let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');

let progress = document.getElementById('progress-bar')

Next1.addEventListener('click',function(){
    form1.style.left = "-400px";
    form2.style.left = '20px';
    progress.style.width = "268px"
})

Prev1.addEventListener('click',function(){
    form1.style.left = "20px";
    form2.style.left = '400px'
    progress.style.width = "134px"
})

Next2.addEventListener('click',function(){
    form2.style.left = "-400px";
    form3.style.left = '20px';
    progress.style.width = "400px"
})

Prev2.addEventListener('click',function(){
    form2.style.left = "20px";
    form3.style.left = '400px'
    progress.style.width = "268px"
})