import { Header } from "../../components/header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sobre.css'

export const Sobre = () => {
    return (
        <section>
            <Header/>

            <main className="container text-center extra-porelative extra-maxWidth height-default">
                <div className="container extra-container-text">
                    <h1>O que é o BF ENERGY?</h1><br/>
                    <p>O projeto BF ENERGY nasceu com o objetivo de ajudar pessoas a diminuirem uma preocupação que normalmente afeta boa parte dos brasileiros, em especial aqueles que vivem no Nordeste,  <strong>CONTA DE ENERGIA.</strong> Buscamos fazer você ler, entender e como economizar mais nos gastos causados por essa finança:</p>
                </div>
            </main>

            <main className="container height-default p-3">
            <h1 className="text-center">Você sabia que a conta de energia do Brasil <strong>é a segunda mais cara do mundo?</strong></h1><br/>
                <div className="text-start">
                    
                    <div className="container mt-5 d-flex justify-content-between" >
                    <div>
                        <p className="extra-container-text-2 mt-5 pt-2">O Brasil tem a segunda conta de energia elétrica mais cara do mundo, de acordo com um levantamento feito pela plataforma de cupons de descontos CupomValido.com.br, com dados da Associação dos Grandes Consumidores Industriais de Energia e de Consumidores Livres (Abrace). Segundo a pesquisa, o País fica atrás somente da Colômbia no custo da eletricidade.</p><br/>
                        <p className="extra-container-text-2">O custo da energia elétrica no Brasil aumentou 47% nos últimos cinco anos, o que contribuiu para que o País subisse no ranking mundial, sendo seguido por Turquia (3.º), Chile (4.º) e Portugal (5.º). Do outro lado do ranking, os cinco países que pagam mais barato pela energia elétrica são Noruega, Luxemburgo, Estados Unidos, Canadá e Suíça – primeiro ao quinto lugar, respectivamente.</p>
                    </div>

                    <img src="src/assets/img/sobre/dinheirolamp.png" style={{width: '600px'}} />
                </div>
                </div>
            </main>

            <main className="container mt-5 text-start height-default p-5">
                <h1 className="text-center">Calculadora de CONSUMO</h1><br/>
                <div className="container mt-5 d-flex justify-content-between" >
                    <div>
                        <p className="extra-container-text-2 mt-5 pt-2">Te oferecemos uma CALCULADORA DE CONSUMO, uma ferramenta muito útil, a qual iremos pedir informações sobre seu eletrodoméstico e sua utilização, como:</p><br/> 
                            <ul>
                                <li><strong>Potência</strong></li>
                                <li><strong>Quantidade de horas</strong></li>
                                <li><strong>Quantidade de dias</strong></li>
                            </ul><br/>
                            
                       <p className="extra-container-text-2"> Após isso, te oferecemos uma estimativa do quanto você gastará com esse eletrodoméstico!</p>
                        <button type="button" class="btn btn-success extra-m">Conhecer!</button>
                    </div>

                    <img className="rounded-circle" src="src/assets/img/sobre/calc.jpg" style={{width: '400px'}} />
                </div>
            </main>

            <main className="container mt-5 text-start height-default p-5">
                <h1 className="text-center">Seu próprio PERFIL</h1><br/>
                <div className="container mt-5 d-flex justify-content-between" >
                    <div className="mt-5 pt-5">
                        <p className="extra-container-text-2">Tenha seu próprio PERFIL, o qual você poderá armazenar todos os <strong>registros</strong> que fizer utilizando nossa ferramente, caso queira consultar e alterar dados para <strong>novos registros!</strong></p>
                        <img src="src/assets/img/sobre/tableex.png" style={{width: '400px'}} />
                    </div>
                    <img src="src/assets/img/sobre/people.png" style={{width: '400px'}} />
                </div>
            </main>

        </section>
    )
}