import React from 'react' 
import '../App.css'

const Skills = () => {
    return (
        <section className="section skills" id="skills">
        <h2 className="section__title">Skills</h2>
          <ul className="skills__list">
            <li className="skills__list-item btn btn--plain">Data analytics</li>
            <li className="skills__list-item btn btn--plain">Data visualization</li>
            <li className="skills__list-item btn btn--plain">Web scraping</li>
            <li className="skills__list-item btn btn--plain">Python</li>
            <li className="skills__list-item btn btn--plain">HTML</li>
            <li className="skills__list-item btn btn--plain">CSS</li>
            <li className="skills__list-item btn btn--plain">D3</li>
            <li className="skills__list-item btn btn--plain">p5</li>  
            <li className="skills__list-item btn btn--plain">javaScript</li>
            <li className="skills__list-item btn btn--plain">Postgres</li>
            <li className="skills__list-item btn btn--plain">Alteryx</li>
            <li className="skills__list-item btn btn--plain">Tableau</li>
          </ul>
        </section>
    )
}

export default Skills
