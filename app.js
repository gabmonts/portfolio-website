const sectBtn = document.querySelectorAll('.control')

function pageTransitions(){
    sectBtn.forEach(button => {
      button.addEventListener('click', function() {

      // Buttons
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.classList.remove('active-btn')
      this.classList.add('active-btn');

      // Removing "active" on old section
      let currentSect = document.querySelector('.active-sect')
      currentSect.classList.remove('active-sect')

      // Adding "active" on new section
      let id = this.dataset.id
      let newSection = document.getElementById(id)
      newSection.classList.add('active-sect')

    })
  })
}

  // Toggle theme
  const  themeBtn = document.querySelector('.theme-btn')

  function toggleLight(){
    themeBtn.addEventListener('click', () =>{
      let element = document.body
      element.classList.toggle('light-mode')
    })
  }

pageTransitions()
toggleLight()
