import HeroModel from "../Models/HeroModels"
import StarsCanvas from "../Models/Stars"

export const HeroSection = () =>{
    return (
        <section>
            <div className="hero-content">
                <div>
                    <h1>Hi, I'm Jose</h1>
                    <h3>Full-Stack Developer</h3>
                    <button>Get in touch</button>
                </div>
                
            </div>
            <HeroModel/>
        </section>
    )
}