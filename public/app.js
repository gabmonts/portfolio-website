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
  const themeBtn = document.querySelector('.theme-btn')

  function toggleLight(){
    themeBtn.addEventListener('click', () =>{
      let element = document.body
      element.classList.toggle('light-mode')
    })
  }

  // Form & email
  document.querySelector('.contact-form').addEventListener('submit', submitForm);

  function submitForm(event){
    event.preventDefault();

    params = {
      name: document.querySelector('.input-name').value,
      email: document.querySelector('.input-email').value,
      subject: document.querySelector('.input-subject').value,
      message: document.querySelector('.input-message').value,
    };

    const serviceID = "service_41c0y2p";
    const templateID = "template_dovpw58";

    emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      document.querySelector('.contact-form').reset();
      alert("Email sent successfully, thanks for getting in touch!");
    })
    .catch((error) => console.log(error));
  }

pageTransitions()
toggleLight()
