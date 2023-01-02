const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allsections = document.querySelectorAll('.main-content')

function pageTransitions(){
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.classList.remove('active-btn')
      this.classList.add('active-btn');
    })
  }
}

pageTransitions()
