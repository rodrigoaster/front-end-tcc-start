import { Link } from "react-router-dom"
import './footer.css'

export const Footer = () => {
    return (
        <div className="d-flex footer">
            <div className="d-flex justify-content-around bg-dark p-4  align-items-center w-100">
                <p className="text-light mt-4">SIRIUS ©</p>
                <Link to='/equipe' className="btn btn-primary">Conheça nossa equipe!</Link>
            </div>
        </div>
    )
}