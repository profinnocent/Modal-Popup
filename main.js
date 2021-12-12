//Grabbing DOMs
const modal = document.querySelector('.modal')


//mpFunc
function mpFunc() {
    modal.style.visibility = 'visible';
  }

function spFunc() {
    modal.style.visibility = 'hidden';
  }

window.onclick = function(e){
  if(e.target == modal){
    modal.style.visibility = 'hidden';
  }
}