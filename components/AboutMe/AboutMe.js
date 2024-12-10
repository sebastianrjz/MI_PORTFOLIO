// /src/components/AboutMe.js

import data from '../../data/data' // Importamos los datos generales desde data.js
import Skills from '../skills/skills' // Importamos el componente Skills
import './AboutMe.css' // Importamos los estilos CSS

export const AboutMe = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>About me</h2>
      <div class="perfil">
        <img class="avatar" src="${data.url}" alt="${data.Image}" />
        <div>
          <h2>Hola, soy Tomas Sebastian</h2>
          <p>I’m a Web Developer</p>
        </div>
      </div>
    ${Skills()}
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href="mailto:${data.email}">Contact me</a>
      
      <!-- Aquí se llamará al componente Skills -->
    
    </section>
  `
}

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar') // Seleccionamos la imagen de perfil

  // Agregamos un listener para que la imagen rote cuando se haga clic
  avatar.addEventListener('click', (e) => {
    e.target.classList.toggle('rotate')
  })
}
