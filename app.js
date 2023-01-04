const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

function pageTransitions(){
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){

      // Removing "active" on old button
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.classList.remove('active-btn')

      // Adding "active" on new button
      this.classList.add('active-btn');

      // Removing "active" on old section
      let currentSect = document.querySelector('.active-sect')
      currentSect.classList.remove('active-sect')

      // Adding "active" on new section
      let id = this.dataset.id
      let newSection = document.getElementById(id)
      newSection.classList.add('active-sect')

    })
  }

  // Toggle theme
  const  themeBtn = document.querySelector('.theme-btn')
  themeBtn.addEventListener('click', () =>{
    let element = document.body
    element.classList.toggle('light-mode')
  })
}

pageTransitions()
