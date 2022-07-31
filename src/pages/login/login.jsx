import { Header } from "../../components/header/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

export const Login = () => {
  return(
    <div>
        <Header/>
        <div className="background-default pt-5">
        <form className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded div-position" action='#' method='POST'>
          <h1 className="text-center">Login</h1> <br /> <br />
          <input type="text" placeholder="Nome Completo" className="form-control form-control-lg"/><br />
          <input type="password" placeholder="Senha" className="form-control form-control-lg"/> <br /> <br />
          <a href="#" className="d-flex justify-content-center text-decoration-none"><button className="btn btn-outline-success">Entrar</button></a><br />
          <p className="d-flex justify-content-center">Não tem conta? <a href="cadastro"> Clique aqui!</a></p>
          <p className="d-flex justify-content-center"><a href="redefinir-senha"> Equeci minha senha</a></p>          
        </form>
      </div> 
    </div>
  )
    
    
}