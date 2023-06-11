import React from 'react' 
import '../App.css'

const Projects = () => {
    return (
        <section id="projects" className="section projects">
        <h2 className="section__title">Projects</h2>

        <div className="projects__grid">

            <div className="project">
                <h3>drivers as agents</h3>
                <p className="project__description">developed a reinforcement learning agent to 
                simulate the behaviour of delivery captains. thus enabling delivery companies optimize their 
            pricing strategy, as well as providing them with a sandbox to experiment with pricing strategies 
            and study their impact and captains' emerging behaviour before releasing it to the real world.
                </p>
                <ul className="project__stack">
                    <li className="project__stack-item">python</li>
                    <li className="project__stack-item">reinforcement learning</li>
                    <li className="project__stack-item">simulation</li>
                    <li className="project__stack-item">tensorboard</li>
                    <li className="project__stack-item"><a className="link" href="https://www.gymlibrary.dev/">gym</a></li>
                </ul>
                         
                <a
                        href="./pdf/Reinforcement_learning.pdf"
                        aria-label="live preview"
                        className="link link--icon"
                >
                <i aria-hidden="true" className="fas fa-external-link-alt"></i>
                </a>
          </div>
          <div className="project">
            <h3>FinAnalytica</h3>
            <p className="project__description">
              developed an app that takes in all my transactions, from multiple outlets.
              analyze and visualize them on monthly basis, showing spending on different categories,
              as well as the month over month total spending
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">jupyer-lab</li>
              <li className="project__stack-item">viola</li>
              <li className="project__stack-item">d3</li>
              <li className="project__stack-item">javascript</li>
              <li className="project__stack-item">plotly</li>
            </ul>
            <a
              href="./projects/finAnalytica/"
              aria-label="live preview"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>

          </div>
          <div className="project">
            <h3>pif employees animation</h3>
            <p className="project__description">
             created an animation for the movement of the employees of pif between companies, and showed the effect of vision 2030 to the empoloyment numbers at pif 
             data is credited to <a className="link" href="https://www.linkedin.com/in/hulayel">majed alhulayel</a> 
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">python</li>
              <li className="project__stack-item">javascript</li>
              <li className="project__stack-item">d3</li>
              <li className="project__stack-item">simulation</li>
            </ul>
          
            <a
              href="./projects/PIF_employees"
              aria-label="live preview"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>
              
          <div className="project">
            <h3>game theory</h3>
            <p className="project__description">
              wrote an article in <a className="link" href="https://jaras.cool/">jaras</a> about game theory, and how it applies to the game of 
              rock paper scissors. you can find the link to the article <a className="link" href="https://jaras.cool/4-gametheory">here</a> 
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">python</li>
              <li className="project__stack-item">pygame</li>
              <li className="project__stack-item">game theory</li>
            </ul>
 
            <a
              href="https://jaras.cool/4-gametheory"
              aria-label="live preview"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>

          <div className="project">
            <h3>poets analytics</h3>
            <p className="project__description">
             used  <a className="link" href="https://www.aldiwan.net/">aldiwan</a> data to analyze the corpus of 
             poems, you can find the developed interactive dashboard <a className="link" href="./projects/poets/index.html">here</a> 
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">webscraping</li>
              <li className="project__stack-item">python</li>
              <li className="project__stack-item">javascript</li>
              <li className="project__stack-item">d3</li>
            </ul>
            
            <a
              href="./projects/poets"
              aria-label="live preview"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="project">
            <h3>image classNameifier</h3>
            <p className="project__description">
              built an image classNameifier using eigenvalue analysis. the task was to
              predict wether or not the image was of a building or a vacant land. using 
              eigenvalue analysis, one can create a measure of the complexity of the image, 
              and thus determining it is of a building or land. 
            </p>
            <ul className="project__stack">
              <li className="project__stack-item">python</li>
              <li className="project__stack-item">scikit-learn</li>
            </ul>

          
          </div>

        </div>

      </section>
    )
}

export default Projects
