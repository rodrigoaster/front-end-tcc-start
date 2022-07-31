import {Header} from '../../components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './cadastro.css'

export const Cadastro = () => {
    return(
        <div>
            <Header/>
            <main className="background-default pt-5">
                <div id='card-form' className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded form">                
                    <form action='#' method='POST'>
                        <h1 className="text-center">CADASTRO</h1> <br />
                        <input type="text" placeholder="Nome Completo" className="form-control form-control-lg" /> <br/>
                        <input type="email" placeholder="E-mail" className="form-control form-control-lg" /> <br/>
                        <input type="password" placeholder="Senha" className="form-control form-control-lg" /> <br/>                   
                        <input type="password" placeholder="Confirmar Senha" className="form-control form-control-lg" /> <br/> <br/>                            
                        <a href="src/pages/telaCalculoConsumo.html" className="d-flex justify-content-center text-decoration-none"><button type="button" className="btn btn-outline-success">Cadastrar</button></a><br/>
                        <p className="d-flex justify-content-center">Jápossui conta? <a href="/prototipo-tcc/src/pages/telaLogin.html"> Clique aqui!</a></p>
                    </form>                
                </div>
            </main>
        </div>
    )
}
