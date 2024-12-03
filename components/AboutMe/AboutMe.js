// Importar datos generales desde data.js
import data from '../../data/data'
// Importar habilidades desde skills.js con un alias
import { skills } from '../../data/skill/skills'
import './AboutMe.css'

export const AboutMe = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>About me</h2>
      <div class="perfil">
        <img class="avatar" src=${data.url} alt=${data.Image} />
        <div>
          <h2>Hola, soy Tomas Sebastian</h2>
          <p> I’m a web Developer</p>
        </div>
      </div>

      <p class="p">My Skills</p>
      <ul>
        ${skills
          .map(
            (skill) => `<li>
              <img src="${skill}" alt="Habilidad" />
            </li>`
          )
          .join('')}
      </ul>

      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href="mailto:${data.email}">Contact me</a>
    </section>
  `
}

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar')

  avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'))
}
