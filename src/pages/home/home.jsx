import { Header } from "../../components/header/header";
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

export const Home = () => {
    return (
        <div>
            <Header/>
            <section className="background-default pt-5">
                <div id='card' className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded">
                    <h1 className="text-center">Nos comprometemos com <p className="text-center text-success">SUA ECONOMIA</p></h1> <br />
                    <p className="lead text-muted">Uma nova forma de você ter maior controle de uma das finanças mais problemáticas da sociedade: Conta de energia. Nosso objetivo é lhe auxiliar, para que você possa ter mais tempo para fazer o que gosta! Bem vindo ao <strong>BF ENERGY!</strong></p> <br />
                    <div className='d-flex justify-content-center'>
                        <a><Link className='btn btn-primary'to='/sobre'>Veja mais!</Link></a>
                    </div>    
                </div>
            </section>
            <Footer/>
        </div>
    )
}