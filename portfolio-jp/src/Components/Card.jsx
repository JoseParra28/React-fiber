
const projects = [{
    pic: '../assets/menu.svg',
    title: 'Runway Models',
    languageOne: 'HTML',
    languageTwo: 'CSS',
    languageThree: 'Javascript',
    languageFour: 'Python',
    description: 'My very first website',
    gitLink: '/',
    livePreview: '/'
}]

export const Card = () => {

    return (
        <section>
        <div className="card">
            <div className="image">
                <img src={projects.pic} alt="" />image
            </div>
            <div className="card-content">
                <h3>Project name </h3>
                <span>Language</span>
                <span>Language</span>
                <span>Language</span>
                <span>Language</span>
                <p>Description</p>
                <div className="card-btns">
                    <button>To Github</button>
                    <button>live preview</button>
                </div>
            </div>
        </div>
        </section>
    )
}