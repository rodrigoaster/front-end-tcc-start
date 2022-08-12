import { Link } from "react-router-dom"
import './header.css'

export const Header = () => {
    return (
        <nav className="navbar bg-light navbar-expand-lg">
      
        <div className="container-fluid">
            <a  href="perfil">
                <img src="src/assets/img/logo/New-logo.png" alt="" width="90" height="90" className="d-inline-block align-text-top"/>              
            </a>
  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-controls="navbarNav" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
  
          <div id="navbarNav" className="collapse navbar-collapse nav nav-pills">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/sobre'>Sobre</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/informacoes'>Informações</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/calculo'>Cálculo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/equipe'>Contato</Link>
                </li>                   
            </ul>
          </div>         
        </div>
    </nav>
    )
}
