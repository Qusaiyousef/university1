const header = document.querySelector('.header')
window.onscroll = function( ){
var top = window.scrollY;
console.log(top);
if(top >= 600){

    header.classList.add('active')
}
 else{
    header.classList.remove('active');
 }
}