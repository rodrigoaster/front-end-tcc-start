import { Header } from "../../components/header/header"
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'


export const Login = () => {
  return(
    <div>
        <Header/>
      <div className="bg-def extra-pt padd-all ">
        <div class='container bg-light p-5 w-50 rounded mb-5'>
          <h1 className="text-center">LOGIN</h1>
          <form class="input-group mb-3 d-flex" action="">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email"/>
              <span class="input-group-text">@</span>
            </div>

            <div class="input-group">
              <input type="password" class="form-control" placeholder="Senha"/>
            </div>
          </form>
          <div className="btn-area d-flex justify-content-center mt-5">
              <p className="extra-mr-5">Não possui conta?</p> 
              <Link id="signUpBtn" className="text-deco-none " to='/cadastro'>Cadastre-se</Link>  
          </div> 
          <div className="d-flex justify-content-center mt-2">
              <Link className="text-deco-none btn btn-danger" to='/esqueciSenha'>Esqueci minha senha</Link>  
          </div> 
        </div>
      </div> 
      <Footer/>
    </div>
  )
    
    
}