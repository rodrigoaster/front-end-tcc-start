import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className="navbar px-5 bg-light">
            <div className="container-fluid">
                <a  href="perfil">
                    <img src="src/assets/img/logo/logo.png" alt="" width="90" height="90" className="d-inline-block align-text-top"/>
                    
                </a>
                <ul className="nav justify-content-end nav-pills">

                </ul>
            </div>
        </nav>
    )
}