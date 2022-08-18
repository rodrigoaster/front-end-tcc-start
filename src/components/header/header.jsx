import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/auth/UserContext";
import api from "../../helpers/api";

import './header.css';

export const Header = () => {

    const { authenticated, logoutUser } = useContext(Context);

    
   
    return (
        <nav className="navbar px-5 bg-light navbar-expand-lg">
            <div className="container-fluid">
                <a  href="/">
                    <img src="src/assets/img/logo/New-logo.png" alt="" width="130" height="115" className="d-inline-block align-text-top"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-controls="navbarNav" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbarNav" className="collapse navbar-collapse nav nav-pills">
                <ul className="nav nav-font-size justify-content-end nav-pills">
                    <li className="nav-item hoverNav">
                        <Link className="nav-link hoverNavItem" to='/'>Home</Link>
                    </li>
                    <li className="nav-item hoverNav">
                        <Link className="nav-link hoverNavItem" to='/sobre'>Sobre o BF</Link>
                    </li>
                    {
                        authenticated ?
                        (
                        <>
                            <div className="d-flex">
                                <li className="nav-item hoverNav">
                                    <Link className="nav-link hoverNavItem" to='/informacoes'>Informações</Link>
                                </li>
                                <li className="nav-item hoverNav">
                                    <Link className="nav-link hoverNavItem" to='/calculo'>Cálculo</Link>
                                </li>
                                <li className="nav-item hoverNav">
                                    <Link className="nav-link hoverNavItem" to='/user'>Olá, Rodrigo!</Link>
                                </li>
                                <li className="nav-item hoverNav">
                                    <Link onClick={logoutUser} className="nav-link hoverNavItem" to='/'>Sair</Link>
                                </li>
                            </div>
                        </>
                        ) 
                        : 
                        ( 
                        <>             
                            <li className="nav-item hoverNav">
                                <Link className="nav-link hoverNavItem" to='/login'>Login</Link>
                            </li> 
                        </>  
                        )
                    }
                                    
                </ul>
                </div>
            </div>
        </nav>
    )
}