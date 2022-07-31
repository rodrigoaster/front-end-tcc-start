import { Header } from "../../components/header/header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './calculo.css'

export const CalculadoraConsumo = () => {
    return (
        <section>
            <Header/>
            
            <main className="extra-m d-flex">
                
                <form className="extra-form-container">
                    <div><br/>
                        <h1>Calculadora Consumo</h1><br/>
                        <p>Selecione o eletrodoméstico:</p>
                    </div>
                        <div className="extra-form-container2">
                            <select class="form-select" aria-label="Default select example">
                            
                                <option selected>Ventilador</option>
                                <option value="1">Geladeira</option>
                                <option value="2">Televisão</option>
                                <option value="4">Ar-condicionado</option>
                                <option value="5">Notebook</option>
                                <option value="6">Computador(Desktop)</option>
                                <option value="7">Lâmpada</option>
                            </select>
                            <br/>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Quantidade"/>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Potência"/>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Quantidade/Horas"/>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Quantidade/Dias"/>
                            </div>
                        </div>

                        <div className="extra-m-button"><button className="btn btn-primary extra-mt-5">Calcular</button></div>
                </form>
            </main>
    </section>
    )
}
