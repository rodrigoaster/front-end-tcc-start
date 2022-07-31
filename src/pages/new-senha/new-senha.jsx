import {Header} from "../../components/header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './new-senha.css';

export const newSenha = () =>{
    return(
        <div>
            <Header/>
            <div className="background-default pt-5">
                <form className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded div-position" action='#' method='POST'>
                    <h1 className="text-center">Redefinir Senha</h1> <br />
                    <input type="text" placeholder="Nova Senha" className="form-control form-control-lg"/><br />
                    <input type="password" placeholder="Confirmar Nova Senha" className="form-control form-control-lg"/> <br /> <br />
                    <a href="home" className="d-flex justify-content-center text-decoration-none"><button className="btn btn-outline-success">Enviar</button></a><br />
                    <p className="d-flex justify-content-center">Lembrou sua senha?<a href="login"> Clique aqui!</a></p>
                </form>
            </div> 
        </div>
    )
}