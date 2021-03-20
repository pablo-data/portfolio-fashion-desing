//Cursor Functional
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e)=>{
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
})

//functions cursor
const mouseEfectt = () => {
      cursor.style.transform = "scale(4)";
      cursor.style.background = "none";
      cursor.style.border = "1px solid var(--item-colors)";
      cursor.style.transitionTimingFunction = "easy-in-out";
};

//Label animation
var label = document.getElementById('switch');


label.addEventListener("mouseover", (e) => {
  mouseEfectt();
})

label.addEventListener("mouseout", (e) =>{
  cursor.style = cursor;
})
  

//Button animation
 var button = document.getElementsByTagName("button");

 for(var i= 0; i < button.length; i++){
   button[i].addEventListener("mouseover", (e) => {  
     mouseEfectt();
   })
 
   button[i].addEventListener("mouseout", (e) =>{
     cursor.style = cursor;
   })
 };



//Animation Title
var textWrapper = document.querySelector('.title-anime');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var animation = anime.timeline()
  .add({
    targets: '.title-anime .letter, .card-button, .dark-mode',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: 'linear',
    duration: 3000,
    delay: (el, i) => 500 + 30 * i
  });


  //Dark mode

const checkbox = document.querySelector('#checkbox');

 if (window.matchMedia('(prefers-color-scheme: dark)')) {
   checkbox.setAttribute('checked', false);
 }

 checkbox.addEventListener('change', function (event){
   
    if(this.checked){
      document.body.classList.remove('is-dark-mode');
      document.body.classList.add('is-light-mode');
      console.log(this.checked)
      
    } else {
      document.body.classList.remove('is-light-mode');
      document.body.classList.add('is-dark-mode');
      console.log(this.checked)
    }
 })