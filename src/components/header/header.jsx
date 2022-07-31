import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className="navbar px-5 bg-light">
            <div className="container-fluid">
                <a  href="perfil">
                    <img src="src/assets/img/logo/logo.png" alt="" width="90" height="90" className="d-inline-block align-text-top"/>
                </a>
                <ul className="nav justify-content-end nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/sobre'>SOBRE</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/informacoes'>INFORMAÇÕES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/calculo'>CÁLCULO</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/equipe'>CONTATO</Link>
                    </li>               
                </a>
                <ul className="nav justify-content-end nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sobre">SOBRE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="informacoes">INFORMAÇÕES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="calculadora">CÁLCULO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="equipe">CONTATO</a>
                    </li>               
                </ul>
            </div>
        </nav>
    )
}