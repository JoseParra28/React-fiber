import { Link, NavLink, Router } from "react-router-dom"
import { ExternalLink } from 'react-external-link';
import runway from '../assets/runway.png'
import sebastian from '../assets/sebastian.png'
import python from '../assets/python.png'
import oblivious from '../assets/oblivious.png'
import '../Styles/card.css'
import '../Styles/mediaquery.css'

const projects = [
    {
    pic: sebastian,
    id: 'sebastian',
    title: "Sebastian",
    languageOne: 'HTML',
    languageTwo: 'CSS',
    languageThree: 'Javascript',
    description: 'My very first website',
    gitLink: 'https://github.com/JoseParra28/SEBASTIAN',
    livePreview: 'https://joseparra28.github.io/SEBASTIAN/index.html'
},
{
    pic: oblivious,
    id: 'ObliviousBakery',
    title: "Oblivious Bakery",
    languageOne: 'HTML',
    languageTwo: 'CSS',
    languageThree: 'Javascript',
    languageFour: 'Python',
    api: 'API',
    description: 'Backend website ',
    gitLink: 'https://www.npmjs.com/package/react-external-link',
    livePreview: '/'
},
{
    pic: python,
    id: 'python',
    title: "Python Project",
    languageFour: 'Python',
    description: 'My very first website',
    gitLink: 'https://www.npmjs.com/package/react-external-link',
    livePreview: '/'
},
{
    pic: runway,
    id: 'RunwayModels',
    title: "Runway Models",
    languageOne: 'HTML',
    languageTwo: 'CSS',
    description: 'My very first websitena, jknbcsiuabf  iusoif   jkfbiuewhfowefj uiwekhfonfljhaof8hab',
    gitLink: 'https://github.com/JoseParra28/runway-models-final-project?tab=readme-ov-file',
    livePreview: "https://joseparra28.github.io/runway-models-final-project/"
}
]

export const Card = () => {

    return (
        <section id="work">
            <div className="card-wrapper">
            {projects.map((project, index) => {
            return ( <>                
                <div key={project.id} className="card">
            <div className="image">
                <img src={project.pic} alt="project photo" />
            </div>
            <div className="card-content">
                <h3>{project.title}</h3>
                <span className="language python">{project.languageFour}</span>
                <span className="language html">{project.languageOne}</span>
                <span className="language css">{project.languageTwo}</span>
                <span className="language js">{project.languageThree}</span>
                <span className="language api">{project.api}</span>
                <p>{project.description}</p>
                <div className="card-btns">
                <ExternalLink href={project.gitLink} className="code-btn">
                  <span className="code"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#696868"><path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg></span>
                  </ExternalLink>
                  <ExternalLink href={project.livePreview} className="btn" >
                  <span className="live">Live preview</span>
                  </ExternalLink>
                  
                </div>
            </div>
           </div>
           
           </>
            )
        })}
            </div>
            
        </section>
    )
}