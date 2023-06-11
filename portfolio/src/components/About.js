import React from 'react' 
import '../App.css'

const About = () => {
    return (
        // <!-- About -->
        <div className="about center">
          <h1>Hi, I am <span className="about__name">Ali AlNasser</span></h1>
          <h2 className="about__role">Data scientist</h2>
          <p className="about__desc">
            I'm a mathematician by training, data scientist by trade, 
            I've been a data scientist for over two years at <a className="link" href="https://www.quant.sa/">Quant</a>
          </p>
  
          <div className="about__contact center">
            <a href="./pdf/resume.pdf">
              <span className="btn btn--outline">Resume</span>
            </a> 
            <a
              href="https://www.linkedin.com/in/alialnasser/"
              aria-label="linkedin"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
    )
}

export default About
