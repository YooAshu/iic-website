let hamburger = document.getElementsByClassName('hamburger')[0]
let hammenu = document.getElementsByClassName('ham-menu')[0]
let topright = document.getElementsByClassName('top-right')[0]
let hamitems = document.getElementsByClassName('ham-items')[0]
let header = document.getElementsByClassName('header')[0]
let iictopleft = document.getElementsByClassName('iic-top-left')[0]
let moon = document.getElementsByClassName('moon')[0]


hamburger.onclick = function() {
  hammenu.classList.toggle('ham-menu-active')
  topright.classList.toggle('top-right-active')
  hamitems.classList.toggle('ham-items-active')
  header.classList.toggle('header-active')
}
window.addEventListener('scroll', function(){
  header.classList.toggle('sticky', window.scrollY>40)
  iictopleft.classList.toggle('iic-sticky', window.scrollY>40)
  moon.classList.toggle('moon-sticky', window.scrollY>40)
  
})
if(window.scrollY > 40){
   header.classList.toggle('sticky')
  iictopleft.classList.toggle('iic-sticky')
  moon.classList.toggle('moon-sticky')
  }
// preloader
window.onload = function() {
  //hide the preloader
  // setTimeout(function(){
  //   document.querySelector("#preloader").style.display = "none";
  // },2000)
  document.querySelector("#preloader").style.display = "none";
}