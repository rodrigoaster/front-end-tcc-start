import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="d-flex justify-content-evenly bg-dark p-3  align-items-center">
            <p className="text-light mt-4">Desenvolvido por Sirius</p>
            <Link to='/equipe' className="btn btn-primary">Entre em contato!</Link>
        </div>
    )
}