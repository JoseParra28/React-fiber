import { Link, NavLink, Router } from "react-router-dom"
import { ExternalLink } from 'react-external-link';
import runway from '../assets/runway.png'
import '../Styles/card.css'

const projects = [
//     {
//     pic: '../assets/close.svg',
//     id: 'RunwayModels',
//     title: "Runway Models",
//     languageOne: 'HTML',
//     languageTwo: 'CSS',
//     languageThree: 'Javascript',
//     languageFour: 'Python',
//     description: 'My very first website',
//     gitLink: 'https://www.npmjs.com/package/react-external-link',
//     livePreview: '/'
// },
{
    pic: {runway},
    id: 'RunwayModels',
    title: "Runway Models",
    languageOne: 'HTML',
    languageTwo: 'CSS',
    languageThree: 'Javascript',
    languageFour: 'Python',
    description: 'My very first website',
    gitLink: 'https://github.com/JoseParra28/runway-models-final-project?tab=readme-ov-file',
    livePreview: "https://joseparra28.github.io/runway-models-final-project/"
}
]

export const Card = () => {

    return (
        <section>
            
        {projects.map((project, index) => {
            return ( <>                <div className="card-wrapper">
                <div key={project.id} className="card">
            <div className="image">
                <img src={runway} alt="project photo" />
            </div>
            <div className="card-content">
                <h3>{project.title}</h3>
                <span>{project.languageOne}</span>
                <span>{project.languageTwo}</span>
                <span>{project.languageThree}</span>
                <span>{project.languageFour}</span>
                <p>{project.description}</p>
                <div className="card-btns">
                <ExternalLink href={project.gitLink} className="btn">
                  <span>Gitbub</span>
                  </ExternalLink>
                  <ExternalLink href={project.livePreview} className="btn" >
                  <span>Live previw</span>
                  </ExternalLink>
                  
                </div>
            </div>
           </div>
           </div>
           </>

            )
        })}
        </section>
    )
}