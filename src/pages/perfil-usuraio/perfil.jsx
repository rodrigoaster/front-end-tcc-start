import { Header } from "../../components/header/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import './perfil.css'

export const Perfil = () => {

    const user = {
        nome: 'Carlos',
        email: 'Carlos@exemplo.com'
    }

  return(
    <div>
        <Header/>
        <div className="background-default pt-5">
        <section className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded div-master">
            <h1 className="text-center">Perfil</h1> <br />
            <img id="user-foto" src="src/assets/img/perfil/user.png" alt="" /> <br />
            <h2>Nome:</h2>
            <input type="text" className="form-control form-control-lg" value={user.nome}/> <br />
            <h2>E-mail:</h2>
            <input type="text" className="form-control form-control-lg" value={user.email}/> <br />
            <a href="#" className="d-flex justify-content-center text-decoration-none"><button className="btn btn-outline-success">Alterar Dados</button></a> <br />
            <div className="col-lg-10 col-md-8 mx-auto bg-primary p-4 rounded div-master">
                <h1 className="text-center">Meus Elétrodomésticos</h1><br />
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>KW/h</th>
                            <th>Tempo de uso/Dia</th>
                            <th>Consumo</th>
                        </tr>                       
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ventilador</td>
                            <td>200</td>
                            <td>8 horas</td>
                            <td>24.60 R$</td>
                        </tr>
                        <tr>
                            <td>Geladeira</td>
                            <td>400</td>
                            <td>24 horas</td>
                            <td>200 R$</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <a href="#" className="d-flex justify-content-center text-decoration-none"><button className="btn btn-secondary">Adicionar</button></a> <br />
            </div>
        </section>
      </div> 
    </div>
  )
}