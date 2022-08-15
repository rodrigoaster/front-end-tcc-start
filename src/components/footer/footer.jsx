import { Link } from "react-router-dom"
import './footer.css'

export const Footer = () => {
    return (
        <div className="d-flex footer">
            <div className="d-flex justify-content-evenly bg-dark p-3  align-items-center w-100">
                <p className="text-light mt-4">Desenvolvido por Sirius</p>
                <Link to='/equipe' className="btn btn-primary">Entre em contato!</Link>
            </div>
        </div>
    )
}