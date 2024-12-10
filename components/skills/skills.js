// /src/components/Skills.js

import { skills } from '../skills/dataskills' // Importamos las URLs de las habilidades
import './skills.css'

export const Skills = () => {
  return `
    <section class="skills" id="skills">

      <h2>My Skills</h2>

      <ul>
        ${skills
          .map(
            (skill) => `
            <li>
              <img src="${skill}" alt="Habilidad" />
            </li>
            `
          )
          .join('')}
      </ul>
    </section>
  `
}

export default Skills
