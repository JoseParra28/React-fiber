import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'


export const SubNav = () => {

    

    return (
        <div className="subnav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="dropdown">
                <img src={menu} alt="" />
            </div>
        </div>
    )
}