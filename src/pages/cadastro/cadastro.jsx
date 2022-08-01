import {Header} from '../../components/header/header'
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cadastro.css'

export const Cadastro = () => {
    return(
        <div>
            <Header/>
            <main className="bg-def pt-5 padd-all">
                <div class='container bg-light p-5 rounded shadow p-3 mb-5 mt-5 bg-body rounded'>
                    <h1 className="text-center">CADASTRO</h1>
                    <form class="input-group mb-3 d-flex" action="">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Nome completo"/>
                        </div>

                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email"/>
                            <span class="input-group-text">@</span>
                        </div>
                        
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="CPF"/>
                        </div>

                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Senha"/>
                        </div>

                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Confirmar senha"/>
                        </div>
                    </form>
                    <div className="d-flex justify-content-center mt-2">
                        <Link className="text-deco-none btn btn-success mt-2" to='/esqueciSenha'>Cadastrar</Link>  
                    </div> 
                    <div className="d-flex justify-content-center mt-5">
                        <p className="extra-mr-5">Já possui conta?</p> 
                        <Link className="text-deco-none " to='/login'>Conecte-se!</Link>  
                    </div> 
                </div>
            </main>
            <Footer/>
        </div>
    )
}
