import data from '../../data/data'
import './Education.css'

const Education = () => {
  return `
    <section class="education" id="education">
      <h2>Education</h2>
      <h3>${data.education.Title}</h3>
      <h4>${data.education.Certificate}</h4>
      <p>${data.education.Graduationyear}</p>
      <h3>Relevant Courses</h3>
      <ul id="relevantcourses">
      ${data.education.relevantsubjects
        .map(
          (course) => `
      <li>
        <p>${course}</p>
      </li>
      `
        )
        .join('')}
      </ul>
    </section>
  `
}

export default Education
