import { Header } from "../../components/header/header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './calculo.css'

export const CalculadoraConsumo = () => {
    return (
        <section>
            <Header/>
            <main id="bg1" className="d-flex justify-content-between">
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
                        <div className="extra-m-button">
                            <button className="btn btn-primary extra-mt-5">Calcular</button>
                        </div>
                </form>

                <div id="bg2" className="extra-padd">
                <table class="table">
                    <thead className="table-light">
                        <tr>
                        <th scope="col">N do registro</th>
                        <th scope="col">Nome Completo</th>
                        <th scope="col">Consumo</th>
                        <th scope="col">Valor em R$</th>
                        </tr>
                    </thead>
                    <tbody className="extra-bg-light">
                        <tr>
                            <th scope="row">1</th>
                            <td>Rodrigo Santana Leão</td>
                            <td>200W</td>
                            <td>R$100</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Rodrigo Santana Leão</td>
                            <td>90W</td>
                            <td>R$40</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Rodrigo Santana Leão</td>
                            <td>50W</td>
                            <td>R$20</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </main>
    </section>
    )
}
