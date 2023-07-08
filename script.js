const input = document.querySelector('#inputId');
const addBtn = document.querySelector('.addBtn');
const colorBox = document.querySelector(".colorBox");
const colorsList = document.querySelector(".colorsList");
const btns = document.querySelectorAll('.btns');

 function makeColor(){
     let lastColor = colorBox.style.backgroundColor;
    colorBox.style.backgroundColor = input.value;
    if(lastColor !== colorBox.style.backgroundColor){
        let newdiv = document.createElement('button');
        newdiv.classList.add('btns');
        newdiv.style.backgroundColor = input.value
        colorsList.appendChild(newdiv);

        newdiv.addEventListener('click', function(){
           colorBox.style.backgroundColor = newdiv.style.backgroundColor;
        })
    }
      input.value = "";
 }

addBtn.addEventListener("click", function () {
   if (input.value && input.value.trim()) {
       makeColor();
   }
});
document.addEventListener("keyup",function(e){
   if(input.value && input.value.trim()){
    if (e.key == "Enter") {
      makeColor();
    }
   }
});

btns.forEach((el) => {
  el.addEventListener("click", function (e) {
    colorBox.style.backgroundColor = el.style.backgroundColor;
  });
});


